// Additional Interactive Elements
class InteractiveElements {
    constructor() {
        this.init();
    }

    init() {
        this.addShakeAnimation();
        this.addMagneticButtons();
        this.addGlitchEffect();
        this.addFireworks();
        this.addBubbleEffect();
        this.addTextScramble();
        this.addPulseOnScroll();
        this.addConfettiExplosion();
        console.log('🎮 Interactive elements loaded!');
    }

    // Shake animation for attention
    addShakeAnimation() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
                20%, 40%, 60%, 80% { transform: translateX(2px); }
            }
            .shake-me {
                animation: shake 0.5s ease-in-out;
            }
        `;
        document.head.appendChild(style);

        // Shake important elements occasionally
        setInterval(() => {
            const ctaButtons = document.querySelectorAll('.cta-button');
            if (ctaButtons.length > 0 && Math.random() < 0.1) {
                const randomButton = ctaButtons[Math.floor(Math.random() * ctaButtons.length)];
                randomButton.classList.add('shake-me');
                setTimeout(() => randomButton.classList.remove('shake-me'), 500);
            }
        }, 10000);
    }

    // Magnetic button effect
    addMagneticButtons() {
        document.querySelectorAll('button, .cta-button, a[href="#contact"]').forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const distance = Math.sqrt(x * x + y * y);
                const maxDistance = 100;
                
                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    const moveX = x * force * 0.3;
                    const moveY = y * force * 0.3;
                    
                    button.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.1})`;
                }
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = '';
            });
        });
    }

    // Glitch effect for dramatic moments
    addGlitchEffect() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes glitch {
                0% { transform: translate(0); }
                20% { transform: translate(-2px, 2px); }
                40% { transform: translate(-2px, -2px); }
                60% { transform: translate(2px, 2px); }
                80% { transform: translate(2px, -2px); }
                100% { transform: translate(0); }
            }
            @keyframes glitch-color {
                0% { filter: hue-rotate(0deg); }
                20% { filter: hue-rotate(90deg); }
                40% { filter: hue-rotate(180deg); }
                60% { filter: hue-rotate(270deg); }
                80% { filter: hue-rotate(360deg); }
                100% { filter: hue-rotate(0deg); }
            }
            .glitch-effect {
                animation: glitch 0.3s ease-in-out, glitch-color 0.3s ease-in-out;
            }
        `;
        document.head.appendChild(style);

        // Trigger glitch effect on certain actions
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('cta-button') && Math.random() < 0.3) {
                e.target.classList.add('glitch-effect');
                setTimeout(() => e.target.classList.remove('glitch-effect'), 300);
            }
        });
    }

    // Fireworks effect
    addFireworks() {
        window.createFireworks = (x, y) => {
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
            
            for (let i = 0; i < 15; i++) {
                const spark = document.createElement('div');
                spark.style.cssText = `
                    position: fixed; width: 4px; height: 4px; border-radius: 50%;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    pointer-events: none; z-index: 10000;
                    left: ${x}px; top: ${y}px;
                `;
                
                const angle = (Math.PI * 2 * i) / 15;
                const velocity = 100 + Math.random() * 100;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                
                document.body.appendChild(spark);
                
                let posX = x, posY = y;
                let opacity = 1;
                
                const animate = () => {
                    posX += vx * 0.02;
                    posY += vy * 0.02;
                    opacity -= 0.02;
                    
                    spark.style.left = posX + 'px';
                    spark.style.top = posY + 'px';
                    spark.style.opacity = opacity;
                    
                    if (opacity > 0) {
                        requestAnimationFrame(animate);
                    } else {
                        spark.remove();
                    }
                };
                
                requestAnimationFrame(animate);
            }
        };
    }

    // Bubble effect
    addBubbleEffect() {
        window.createBubbles = () => {
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const bubble = document.createElement('div');
                    bubble.style.cssText = `
                        position: fixed; width: ${10 + Math.random() * 20}px; 
                        height: ${10 + Math.random() * 20}px; border-radius: 50%;
                        background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(14,165,233,0.4));
                        border: 1px solid rgba(255,255,255,0.3); pointer-events: none;
                        z-index: 10000; animation: bubble 4s ease-out forwards;
                        left: ${Math.random() * window.innerWidth}px;
                        top: ${window.innerHeight + 50}px;
                    `;
                    document.body.appendChild(bubble);
                    setTimeout(() => bubble.remove(), 4000);
                }, i * 100);
            }
        };

        const bubbleStyle = document.createElement('style');
        bubbleStyle.textContent = `
            @keyframes bubble {
                0% { transform: translateY(0) scale(0); opacity: 0; }
                10% { transform: translateY(-50px) scale(1); opacity: 1; }
                100% { transform: translateY(-${window.innerHeight + 100}px) scale(0.5); opacity: 0; }
            }
        `;
        document.head.appendChild(bubbleStyle);

        // Create bubbles on hover over certain elements
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                if (Math.random() < 0.5) window.createBubbles();
            });
        });
    }

    // Text scramble effect
    addTextScramble() {
        window.scrambleText = (element, finalText, duration = 2000) => {
            const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
            const originalText = element.textContent;
            let currentText = originalText;
            const steps = 20;
            const stepDuration = duration / steps;
            
            let step = 0;
            const interval = setInterval(() => {
                if (step < steps / 2) {
                    // Scramble phase
                    currentText = currentText.split('').map((char, i) => {
                        if (char === ' ') return ' ';
                        return Math.random() < 0.7 ? chars[Math.floor(Math.random() * chars.length)] : char;
                    }).join('');
                } else {
                    // Reveal phase
                    const revealIndex = Math.floor((step - steps / 2) / (steps / 2) * finalText.length);
                    currentText = finalText.slice(0, revealIndex) + 
                                currentText.slice(revealIndex).split('').map(char => 
                                    char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]
                                ).join('');
                }
                
                element.textContent = currentText;
                step++;
                
                if (step >= steps) {
                    clearInterval(interval);
                    element.textContent = finalText;
                }
            }, stepDuration);
        };
    }

    // Pulse on scroll
    addPulseOnScroll() {
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop + 50 || scrollTop < lastScrollTop - 50) {
                document.querySelectorAll('.cta-button').forEach(btn => {
                    btn.style.animation = 'pulse 0.5s ease-in-out';
                    setTimeout(() => btn.style.animation = '', 500);
                });
                lastScrollTop = scrollTop;
            }
        });
    }

    // Confetti explosion
    addConfettiExplosion() {
        window.createConfetti = (x, y) => {
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#ff69b4'];
            const shapes = ['▄', '▪', '▫', '▬', '♦', '●', '■', '□'];
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
                confetti.style.cssText = `
                    position: fixed; font-size: ${8 + Math.random() * 12}px;
                    color: ${colors[Math.floor(Math.random() * colors.length)]};
                    pointer-events: none; z-index: 10000;
                    left: ${x + (Math.random() - 0.5) * 200}px;
                    top: ${y - 50}px; font-weight: bold;
                `;
                
                const vx = (Math.random() - 0.5) * 400;
                const vy = -(Math.random() * 300 + 100);
                const rotation = Math.random() * 360;
                const rotationSpeed = (Math.random() - 0.5) * 10;
                
                document.body.appendChild(confetti);
                
                let posX = parseFloat(confetti.style.left);
                let posY = parseFloat(confetti.style.top);
                let velX = vx;
                let velY = vy;
                let rot = rotation;
                let opacity = 1;
                
                const gravity = 500;
                const friction = 0.98;
                
                const animate = () => {
                    velY += gravity * 0.016;
                    velX *= friction;
                    
                    posX += velX * 0.016;
                    posY += velY * 0.016;
                    rot += rotationSpeed;
                    opacity -= 0.008;
                    
                    confetti.style.left = posX + 'px';
                    confetti.style.top = posY + 'px';
                    confetti.style.transform = `rotate(${rot}deg)`;
                    confetti.style.opacity = opacity;
                    
                    if (opacity > 0 && posY < window.innerHeight + 100) {
                        requestAnimationFrame(animate);
                    } else {
                        confetti.remove();
                    }
                };
                
                requestAnimationFrame(animate);
            }
        };

        // Trigger confetti on form submission
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                const rect = form.getBoundingClientRect();
                window.createConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
            });
        });
    }
}

// Initialize Interactive Elements
let interactiveElements;
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        interactiveElements = new InteractiveElements();
    }, 1000);
});