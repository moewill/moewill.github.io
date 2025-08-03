// Generate Service Showcase Images for Apple iPhone Clone
class ServiceImageGenerator {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 400;
        this.canvas.height = 600;
        this.init();
    }

    init() {
        this.generateAllServiceImages();
        console.log('🖼️ Service showcase images generated successfully');
    }

    generateAllServiceImages() {
        // Generate images for each service
        this.generateTechChatImage();
        this.generateImplementationImage();
        this.generateWorkshopsImage();
    }

    generateTechChatImage() {
        this.clearCanvas();
        
        // Background gradient
        const gradient = this.ctx.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, '#f8fafc');
        gradient.addColorStop(1, '#e2e8f0');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, 400, 600);

        // Header
        this.ctx.fillStyle = '#1e293b';
        this.ctx.fillRect(0, 0, 400, 60);
        
        // Title
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, SF Pro Display';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Tech Chat Elite', 200, 35);

        // Chat bubbles
        this.drawChatBubble(50, 100, 300, 40, '#0071E3', 'AWS Architecture Consultation', '#ffffff');
        this.drawChatBubble(50, 160, 280, 40, '#f1f5f9', 'Security best practices for your setup?', '#1e293b');
        this.drawChatBubble(70, 220, 260, 40, '#0071E3', 'Terraform modules recommendation', '#ffffff');
        this.drawChatBubble(50, 280, 320, 40, '#f1f5f9', 'CI/CD pipeline optimization needed', '#1e293b');

        // Status indicators
        this.ctx.fillStyle = '#10b981';
        this.ctx.beginPath();
        this.ctx.arc(50, 500, 8, 0, 2 * Math.PI);
        this.ctx.fill();

        this.ctx.fillStyle = '#1e293b';
        this.ctx.font = '14px -apple-system, BlinkMacSystemFont, SF Pro Text';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Expert Available', 70, 505);

        this.saveCanvasAsImage('tech-chat-showcase');
    }

    generateImplementationImage() {
        this.clearCanvas();
        
        // Background gradient
        const gradient = this.ctx.createLinearGradient(0, 0, 400, 600);
        gradient.addColorStop(0, '#1e293b');
        gradient.addColorStop(1, '#0f172a');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, 400, 600);

        // Code editor simulation
        this.ctx.fillStyle = '#0f172a';
        this.ctx.fillRect(20, 60, 360, 480);

        // Editor header
        this.ctx.fillStyle = '#374151';
        this.ctx.fillRect(20, 60, 360, 30);

        // Traffic lights
        this.ctx.fillStyle = '#ef4444';
        this.ctx.beginPath();
        this.ctx.arc(35, 75, 5, 0, 2 * Math.PI);
        this.ctx.fill();

        this.ctx.fillStyle = '#f59e0b';
        this.ctx.beginPath();
        this.ctx.arc(50, 75, 5, 0, 2 * Math.PI);
        this.ctx.fill();

        this.ctx.fillStyle = '#10b981';
        this.ctx.beginPath();
        this.ctx.arc(65, 75, 5, 0, 2 * Math.PI);
        this.ctx.fill();

        // Code lines
        this.drawCodeLine(30, 120, 'resource "aws_instance" "web" {', '#9ca3af');
        this.drawCodeLine(40, 140, 'ami = "ami-12345678"', '#60a5fa');
        this.drawCodeLine(40, 160, 'instance_type = "t3.micro"', '#60a5fa');
        this.drawCodeLine(40, 180, 'security_groups = [aws_security_group.web.id]', '#60a5fa');
        this.drawCodeLine(30, 200, '}', '#9ca3af');
        
        this.drawCodeLine(30, 240, 'resource "aws_security_group" "web" {', '#9ca3af');
        this.drawCodeLine(40, 260, 'name = "web-security-group"', '#60a5fa');
        this.drawCodeLine(30, 280, '}', '#9ca3af');

        // Status
        this.ctx.fillStyle = '#10b981';
        this.ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, SF Pro Display';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('✓ Infrastructure Deployed', 200, 580);

        this.saveCanvasAsImage('implementation-showcase');
    }

    generateWorkshopsImage() {
        this.clearCanvas();
        
        // Background gradient
        const gradient = this.ctx.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, '#7c3aed');
        gradient.addColorStop(1, '#5b21b6');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, 400, 600);

        // Workshop board
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        this.ctx.fillRect(30, 80, 340, 440);

        // Title
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, SF Pro Display';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Master Class', 200, 40);

        this.ctx.font = '16px -apple-system, BlinkMacSystemFont, SF Pro Text';
        this.ctx.fillText('Advanced DevSecOps', 200, 60);

        // Workshop modules
        this.drawWorkshopModule(50, 120, 'Security Fundamentals', '45 min');
        this.drawWorkshopModule(50, 180, 'Cloud Architecture', '60 min');
        this.drawWorkshopModule(50, 240, 'AI Integration', '90 min');
        this.drawWorkshopModule(50, 300, 'Hands-on Lab', '120 min');
        this.drawWorkshopModule(50, 360, 'Q&A Session', '30 min');

        // Participants
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        this.ctx.font = '14px -apple-system, BlinkMacSystemFont, SF Pro Text';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('12 Participants • Interactive • Certified', 200, 550);

        this.saveCanvasAsImage('workshops-showcase');
    }

    drawChatBubble(x, y, width, height, bgColor, text, textColor) {
        // Bubble background
        this.ctx.fillStyle = bgColor;
        this.ctx.beginPath();
        this.ctx.roundRect(x, y, width, height, 20);
        this.ctx.fill();

        // Text
        this.ctx.fillStyle = textColor;
        this.ctx.font = '14px -apple-system, BlinkMacSystemFont, SF Pro Text';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(text, x + 15, y + 25);
    }

    drawCodeLine(x, y, text, color) {
        this.ctx.fillStyle = color;
        this.ctx.font = '12px Monaco, Consolas, monospace';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(text, x, y);
    }

    drawWorkshopModule(x, y, title, duration) {
        // Module box
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        this.ctx.fillRect(x, y, 300, 40);

        // Title
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, SF Pro Display';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(title, x + 15, y + 18);

        // Duration
        this.ctx.font = '12px -apple-system, BlinkMacSystemFont, SF Pro Text';
        this.ctx.fillText(duration, x + 15, y + 32);

        // Check mark
        this.ctx.fillStyle = '#10b981';
        this.ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, SF Pro Display';
        this.ctx.textAlign = 'right';
        this.ctx.fillText('✓', x + 280, y + 25);
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, 400, 600);
    }

    saveCanvasAsImage(filename) {
        // Convert canvas to blob and create download
        this.canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${filename}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 'image/png');
    }
}

// Polyfill for roundRect if not available
if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius) {
        this.beginPath();
        this.moveTo(x + radius, y);
        this.arcTo(x + width, y, x + width, y + height, radius);
        this.arcTo(x + width, y + height, x, y + height, radius);
        this.arcTo(x, y + height, x, y, radius);
        this.arcTo(x, y, x + width, y, radius);
        this.closePath();
    };
}

// Initialize service image generator
document.addEventListener('DOMContentLoaded', () => {
    // Only generate images if explicitly requested
    if (window.location.search.includes('generate-images')) {
        new ServiceImageGenerator();
    }
});

console.log('🎨 Service image generator ready. Add "?generate-images" to URL to generate images.');