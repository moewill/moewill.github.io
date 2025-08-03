// WOW Effects - Making the site incredibly interactive
class WowEffects {
    constructor() {
        this.particles = [];
        this.sounds = {};
        this.notifications = [];
        this.init();
    }

    init() {
        this.createParticleSystem();
        this.initSoundEffects();
        this.initFloatingButtons();
        this.initTypingAnimation();
        this.initScrollProgress();
        this.initCursorEffects();
        this.initNotificationSystem();
        this.initParallaxEffects();
        this.initThemeToggle();
        this.init3DCardEffects();
        this.initSuccessTicker();
        console.log('🚀 WOW Effects initialized! Site is now AWESOME!');
    }

    // 1. Luxury Background Effects (No Particles)
    createParticleSystem() {
        // Removed particle system for cleaner luxury aesthetic
        console.log('✨ Luxury background initialized - clean and minimal');
    }

    // 2. Sound Effects System
    initSoundEffects() {
        // Create audio context for sound effects
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Sound effect functions
        this.sounds.beep = () => this.playTone(800, 0.1);
        this.sounds.click = () => this.playTone(400, 0.05);
        this.sounds.hover = () => this.playTone(600, 0.03);
        this.sounds.success = () => this.playMelody([523, 659, 784], 0.2);
        this.sounds.notification = () => this.playMelody([784, 659, 523], 0.15);

        // Add sound to buttons
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.classList.contains('cta-button')) {
                this.sounds.click();
            }
        });

        document.addEventListener('mouseover', (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.classList.contains('cta-button')) {
                this.sounds.hover();
            }
        });
    }

    playTone(frequency, duration) {
        if (!this.audioContext) return;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    playMelody(frequencies, noteDuration) {
        frequencies.forEach((freq, index) => {
            setTimeout(() => this.playTone(freq, noteDuration), index * noteDuration * 1000 / 2);
        });
    }

    // 3. Floating Action Buttons
    initFloatingButtons() {
        const fabContainer = document.createElement('div');
        fabContainer.innerHTML = `
            <div id="fab-container" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
                <div class="fab-main" style="
                    width: 60px; height: 60px; border-radius: 50%; 
                    background: linear-gradient(45deg, #0EA5E9, #06B6D4);
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; box-shadow: 0 4px 20px rgba(14, 165, 233, 0.4);
                    transition: all 0.3s ease; color: white; font-size: 24px;
                " onclick="wowEffects.toggleFabMenu()">
                    <i class="fas fa-magic"></i>
                </div>
                <div id="fab-menu" style="
                    position: absolute; bottom: 70px; right: 0;
                    display: none; flex-direction: column; gap: 10px;
                ">
                    <div class="fab-item" onclick="wowEffects.scrollToTop()" style="
                        width: 50px; height: 50px; border-radius: 50%;
                        background: #10B981; display: flex; align-items: center; justify-content: center;
                        cursor: pointer; color: white; box-shadow: 0 2px 10px rgba(16, 185, 129, 0.4);
                        transition: all 0.3s ease;
                    "><i class="fas fa-arrow-up"></i></div>
                    <div class="fab-item" onclick="wowEffects.showRandomNotification()" style="
                        width: 50px; height: 50px; border-radius: 50%;
                        background: #F59E0B; display: flex; align-items: center; justify-content: center;
                        cursor: pointer; color: white; box-shadow: 0 2px 10px rgba(245, 158, 11, 0.4);
                        transition: all 0.3s ease;
                    "><i class="fas fa-bell"></i></div>
                    <div class="fab-item" onclick="wowEffects.toggleTheme()" style="
                        width: 50px; height: 50px; border-radius: 50%;
                        background: #8B5CF6; display: flex; align-items: center; justify-content: center;
                        cursor: pointer; color: white; box-shadow: 0 2px 10px rgba(139, 92, 246, 0.4);
                        transition: all 0.3s ease;
                    "><i class="fas fa-palette"></i></div>
                </div>
            </div>
        `;
        document.body.appendChild(fabContainer);

        // Add hover effects
        document.querySelectorAll('.fab-item, .fab-main').forEach(fab => {
            fab.addEventListener('mouseenter', () => {
                fab.style.transform = 'scale(1.1) rotate(5deg)';
            });
            fab.addEventListener('mouseleave', () => {
                fab.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    }

    toggleFabMenu() {
        const menu = document.getElementById('fab-menu');
        const isVisible = menu.style.display === 'flex';
        menu.style.display = isVisible ? 'none' : 'flex';
        
        if (!isVisible) {
            menu.querySelectorAll('.fab-item').forEach((item, index) => {
                item.style.animation = `fabSlideIn 0.3s ease ${index * 0.1}s both`;
            });
        }
        this.sounds.beep();
    }

    // 4. Animated Skill Progress Bars
    initSkillBars() {
        const skillsData = [
            { name: 'AWS', level: 95 },
            { name: 'JavaScript', level: 90 },
            { name: 'Python', level: 85 },
            { name: 'AI/ML', level: 88 },
            { name: 'Cybersecurity', level: 92 }
        ];

        const skillsContainer = document.getElementById('skills-container');
        if (skillsContainer) {
            skillsContainer.innerHTML = skillsData.map(skill => `
                <div class="skill-item" style="margin-bottom: 15px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="color: white; font-weight: 600;">${skill.name}</span>
                        <span style="color: #06B6D4; font-weight: 600;">${skill.level}%</span>
                    </div>
                    <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; overflow: hidden;">
                        <div class="skill-progress" data-level="${skill.level}" style="
                            height: 100%; background: linear-gradient(90deg, #0EA5E9, #06B6D4);
                            width: 0%; transition: width 2s ease; border-radius: 4px;
                        "></div>
                    </div>
                </div>
            `).join('');

            // Animate on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.querySelectorAll('.skill-progress').forEach(bar => {
                                bar.style.width = bar.dataset.level + '%';
                            });
                        }, 300);
                    }
                });
            });
            observer.observe(skillsContainer);
        }
    }

    // 5. Typing Animation
    initTypingAnimation() {
        const heroTitle = document.querySelector('h1');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            heroTitle.innerHTML = '<span id="typing-text"></span><span class="cursor">|</span>';
            
            const typingElement = document.getElementById('typing-text');
            let i = 0;
            
            const typeWriter = () => {
                if (i < originalText.length) {
                    typingElement.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 1000);
        }
    }

    // 6. Scroll Progress Indicator
    initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed; top: 0; left: 0; width: 0%; height: 4px;
            background: linear-gradient(90deg, #0EA5E9, #06B6D4);
            z-index: 9999; transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // 7. Interactive Cursor Effects (Disabled for Apple-style experience)
    initCursorEffects() {
        // Disabled custom cursor effects for cleaner Apple-style experience
        console.log('✨ Cursor effects disabled for Apple-style clean experience');
    }

    // 8. Notification System
    initNotificationSystem() {
        const container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed; top: 20px; right: 20px; z-index: 10000;
            display: flex; flex-direction: column; gap: 10px; max-width: 350px;
        `;
        document.body.appendChild(container);
    }

    showNotification(message, type = 'info', duration = 4000) {
        const notification = document.createElement('div');
        const colors = {
            success: '#10B981',
            error: '#EF4444',
            warning: '#F59E0B',
            info: '#0EA5E9'
        };

        notification.style.cssText = `
            background: ${colors[type]}; color: white; padding: 15px 20px;
            border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            transform: translateX(100%); transition: all 0.3s ease;
            cursor: pointer; position: relative; overflow: hidden;
        `;
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : type === 'warning' ? 'exclamation' : 'info'}-circle"></i>
                <span>${message}</span>
                <i class="fas fa-times" style="margin-left: auto; cursor: pointer;" onclick="this.parentElement.parentElement.remove()"></i>
            </div>
            <div style="position: absolute; bottom: 0; left: 0; height: 3px; background: rgba(255,255,255,0.3); width: 100%; transform-origin: left; animation: notificationProgress ${duration}ms linear;"></div>
        `;

        document.getElementById('notification-container').appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, duration);

        this.sounds.notification();
    }

    showRandomNotification() {
        const messages = [
            "🚀 Welcome to the future of web design!",
            "✨ You've discovered a hidden feature!",
            "🎉 This site is powered by pure awesomeness!",
            "💡 Pro tip: Try clicking around for more surprises!",
            "🌟 You have excellent taste in websites!",
            "🔥 This is what cutting-edge looks like!",
            "⚡ Feeling the energy? That's intentional!",
            "🎨 Art meets technology right here!"
        ];
        const message = messages[Math.floor(Math.random() * messages.length)];
        this.showNotification(message, 'info');
    }

    // 9. Parallax Scrolling Effects
    initParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-background, .globe-container');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // 10. Theme Toggle with Animation
    initThemeToggle() {
        this.isDark = false;
        
        // Add theme toggle styles
        const style = document.createElement('style');
        style.textContent = `
            .theme-transition * {
                transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease !important;
            }
            .dark-theme {
                filter: invert(1) hue-rotate(180deg);
            }
            .dark-theme img, .dark-theme video, .dark-theme canvas {
                filter: invert(1) hue-rotate(180deg);
            }
        `;
        document.head.appendChild(style);
    }

    toggleTheme() {
        document.body.classList.add('theme-transition');
        this.isDark = !this.isDark;
        
        if (this.isDark) {
            document.body.classList.add('dark-theme');
            this.showNotification('🌙 Dark mode activated!', 'success');
        } else {
            document.body.classList.remove('dark-theme');
            this.showNotification('☀️ Light mode activated!', 'success');
        }
        
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 500);
        
        this.sounds.success();
    }

    // 11. 3D Card Hover Effects
    init3DCardEffects() {
        document.querySelectorAll('.service-card, .project-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            });
        });
    }

    // 12. Success Stories Ticker
    initSuccessTicker() {
        const tickerData = [
            "🚀 Increased efficiency by 40% for NTT Data",
            "⚡ Reduced deployment time by 75%",
            "🎯 Achieved 99% client satisfaction rate",
            "💼 Transformed 50+ businesses",
            "🔒 Implemented zero-breach security",
            "🤖 Built 25+ AI automation systems",
            "☁️ Migrated 100+ applications to cloud",
            "📊 Saved clients $2M+ in operational costs"
        ];

        const ticker = document.createElement('div');
        ticker.style.cssText = `
            position: fixed; bottom: 0; left: 0; width: 100%; height: 40px;
            background: linear-gradient(90deg, #0EA5E9, #06B6D4); color: white;
            display: flex; align-items: center; overflow: hidden; z-index: 1000;
            font-weight: 600; font-size: 14px;
        `;
        
        const tickerContent = document.createElement('div');
        tickerContent.style.cssText = `
            display: flex; animation: ticker 30s linear infinite;
            white-space: nowrap;
        `;
        
        tickerContent.innerHTML = tickerData.map(item => 
            `<span style="margin-right: 50px; display: flex; align-items: center;">${item}</span>`
        ).join('') + tickerData.map(item => 
            `<span style="margin-right: 50px; display: flex; align-items: center;">${item}</span>`
        ).join('');
        
        ticker.appendChild(tickerContent);
        document.body.appendChild(ticker);
    }

    // Utility Functions
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        this.sounds.beep();
        this.showNotification('🚀 Zooming to the top!', 'success');
    }
}

// Add CSS animations
const wowStyles = document.createElement('style');
wowStyles.textContent = `
    @keyframes fabSlideIn {
        from { transform: translateX(50px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes ticker {
        0% { transform: translateX(100vw); }
        100% { transform: translateX(-100%); }
    }
    
    @keyframes notificationProgress {
        from { transform: scaleX(1); }
        to { transform: scaleX(0); }
    }
    
    .cursor {
        animation: blink 1s infinite;
        color: #0EA5E9;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    .service-card, .project-card {
        transition: transform 0.3s ease;
    }
    
    .fab-main:hover {
        transform: scale(1.1) rotate(180deg) !important;
        box-shadow: 0 6px 25px rgba(14, 165, 233, 0.6) !important;
    }
`;
document.head.appendChild(wowStyles);

// Initialize WOW Effects
let wowEffects;
document.addEventListener('DOMContentLoaded', () => {
    wowEffects = new WowEffects();
    
    // Welcome message
    setTimeout(() => {
        wowEffects.showNotification('🎉 Welcome to the most interactive site on the web!', 'success', 6000);
    }, 2000);
    
    // Initialize skill bars when about section is loaded
    setTimeout(() => {
        wowEffects.initSkillBars();
    }, 1000);
});

// Enable audio on first user interaction
document.addEventListener('click', function enableAudio() {
    if (wowEffects && wowEffects.audioContext && wowEffects.audioContext.state === 'suspended') {
        wowEffects.audioContext.resume();
    }
    document.removeEventListener('click', enableAudio);
}, { once: true });