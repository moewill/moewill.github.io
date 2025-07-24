// Main JavaScript functionality

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Smooth scrolling for navigation links
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

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Form submission handling
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I\'ll get back to you within 24 hours.');
    });
}

// LinkedIn Recommendations Carousel
class LinkedInRecommendations {
    constructor() {
        this.currentIndex = 0;
        this.recommendations = [];
        this.container = document.getElementById('recommendations-container');
        this.indicators = document.getElementById('recommendation-indicators');
        
        this.init();
    }
    
    async init() {
        await this.loadRecommendations();
        this.setupCarousel();
        this.setupControls();
        this.startAutoSlide();
        this.setupResizeHandler();
    }
    
    setupResizeHandler() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.setupCarousel();
                this.updateIndicators();
                this.goToSlide(this.currentIndex);
            }, 150);
        });
    }
    
    async loadRecommendations() {
        // Real LinkedIn recommendation from Maurice Rashad Williams
        this.recommendations = [
            {
                name: "Nikita Williams",
                title: "Top 2.5% Podcast Host Est. 2017 | Business Coach",
                company: "Thrive With Nikita - Business Coach for the Chronically Ill, Creatively Driven, and Capacity-Aware",
                content: "Maurice is great! He is very professional and you can tell that he loves what he does. He has been a photographer for several of my art and craft events and captured the true essence of what I am trying to accomplish, a community. I highly recommend him and I know he will work to make any businesses message come through is photography.",
                rating: 5,
                linkedin: "https://linkedin.com/in/nikitawilliams",
                relationship: "Client since March 2012",
                date: "March 22, 2012"
            }
        ];
        
        this.renderRecommendations();
    }
    
    renderRecommendations() {
        this.container.innerHTML = '';
        
        this.recommendations.forEach((rec, index) => {
            const recElement = document.createElement('div');
            recElement.className = 'w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4';
            recElement.innerHTML = `
                <div class="bg-white rounded-2xl p-8 shadow-lg h-full">
                    <div class="flex items-center mb-6">
                        <div class="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4">
                            <span class="text-white text-xl font-bold">${rec.name.charAt(0)}</span>
                        </div>
                        <div>
                            <div class="font-bold text-gray-900">${rec.name}</div>
                            <div class="text-gray-600 text-sm">${rec.title}</div>
                            <div class="text-gray-500 text-xs">${rec.company}</div>
                            <div class="text-gray-400 text-xs mt-1">${rec.relationship} • ${rec.date}</div>
                        </div>
                    </div>
                    <div class="text-gray-600 italic mb-6">
                        "${rec.content}"
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex text-warning">
                            ${Array(rec.rating).fill('<i class="fas fa-star"></i>').join('')}
                        </div>
                        <a href="${rec.linkedin}" target="_blank" class="text-primary hover:text-accent transition-colors">
                            <i class="fab fa-linkedin text-xl"></i>
                        </a>
                    </div>
                </div>
            `;
            this.container.appendChild(recElement);
        });
        
        this.updateIndicators();
    }
    
    setupCarousel() {
        const itemsToShow = this.getItemsToShow();
        this.maxIndex = Math.max(0, this.recommendations.length - itemsToShow);
        this.updateCarouselLayout();
    }
    
    updateCarouselLayout() {
        const itemsToShow = this.getItemsToShow();
        const totalItems = this.recommendations.length;
        
        // If we have fewer items than what can be shown, center them
        if (totalItems <= itemsToShow) {
            const itemWidth = Math.min(100 / itemsToShow, 100 / totalItems);
            
            // Update each recommendation item
            const items = this.container.querySelectorAll('.w-full');
            items.forEach(item => {
                if (totalItems === 1) {
                    // Single item - make it smaller and centered
                    item.style.minWidth = '60%';
                    item.style.maxWidth = '600px';
                    item.style.flex = '0 0 60%';
                } else {
                    // Multiple items but less than screen capacity
                    item.style.minWidth = `${itemWidth}%`;
                    item.style.flex = `0 0 ${itemWidth}%`;
                }
            });
            
            // Center the container
            this.container.style.justifyContent = 'center';
            this.container.style.gap = '1rem';
        } else {
            // More items than can be shown - use normal carousel behavior
            const itemWidth = 100 / itemsToShow;
            const items = this.container.querySelectorAll('.w-full');
            items.forEach(item => {
                item.style.minWidth = `${itemWidth}%`;
                item.style.flex = `0 0 ${itemWidth}%`;
            });
            this.container.style.justifyContent = 'flex-start';
            this.container.style.gap = '0';
        }
    }
    
    setupControls() {
        const prevBtn = document.getElementById('prev-recommendation');
        const nextBtn = document.getElementById('next-recommendation');
        
        prevBtn.addEventListener('click', () => this.prevSlide());
        nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Touch/swipe support
        let startX = 0;
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.container.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });
    }
    
    updateIndicators() {
        this.indicators.innerHTML = '';
        const itemsToShow = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
        const totalSlides = Math.max(1, this.recommendations.length - itemsToShow + 1);
        
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = `w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                i === this.currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`;
            indicator.addEventListener('click', () => this.goToSlide(i));
            this.indicators.appendChild(indicator);
        }
    }
    
    goToSlide(index) {
        this.currentIndex = Math.max(0, Math.min(index, this.maxIndex));
        const translateX = -(this.currentIndex * (100 / this.getItemsToShow()));
        this.container.style.transform = `translateX(${translateX}%)`;
        this.updateIndicators();
    }
    
    nextSlide() {
        this.currentIndex = this.currentIndex >= this.maxIndex ? 0 : this.currentIndex + 1;
        this.goToSlide(this.currentIndex);
    }
    
    prevSlide() {
        this.currentIndex = this.currentIndex <= 0 ? this.maxIndex : this.currentIndex - 1;
        this.goToSlide(this.currentIndex);
    }
    
    getItemsToShow() {
        return window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
    }
    
    startAutoSlide() {
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
}

// Theme Management System
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }
    
    init() {
        this.applyTheme(this.currentTheme);
        this.setupThemeToggle();
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.updateActiveButton(theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }
    
    updateActiveButton(activeTheme) {
        document.querySelectorAll('.theme-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-theme') === activeTheme) {
                option.classList.add('active');
            }
        });
    }
    
    setupThemeToggle() {
        document.querySelectorAll('.theme-option').forEach(option => {
            option.addEventListener('click', () => {
                const theme = option.getAttribute('data-theme');
                this.applyTheme(theme);
                
                // Add visual feedback
                option.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    option.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }
}

// Brand Kit Documentation (for reference)
const BRAND_KIT = {
    colors: {
        primary: '#0EA5E9',     // Sky Blue - Innovation & Technology
        secondary: '#0F172A',   // Slate Dark - Professionalism
        accent: '#06B6D4',      // Cyan - Digital Solutions
        success: '#10B981',     // Emerald - Growth & Success
        warning: '#F59E0B',     // Amber - Energy & Attention
        error: '#EF4444',       // Red - Critical Actions
        info: '#3B82F6'         // Blue - Information
    },
    typography: {
        primary: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
        heading: 'Poppins, Inter, sans-serif',
        mono: 'JetBrains Mono, Fira Code, monospace'
    },
    themes: {
        light: { name: 'Light', bg: '#ffffff', text: '#0f172a' },
        dark: { name: 'Dark', bg: '#0f172a', text: '#f8fafc' },
        ocean: { name: 'Ocean', primary: '#0891b2', accent: '#0e7490' },
        sunset: { name: 'Sunset', primary: '#ea580c', accent: '#dc2626' },
        forest: { name: 'Forest', primary: '#059669', accent: '#047857' }
    },
    spacing: {
        xs: '0.25rem', sm: '0.5rem', md: '1rem', 
        lg: '1.5rem', xl: '2rem', '2xl': '3rem'
    },
    borderRadius: {
        sm: '0.375rem', md: '0.5rem', lg: '0.75rem', 
        xl: '1rem', '2xl': '1.5rem'
    }
};

// Skills Display System
class SkillsDisplay {
    constructor() {
        this.container = document.getElementById('skills-container');
        this.toggle = document.getElementById('skills-toggle');
        this.isExpanded = false;
        this.skillsData = {};
        this.loadSkillsData();
        
        // Real skills from Maurice's LinkedIn profile and certifications
        // Organized by business size relevance
        this.skills = [
            // Small Business Priority Skills
            { name: "Troubleshooting", level: 98, featured: false, endorsements: 41, businessSize: "small" },
            { name: "AI Agents", level: 90, featured: false, cert: "LinkedIn Certified", businessSize: "small" },
            { name: "Customer Service", level: 82, featured: false, endorsements: 9, businessSize: "small" },
            { name: "Web Design", level: 75, featured: false, endorsements: 6, businessSize: "small" },
            { name: "Windows", level: 74, featured: false, endorsements: 4, businessSize: "small" },
            { name: "Computer Hardware", level: 70, featured: false, endorsements: 3, businessSize: "small" },
            { name: "AWS", level: 85, featured: false, cert: "Solutions Architect", endorsements: 3, businessSize: "small" },
            { name: "Python", level: 85, featured: false, endorsements: 1, businessSize: "small" },
            { name: "Cloud Computing", level: 85, featured: false, endorsements: 1, businessSize: "small" },
            { name: "Communication", level: 85, featured: false, businessSize: "small" },
            { name: "Problem Solving", level: 87, featured: false, businessSize: "small" },
            { name: "Teaching", level: 80, featured: false, businessSize: "small" },
            { name: "Training", level: 79, featured: false, businessSize: "small" },
            
            // Enterprise/Large Corporation Skills
            { name: "Data Center", level: 95, featured: false, endorsements: 33, businessSize: "enterprise" },
            { name: "Information Security", level: 94, featured: false, cert: "CISSP Prep", businessSize: "enterprise" },
            { name: "Windows Server", level: 92, featured: false, endorsements: 23, businessSize: "enterprise" },
            { name: "Servers", level: 89, featured: false, endorsements: 22, businessSize: "enterprise" },
            
            // Cloud & DevOps (enterprise-focused)
            { name: "Kubernetes", level: 88, featured: false, cert: "CKAD", endorsements: 1, businessSize: "enterprise" },
            { name: "Solution Architecture", level: 87, featured: false, cert: "AWS Certified", businessSize: "enterprise" },
            { name: "DevOps", level: 84, featured: false, businessSize: "enterprise" },
            { name: "CI/CD", level: 83, featured: false, businessSize: "enterprise" },
            { name: "Docker", level: 82, featured: false, businessSize: "enterprise" },
            { name: "Terraform", level: 81, featured: false, endorsements: 1, businessSize: "enterprise" },
            { name: "Ansible", level: 80, featured: false, endorsements: 1, businessSize: "enterprise" },
            { name: "Jenkins", level: 79, featured: false, endorsements: 1, businessSize: "enterprise" },
            
            // Security & Compliance (enterprise-focused)
            { name: "Security Operations", level: 87, featured: false, cert: "CISSP Prep", businessSize: "enterprise" },
            { name: "IT Security Assessments", level: 85, featured: false, cert: "CISSP Prep", businessSize: "enterprise" },
            { name: "SOC 2", level: 84, featured: false, cert: "LinkedIn Certified", businessSize: "enterprise" },
            { name: "Security Audits", level: 83, featured: false, cert: "LinkedIn Certified", businessSize: "enterprise" },
            { name: "Network Security", level: 82, featured: false, businessSize: "enterprise" },
            
            // Development & APIs (both small and enterprise)
            { name: "API Development", level: 91, featured: false, cert: "MCP Certified", businessSize: "both" },
            { name: "Anthropic Claude", level: 90, featured: false, cert: "MCP Certified", businessSize: "both" },
            { name: "Bash", level: 84, featured: false, cert: "LinkedIn Assessment", businessSize: "enterprise" },
            { name: "Git", level: 82, featured: false, businessSize: "both" },
            { name: "Groovy", level: 75, featured: false, cert: "AWS Verified", businessSize: "enterprise" },
            { name: "SQL", level: 78, featured: false, businessSize: "both" },
            
            // Networking & Infrastructure (highly endorsed)
            { name: "Networking", level: 88, featured: false, endorsements: 20 },
            { name: "Infrastructure", level: 84, featured: false, endorsements: 11 },
            { name: "Disaster Recovery", level: 82, featured: false, endorsements: 12 },
            { name: "Active Directory", level: 80, featured: false, endorsements: 9 },
            { name: "VMware", level: 78, featured: false, endorsements: 5 },
            { name: "Linux Admin", level: 85, featured: false, endorsements: 4 },
            
            // Cloud Platforms
            { name: "Amazon EC2", level: 83, featured: false },
            { name: "Microsoft Azure", level: 76, featured: false, endorsements: 1 },
            { name: "Cloud Computing", level: 85, featured: false, endorsements: 1 },
            { name: "Amazon SNS", level: 77, featured: false },
            { name: "Amazon SQS", level: 76, featured: false },
            { name: "Amazon VPC", level: 74, featured: false, endorsements: 1 },
            
            // Leadership & Business
            { name: "Team Leadership", level: 86, featured: false, cert: "Multi-Certified" },
            { name: "Product Leadership", level: 82, featured: false, cert: "LinkedIn Certified" },
            { name: "AI for Business", level: 84, featured: false, cert: "LinkedIn Certified" },
            { name: "Project Management", level: 83, featured: false, endorsements: 10 },
            { name: "Teaching", level: 80, featured: false },
            { name: "Training", level: 79, featured: false },
            { name: "Communication", level: 85, featured: false },
            { name: "Knowledge Sharing", level: 82, featured: false },
            { name: "Problem Solving", level: 87, featured: false },
            
            // Technical Architecture
            { name: "Scalable Architecture", level: 81, featured: false },
            { name: "Architecture", level: 80, featured: false },
            { name: "Configuration Management", level: 83, featured: false },
            { name: "Key Management", level: 78, featured: false },
            
            // Legacy/Foundational Skills
            { name: "Customer Service", level: 82, featured: false, endorsements: 9 },
            { name: "Web Design", level: 75, featured: false, endorsements: 6 },
            { name: "Windows", level: 74, featured: false, endorsements: 4 },
            { name: "SharePoint", level: 71, featured: false, endorsements: 3 },
            { name: "Computer Hardware", level: 70, featured: false, endorsements: 3 },
            { name: "CSS", level: 68, featured: false, endorsements: 2 },
            
            // Creative Skills
            { name: "Videography", level: 80, featured: false },
            { name: "Corporate Photography", level: 78, featured: false },
            { name: "Portrait Photography", level: 76, featured: false },
            { name: "Presentation Skills", level: 77, featured: false, endorsements: 1 },
            { name: "Public Speaking", level: 76, featured: false, endorsements: 1 }
        ];
        
        this.randomizeFeaturedSkills();
        this.init();
    }
    
    randomizeFeaturedSkills() {
        // Reset all skills to not featured
        this.skills.forEach(skill => skill.featured = false);
        
        // Randomly select 6 skills to be featured
        const availableSkills = [...this.skills];
        const featuredCount = 6;
        
        for (let i = 0; i < featuredCount && availableSkills.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * availableSkills.length);
            const selectedSkill = availableSkills.splice(randomIndex, 1)[0];
            selectedSkill.featured = true;
        }
    }
    
    async loadSkillsData() {
        try {
            const response = await fetch('data/skills.json');
            const data = await response.json();
            this.skillsData = data.skills;
        } catch (error) {
            console.error('Error loading skills data:', error);
            this.skillsData = {};
        }
    }
    
    init() {
        this.renderSkills();
        this.setupToggle();
        this.createPopupContainer();
    }
    
    createPopupContainer() {
        const popup = document.createElement('div');
        popup.id = 'skill-popup';
        popup.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden';
        popup.innerHTML = `
            <div class="bg-white rounded-2xl p-8 max-w-md mx-4 relative">
                <button id="close-popup" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times text-xl"></i>
                </button>
                <div id="popup-content"></div>
            </div>
        `;
        document.body.appendChild(popup);
        
        // Setup close functionality
        popup.addEventListener('click', (e) => {
            if (e.target === popup) this.closePopup();
        });
        document.getElementById('close-popup').addEventListener('click', () => this.closePopup());
    }
    
    showSkillPopup(skillName) {
        const skillData = this.skillsData[skillName];
        if (!skillData) return;
        
        const popup = document.getElementById('skill-popup');
        const content = document.getElementById('popup-content');
        
        content.innerHTML = `
            <div class="skill-popup-header mb-4">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">${skillName}</h3>
                <div class="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
            <div class="skill-popup-body">
                <p class="text-gray-700 text-lg mb-4">${skillData.description}</p>
                <p class="text-gray-600">${skillData.detail}</p>
            </div>
        `;
        
        popup.classList.remove('hidden');
    }
    
    closePopup() {
        const popup = document.getElementById('skill-popup');
        popup.classList.add('hidden');
    }
    
    renderSkills() {
        if (!this.container) return;
        
        this.container.innerHTML = '';
        this.container.className = 'skills-grid grid grid-cols-2 md:grid-cols-3 gap-3';
        
        this.skills.forEach((skill, index) => {
            const skillElement = document.createElement('div');
            skillElement.className = `skill-item ${skill.featured ? 'featured' : ''}`;
            const certBadge = skill.cert ? `<i class="fas fa-certificate text-warning ml-1 text-xs" title="Certified: ${skill.cert}"></i>` : '';
            const endorsementBadge = skill.endorsements ? `<span class="endorsement-count text-xs text-accent ml-1">${skill.endorsements}</span>` : '';
            skillElement.innerHTML = `
                <div class="skill-text">${skill.name}${certBadge}${endorsementBadge}</div>
                <div class="skill-level" style="width: ${skill.level}%"></div>
            `;
            
            // Add hover effect to show skill level, certification, and endorsements
            const certInfo = skill.cert ? ` | Certified: ${skill.cert}` : '';
            const endorsementInfo = skill.endorsements ? ` | ${skill.endorsements} endorsements` : '';
            skillElement.title = `${skill.name} - ${skill.level}% proficiency${certInfo}${endorsementInfo}`;
            
            // Add click event for popup
            skillElement.addEventListener('click', () => {
                this.showSkillPopup(skill.name);
            });
            
            this.container.appendChild(skillElement);
        });
    }
    
    setupToggle() {
        if (!this.toggle) return;
        
        this.toggle.addEventListener('click', () => {
            this.isExpanded = !this.isExpanded;
            
            if (this.isExpanded) {
                this.container.classList.add('expanded');
                this.toggle.innerHTML = '<i class="fas fa-minus mr-1"></i>Show Less';
            } else {
                this.container.classList.remove('expanded');
                this.toggle.innerHTML = '<i class="fas fa-plus mr-1"></i>View All Skills';
            }
        });
    }
}

// Company Logos Display System
class CompanyLogos {
    constructor() {
        this.container = document.getElementById('companies-scroll');
        
        // Real companies Maurice has worked with
        this.companies = [
            {
                name: "A.R. Sims HVAC",
                logo: "https://www.arsimshvac.com/wp-content/uploads/2020/07/arsims-logo-tr-sa.jpg",
                description: "HVAC Solutions",
                website: "https://www.arsimshvac.com/",
                industry: "Home Services"
            },
            {
                name: "Thrive With Nikita",
                logo: "https://images.squarespace-cdn.com/content/v1/6327f64d5d79322722ccc7da/f8f8a514-7a2b-426b-9112-080c1dde881b/Thrive-With-Nikita-Logo-Alt.png",
                description: "Business Coaching",
                website: "https://www.thrivewithnikita.com/",
                industry: "Professional Services"
            }
        ];
        
        this.init();
    }
    
    init() {
        this.renderCompanies();
    }
    
    renderCompanies() {
        if (!this.container) return;
        
        // Create double set for seamless scrolling
        const allCompanies = [...this.companies, ...this.companies];
        
        this.container.innerHTML = '';
        
        allCompanies.forEach(company => {
            const companyElement = document.createElement('div');
            companyElement.className = 'company-logo-item flex-shrink-0';
            
            const logoContent = company.logo 
                ? `<img src="${company.logo}" alt="${company.name}" class="max-w-full max-h-full">`
                : `<div class="company-info">
                     <div class="company-name">${company.name}</div>
                     <div class="company-description">${company.description}</div>
                   </div>`;
            
            companyElement.innerHTML = `
                <div class="company-logo-container" onclick="window.open('${company.website}', '_blank')">
                    ${logoContent}
                </div>
            `;
            
            this.container.appendChild(companyElement);
        });
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Maurice Rashad Tech Services - Site Loaded');
    console.log('Brand Kit:', BRAND_KIT);
    
    // Initialize Theme Manager
    new ThemeManager();
    
    // Initialize LinkedIn Recommendations Carousel
    new LinkedInRecommendations();
    
    // Initialize Skills Display
    new SkillsDisplay();
    
    // Initialize Company Logos
    new CompanyLogos();
});
