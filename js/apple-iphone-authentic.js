// Apple iPhone Authentic JavaScript - True Apple Experience
class AppleIPhoneExperience {
    constructor() {
        this.scrollY = 0;
        this.ticking = false;
        this.init();
    }

    init() {
        this.initNavigation();
        this.initParallaxEffects();
        this.initSmoothScrolling();
        this.initFormHandling();
        this.initDeviceAnimations();
        this.initIntersectionObserver();
        this.initLoadingScreen();
        console.log('🍎 Apple iPhone Experience initialized');
    }

    // Apple-style Navigation with Scroll Effects
    initNavigation() {
        const globalnav = document.getElementById('globalnav');
        let lastScrollY = 0;

        window.addEventListener('scroll', () => {
            if (!this.ticking) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    
                    // Navigation backdrop blur effect
                    if (currentScrollY > 50) {
                        globalnav.style.background = 'rgba(251, 251, 253, 0.8)';
                        globalnav.style.backdropFilter = 'saturate(180%) blur(20px)';
                    } else {
                        globalnav.style.background = 'rgba(251, 251, 253, 0.8)';
                        globalnav.style.backdropFilter = 'saturate(180%) blur(20px)';
                    }

                    lastScrollY = currentScrollY;
                    this.ticking = false;
                });
                this.ticking = true;
            }
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('.globalnav-link a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId.startsWith('#')) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const offsetTop = targetElement.offsetTop - 44; // Account for nav height
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                } else {
                    window.location.href = targetId;
                }
            });
        });
    }

    // Apple-style Parallax Effects
    initParallaxEffects() {
        window.addEventListener('scroll', () => {
            if (!this.ticking) {
                requestAnimationFrame(() => {
                    this.updateParallax();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        });
    }

    updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        // Hero device lineup parallax
        const deviceLineup = document.querySelector('.device-lineup');
        if (deviceLineup) {
            deviceLineup.style.transform = `translateY(${rate * 0.3}px)`;
        }

        // Feature sections parallax
        document.querySelectorAll('.feature-visual').forEach((visual, index) => {
            const rect = visual.getBoundingClientRect();
            const speed = 0.2 + (index * 0.1);
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                visual.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });
    }

    // Smooth Scrolling Enhancements
    initSmoothScrolling() {
        // Add smooth scroll to all internal links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 44;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Device Animations - Apple iPhone Style
    initDeviceAnimations() {
        // Device hover effects
        document.querySelectorAll('.device-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) rotateY(5deg)';
                card.querySelector('.device-screen').style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) rotateY(0deg)';
                card.querySelector('.device-screen').style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
            });
        });

        // Model card interactions
        document.querySelectorAll('.model-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                if (!card.classList.contains('model-pro')) {
                    card.style.transform = 'translateY(-8px) scale(1.02)';
                    card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                }
            });

            card.addEventListener('mouseleave', () => {
                if (!card.classList.contains('model-pro')) {
                    card.style.transform = 'translateY(0) scale(1)';
                    card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                }
            });
        });

        // Button ripple effects
        document.querySelectorAll('.button-primary, .button-secondary, .button-outline, .button-filled').forEach(button => {
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
                    z-index: 10;
                `;
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // Intersection Observer for Scroll Animations
    initIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Special animations for different elements
                    if (entry.target.classList.contains('model-card')) {
                        const index = Array.from(entry.target.parentChildren).indexOf(entry.target);
                        entry.target.style.animationDelay = `${index * 0.1}s`;
                    }
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.model-card, .feature-text, .feature-visual').forEach(el => {
            observer.observe(el);
        });

        // Add CSS for animations
        this.addScrollAnimationCSS();
    }

    addScrollAnimationCSS() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
            
            .model-card, .feature-text, .feature-visual {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            
            .device-card {
                transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            .device-screen {
                transition: box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
        `;
        document.head.appendChild(style);
    }

    // Form Handling - Apple Style
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
                    input.style.transform = 'scale(1.02)';
                    input.style.boxShadow = '0 0 0 4px rgba(0, 113, 227, 0.1)';
                });
                
                input.addEventListener('blur', () => {
                    input.style.transform = 'scale(1)';
                });
            });
        }
    }

    handleFormSubmission(form) {
        const submitButton = form.querySelector('.form-submit');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<span>Processing...</span><div style="width: 16px; height: 16px; border: 2px solid #fff; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>';
        submitButton.disabled = true;
        
        // Add spinner animation
        const spinnerStyle = document.createElement('style');
        spinnerStyle.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(spinnerStyle);
        
        // Simulate form processing
        setTimeout(() => {
            this.showNotification('Thank you! We\'ll be in touch soon.', 'success');
            form.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            spinnerStyle.remove();
        }, 2000);
    }

    // Apple-style Notifications
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 70px;
            right: 20px;
            background: ${type === 'success' ? '#30d158' : '#007aff'};
            color: #fff;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            max-width: 350px;
            font-size: 15px;
            font-weight: 500;
            backdrop-filter: blur(20px);
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
                <div style="font-size: 18px;">${type === 'success' ? '✅' : 'ℹ️'}</div>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 400);
        }, 4000);
    }

    // Loading Screen Management
    initLoadingScreen() {
        // The loading screen is handled in the main HTML script
        // This method can be used for additional loading screen features
    }

    // Utility Methods
    selectService(serviceType) {
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            serviceSelect.value = serviceType;
        }
        
        // Scroll to contact section
        this.scrollToSection('contact');
        
        // Show notification
        const serviceNames = {
            'implementation': 'Elite Implementation',
            'tech-chat': 'Tech Chat Elite',
            'workshops': 'Master Classes',
            'consulting': 'Consulting Plus'
        };
        
        this.showNotification(`Selected ${serviceNames[serviceType]}! Let's get started.`, 'success');
    }

    learnMore(topic) {
        const sections = {
            'ai': '#ai',
            'security': '#security',
            'devops': '#devops',
            'aws': '#devops',
            'kubernetes': '#devops',
            'terraform': '#devops'
        };
        
        const targetSection = sections[topic] || '#services';
        this.scrollToSection(targetSection.substring(1));
    }

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

    // Preload critical resources
    preloadResources() {
        // Preload images that will be used
        const preloadImages = [
            // Add any critical images here
        ];

        preloadImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    // Performance optimization
    debounce(func, wait) {
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

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
}

// Global functions for onclick handlers
window.selectService = function(serviceType) {
    if (window.appleExperience) {
        window.appleExperience.selectService(serviceType);
    }
};

window.learnMore = function(topic) {
    if (window.appleExperience) {
        window.appleExperience.learnMore(topic);
    }
};

// Initialize Apple iPhone Experience
document.addEventListener('DOMContentLoaded', () => {
    window.appleExperience = new AppleIPhoneExperience();
    
    // Add initial animations
    setTimeout(() => {
        document.querySelectorAll('.hero-content > *').forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.animation = `fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s forwards`;
        });
    }, 3500); // After loading screen
});

// Add CSS for initial animations
const initialAnimationsCSS = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero-content > * {
    opacity: 0;
}
`;

const animationStyle = document.createElement('style');
animationStyle.textContent = initialAnimationsCSS;
document.head.appendChild(animationStyle);

// Preload critical fonts
const fontPreload = document.createElement('link');
fontPreload.rel = 'preload';
fontPreload.href = 'https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap';
fontPreload.as = 'style';
fontPreload.onload = function() { this.onload = null; this.rel = 'stylesheet'; };
document.head.appendChild(fontPreload);