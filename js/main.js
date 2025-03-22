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

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有属性调整值
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(updateAttributeModifier);
    
    // 初始化进度条
    updatePointsProgress();
    updateSkillsProgress();
    
    // 初始化总览
    updateAttributesSummary();
    updateSkillsSummary();
});

// Additional Resources Section Functions
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Initialize tooltips
document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Discussion Area Functions
let comments = [];
let currentPage = 1;
const commentsPerPage = 5;
let isAdminMode = false;
let searchTerm = '';
let currentSortMethod = 'newest';

// Initialize discussion area
document.addEventListener('DOMContentLoaded', function() {
    // 初始化评论表单
    initializeCommentForm();
    
    // 初始化加载更多按钮
    const loadMoreBtn = document.getElementById('loadMoreComments');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreComments);
    }

    // 初始化搜索功能
    const searchInput = document.getElementById('commentSearch');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function() {
            searchTerm = this.value;
            currentPage = 1;
            loadComments();
        }, 300));
    }

    // 加载初始评论
    loadComments();
});

// 初始化评论表单
function initializeCommentForm() {
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const contentInput = document.getElementById('commentContent');
            const content = contentInput.value.trim();
            
            if (!content) {
                showAlert('请输入评论内容', 'warning');
                return;
            }
            
            const replyToId = document.getElementById('replyToId').value;
            
            const newComment = {
                id: Date.now(),
                name: generateUsername(),
                content: content,
                date: new Date().toISOString(),
                likes: 0,
                replies: [],
                replyTo: replyToId || null
            };

            // 添加到本地存储
            const savedComments = JSON.parse(localStorage.getItem('bardGuideComments') || '[]');
            
            if (replyToId) {
                // 查找父评论并添加回复
                const parentComment = findCommentById(savedComments, replyToId);
                if (parentComment) {
                    parentComment.replies.push(newComment);
                }
            } else {
                // 添加为新的顶级评论
                savedComments.unshift(newComment);
            }
            
            localStorage.setItem('bardGuideComments', JSON.stringify(savedComments));

            // 重置表单
            contentInput.value = '';
            cancelReply();

            // 重新加载评论
            loadComments();
            
            // 显示成功消息
            showAlert('评论发表成功！', 'success');
        });
    }
}

// Random username generator
const adjectives = ['Happy', 'Brave', 'Wise', 'Swift', 'Clever', 'Noble', 'Kind', 'Bold', 'Calm', 'Eager'];
const nouns = ['Bard', 'Minstrel', 'Singer', 'Poet', 'Artist', 'Player', 'Dancer', 'Performer', 'Musician', 'Storyteller'];
const colors = ['Red', 'Blue', 'Green', 'Gold', 'Silver', 'Purple', 'White', 'Black', 'Crystal', 'Ruby'];

function generateUsername() {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const number = Math.floor(Math.random() * 100) + 1;
    return `${color}${adjective}${noun}${number}`;
}

// Load comments from storage
function loadComments() {
    let allComments = JSON.parse(localStorage.getItem('bardGuideComments') || '[]');
    
    // Apply search filter if exists
    if (searchTerm) {
        allComments = filterComments(allComments, searchTerm);
    }
    
    // Apply sorting
    allComments = sortCommentsList(allComments, currentSortMethod);
    
    comments = allComments;
    displayComments();
}

// Filter comments based on search term
function filterComments(commentsList, term) {
    term = term.toLowerCase();
    return commentsList.filter(comment => {
        const matchesContent = comment.content.toLowerCase().includes(term) ||
                             comment.name.toLowerCase().includes(term);
        const hasMatchingReplies = comment.replies && 
                                 comment.replies.some(reply => 
                                     reply.content.toLowerCase().includes(term) ||
                                     reply.name.toLowerCase().includes(term));
        return matchesContent || hasMatchingReplies;
    });
}

// Sort comments
function sortComments(method) {
    currentSortMethod = method;
    currentPage = 1;
    loadComments();
}

function sortCommentsList(commentsList, method) {
    switch (method) {
        case 'oldest':
            return commentsList.sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'mostLiked':
            return commentsList.sort((a, b) => b.likes - a.likes);
        case 'mostReplies':
            return commentsList.sort((a, b) => (b.replies?.length || 0) - (a.replies?.length || 0));
        case 'newest':
        default:
            return commentsList.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
}

// Display comments
function displayComments() {
    const commentsContainer = document.getElementById('commentsList');
    if (!commentsContainer) return;

    const startIndex = 0;
    const endIndex = currentPage * commentsPerPage;
    const commentsToShow = comments.slice(startIndex, endIndex);

    commentsContainer.innerHTML = commentsToShow.map(comment => 
        generateCommentHTML(comment)
    ).join('');

    // Update "Load More" button visibility
    const loadMoreBtn = document.getElementById('loadMoreComments');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = endIndex >= comments.length ? 'none' : 'block';
    }
}

// Generate HTML for a single comment
function generateCommentHTML(comment, isReply = false) {
    const adminControls = isAdminMode ? `
        <div class="admin-controls">
            <button class="btn btn-sm btn-outline-danger" onclick="deleteComment('${comment.id}')">
                <i class="fas fa-trash"></i>
            </button>
            <button class="btn btn-sm btn-outline-warning" onclick="editComment('${comment.id}')">
                <i class="fas fa-edit"></i>
            </button>
        </div>
    ` : '';

    const replyButton = !isReply ? `
        <button class="btn btn-sm btn-outline-secondary reply-button" onclick="replyToComment('${comment.id}', '${escapeHtml(comment.name)}')">
            <i class="fas fa-reply"></i> Reply
        </button>
    ` : '';

    const repliesHTML = comment.replies && comment.replies.length > 0 ? `
        <div class="replies-section mt-3">
            ${comment.replies.map(reply => generateCommentHTML(reply, true)).join('')}
        </div>
    ` : '';

    return `
        <div class="comment-item border-bottom pb-3 mb-3 ${isReply ? 'ms-4' : ''}" data-comment-id="${comment.id}">
            <div class="d-flex justify-content-between align-items-start">
                <div>
                    <h6 class="mb-1">${escapeHtml(comment.name)}</h6>
                    <p class="mb-1">${escapeHtml(comment.content)}</p>
                    <div class="comment-actions">
                        <small class="text-muted">${formatDate(comment.date)}</small>
                        ${replyButton}
                        <button class="btn btn-sm btn-outline-primary like-button" onclick="likeComment('${comment.id}')">
                            <i class="fas fa-thumbs-up"></i> ${comment.likes}
                        </button>
                        ${adminControls}
                    </div>
                </div>
            </div>
            ${repliesHTML}
        </div>
    `;
}

// Reply to comment
function replyToComment(commentId, commentAuthor) {
    document.getElementById('replyToId').value = commentId;
    document.getElementById('replyingToName').textContent = commentAuthor;
    document.getElementById('replyingTo').style.display = 'block';
    document.getElementById('commentContent').focus();
}

// Cancel reply
function cancelReply() {
    document.getElementById('replyToId').value = '';
    document.getElementById('replyingTo').style.display = 'none';
}

// Find comment by ID (recursive)
function findCommentById(commentsList, id) {
    for (let comment of commentsList) {
        if (comment.id.toString() === id.toString()) {
            return comment;
        }
        if (comment.replies) {
            const found = findCommentById(comment.replies, id);
            if (found) return found;
        }
    }
    return null;
}

// Toggle admin mode
function toggleAdminMode() {
    isAdminMode = !isAdminMode;
    displayComments();
    showAlert(isAdminMode ? 'Admin mode enabled' : 'Admin mode disabled', 'info');
}

// Delete comment
function deleteComment(commentId) {
    if (!isAdminMode) return;
    
    if (confirm('Are you sure you want to delete this comment?')) {
        let allComments = JSON.parse(localStorage.getItem('bardGuideComments') || '[]');
        allComments = removeComment(allComments, commentId);
        localStorage.setItem('bardGuideComments', JSON.stringify(allComments));
        loadComments();
        showAlert('Comment deleted successfully', 'success');
    }
}

// Remove comment (recursive)
function removeComment(commentsList, id) {
    return commentsList.filter(comment => {
        if (comment.replies) {
            comment.replies = removeComment(comment.replies, id);
        }
        return comment.id.toString() !== id.toString();
    });
}

// Edit comment
function editComment(commentId) {
    if (!isAdminMode) return;
    
    const comment = findCommentById(comments, commentId);
    if (!comment) return;
    
    const newContent = prompt('Edit comment:', comment.content);
    if (newContent && newContent !== comment.content) {
        let allComments = JSON.parse(localStorage.getItem('bardGuideComments') || '[]');
        const commentToEdit = findCommentById(allComments, commentId);
        if (commentToEdit) {
            commentToEdit.content = newContent;
            commentToEdit.edited = true;
            commentToEdit.editDate = new Date().toISOString();
            localStorage.setItem('bardGuideComments', JSON.stringify(allComments));
            loadComments();
            showAlert('Comment updated successfully', 'success');
        }
    }
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Load more comments
function loadMoreComments() {
    currentPage++;
    displayComments();
}

// Like a comment
function likeComment(commentId) {
    const commentIndex = comments.findIndex(c => c.id === commentId);
    if (commentIndex !== -1) {
        comments[commentIndex].likes++;
        localStorage.setItem('bardGuideComments', JSON.stringify(comments));
        displayComments();
    }
}

// Helper function to escape HTML
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Helper function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
} 