// Skills Showcase with Apple-style Interactive Cards
class SkillsShowcase {
    constructor() {
        this.skills = {};
        this.isLoading = false;
        this.init();
    }

    async init() {
        await this.loadSkills();
        this.renderSkillsGrid();
        this.initSkillInteractions();
        console.log('🎯 Skills showcase initialized with Apple-style interactions');
    }

    async loadSkills() {
        try {
            this.isLoading = true;
            const response = await fetch('/data/skills.json');
            const data = await response.json();
            this.skills = data.skills;
            this.isLoading = false;
        } catch (error) {
            console.error('Failed to load skills:', error);
            this.isLoading = false;
        }
    }

    renderSkillsGrid() {
        const skillsGrid = document.getElementById('skillsGrid');
        if (!skillsGrid || !this.skills) return;

        // Get priority skills to show first
        const prioritySkills = [
            'AWS', 'Kubernetes', 'Terraform', 'Ansible', 'DevOps', 'CI/CD',
            'Python', 'Information Security', 'SOC 2', 'Docker',
            'Solution Architecture', 'AI Agents', 'Team Leadership', 'Project Management'
        ];

        const skillsToShow = prioritySkills.filter(skill => this.skills[skill]);
        
        skillsGrid.innerHTML = '';
        skillsGrid.className = 'skills-grid-layout';

        skillsToShow.forEach((skillName, index) => {
            const skill = this.skills[skillName];
            const skillCard = this.createSkillCard(skillName, skill, index);
            skillsGrid.appendChild(skillCard);
        });
    }

    createSkillCard(skillName, skill, index) {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.dataset.skill = skillName;
        
        // Add staggered animation delay
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="skill-card-content">
                <div class="skill-icon">
                    ${this.getSkillIcon(skillName)}
                </div>
                <h3 class="skill-name">${skillName}</h3>
                <p class="skill-description">${skill.description}</p>
                <div class="skill-learn-more">
                    <span>Learn More</span>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
            <div class="skill-card-glow"></div>
        `;

        // Add click handler
        card.addEventListener('click', () => {
            this.showSkillModal(skillName, skill);
        });

        return card;
    }

    getSkillIcon(skillName) {
        const iconMap = {
            'AWS': '<i class="fab fa-aws"></i>',
            'Kubernetes': '<i class="fas fa-dharmachakra"></i>',
            'Terraform': '<i class="fas fa-cube"></i>',
            'Ansible': '<i class="fas fa-cogs"></i>',
            'DevOps': '<i class="fas fa-infinity"></i>',
            'CI/CD': '<i class="fas fa-code-branch"></i>',
            'Python': '<i class="fab fa-python"></i>',
            'Information Security': '<i class="fas fa-shield-alt"></i>',
            'SOC 2': '<i class="fas fa-certificate"></i>',
            'Docker': '<i class="fab fa-docker"></i>',
            'Solution Architecture': '<i class="fas fa-drafting-compass"></i>',
            'AI Agents': '<i class="fas fa-robot"></i>',
            'Team Leadership': '<i class="fas fa-users"></i>',
            'Project Management': '<i class="fas fa-tasks"></i>'
        };
        
        return iconMap[skillName] || '<i class="fas fa-star"></i>';
    }

    showSkillModal(skillName, skill) {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.className = 'skill-modal-overlay';
        modal.innerHTML = `
            <div class="skill-modal">
                <div class="skill-modal-header">
                    <div class="skill-modal-icon">
                        ${this.getSkillIcon(skillName)}
                    </div>
                    <h2 class="skill-modal-title">${skillName}</h2>
                    <button class="skill-modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="skill-modal-content">
                    <div class="skill-modal-section">
                        <h3>Overview</h3>
                        <p>${skill.description}</p>
                    </div>
                    <div class="skill-modal-section">
                        <h3>Detailed Expertise</h3>
                        <p>${skill.detail}</p>
                    </div>
                    ${this.getSkillCertifications(skillName)}
                </div>
            </div>
        `;

        // Add to body with animation
        document.body.appendChild(modal);
        
        // Animate in
        requestAnimationFrame(() => {
            modal.classList.add('active');
        });

        // Close handlers
        const closeBtn = modal.querySelector('.skill-modal-close');
        closeBtn.addEventListener('click', () => this.closeSkillModal(modal));
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeSkillModal(modal);
            }
        });

        // ESC key to close
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                this.closeSkillModal(modal);
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    }

    closeSkillModal(modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }

    getSkillCertifications(skillName) {
        const certifications = {
            'AWS': 'AWS Solutions Architect Certified',
            'Kubernetes': 'CKAD Certified',
            'Information Security': 'CISSP-level expertise',
            'Bash': 'LinkedIn Assessment Certified',
            'Groovy': 'AWS Verified',
            'Anthropic Claude': 'MCP Certified',
            'API Development': 'MCP Certified',
            'Team Leadership': 'Multi-certified leadership',
            'Product Leadership': 'LinkedIn Certified',
            'AI for Business': 'LinkedIn Certified'
        };

        const cert = certifications[skillName];
        if (cert) {
            return `
                <div class="skill-modal-section">
                    <h3>Certification</h3>
                    <div class="skill-certification">
                        <i class="fas fa-award"></i>
                        <span>${cert}</span>
                    </div>
                </div>
            `;
        }
        return '';
    }

    initSkillInteractions() {
        // Add Apple-style hover effects
        document.addEventListener('mouseover', (e) => {
            const skillCard = e.target.closest('.skill-card');
            if (skillCard) {
                skillCard.style.transform = 'translateY(-8px) scale(1.02)';
                skillCard.style.boxShadow = '0 20px 40px rgba(0, 113, 227, 0.2)';
                
                const glow = skillCard.querySelector('.skill-card-glow');
                if (glow) {
                    glow.style.opacity = '0.3';
                    glow.style.transform = 'scale(1.1)';
                }
            }
        });

        document.addEventListener('mouseout', (e) => {
            const skillCard = e.target.closest('.skill-card');
            if (skillCard) {
                skillCard.style.transform = 'translateY(0) scale(1)';
                skillCard.style.boxShadow = '';
                
                const glow = skillCard.querySelector('.skill-card-glow');
                if (glow) {
                    glow.style.opacity = '0.1';
                    glow.style.transform = 'scale(1)';
                }
            }
        });

        // Add scroll reveal animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('skill-card-revealed');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.skill-card').forEach(card => {
            observer.observe(card);
        });
    }
}

// Add CSS for skills showcase
const skillsCSS = `
/* Skills Grid Layout */
.skills-grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-bottom: 64px;
    padding: 0 24px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

/* Skill Cards */
.skill-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border-radius: 18px;
    padding: 32px;
    text-align: center;
    position: relative;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 1px solid rgba(0, 113, 227, 0.1);
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
    animation: skillCardSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.skill-card:hover {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(0, 113, 227, 0.3);
}

.skill-card-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(0, 113, 227, 0.1), transparent);
    border-radius: 50%;
    opacity: 0.1;
    transition: all 0.3s ease;
    z-index: 1;
}

.skill-card-content {
    position: relative;
    z-index: 2;
}

.skill-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 20px;
    background: linear-gradient(135deg, #0071E3, #667eea);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: white;
    transition: all 0.3s ease;
}

.skill-card:hover .skill-icon {
    transform: scale(1.1) rotateY(10deg);
}

.skill-name {
    font-size: 19px;
    font-weight: 600;
    color: #1D1D1F;
    margin-bottom: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
}

.skill-description {
    font-size: 15px;
    color: #6E6E73;
    line-height: 1.47059;
    margin-bottom: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
}

.skill-learn-more {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #0071E3;
    font-size: 15px;
    font-weight: 500;
    transition: all 0.2s ease;
}

.skill-card:hover .skill-learn-more {
    transform: translateX(4px);
}

/* Skill Modal */
.skill-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    padding: 20px;
}

.skill-modal-overlay.active {
    opacity: 1;
    visibility: visible;
}

.skill-modal {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(40px);
    border-radius: 24px;
    max-width: 500px;
    width: 100%;
    max-height: 80vh;
    overflow-y: auto;
    transform: scale(0.9) translateY(20px);
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.skill-modal-overlay.active .skill-modal {
    transform: scale(1) translateY(0);
}

.skill-modal-header {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 32px 32px 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.skill-modal-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #0071E3, #667eea);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: white;
    flex-shrink: 0;
}

.skill-modal-title {
    font-size: 24px;
    font-weight: 700;
    color: #1D1D1F;
    flex: 1;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
}

.skill-modal-close {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    color: #6E6E73;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    flex-shrink: 0;
}

.skill-modal-close:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #1D1D1F;
}

.skill-modal-content {
    padding: 24px 32px 32px;
}

.skill-modal-section {
    margin-bottom: 24px;
}

.skill-modal-section:last-child {
    margin-bottom: 0;
}

.skill-modal-section h3 {
    font-size: 19px;
    font-weight: 600;
    color: #1D1D1F;
    margin-bottom: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
}

.skill-modal-section p {
    font-size: 15px;
    color: #6E6E73;
    line-height: 1.47059;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
}

.skill-certification {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: rgba(0, 113, 227, 0.1);
    border-radius: 12px;
    color: #0071E3;
    font-weight: 500;
}

.skill-certification i {
    font-size: 20px;
}

/* Animations */
@keyframes skillCardSlideIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.skill-card-revealed {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

/* Responsive Design */
@media (max-width: 768px) {
    .skills-grid-layout {
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 0 16px;
    }
    
    .skill-card {
        padding: 24px;
    }
    
    .skill-modal {
        margin: 20px;
    }
    
    .skill-modal-header {
        padding: 24px 24px 20px;
    }
    
    .skill-modal-content {
        padding: 20px 24px 24px;
    }
}
`;

// Add styles to head
const skillsStyleSheet = document.createElement('style');
skillsStyleSheet.textContent = skillsCSS;
document.head.appendChild(skillsStyleSheet);

// Initialize skills showcase when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SkillsShowcase();
});