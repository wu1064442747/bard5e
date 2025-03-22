// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 学院卡片点击展开详情
    const collegeCards = document.querySelectorAll('#colleges .card');
    collegeCards.forEach(card => {
        card.addEventListener('click', function() {
            const details = this.querySelector('.college-details');
            const isVisible = details.style.display === 'block';
            
            // 关闭其他卡片
            collegeCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.querySelector('.college-details').style.display = 'none';
                }
            });
            
            // 切换当前卡片
            details.style.display = isVisible ? 'none' : 'block';
            
            // 添加动画效果
            if (!isVisible) {
                details.style.opacity = '0';
                details.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    details.style.transition = 'all 0.3s ease';
                    details.style.opacity = '1';
                    details.style.transform = 'translateY(0)';
                }, 10);
            }
        });
    });

    // 法术卡片点击展开详情
    const spellCards = document.querySelectorAll('#spells .card');
    spellCards.forEach(card => {
        card.addEventListener('click', function() {
            const details = this.querySelector('.spell-details');
            const isVisible = details.style.display === 'block';
            
            // 关闭其他卡片
            spellCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.querySelector('.spell-details').style.display = 'none';
                }
            });
            
            // 切换当前卡片
            details.style.display = isVisible ? 'none' : 'block';
            
            // 添加动画效果
            if (!isVisible) {
                details.style.opacity = '0';
                details.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    details.style.transition = 'all 0.3s ease';
                    details.style.opacity = '1';
                    details.style.transform = 'translateY(0)';
                }, 10);
            }
        });
    });

    // 诗人激励卡片点击展开详情
    const inspirationCards = document.querySelectorAll('#inspiration .card');
    inspirationCards.forEach(card => {
        card.addEventListener('click', function() {
            const details = this.querySelector('.inspiration-details');
            const isVisible = details.style.display === 'block';
            
            // 平滑切换显示状态
            if (isVisible) {
                details.style.opacity = '0';
                details.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    details.style.display = 'none';
                }, 300);
            } else {
                details.style.display = 'block';
                details.style.opacity = '0';
                details.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    details.style.transition = 'all 0.3s ease';
                    details.style.opacity = '1';
                    details.style.transform = 'translateY(0)';
                }, 10);
            }
            
            // 关闭其他卡片
            inspirationCards.forEach(otherCard => {
                if (otherCard !== this) {
                    const otherDetails = otherCard.querySelector('.inspiration-details');
                    if (otherDetails.style.display === 'block') {
                        otherDetails.style.opacity = '0';
                        otherDetails.style.transform = 'translateY(-10px)';
                        setTimeout(() => {
                            otherDetails.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });

        // 添加鼠标悬停效果
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
    });

    // 添加提示信息的工具提示
    document.querySelectorAll('#inspiration .alert-info').forEach(alert => {
        alert.style.cursor = 'help';
        alert.setAttribute('data-bs-toggle', 'tooltip');
        alert.setAttribute('data-bs-placement', 'top');
        alert.setAttribute('title', '点击查看更多详细信息');
    });

    // 初始化所有工具提示
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // 添加场景切换动画
    function switchInspirationScene(sceneType) {
        const cards = document.querySelectorAll('#inspiration .card');
        cards.forEach(card => {
            if (card.querySelector(`.${sceneType}-details`)) {
                card.style.transform = 'scale(1.05)';
                card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
            } else {
                card.style.transform = 'scale(0.95)';
                card.style.opacity = '0.7';
            }
        });
        
        setTimeout(() => {
            cards.forEach(card => {
                card.style.transform = 'scale(1)';
                card.style.opacity = '1';
                card.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            });
        }, 500);
    }

    // 装备推荐卡片点击展开详情
    const equipmentCards = document.querySelectorAll('#equipment .card');
    equipmentCards.forEach(card => {
        card.addEventListener('click', function() {
            const details = this.querySelector('.equipment-details');
            const isVisible = details.style.display === 'block';
            
            // 关闭其他卡片
            equipmentCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.querySelector('.equipment-details').style.display = 'none';
                }
            });
            
            // 切换当前卡片
            details.style.display = isVisible ? 'none' : 'block';
            
            // 添加动画效果
            if (!isVisible) {
                details.style.opacity = '0';
                details.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    details.style.transition = 'all 0.3s ease';
                    details.style.opacity = '1';
                    details.style.transform = 'translateY(0)';
                }, 10);
            }
        });
    });

    // 角色扮演卡片点击展开详情
    const roleplayCards = document.querySelectorAll('#roleplay .card');
    roleplayCards.forEach(card => {
        card.addEventListener('click', function() {
            const details = this.querySelector('.roleplay-details');
            const isVisible = details.style.display === 'block';
            
            // 关闭其他卡片
            roleplayCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.querySelector('.roleplay-details').style.display = 'none';
                }
            });
            
            // 切换当前卡片
            details.style.display = isVisible ? 'none' : 'block';
            
            // 添加动画效果
            if (!isVisible) {
                details.style.opacity = '0';
                details.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    details.style.transition = 'all 0.3s ease';
                    details.style.opacity = '1';
                    details.style.transform = 'translateY(0)';
                }, 10);
            }
        });
    });

    // 移除社区互动卡片的点击事件
    const communityCards = document.querySelectorAll('#community .card');
    communityCards.forEach(card => {
        card.style.cursor = 'default';
        const details = card.querySelector('.community-details');
        if (details) {
            details.style.display = 'block';
            details.style.opacity = '1';
            details.style.transform = 'translateY(0)';
        }
    });

    // 为社交媒体分享按钮添加事件处理
    document.querySelectorAll('.sharing-buttons a').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡
        });
    });

    // 为资源链接添加事件处理
    document.querySelectorAll('.resource-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡
        });
    });

    // 为活动注册按钮添加事件处理
    document.querySelectorAll('.event-item a').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡
            e.preventDefault(); // 阻止默认行为
            const eventId = this.getAttribute('data-event-id');
            registerEvent(eventId);
        });
    });

    // 添加卡片悬停效果
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
    });

    // 初始化属性按钮状态
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(attr => {
        updateAttributeButtons(attr);
    });
    
    // 初始化技能系统
    initializeSkillSystem();
    
    // 添加保存功能
    const saveButton = document.createElement('button');
    saveButton.className = 'btn btn-primary mt-3';
    saveButton.textContent = 'Save Character Build';
    saveButton.onclick = saveCharacterBuild;
    document.querySelector('.character-builder').appendChild(saveButton);

    // 初始化所有属性调整值
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(updateAttributeModifier);
    
    // 初始化进度条
    updatePointsProgress();
    updateSkillsProgress();
    
    // 初始化总览
    updateAttributesSummary();
    updateSkillsSummary();

    // 初始化讨论内容
    refreshDiscussions();
    
    // 设置定期刷新（每5分钟）
    setInterval(refreshDiscussions, 5 * 60 * 1000);
});

// 添加滚动动画
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.card, .jumbotron');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// 属性分配系统
let remainingPoints = 27;
const attributeCosts = {
    8: 0,
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 7,
    15: 9
};

function adjustAttribute(attribute, change) {
    const input = document.getElementById(attribute);
    const currentValue = parseInt(input.value);
    const newValue = currentValue + change;
    
    if (newValue < 8 || newValue > 15) return;
    
    const currentCost = attributeCosts[currentValue];
    const newCost = attributeCosts[newValue];
    const costDifference = newCost - currentCost;
    
    if (change > 0 && remainingPoints < costDifference) return;
    
    remainingPoints -= costDifference;
    input.value = newValue;
    document.getElementById('remaining-points').textContent = remainingPoints;
    
    // 更新按钮状态
    updateAttributeButtons(attribute);
}

function updateAttributeButtons(attribute) {
    const input = document.getElementById(attribute);
    const value = parseInt(input.value);
    const buttons = input.parentElement.querySelectorAll('button');
    
    buttons[0].disabled = value <= 8;
    buttons[1].disabled = value >= 15 || remainingPoints < (attributeCosts[value + 1] - attributeCosts[value]);
}

// 技能选择系统
let remainingSkills = 3;
const maxSkills = 3;

function initializeSkillSystem() {
    const skillCheckboxes = document.querySelectorAll('.skill-builder input[type="checkbox"]');
    skillCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked && remainingSkills <= 0) {
                this.checked = false;
                return;
            }
            
            if (this.checked) {
                remainingSkills--;
            } else {
                remainingSkills++;
            }
            
            document.getElementById('remaining-skills').textContent = remainingSkills;
            updateSkillCheckboxes();
        });
    });
}

function updateSkillCheckboxes() {
    const skillCheckboxes = document.querySelectorAll('.skill-builder input[type="checkbox"]');
    skillCheckboxes.forEach(checkbox => {
        checkbox.disabled = !checkbox.checked && remainingSkills <= 0;
    });
}

// 保存角色构建
function saveCharacterBuild() {
    const character = {
        attributes: {
            str: parseInt(document.getElementById('str').value),
            dex: parseInt(document.getElementById('dex').value),
            con: parseInt(document.getElementById('con').value),
            int: parseInt(document.getElementById('int').value),
            wis: parseInt(document.getElementById('wis').value),
            cha: parseInt(document.getElementById('cha').value)
        },
        skills: Array.from(document.querySelectorAll('.skill-builder input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value)
    };
    
    localStorage.setItem('bardCharacter', JSON.stringify(character));
    alert('Character build saved!');
}

// 加载保存的角色构建
function loadCharacterBuild() {
    const savedCharacter = localStorage.getItem('bardCharacter');
    if (savedCharacter) {
        const character = JSON.parse(savedCharacter);
        
        // 恢复属性值
        Object.entries(character.attributes).forEach(([attr, value]) => {
            document.getElementById(attr).value = value;
            updateAttributeButtons(attr);
        });
        
        // 恢复技能选择
        character.skills.forEach(skill => {
            const checkbox = document.getElementById(skill);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
        
        // 更新剩余点数显示
        updateRemainingPoints();
    }
}

// 更新剩余点数显示
function updateRemainingPoints() {
    let totalPoints = 0;
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(attr => {
        const value = parseInt(document.getElementById(attr).value);
        totalPoints += attributeCosts[value];
    });
    remainingPoints = 27 - totalPoints;
    document.getElementById('remaining-points').textContent = remainingPoints;
}

// 页面加载时尝试加载保存的角色构建
window.addEventListener('load', loadCharacterBuild);

// 修改资源提交功能
function openResourceSubmission() {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'resourceModal';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Submit Resource</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="resourceForm">
                        <div class="mb-3">
                            <label class="form-label">Resource Title</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Resource Type</label>
                            <select class="form-select">
                                <option>Character Sheet</option>
                                <option>Spell List</option>
                                <option>Equipment Guide</option>
                                <option>Adventure Module</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">File</label>
                            <input type="file" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Contact Email</label>
                            <input type="email" class="form-control" required>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="submitResource()">Submit</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // 显示模态框
    new bootstrap.Modal(modal).show();
}

// 修改活动注册功能
function registerEvent(eventId) {
    const events = {
        'bard-competition': 'Monthly Bard Competition',
        'build-workshop': 'Weekly Build Workshop'
    };
    
    const eventName = events[eventId];
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'eventModal';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Register for ${eventName}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="eventForm">
                        <div class="mb-3">
                            <label class="form-label">Your Name</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Discord Username</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Character Level</label>
                            <select class="form-select">
                                <option>1-4</option>
                                <option>5-10</option>
                                <option>11-16</option>
                                <option>17-20</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Experience with D&D</label>
                            <select class="form-select">
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                                <option>Expert</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="confirmRegistration('${eventId}')">Register</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // 显示模态框
    new bootstrap.Modal(modal).show();
}

// 确认活动注册
function confirmRegistration(eventId) {
    alert('Registration successful! You will receive a confirmation email shortly.');
    bootstrap.Modal.getInstance(document.getElementById('eventModal')).hide();
}

// 提议新活动
function proposeEvent() {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'proposeEventModal';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Propose New Event</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="proposeEventForm">
                        <div class="mb-3">
                            <label class="form-label">Event Title</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Event Type</label>
                            <select class="form-select">
                                <option>Competition</option>
                                <option>Workshop</option>
                                <option>Meetup</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Proposed Date</label>
                            <input type="date" class="form-control">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="submitEventProposal()">Submit Proposal</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // 显示模态框
    new bootstrap.Modal(modal).show();
}

// 提交活动提议
function submitEventProposal() {
    alert('Thank you for your event proposal! Our team will review it and get back to you soon.');
    bootstrap.Modal.getInstance(document.getElementById('proposeEventModal')).hide();
}

// 分享当前角色构建
function shareCurrentBuild() {
    const character = {
        attributes: {
            str: parseInt(document.getElementById('str').value),
            dex: parseInt(document.getElementById('dex').value),
            con: parseInt(document.getElementById('con').value),
            int: parseInt(document.getElementById('int').value),
            wis: parseInt(document.getElementById('wis').value),
            cha: parseInt(document.getElementById('cha').value)
        },
        skills: Array.from(document.querySelectorAll('.skill-builder input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value)
    };

    // 创建分享模态框
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'shareModal';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Share Your Character Build</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <h6>Character Build Summary</h6>
                        <div class="border rounded p-3 bg-light">
                            <p class="mb-2"><strong>Attributes:</strong></p>
                            <ul class="list-unstyled">
                                <li>STR: ${character.attributes.str}</li>
                                <li>DEX: ${character.attributes.dex}</li>
                                <li>CON: ${character.attributes.con}</li>
                                <li>INT: ${character.attributes.int}</li>
                                <li>WIS: ${character.attributes.wis}</li>
                                <li>CHA: ${character.attributes.cha}</li>
                            </ul>
                            <p class="mb-2"><strong>Selected Skills:</strong></p>
                            <ul class="list-unstyled">
                                ${character.skills.map(skill => `<li>${skill.charAt(0).toUpperCase() + skill.slice(1).replace(/-/g, ' ')}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="mb-3">
                        <h6>Share on Social Media</h6>
                        <div class="d-grid gap-2">
                            <button class="btn btn-outline-primary" onclick="shareToSocial('twitter', '${JSON.stringify(character)}')">
                                <i class="fab fa-twitter"></i> Share on Twitter
                            </button>
                            <button class="btn btn-outline-primary" onclick="shareToSocial('facebook', '${JSON.stringify(character)}')">
                                <i class="fab fa-facebook"></i> Share on Facebook
                            </button>
                            <button class="btn btn-outline-danger" onclick="shareToSocial('reddit', '${JSON.stringify(character)}')">
                                <i class="fab fa-reddit"></i> Share on Reddit
                            </button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <h6>Export Build</h6>
                        <div class="d-grid gap-2">
                            <button class="btn btn-outline-secondary" onclick="exportBuild('json')">
                                <i class="fas fa-file-code"></i> Export as JSON
                            </button>
                            <button class="btn btn-outline-secondary" onclick="exportBuild('txt')">
                                <i class="fas fa-file-alt"></i> Export as Text
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // 显示模态框
    new bootstrap.Modal(modal).show();
}

// 分享到社交媒体
function shareToSocial(platform, characterData) {
    const character = JSON.parse(characterData);
    const text = `Check out my D&D 5e Bard build!\nSTR: ${character.attributes.str}, DEX: ${character.attributes.dex}, CON: ${character.attributes.con}, INT: ${character.attributes.int}, WIS: ${character.attributes.wis}, CHA: ${character.attributes.cha}\nSkills: ${character.skills.join(', ')}`;
    
    let url = '';
    switch(platform) {
        case 'twitter':
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
            break;
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(text)}`;
            break;
        case 'reddit':
            url = `https://www.reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent('My D&D 5e Bard Build')}&text=${encodeURIComponent(text)}`;
            break;
    }
    
    window.open(url, '_blank');
}

// 导出角色构建
function exportBuild(format) {
    const character = {
        attributes: {
            str: parseInt(document.getElementById('str').value),
            dex: parseInt(document.getElementById('dex').value),
            con: parseInt(document.getElementById('con').value),
            int: parseInt(document.getElementById('int').value),
            wis: parseInt(document.getElementById('wis').value),
            cha: parseInt(document.getElementById('cha').value)
        },
        skills: Array.from(document.querySelectorAll('.skill-builder input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value)
    };

    let content = '';
    let filename = 'bard-build';
    let type = '';

    if (format === 'json') {
        content = JSON.stringify(character, null, 2);
        filename += '.json';
        type = 'application/json';
    } else {
        content = `D&D 5e Bard Build\n\nAttributes:\nSTR: ${character.attributes.str}\nDEX: ${character.attributes.dex}\nCON: ${character.attributes.con}\nINT: ${character.attributes.int}\nWIS: ${character.attributes.wis}\nCHA: ${character.attributes.cha}\n\nSkills:\n${character.skills.join('\n')}`;
        filename += '.txt';
        type = 'text/plain';
    }

    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// 预设角色构建
const characterPresets = {
    combat: {
        attributes: {
            str: 10,
            dex: 14,
            con: 14,
            int: 10,
            wis: 12,
            cha: 15
        },
        recommendedSkills: ['athletics', 'performance', 'intimidation', 'acrobatics'],
        college: 'College of Valor',
        description: '这个构建适合喜欢近战战斗的吟游诗人，同时保持良好的团队支援能力。'
    },
    lore: {
        attributes: {
            str: 8,
            dex: 14,
            con: 12,
            int: 14,
            wis: 12,
            cha: 15
        },
        recommendedSkills: ['arcana', 'history', 'investigation', 'performance'],
        college: 'College of Lore',
        description: '这个构建专注于知识和法术，适合喜欢多样化技能和法术的玩家。'
    },
    glamour: {
        attributes: {
            str: 8,
            dex: 12,
            con: 13,
            int: 12,
            wis: 12,
            cha: 15
        },
        recommendedSkills: ['performance', 'persuasion', 'deception', 'insight'],
        college: 'College of Glamour',
        description: '这个构建专注于社交互动和团队激励，是完美的队伍领袖。'
    }
};

// 加载预设构建
function loadPreset(presetName) {
    const preset = characterPresets[presetName];
    if (!preset) return;

    // 重置所有属性和技能
    resetCharacterBuilder();

    // 设置属性值
    Object.entries(preset.attributes).forEach(([attr, value]) => {
        const input = document.getElementById(attr);
        if (input) {
            input.value = value;
            updateAttributeModifier(attr);
        }
    });

    // 选择推荐技能
    preset.recommendedSkills.forEach(skill => {
        const checkbox = document.getElementById(skill);
        if (checkbox) {
            checkbox.checked = true;
        }
    });

    // 更新剩余点数
    updateRemainingPoints();
    updateSkillsCount();
    
    // 显示构建建议
    updateBuildRecommendations(preset);
}

// 重置角色构建器
function resetCharacterBuilder() {
    // 重置属性值
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(attr => {
        const input = document.getElementById(attr);
        if (input) {
            input.value = 8;
            updateAttributeModifier(attr);
        }
    });

    // 重置技能选择
    document.querySelectorAll('.skill-builder input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // 重置剩余点数
    document.getElementById('remaining-points').textContent = '27';
    updatePointsProgress();
}

// 更新属性调整值
function updateAttributeModifier(attr) {
    const value = parseInt(document.getElementById(attr).value);
    const modifier = Math.floor((value - 10) / 2);
    const modSpan = document.getElementById(`${attr}-mod`);
    if (modSpan) {
        modSpan.textContent = modifier >= 0 ? `+${modifier}` : modifier;
    }
}

// 更新点数进度条
function updatePointsProgress() {
    const remainingPoints = parseInt(document.getElementById('remaining-points').textContent);
    const progress = (remainingPoints / 27) * 100;
    const progressBar = document.getElementById('points-progress');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
        progressBar.className = `progress-bar ${progress <= 20 ? 'bg-danger' : progress <= 50 ? 'bg-warning' : 'bg-success'}`;
    }
}

// 更新技能点数进度条
function updateSkillsProgress() {
    const remainingSkills = parseInt(document.getElementById('remaining-skills').textContent);
    const progress = (remainingSkills / 3) * 100;
    const progressBar = document.getElementById('skills-progress');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
        progressBar.className = `progress-bar ${progress <= 33 ? 'bg-danger' : progress <= 66 ? 'bg-warning' : 'bg-success'}`;
    }
}

// 更新构建建议
function updateBuildRecommendations(preset) {
    const recommendationsDiv = document.getElementById('build-recommendations');
    if (recommendationsDiv && preset) {
        recommendationsDiv.innerHTML = `
            <div class="alert alert-info">
                <p class="mb-2"><strong>推荐学院:</strong> ${preset.college}</p>
                <p class="mb-0">${preset.description}</p>
            </div>
        `;
    }
}

// 更新属性总览
function updateAttributesSummary() {
    const summaryDiv = document.getElementById('attributes-summary');
    if (summaryDiv) {
        const attributes = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
        const summary = attributes.map(attr => {
            const value = document.getElementById(attr).value;
            const mod = document.getElementById(`${attr}-mod`).textContent;
            return `<div class="mb-1">${attr.toUpperCase()}: ${value} (${mod})</div>`;
        }).join('');
        summaryDiv.innerHTML = summary;
    }
}

// 更新技能总览
function updateSkillsSummary() {
    const summaryDiv = document.getElementById('skills-summary');
    if (summaryDiv) {
        const selectedSkills = Array.from(document.querySelectorAll('.skill-builder input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.nextElementSibling.textContent.trim());
        summaryDiv.innerHTML = selectedSkills.length > 0 ?
            selectedSkills.map(skill => `<div class="mb-1">${skill}</div>`).join('') :
            '<div class="text-muted">未选择技能</div>';
    }
}

// 属性调整事件处理
function adjustAttribute(attr, change) {
    const input = document.getElementById(attr);
    const currentValue = parseInt(input.value);
    const newValue = currentValue + change;
    const remainingPoints = parseInt(document.getElementById('remaining-points').textContent);
    
    // 检查点数限制
    if (newValue >= 8 && newValue <= 15) {
        const pointCost = calculatePointCost(currentValue, newValue);
        if (remainingPoints - pointCost >= 0 || change < 0) {
            input.value = newValue;
            document.getElementById('remaining-points').textContent = remainingPoints + (change < 0 ? Math.abs(pointCost) : -pointCost);
            updateAttributeModifier(attr);
            updatePointsProgress();
            updateAttributesSummary();
            updateBuildRecommendations();
        }
    }
}

// 计算属性点数消耗
function calculatePointCost(oldValue, newValue) {
    const costs = {
        8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9
    };
    return costs[newValue] - costs[oldValue];
}

// 技能选择事件处理
document.querySelectorAll('.skill-builder input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const remainingSkills = parseInt(document.getElementById('remaining-skills').textContent);
        if (this.checked && remainingSkills <= 0) {
            this.checked = false;
            return;
        }
        document.getElementById('remaining-skills').textContent = remainingSkills + (this.checked ? -1 : 1);
        updateSkillsProgress();
        updateSkillsSummary();
    });
});

// Resource Section Functions
function subscribeChannel() {
    window.open('https://www.youtube.com/channel/your-channel-id', '_blank');
}

function browseModules() {
    // Show all modules in a modal or redirect to modules page
    $('#modulesModal').modal('show');
}

function accessTools() {
    // Show tools section or redirect to tools page
    $('#toolsModal').modal('show');
}

function subscribeNewsletter() {
    const email = document.querySelector('#newsletter-email').value;
    if (validateEmail(email)) {
        // Add newsletter subscription logic
        alert('Thank you for subscribing!');
    } else {
        alert('Please enter a valid email address.');
    }
}

function submitContribution() {
    // Open contribution form modal
    $('#contributionModal').modal('show');
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Modal Initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all tooltips
    var tooltips = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltips.map(function (tooltip) {
        return new bootstrap.Tooltip(tooltip);
    });

    // Initialize all modals
    var modals = [].slice.call(document.querySelectorAll('.modal'));
    modals.map(function (modal) {
        return new bootstrap.Modal(modal);
    });

    // Add click handlers for resource cards
    document.querySelectorAll('.resource-card').forEach(card => {
        card.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            if (link) {
                window.open(link, '_blank');
            }
        });
    });
});

// 保存的内容
let savedItems = JSON.parse(localStorage.getItem('savedDiscussions') || '[]');
let likedItems = JSON.parse(localStorage.getItem('likedDiscussions') || '[]');

// 内容过滤器
let currentContentFilter = 'all';
let currentTimeFilter = 'week';

// 监听过滤器变化
document.getElementById('content-filter').addEventListener('change', function(e) {
    currentContentFilter = e.target.value;
    refreshDiscussions();
});

document.getElementById('time-filter').addEventListener('change', function(e) {
    currentTimeFilter = e.target.value;
    refreshDiscussions();
});

// 刷新讨论内容
async function refreshDiscussions() {
    // 显示加载状态
    document.querySelectorAll('.discussion-feed').forEach(feed => {
        feed.innerHTML = '<div class="text-center"><div class="spinner-border text-primary" role="status"></div></div>';
    });

    try {
        // 获取各平台内容
        const [redditPosts, tweets, videos, discordMessages, ddbPosts] = await Promise.all([
            fetchRedditPosts(),
            fetchTweets(),
            fetchYouTubeVideos(),
            fetchDiscordMessages(),
            fetchDDBPosts()
        ]);

        // 应用过滤器
        const filteredContent = {
            reddit: filterContent(redditPosts, 'reddit'),
            twitter: filterContent(tweets, 'twitter'),
            youtube: filterContent(videos, 'youtube'),
            discord: filterContent(discordMessages, 'discord'),
            ddb: filterContent(ddbPosts, 'ddb')
        };

        // 更新各平台内容
        updateFeed('reddit-feed', filteredContent.reddit);
        updateFeed('twitter-feed', filteredContent.twitter);
        updateFeed('youtube-feed', filteredContent.youtube);
        updateFeed('discord-feed', filteredContent.discord);
        updateFeed('ddb-feed', filteredContent.ddb);

        // 更新保存的内容列表
        updateSavedItemsList();

    } catch (error) {
        console.error('Error refreshing discussions:', error);
        document.querySelectorAll('.discussion-feed').forEach(feed => {
            feed.innerHTML = '<div class="alert alert-danger">Error loading discussions. Please try again later.</div>';
        });
    }
}

// 获取YouTube视频
async function fetchYouTubeVideos() {
    // 这里将通过YouTube API获取数据
    const response = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=dnd%20bard%20guide&type=video&order=date');
    const data = await response.json();
    return data.items.map(video => ({
        id: video.id.videoId,
        title: video.snippet.title,
        excerpt: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium.url,
        timeAgo: getTimeAgo(new Date(video.snippet.publishedAt).getTime() / 1000),
        url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
        platform: 'youtube',
        contentType: detectContentType(video.snippet.title + ' ' + video.snippet.description),
        interactions: {
            views: '0',
            likes: '0'
        }
    }));
}

// 获取Discord消息
async function fetchDiscordMessages() {
    // 这里将通过Discord API获取数据
    // 注意：需要适当的权限和认证
    const response = await fetch('https://discord.com/api/channels/YOUR_CHANNEL_ID/messages');
    const data = await response.json();
    return data.map(message => ({
        id: message.id,
        title: message.content.split('\n')[0],
        excerpt: message.content,
        timeAgo: getTimeAgo(new Date(message.timestamp).getTime() / 1000),
        url: message.url,
        platform: 'discord',
        contentType: detectContentType(message.content),
        interactions: {
            reactions: message.reactions ? message.reactions.length : 0
        }
    }));
}

// 更新内容展示
function updateFeed(feedId, items) {
    const feed = document.getElementById(feedId);
    const template = document.querySelector('.discussion-template');
    
    feed.innerHTML = '';
    
    items.forEach(item => {
        const discussionItem = template.cloneNode(true);
        discussionItem.classList.remove('d-none');
        
        // 设置内容
        discussionItem.querySelector('.discussion-title').textContent = item.title;
        discussionItem.querySelector('.discussion-excerpt').textContent = item.excerpt;
        
        // 设置平台图标和信息
        const platformIcon = discussionItem.querySelector('.platform-icon');
        platformIcon.className = `fab fa-${item.platform}`;
        
        // 添加缩略图（如果有）
        if (item.thumbnail && item.thumbnail !== 'self' && item.thumbnail !== 'default') {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.className = 'discussion-thumbnail';
            thumbnailDiv.innerHTML = `<img src="${item.thumbnail}" alt="Post thumbnail" class="img-thumbnail">`;
            discussionItem.querySelector('.discussion-content').appendChild(thumbnailDiv);
        }
        
        // 设置交互信息
        const interactionInfo = discussionItem.querySelector('.interaction-info');
        if (item.platform === 'reddit') {
            interactionInfo.innerHTML = `
                <span class="me-2"><i class="fas fa-arrow-up"></i> ${item.interactions.upvotes}</span>
                <span><i class="fas fa-comments"></i> ${item.interactions.comments}</span>
            `;
        } else {
            interactionInfo.textContent = getInteractionText(item);
        }
        
        discussionItem.querySelector('.time-info').textContent = item.timeAgo;
        
        // 设置标签
        const contentTypeTag = discussionItem.querySelector('.content-type');
        contentTypeTag.textContent = item.contentType.charAt(0).toUpperCase() + item.contentType.slice(1);
        contentTypeTag.className = `badge bg-${getContentTypeColor(item.contentType)} content-type`;
        
        discussionItem.querySelector('.platform-name').textContent = item.platform.charAt(0).toUpperCase() + item.platform.slice(1);
        
        // 设置交互状态
        const likeBtn = discussionItem.querySelector('.like-btn');
        const saveBtn = discussionItem.querySelector('.save-btn');
        
        if (likedItems.includes(item.id)) {
            likeBtn.classList.add('active');
            likeBtn.querySelector('i').className = 'fas fa-heart';
        }
        
        if (savedItems.includes(item.id)) {
            saveBtn.classList.add('active');
            saveBtn.querySelector('i').className = 'fas fa-bookmark';
        }
        
        // 添加交互事件
        likeBtn.addEventListener('click', () => toggleLike(item));
        saveBtn.addEventListener('click', () => toggleSave(item));
        
        // 添加点击事件打开原始链接
        discussionItem.querySelector('.discussion-content').addEventListener('click', () => {
            window.open(item.url, '_blank');
        });
        
        feed.appendChild(discussionItem);
    });
}

// 检测内容类型
function detectContentType(text) {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('build') || lowerText.includes('guide')) return 'builds';
    if (lowerText.includes('tip') || lowerText.includes('trick') || lowerText.includes('how to')) return 'tips';
    if (lowerText.includes('story') || lowerText.includes('experience') || lowerText.includes('session')) return 'stories';
    if (lowerText.includes('?') || lowerText.includes('help') || lowerText.includes('question')) return 'questions';
    return 'general';
}

// 获取交互文本
function getInteractionText(item) {
    switch (item.platform) {
        case 'reddit':
            return `${item.comments} comments`;
        case 'twitter':
            return `${item.retweets} retweets`;
        case 'youtube':
            return `${item.interactions.views} views`;
        case 'discord':
            return `${item.interactions.reactions} reactions`;
        case 'ddb':
            return `${item.replies} replies`;
        default:
            return '';
    }
}

// 过滤内容
function filterContent(items, platform) {
    return items.filter(item => {
        // 内容类型过滤
        if (currentContentFilter !== 'all' && item.contentType !== currentContentFilter) {
            return false;
        }
        
        // 时间过滤
        const timestamp = new Date(item.timestamp).getTime();
        const now = Date.now();
        const timeLimit = {
            day: now - 24 * 60 * 60 * 1000,
            week: now - 7 * 24 * 60 * 60 * 1000,
            month: now - 30 * 24 * 60 * 60 * 1000
        };
        
        return currentTimeFilter === 'all' || timestamp >= timeLimit[currentTimeFilter];
    });
}

// 切换点赞状态
function toggleLike(item) {
    const index = likedItems.indexOf(item.id);
    if (index === -1) {
        likedItems.push(item.id);
    } else {
        likedItems.splice(index, 1);
    }
    localStorage.setItem('likedDiscussions', JSON.stringify(likedItems));
    refreshDiscussions();
}

// 切换保存状态
function toggleSave(item) {
    const index = savedItems.indexOf(item.id);
    if (index === -1) {
        savedItems.push(item.id);
    } else {
        savedItems.splice(index, 1);
    }
    localStorage.setItem('savedDiscussions', JSON.stringify(savedItems));
    refreshDiscussions();
    updateSavedItemsList();
}

// 更新保存的内容列表
function updateSavedItemsList() {
    const savedItemsList = document.getElementById('saved-items-list');
    if (!savedItemsList) return;
    
    if (savedItems.length === 0) {
        savedItemsList.innerHTML = '<div class="dropdown-item text-muted">No saved items</div>';
        return;
    }
    
    savedItemsList.innerHTML = savedItems.map(itemId => {
        const item = findItemById(itemId);
        if (!item) return '';
        
        return `
            <div class="dropdown-item">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <strong>${item.title}</strong>
                        <br>
                        <small class="text-muted">${item.platform} • ${item.timeAgo}</small>
                    </div>
                    <button class="btn btn-sm btn-outline-danger" onclick="toggleSave('${itemId}')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// 通过ID查找内容
function findItemById(itemId) {
    // 在所有平台的内容中查找
    const allContent = [
        ...redditPosts,
        ...tweets,
        ...videos,
        ...discordMessages,
        ...ddbPosts
    ];
    
    return allContent.find(item => item.id === itemId);
}

// 获取Reddit帖子
async function fetchRedditPosts() {
    try {
        const options = {
            timeframe: currentTimeFilter,
            limit: 25,
            sort: 'hot',
            searchQuery: 'bard'
        };
        
        const posts = await redditService.getDndPosts(['DnD', 'dndnext', '3d6'], options);
        
        // 处理帖子数据
        return posts.map(post => ({
            id: post.id,
            title: post.title,
            excerpt: post.excerpt,
            author: post.author,
            comments: post.comments,
            score: post.score,
            timeAgo: post.timeAgo,
            url: post.url,
            platform: 'reddit',
            contentType: post.contentType,
            thumbnail: post.thumbnail,
            interactions: {
                upvotes: post.score,
                comments: post.comments
            }
        }));
    } catch (error) {
        console.error('Error fetching Reddit posts:', error);
        return [];
    }
}

// 获取Twitter推文
async function fetchTweets() {
    // 这里将通过Twitter API获取数据
    // 搜索 #DnD #Bard 相关推文
    const response = await fetch('https://api.twitter.com/2/tweets/search/recent?query=%23DnD%20%23Bard');
    const data = await response.json();
    return data.data.map(tweet => ({
        text: tweet.text,
        retweets: tweet.public_metrics.retweet_count,
        timeAgo: getTimeAgo(new Date(tweet.created_at).getTime() / 1000),
        url: `https://twitter.com/i/web/status/${tweet.id}`
    }));
}

// 获取D&D Beyond帖子
async function fetchDDBPosts() {
    // 这里将通过D&D Beyond API获取数据
    // 从论坛获取诗人相关讨论
    const response = await fetch('https://www.dndbeyond.com/api/forum/threads?tag=bard');
    const data = await response.json();
    return data.threads.map(thread => ({
        title: thread.title,
        excerpt: thread.first_post.substring(0, 100) + '...',
        replies: thread.reply_count,
        timeAgo: getTimeAgo(thread.created_at),
        url: `https://www.dndbeyond.com/forums/d-d-beyond-general/discussion/${thread.id}`
    }));
}

// 计算时间差
function getTimeAgo(timestamp) {
    const seconds = Math.floor((Date.now() / 1000) - timestamp);
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
}

// 获取内容类型的颜色
function getContentTypeColor(type) {
    const colors = {
        builds: 'primary',
        tips: 'success',
        stories: 'info',
        questions: 'warning',
        general: 'secondary'
    };
    return colors[type] || 'secondary';
} 