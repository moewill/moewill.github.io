// Apple.com Product Launch Inspired JavaScript
class AppleProductLaunch {
    constructor() {
        this.scrollPosition = 0;
        this.ticking = false;
        this.observers = new Map();
        this.init();
    }

    init() {
        this.initAppleNavigation();
        this.initScrollEffects();
        this.initProductInteractions();
        this.initCounterAnimations();
        this.initFormHandling();
        this.initParallaxEffects();
        this.initAppleAnimations();
        this.initKeyboardShortcuts();
        console.log('🍎 Apple Product Launch effects initialized');
    }

    // Apple Navigation with smooth hide/show
    initAppleNavigation() {
        const nav = document.querySelector('.apple-nav');
        if (!nav) return;

        let lastScrollTop = 0;
        let navVisible = true;

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100 && navVisible) {
                // Scrolling down - hide nav
                nav.style.transform = 'translateY(-100%)';
                navVisible = false;
            } else if (scrollTop < lastScrollTop && !navVisible) {
                // Scrolling up - show nav
                nav.style.transform = 'translateY(0)';
                navVisible = true;
            }
            
            // Add glass effect when scrolled
            if (scrollTop > 50) {
                nav.style.background = 'rgba(29, 29, 31, 0.85)';
                nav.style.backdropFilter = 'saturate(180%) blur(20px)';
            } else {
                nav.style.background = 'rgba(29, 29, 31, 0.72)';
                nav.style.backdropFilter = 'blur(40px)';
            }
            
            lastScrollTop = scrollTop;
        };

        window.addEventListener('scroll', this.throttle(handleScroll, 16));

        // Smooth scroll for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Advanced scroll effects with Apple-style reveals
    initScrollEffects() {
        // Intersection Observer for scroll reveals
        const observerOptions = {
            threshold: [0, 0.1, 0.5, 1],
            rootMargin: '0px 0px -100px 0px'
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    
                    // Staggered animations for child elements
                    const children = entry.target.querySelectorAll('.stagger-child');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.style.opacity = '1';
                            child.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        // Observe all product cards
        document.querySelectorAll('.product-card').forEach(card => {
            revealObserver.observe(card);
        });

        // Observe spec items
        document.querySelectorAll('.spec-item').forEach(item => {
            revealObserver.observe(item);
        });

        // Observe portfolio items  
        document.querySelectorAll('.portfolio-item').forEach(item => {
            revealObserver.observe(item);
        });

        this.observers.set('reveal', revealObserver);
    }

    // Interactive product cards with Apple-style hover effects
    initProductInteractions() {
        document.querySelectorAll('.product-card').forEach(card => {
            const icon = card.querySelector('.product-icon');
            const glow = card.querySelector('.product-glow');
            
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-12px) rotateX(2deg)';
                card.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.25)';
                
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotateY(15deg)';
                }
                
                if (glow) {
                    glow.style.opacity = '0.2';
                    glow.style.transform = 'translate(-50%, -50%) scale(1.2)';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = card.classList.contains('featured') ? 'translateY(-4px)' : 'translateY(0)';
                card.style.boxShadow = '';
                
                if (icon) {
                    icon.style.transform = 'scale(1) rotateY(0deg)';
                }
                
                if (glow) {
                    glow.style.opacity = '0.1';
                    glow.style.transform = 'translate(-50%, -50%) scale(1)';
                }
            });

            // Apple-style ripple effect on click
            card.addEventListener('click', (e) => {
                this.createRippleEffect(e, card);
            });
        });
    }

    // Apple-style ripple effect
    createRippleEffect(event, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(0, 113, 227, 0.3);
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            z-index: 1000;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Counter animations with Apple-style easing
    initCounterAnimations() {
        const counters = document.querySelectorAll('.metric-number');
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.8 });
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
        
        this.observers.set('counter', counterObserver);
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.count) || 0;
        const duration = 2500;
        const start = performance.now();
        const suffix = element.nextElementSibling?.textContent || '';
        
        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Apple-style easing function
            const easeOut = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(target * easeOut);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Add suffix animation
                if (suffix) {
                    element.nextElementSibling.style.opacity = '1';
                    element.nextElementSibling.style.transform = 'translateX(0)';
                }
            }
        };
        
        requestAnimationFrame(animate);
    }

    // Advanced form handling with Apple-style interactions
    initFormHandling() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        // Enhanced input focus effects
        const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
        inputs.forEach(input => {
            const label = input.previousElementSibling;
            
            input.addEventListener('focus', () => {
                input.style.transform = 'translateY(-2px)';
                input.style.boxShadow = '0 8px 24px rgba(0, 113, 227, 0.15)';
                
                if (label) {
                    label.style.color = '#0071E3';
                    label.style.transform = 'translateY(-2px)';
                }
            });
            
            input.addEventListener('blur', () => {
                input.style.transform = 'translateY(0)';
                input.style.boxShadow = '';
                
                if (label && !input.value) {
                    label.style.color = '';
                    label.style.transform = 'translateY(0)';
                }
            });

            // Real-time validation
            input.addEventListener('input', () => {
                this.validateField(input);
            });
        });

        // Form submission with Apple-style feedback
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(form);
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        
        switch(field.type) {
            case 'email':
                isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                break;
            case 'text':
                isValid = value.length >= 2;
                break;
            default:
                isValid = value.length > 0;
        }
        
        if (isValid) {
            field.style.borderColor = '#34C759';
            field.style.boxShadow = '0 0 0 4px rgba(52, 199, 89, 0.1)';
        } else if (value.length > 0) {
            field.style.borderColor = '#FF3B30';
            field.style.boxShadow = '0 0 0 4px rgba(255, 59, 48, 0.1)';
        } else {
            field.style.borderColor = '';
            field.style.boxShadow = '';
        }
        
        return isValid;
    }

    async handleFormSubmission(form) {
        const submitBtn = form.querySelector('.form-submit');
        const originalContent = submitBtn.innerHTML;
        
        // Apple-style loading state
        submitBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="31.416" stroke-dashoffset="31.416">
                    <animate attributeName="stroke-dashoffset" dur="2s" values="31.416;0;31.416" repeatCount="indefinite"/>
                </circle>
            </svg>
            <span>Sending...</span>
        `;
        submitBtn.disabled = true;
        submitBtn.style.background = '#86BFEC';
        
        // Simulate form submission
        try {
            await this.delay(2500);
            
            // Success state
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Message Sent!</span>
            `;
            submitBtn.style.background = '#34C759';
            
            // Show success notification
            this.showNotification('✨ Message sent successfully! We\'ll be in touch within 24 hours.', 'success');
            
            // Reset form after delay
            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = originalContent;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                
                // Reset field styles
                form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(field => {
                    field.style.borderColor = '';
                    field.style.boxShadow = '';
                });
            }, 3000);
            
        } catch (error) {
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            this.showNotification('❌ Failed to send message. Please try again.', 'error');
        }
    }

    // Parallax effects for hero background
    initParallaxEffects() {
        const orbs = document.querySelectorAll('.gradient-orb');
        
        const handleParallax = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.2;
            
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.1;
                orb.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        };
        
        window.addEventListener('scroll', this.throttle(handleParallax, 16));
    }

    // Apple-style micro-animations
    initAppleAnimations() {
        // Button hover effects
        document.querySelectorAll('.btn-primary, .btn-secondary, .product-cta').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px) scale(1.02)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Icon hover effects
        document.querySelectorAll('.spec-icon, .info-icon').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.1) rotateY(10deg)';
                icon.style.boxShadow = '0 10px 25px rgba(0, 113, 227, 0.3)';
            });
            
            icon.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) rotateY(0deg)';
                icon.style.boxShadow = '';
            });
        });

        // Portfolio item parallax hover
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            });
        });
    }

    // Keyboard shortcuts (Apple-style)
    initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Cmd/Ctrl + K to focus search (if implemented)
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                // Focus contact form or search
                const firstInput = document.querySelector('.form-input');
                if (firstInput) firstInput.focus();
            }
            
            // Escape to close any modals or reset states
            if (e.key === 'Escape') {
                document.querySelectorAll('.product-card').forEach(card => {
                    card.style.transform = card.classList.contains('featured') ? 'translateY(-4px)' : 'translateY(0)';
                });
            }
        });
    }

    // Utility: Show Apple-style notifications
    showNotification(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `apple-notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                ${message}
            </div>
            <button class="notification-close" onclick="this.parentElement.remove()">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        `;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 24px;
            background: ${type === 'success' ? '#34C759' : type === 'error' ? '#FF3B30' : '#0071E3'};
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 12px;
            max-width: 400px;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
            font-size: 15px;
            font-weight: 500;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        requestAnimationFrame(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        });
        
        // Auto remove
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }

    // Utility: Throttle function for performance
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

    // Utility: Delay function
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Cleanup observers
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
    }
}

// Initialize Apple Product Launch effects
let appleProductLaunch;
document.addEventListener('DOMContentLoaded', () => {
    appleProductLaunch = new AppleProductLaunch();
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .apple-notification .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 4px;
        border-radius: 6px;
        opacity: 0.8;
        transition: opacity 0.2s ease;
    }
    
    .apple-notification .notification-close:hover {
        opacity: 1;
        background: rgba(255, 255, 255, 0.1);
    }
`;
document.head.appendChild(style);