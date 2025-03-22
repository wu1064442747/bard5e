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
            
            // 关闭其他卡片
            inspirationCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.querySelector('.inspiration-details').style.display = 'none';
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

    // 社区互动卡片点击展开详情
    const communityCards = document.querySelectorAll('#community .card');
    communityCards.forEach(card => {
        card.addEventListener('click', function() {
            const details = this.querySelector('.community-details');
            const isVisible = details.style.display === 'block';
            
            // 关闭其他卡片
            communityCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.querySelector('.community-details').style.display = 'none';
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

    // 获取所有社区互动卡片
    const communityCardsDetails = document.querySelectorAll('.community-details');
    
    // 为每个卡片添加点击事件
    communityCardsDetails.forEach(card => {
        const parentCard = card.closest('.card');
        parentCard.addEventListener('click', function() {
            // 关闭其他卡片
            communityCardsDetails.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.display = 'none';
                    otherCard.style.opacity = '0';
                    otherCard.style.transform = 'translateY(10px)';
                }
            });
            
            // 切换当前卡片
            if (card.style.display === 'none' || !card.style.display) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
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

// 资源提交功能
function openResourceSubmission() {
    // 创建模态框
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

// 提交资源
function submitResource() {
    alert('Thank you for your submission! Our moderators will review it shortly.');
    bootstrap.Modal.getInstance(document.getElementById('resourceModal')).hide();
}

// 活动注册功能
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
                            <label class="form-label">Character Level</label>
                            <select class="form-select">
                                <option>1-4</option>
                                <option>5-10</option>
                                <option>11-16</option>
                                <option>17-20</option>
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