// Apple iPhone Clone - Complete Interactive Functionality
class AppleIPhoneClone {
    constructor() {
        this.currentService = 'tech-chat';
        this.activeSpecTab = 'tech-chat';
        this.isScrolled = false;
        this.init();
    }

    init() {
        this.initNavigation();
        this.initServiceShowcase();
        this.initTechSpecs();
        this.initScrollEffects();
        this.initAppleAnimations();
        this.initFormHandling();
        this.initResponsiveFeatures();
        console.log('🍎 Apple iPhone Clone initialized with full interactivity');
    }

    // Navigation System - Apple Style
    initNavigation() {
        const nav = document.querySelector('.apple-nav');
        
        // Sticky navigation with backdrop blur
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            if (scrollY > 50 && !this.isScrolled) {
                this.isScrolled = true;
                nav.style.background = 'rgba(251, 251, 253, 0.8)';
                nav.style.backdropFilter = 'saturate(180%) blur(20px)';
                nav.style.borderBottom = '0.5px solid rgba(0, 0, 0, 0.18)';
            } else if (scrollY <= 50 && this.isScrolled) {
                this.isScrolled = false;
                nav.style.background = 'rgba(251, 251, 253, 0.8)';
                nav.style.backdropFilter = 'saturate(180%) blur(20px)';
                nav.style.borderBottom = '0.5px solid rgba(0, 0, 0, 0.18)';
            }
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 44; // Account for nav height
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Service Showcase Interactive System
    initServiceShowcase() {
        const serviceDots = document.querySelectorAll('.service-dot');
        const serviceDevices = document.querySelectorAll('.service-device');

        serviceDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const service = dot.dataset.service;
                this.switchService(service);
            });
        });

        // Auto-rotate services every 5 seconds
        setInterval(() => {
            this.autoRotateServices();
        }, 5000);
    }

    switchService(serviceType) {
        this.currentService = serviceType;

        // Update dots
        document.querySelectorAll('.service-dot').forEach(dot => {
            dot.classList.remove('active');
            if (dot.dataset.service === serviceType) {
                dot.classList.add('active');
            }
        });

        // Update devices with smooth transition
        document.querySelectorAll('.service-device').forEach(device => {
            device.classList.remove('active');
            if (device.dataset.service === serviceType) {
                device.classList.add('active');
            }
        });

        // Add bounce animation to active device
        const activeDevice = document.querySelector(`.service-device[data-service="${serviceType}"]`);
        if (activeDevice) {
            activeDevice.style.animation = 'none';
            activeDevice.offsetHeight; // Trigger reflow
            activeDevice.style.animation = 'deviceBounce 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }
    }

    autoRotateServices() {
        const services = ['tech-chat', 'implementation', 'workshops'];
        const currentIndex = services.indexOf(this.currentService);
        const nextIndex = (currentIndex + 1) % services.length;
        this.switchService(services[nextIndex]);
    }

    // Tech Specs Tabbed Interface
    initTechSpecs() {
        const specsTabs = document.querySelectorAll('.specs-tab');
        const specsPanels = document.querySelectorAll('.specs-panel');

        specsTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const service = tab.dataset.service;
                this.switchSpecsTab(service);
            });
        });
    }

    switchSpecsTab(serviceType) {
        this.activeSpecTab = serviceType;

        // Update tabs
        document.querySelectorAll('.specs-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.service === serviceType) {
                tab.classList.add('active');
            }
        });

        // Update panels with fade effect
        document.querySelectorAll('.specs-panel').forEach(panel => {
            panel.classList.remove('active');
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(20px)';
        });

        setTimeout(() => {
            const activePanel = document.querySelector(`.specs-panel[data-service="${serviceType}"]`);
            if (activePanel) {
                activePanel.classList.add('active');
                activePanel.style.opacity = '1';
                activePanel.style.transform = 'translateY(0)';
            }
        }, 150);
    }

    // Apple-Style Scroll Effects
    initScrollEffects() {
        // Parallax effect for hero elements
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const heroVisual = document.querySelector('.hero-visual');
            
            if (heroVisual) {
                const parallaxSpeed = 0.5;
                heroVisual.style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
            }
        });

        // Scroll-triggered animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.service-card, .feature-section, .spec-item').forEach(el => {
            observer.observe(el);
        });
    }

    // Apple-Style Animations and Interactions
    initAppleAnimations() {
        // Service card hover effects
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.25)';
                
                const icon = card.querySelector('.service-icon-display');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotateY(5deg)';
                }
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '';
                
                const icon = card.querySelector('.service-icon-display');
                if (icon) {
                    icon.style.transform = 'scale(1) rotateY(0deg)';
                }
            });
        });

        // Button ripple effect
        document.querySelectorAll('.btn-primary, .btn-secondary, .service-cta, .compare-cta').forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    pointer-events: none;
                    animation: ripple 0.6s linear;
                `;
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Feature section reveals
        document.querySelectorAll('.feature-section').forEach(section => {
            const content = section.querySelector('.feature-content');
            
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        content.style.animation = 'featureSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
                    }
                });
            }, { threshold: 0.3 });
            
            sectionObserver.observe(section);
        });
    }

    // Contact Form Handling
    initFormHandling() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(contactForm);
            });

            // Add focus effects to form elements
            const formInputs = contactForm.querySelectorAll('.form-input, .form-select, .form-textarea');
            formInputs.forEach(input => {
                input.addEventListener('focus', () => {
                    input.parentElement.style.transform = 'translateY(-2px)';
                });
                
                input.addEventListener('blur', () => {
                    input.parentElement.style.transform = 'translateY(0)';
                });
            });
        }
    }

    handleFormSubmission(form) {
        const submitButton = form.querySelector('.form-submit');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitButton.disabled = true;
        
        // Simulate form processing
        setTimeout(() => {
            this.showNotification('🎉 Thank you! We\'ll be in touch soon.', 'success');
            form.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    }

    // Responsive Features
    initResponsiveFeatures() {
        // Mobile menu handling
        const navContainer = document.querySelector('.nav-container');
        
        if (window.innerWidth <= 768) {
            this.initMobileMenu();
        }
        
        // Handle resize events
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                this.initMobileMenu();
            }
        });
    }

    initMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        if (!navLinks || navLinks.querySelector('.mobile-menu-toggle')) return;
        
        // Create mobile menu toggle
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        mobileToggle.style.cssText = `
            display: block;
            background: none;
            border: none;
            color: #000;
            font-size: 18px;
            cursor: pointer;
            padding: 8px;
        `;
        
        const navActions = document.querySelector('.nav-actions');
        navActions.appendChild(mobileToggle);
        
        // Hide nav links on mobile
        navLinks.style.display = 'none';
        
        mobileToggle.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';
            navLinks.style.display = isVisible ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '44px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'rgba(251, 251, 253, 0.95)';
            navLinks.style.backdropFilter = 'blur(20px)';
            navLinks.style.padding = '20px';
            navLinks.style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
        });
    }

    // Notification System
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${type === 'success' ? '#10B981' : '#0EA5E9'};
            color: white;
            padding: 16px 20px;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            max-width: 350px;
            font-size: 15px;
            font-weight: 500;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-${type === 'success' ? 'check' : 'info'}-circle"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }

    // Utility Methods
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 44;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    selectService(serviceType) {
        // Update service selector in contact form
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            serviceSelect.value = serviceType;
        }
        
        // Scroll to contact section
        this.scrollToSection('contact');
        
        // Show notification
        const serviceNames = {
            'tech-chat': 'Tech Chat Elite',
            'implementation': 'Elite Implementation',
            'workshops': 'Master Classes'
        };
        
        this.showNotification(`🎯 Selected ${serviceNames[serviceType]}! Let's get started.`, 'success');
    }

    learnMore(topic) {
        const sections = {
            'ai': 'services',
            'security': 'tech-specs',
            'devops': 'compare'
        };
        
        const targetSection = sections[topic] || 'services';
        this.scrollToSection(targetSection);
    }
}

// Apple-Style CSS Animations
const appleAnimations = `
@keyframes deviceBounce {
    0% { transform: scale(0.9); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@keyframes featureSlideIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes ripple {
    to {
        transform: scale(2);
        opacity: 0;
    }
}

.animate-in {
    animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Smooth transitions for all interactive elements */
.service-device {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.specs-panel {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.feature-content {
    opacity: 0;
    transform: translateY(30px);
}

/* Apple-style focus states */
.form-input:focus,
.form-select:focus,
.form-textarea:focus {
    transform: scale(1.02);
}

/* Enhanced button hover effects */
.btn-primary:hover,
.btn-secondary:hover,
.service-cta:hover,
.compare-cta:hover {
    transform: translateY(-2px) scale(1.02);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .mobile-menu-toggle {
        display: block !important;
    }
    
    .nav-links {
        display: none !important;
    }
}
`;

// Add animations to document
const animationStyles = document.createElement('style');
animationStyles.textContent = appleAnimations;
document.head.appendChild(animationStyles);

// Global functions for onclick handlers
window.selectService = function(serviceType) {
    if (window.appleClone) {
        window.appleClone.selectService(serviceType);
    }
};

window.learnMore = function(topic) {
    if (window.appleClone) {
        window.appleClone.learnMore(topic);
    }
};

window.scrollToContact = function() {
    if (window.appleClone) {
        window.appleClone.scrollToSection('contact');
    }
};

// Initialize Apple iPhone Clone
document.addEventListener('DOMContentLoaded', () => {
    window.appleClone = new AppleIPhoneClone();
});