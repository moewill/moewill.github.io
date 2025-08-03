// Easter Eggs and Secret Features
class EasterEggs {
    constructor() {
        this.konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A
        this.userInput = [];
        this.secretsUnlocked = 0;
        this.init();
    }

    init() {
        this.initKonamiCode();
        this.initClickCounter();
        this.initSecretMessages();
        this.initMatrixEffect();
        this.initRainbowMode();
        console.log('🥚 Easter eggs loaded! Can you find them all?');
    }

    // Konami Code
    initKonamiCode() {
        document.addEventListener('keydown', (e) => {
            this.userInput.push(e.keyCode);
            if (this.userInput.length > this.konamiCode.length) {
                this.userInput.shift();
            }
            
            if (JSON.stringify(this.userInput) === JSON.stringify(this.konamiCode)) {
                this.activateGodMode();
                this.userInput = [];
            }
        });
    }

    activateGodMode() {
        document.body.style.animation = 'rainbow 2s infinite, pulse 1s infinite';
        wowEffects.showNotification('🎮 KONAMI CODE ACTIVATED! GOD MODE ON!', 'success', 8000);
        wowEffects.sounds.success();
        
        // Add rainbow background
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 10000);
        
        this.secretsUnlocked++;
    }

    // Click Counter Easter Egg
    initClickCounter() {
        let clicks = 0;
        const logo = document.querySelector('.gradient-text');
        
        if (logo) {
            logo.addEventListener('click', (e) => {
                e.preventDefault();
                clicks++;
                
                if (clicks === 10) {
                    this.activateMatrixMode();
                } else if (clicks === 5) {
                    wowEffects.showNotification(`🖱️ ${clicks} clicks! Keep going...`, 'info');
                } else if (clicks > 10 && clicks % 10 === 0) {
                    wowEffects.showNotification(`🤯 ${clicks} clicks! You're persistent!`, 'warning');
                }
            });
        }
    }

    // Secret Messages
    initSecretMessages() {
        const secretTriggers = [
            { element: 'footer', clicks: 3, message: '🦶 You found the footer secret!', action: () => this.activateFloatingElements() },
            { selector: '.hero-background', clicks: 7, message: '🌟 Hero background unlocked!', action: () => this.activateStarField() },
            { text: 'maurice', message: '👨‍💻 You know my name!', action: () => this.activateNameEffect() }
        ];

        secretTriggers.forEach(trigger => {
            if (trigger.element) {
                const el = document.querySelector(trigger.element);
                if (el) {
                    let clickCount = 0;
                    el.addEventListener('click', () => {
                        clickCount++;
                        if (clickCount === trigger.clicks) {
                            wowEffects.showNotification(trigger.message, 'success');
                            trigger.action();
                            this.secretsUnlocked++;
                        }
                    });
                }
            }
        });

        // Listen for typing "maurice"
        let typedText = '';
        document.addEventListener('keypress', (e) => {
            typedText += e.key.toLowerCase();
            if (typedText.length > 7) typedText = typedText.slice(-7);
            
            if (typedText.includes('maurice')) {
                wowEffects.showNotification('👨‍💻 You typed my name! Here\'s a surprise!', 'success');
                this.activateNameEffect();
                typedText = '';
            }
        });
    }

    // Matrix Effect
    initMatrixEffect() {
        this.matrixCanvas = null;
    }

    activateMatrixMode() {
        if (this.matrixCanvas) return;
        
        this.matrixCanvas = document.createElement('canvas');
        this.matrixCanvas.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            pointer-events: none; z-index: 10000; opacity: 0.3;
        `;
        document.body.appendChild(this.matrixCanvas);

        const ctx = this.matrixCanvas.getContext('2d');
        this.matrixCanvas.width = window.innerWidth;
        this.matrixCanvas.height = window.innerHeight;

        const matrix = "MAURICERASHAD0123456789@#$%^&*()";
        const drops = [];
        const fontSize = 14;
        const columns = this.matrixCanvas.width / fontSize;

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, this.matrixCanvas.width, this.matrixCanvas.height);

            ctx.fillStyle = '#0EA5E9';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > this.matrixCanvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const matrixInterval = setInterval(draw, 35);
        
        wowEffects.showNotification('🔢 MATRIX MODE ACTIVATED!', 'success');
        
        setTimeout(() => {
            clearInterval(matrixInterval);
            if (this.matrixCanvas) {
                this.matrixCanvas.remove();
                this.matrixCanvas = null;
            }
        }, 15000);
        
        this.secretsUnlocked++;
    }

    // Rainbow Mode
    initRainbowMode() {
        this.rainbowActive = false;
    }

    activateRainbowMode() {
        if (this.rainbowActive) return;
        this.rainbowActive = true;
        
        const style = document.createElement('style');
        style.id = 'rainbow-style';
        style.textContent = `
            @keyframes rainbowText {
                0% { color: #ff0000; }
                16.66% { color: #ff8000; }
                33.33% { color: #ffff00; }
                50% { color: #00ff00; }
                66.66% { color: #0080ff; }
                83.33% { color: #8000ff; }
                100% { color: #ff0000; }
            }
            .rainbow-text * {
                animation: rainbowText 3s infinite !important;
            }
        `;
        document.head.appendChild(style);
        
        document.body.classList.add('rainbow-text');
        wowEffects.showNotification('🌈 RAINBOW MODE ACTIVATED!', 'success');
        
        setTimeout(() => {
            document.body.classList.remove('rainbow-text');
            document.getElementById('rainbow-style')?.remove();
            this.rainbowActive = false;
        }, 10000);
    }

    // Floating Elements
    activateFloatingElements() {
        const elements = ['🚀', '⭐', '💎', '🔥', '⚡', '🎯', '💫', '🌟'];
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const floater = document.createElement('div');
                floater.textContent = elements[Math.floor(Math.random() * elements.length)];
                floater.style.cssText = `
                    position: fixed; font-size: 30px; pointer-events: none;
                    z-index: 10000; animation: float 4s ease-out forwards;
                    left: ${Math.random() * window.innerWidth}px;
                    top: ${window.innerHeight}px;
                `;
                document.body.appendChild(floater);
                
                setTimeout(() => floater.remove(), 4000);
            }, i * 200);
        }
        
        const floatStyle = document.createElement('style');
        floatStyle.textContent = `
            @keyframes float {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(-${window.innerHeight + 100}px) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(floatStyle);
        setTimeout(() => floatStyle.remove(), 5000);
    }

    // Star Field
    activateStarField() {
        const starField = document.createElement('div');
        starField.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            pointer-events: none; z-index: 1; overflow: hidden;
        `;
        
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.style.cssText = `
                position: absolute; width: 2px; height: 2px; background: white;
                border-radius: 50%; animation: twinkle 2s infinite, moveStars 20s linear infinite;
                left: ${Math.random() * 100}vw; top: ${Math.random() * 100}vh;
                animation-delay: ${Math.random() * 2}s;
            `;
            starField.appendChild(star);
        }
        
        document.body.appendChild(starField);
        
        const starStyle = document.createElement('style');
        starStyle.textContent = `
            @keyframes twinkle {
                0%, 100% { opacity: 0.3; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.5); }
            }
            @keyframes moveStars {
                0% { transform: translateY(0); }
                100% { transform: translateY(-100vh); }
            }
        `;
        document.head.appendChild(starStyle);
        
        setTimeout(() => {
            starField.remove();
            starStyle.remove();
        }, 15000);
    }

    // Name Effect
    activateNameEffect() {
        document.querySelectorAll('.gradient-text').forEach(el => {
            el.style.animation = 'bounce 2s infinite, glow 2s infinite alternate';
        });
        
        const glowStyle = document.createElement('style');
        glowStyle.textContent = `
            @keyframes glow {
                0% { text-shadow: 0 0 5px #0EA5E9, 0 0 10px #0EA5E9, 0 0 15px #0EA5E9; }
                100% { text-shadow: 0 0 10px #06B6D4, 0 0 20px #06B6D4, 0 0 30px #06B6D4; }
            }
        `;
        document.head.appendChild(glowStyle);
        
        setTimeout(() => {
            document.querySelectorAll('.gradient-text').forEach(el => {
                el.style.animation = '';
            });
            glowStyle.remove();
        }, 5000);
    }

    // Check if user found all secrets
    checkAllSecretsFound() {
        if (this.secretsUnlocked >= 5) {
            wowEffects.showNotification('🏆 MASTER EXPLORER! You found all the secrets!', 'success', 10000);
            this.activateVictoryMode();
        }
    }

    activateVictoryMode() {
        // Combination of all effects for 30 seconds
        this.activateRainbowMode();
        setTimeout(() => this.activateFloatingElements(), 2000);
        setTimeout(() => this.activateStarField(), 4000);
        setTimeout(() => this.activateMatrixMode(), 6000);
        
        // Victory sound sequence
        setTimeout(() => wowEffects.sounds.success(), 0);
        setTimeout(() => wowEffects.sounds.success(), 500);
        setTimeout(() => wowEffects.sounds.success(), 1000);
    }
}

// Initialize Easter Eggs
let easterEggs;
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        easterEggs = new EasterEggs();
    }, 2000);
});