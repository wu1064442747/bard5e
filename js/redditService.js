class RedditService {
    constructor() {
        this.CLIENT_ID = '5PxYvCDWEq9T5KprZ6XvwQ';
        this.CLIENT_SECRET = '6FKZ80mzQaxo_5H6DQzXRGwddr8EKw';
        this.REDIRECT_URI = 'https://www.bard5e.com/';
        this.accessToken = localStorage.getItem('reddit_access_token');
        this.tokenExpiry = localStorage.getItem('reddit_token_expiry');
        this.refreshToken = localStorage.getItem('reddit_refresh_token');
        
        // API请求的基本URL
        this.API_BASE_URL = 'https://oauth.reddit.com';
        
        // 请求计数器和时间戳，用于限制速率
        this.requestCount = 0;
        this.requestResetTime = Date.now() + 60000; // 1分钟后重置
    }

    // 检查是否需要刷新令牌
    async checkAndRefreshToken() {
        if (!this.accessToken || !this.tokenExpiry || Date.now() >= this.tokenExpiry) {
            if (this.refreshToken) {
                await this.refreshAccessToken();
            } else {
                await this.getNewAccessToken();
            }
        }
    }

    // 获取新的访问令牌
    async getNewAccessToken() {
        try {
            const response = await fetch('https://www.reddit.com/api/v1/access_token', {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(this.CLIENT_ID + ':' + this.CLIENT_SECRET),
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'grant_type=client_credentials'
            });

            const data = await response.json();
            this.handleTokenResponse(data);
        } catch (error) {
            console.error('Error getting Reddit access token:', error);
            throw error;
        }
    }

    // 刷新访问令牌
    async refreshAccessToken() {
        try {
            const response = await fetch('https://www.reddit.com/api/v1/access_token', {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(this.CLIENT_ID + ':' + this.CLIENT_SECRET),
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `grant_type=refresh_token&refresh_token=${this.refreshToken}`
            });

            const data = await response.json();
            this.handleTokenResponse(data);
        } catch (error) {
            console.error('Error refreshing Reddit access token:', error);
            throw error;
        }
    }

    // 处理令牌响应
    handleTokenResponse(data) {
        this.accessToken = data.access_token;
        this.tokenExpiry = Date.now() + (data.expires_in * 1000);
        if (data.refresh_token) {
            this.refreshToken = data.refresh_token;
        }

        // 保存到本地存储
        localStorage.setItem('reddit_access_token', this.accessToken);
        localStorage.setItem('reddit_token_expiry', this.tokenExpiry);
        if (this.refreshToken) {
            localStorage.setItem('reddit_refresh_token', this.refreshToken);
        }
    }

    // 检查并处理速率限制
    async checkRateLimit() {
        const now = Date.now();
        if (now >= this.requestResetTime) {
            this.requestCount = 0;
            this.requestResetTime = now + 60000;
        } else if (this.requestCount >= 60) {
            const waitTime = this.requestResetTime - now;
            await new Promise(resolve => setTimeout(resolve, waitTime));
            this.requestCount = 0;
            this.requestResetTime = Date.now() + 60000;
        }
        this.requestCount++;
    }

    // 发起API请求
    async makeRequest(endpoint, options = {}) {
        await this.checkAndRefreshToken();
        await this.checkRateLimit();

        const url = endpoint.startsWith('http') ? endpoint : `${this.API_BASE_URL}${endpoint}`;
        const response = await fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                'Authorization': `Bearer ${this.accessToken}`,
                'User-Agent': 'bard5e/1.0.0'
            }
        });

        if (!response.ok) {
            throw new Error(`Reddit API error: ${response.status}`);
        }

        return response.json();
    }

    // 获取D&D相关帖子
    async getDndPosts(subreddits = ['DnD', 'dndnext', '3d6'], options = {}) {
        const {
            timeframe = 'week',
            limit = 25,
            sort = 'hot',
            searchQuery = 'bard'
        } = options;

        try {
            const posts = [];
            for (const subreddit of subreddits) {
                const data = await this.makeRequest(`/r/${subreddit}/search.json?q=${searchQuery}&restrict_sr=on&sort=${sort}&t=${timeframe}&limit=${limit}`);
                posts.push(...data.data.children.map(post => ({
                    id: post.data.id,
                    title: post.data.title,
                    excerpt: post.data.selftext.substring(0, 200) + (post.data.selftext.length > 200 ? '...' : ''),
                    author: post.data.author,
                    subreddit: post.data.subreddit,
                    score: post.data.score,
                    comments: post.data.num_comments,
                    url: `https://reddit.com${post.data.permalink}`,
                    created: post.data.created_utc,
                    thumbnail: post.data.thumbnail,
                    contentType: this.detectContentType(post.data.title, post.data.selftext),
                    flair: post.data.link_flair_text,
                    isVideo: post.data.is_video,
                    media: post.data.media,
                    timeAgo: this.getTimeAgo(post.data.created_utc)
                })));
            }

            // 按分数和时间排序
            return posts.sort((a, b) => {
                const scoreWeight = 0.7;
                const timeWeight = 0.3;
                const scoreA = a.score * scoreWeight;
                const scoreB = b.score * scoreWeight;
                const timeA = a.created * timeWeight;
                const timeB = b.created * timeWeight;
                return (scoreB + timeB) - (scoreA + timeA);
            });

        } catch (error) {
            console.error('Error fetching DnD posts:', error);
            throw error;
        }
    }

    // 检测内容类型
    detectContentType(title, text) {
        const content = (title + ' ' + text).toLowerCase();
        if (content.includes('build') || content.includes('guide') || content.includes('class feature')) {
            return 'builds';
        }
        if (content.includes('tip') || content.includes('trick') || content.includes('how to') || content.includes('advice')) {
            return 'tips';
        }
        if (content.includes('story') || content.includes('experience') || content.includes('session') || content.includes('campaign')) {
            return 'stories';
        }
        if (content.includes('?') || content.includes('help') || content.includes('question') || content.includes('need advice')) {
            return 'questions';
        }
        return 'general';
    }

    // 获取时间差显示
    getTimeAgo(timestamp) {
        const seconds = Math.floor((Date.now() / 1000) - timestamp);
        if (seconds < 60) return 'just now';
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}m ago`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h ago`;
        const days = Math.floor(hours / 24);
        if (days < 30) return `${days}d ago`;
        const months = Math.floor(days / 30);
        return `${months}mo ago`;
    }
}

// 导出Reddit服务实例
export const redditService = new RedditService(); 