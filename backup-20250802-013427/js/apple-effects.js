// Apple-Inspired Smooth Effects and Interactions
class AppleEffects {
    constructor() {
        this.scrollPosition = 0;
        this.ticking = false;
        this.init();
    }

    init() {
        this.initSmoothScrolling();
        this.initScrollReveal();
        this.initParallaxEffects();
        this.initNavbarBehavior();
        this.initSmoothTransitions();
        this.initProductShowcase();
        this.initAppleAnimations();
        console.log('🍎 Apple effects initialized - sleek and smooth!');
    }

    // Smooth scrolling with momentum
    initSmoothScrolling() {
        // Enhanced smooth scrolling for Apple-like experience
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 60;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Apple-style scroll reveal animations
    initScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    
                    // Add staggered animation for child elements
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

        // Observe all reveal elements
        document.querySelectorAll('.apple-reveal').forEach(el => {
            observer.observe(el);
        });

        // Set up staggered children
        document.querySelectorAll('.stagger-parent').forEach(parent => {
            const children = parent.children;
            Array.from(children).forEach((child, index) => {
                child.classList.add('stagger-child');
                child.style.opacity = '0';
                child.style.transform = 'translateY(30px)';
                child.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;
            });
        });
    }

    // Subtle parallax effects like Apple
    initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.apple-parallax');
        
        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * -0.3;
                element.style.transform = `translateY(${rate}px)`;
            });
        };

        window.addEventListener('scroll', () => {
            if (!this.ticking) {
                requestAnimationFrame(() => {
                    updateParallax();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        });
    }

    // Apple-style navbar behavior
    initNavbarBehavior() {
        let lastScrollTop = 0;
        const navbar = document.querySelector('.apple-nav');
        
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }
            
            // Add background blur when scrolled
            if (scrollTop > 50) {
                navbar.style.background = 'rgba(251, 251, 253, 0.8)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(251, 251, 253, 0.8)';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Smooth transitions between sections
    initSmoothTransitions() {
        // Add smooth transitions for all interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .apple-card, .apple-btn');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transition = 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
        });

        // Add ripple effect for buttons (Apple-style)
        document.querySelectorAll('.apple-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    animation: apple-ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes apple-ripple {
                from {
                    transform: scale(0);
                    opacity: 1;
                }
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Product showcase effects
    initProductShowcase() {
        const showcaseElements = document.querySelectorAll('.apple-showcase');
        
        showcaseElements.forEach(element => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add dynamic background effect
                        this.animateShowcaseBackground(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(element);
        });
    }

    animateShowcaseBackground(element) {
        const bg = element.querySelector('.apple-showcase-bg');
        if (bg) {
            bg.style.animation = 'apple-bg-glow 4s ease-in-out infinite alternate';
        }
        
        // Add glow animation
        const glowStyle = document.createElement('style');
        glowStyle.textContent = `
            @keyframes apple-bg-glow {
                0% {
                    opacity: 0.8;
                    transform: scale(1);
                }
                100% {
                    opacity: 1;
                    transform: scale(1.05);
                }
            }
        `;
        document.head.appendChild(glowStyle);
    }

    // Apple-style micro-animations
    initAppleAnimations() {
        // Hover effects for cards
        document.querySelectorAll('.apple-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12)';
            });
        });

        // Feature icon animations
        document.querySelectorAll('.apple-feature-icon').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.1) rotateY(10deg)';
                icon.style.boxShadow = '0 10px 25px rgba(0, 122, 255, 0.3)';
            });
            
            icon.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) rotateY(0deg)';
                icon.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.15)';
            });
        });

        // Text reveal animations
        this.initTextReveal();
        
        // Counter animations
        this.initCounterAnimations();
    }

    // Apple-style text reveal
    initTextReveal() {
        const textElements = document.querySelectorAll('.apple-text-reveal');
        
        textElements.forEach(element => {
            const text = element.textContent;
            element.innerHTML = '';
            
            // Split text into spans
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.opacity = '0';
                span.style.transform = 'translateY(20px)';
                span.style.transition = `all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.02}s`;
                element.appendChild(span);
            });
            
            // Reveal on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const spans = entry.target.querySelectorAll('span');
                        spans.forEach(span => {
                            span.style.opacity = '1';
                            span.style.transform = 'translateY(0)';
                        });
                    }
                });
            }, { threshold: 0.8 });
            
            observer.observe(element);
        });
    }

    // Counter animations for stats
    initCounterAnimations() {
        const counters = document.querySelectorAll('.apple-counter');
        
        counters.forEach(counter => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounter(entry.target);
                    }
                });
            }, { threshold: 0.8 });
            
            observer.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.target) || 0;
        const duration = 2000;
        const start = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * easeOut);
            
            element.textContent = current + (element.dataset.suffix || '');
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    // Apple-style form interactions
    initFormEffects() {
        document.querySelectorAll('.apple-input').forEach(input => {
            const label = input.previousElementSibling;
            
            input.addEventListener('focus', () => {
                if (label) {
                    label.style.transform = 'translateY(-20px) scale(0.8)';
                    label.style.color = 'var(--apple-blue)';
                }
            });
            
            input.addEventListener('blur', () => {
                if (label && !input.value) {
                    label.style.transform = 'translateY(0) scale(1)';
                    label.style.color = 'var(--apple-gray-5)';
                }
            });
        });
    }

    // Apple-style loading states
    showLoadingState(element, text = 'Loading...') {
        const originalContent = element.innerHTML;
        element.innerHTML = `
            <span style="display: flex; align-items: center; gap: 8px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="32" stroke-dashoffset="32">
                        <animate attributeName="stroke-dashoffset" dur="1s" values="32;0;32" repeatCount="indefinite"/>
                    </circle>
                </svg>
                ${text}
            </span>
        `;
        
        return () => {
            element.innerHTML = originalContent;
        };
    }

    // Utility: Add Apple-style focus ring
    addFocusRing(element) {
        element.addEventListener('focus', () => {
            element.style.boxShadow = '0 0 0 4px rgba(0, 122, 255, 0.1)';
        });
        
        element.addEventListener('blur', () => {
            element.style.boxShadow = 'none';
        });
    }
}

// Initialize Apple effects
let appleEffects;
document.addEventListener('DOMContentLoaded', () => {
    appleEffects = new AppleEffects();
});