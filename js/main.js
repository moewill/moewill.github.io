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
    }
    
    async loadRecommendations() {
        // Mock LinkedIn data - In production, this would connect to LinkedIn API
        this.recommendations = [
            {
                name: "Sarah Johnson",
                title: "VP of Technology at InnovateCorp",
                content: "Maurice transformed our entire tech stack with his automation solutions. His expertise in AI and custom development saved us countless hours and significantly improved our operational efficiency.",
                rating: 5,
                linkedin: "https://linkedin.com/in/sarahjohnson"
            },
            {
                name: "David Chen",
                title: "CTO at TechStart Solutions",
                content: "Working with Maurice was exceptional. His strategic guidance helped us navigate complex technical challenges and his implementation skills are top-notch. Highly recommended!",
                rating: 5,
                linkedin: "https://linkedin.com/in/davidchen"
            },
            {
                name: "Emily Rodriguez",
                title: "Operations Director at GrowthCo",
                content: "Maurice's cybersecurity consultation and database management services were game-changing for our company. Professional, knowledgeable, and delivers results.",
                rating: 5,
                linkedin: "https://linkedin.com/in/emilyrodriguez"
            },
            {
                name: "Michael Thompson",
                title: "Founder at StartupLabs",
                content: "From full-stack development to DevOps engineering, Maurice handled everything with expertise. His 'done for you' approach made our digital transformation seamless.",
                rating: 5,
                linkedin: "https://linkedin.com/in/michaelthompson"
            },
            {
                name: "Jennifer Park",
                title: "Product Manager at TechFlow",
                content: "Maurice's AI agents and chatbot implementation exceeded our expectations. His technical guidance sessions are incredibly valuable for strategic planning.",
                rating: 5,
                linkedin: "https://linkedin.com/in/jenniferpark"
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
        const itemsToShow = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
        this.maxIndex = Math.max(0, this.recommendations.length - itemsToShow);
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

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Maurice Rashad Tech Services - Site Loaded');
    console.log('Brand Kit:', BRAND_KIT);
    
    // Initialize Theme Manager
    new ThemeManager();
    
    // Initialize LinkedIn Recommendations Carousel
    new LinkedInRecommendations();
});
