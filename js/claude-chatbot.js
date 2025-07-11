// Enhanced Chatbot with Claude API Integration and Voice Features
class ClaudeChatbot {
    constructor() {
        this.apiKey = null;
        this.messages = [];
        this.isOpen = false;
        this.resumeData = null;
        this.isRecording = false;
        this.recognition = null;
        this.speechSynthesis = window.speechSynthesis;
        this.isVoiceEnabled = false;
        this.init();
    }

    async init() {
        await this.loadResumeData();
        this.initializeSpeechRecognition();
        this.createChatbotHTML();
        this.bindEvents();
        this.addWelcomeMessage();
    }

    async loadResumeData() {
        try {
            const response = await fetch('data/resume.json');
            this.resumeData = await response.json();
        } catch (error) {
            console.error('Failed to load resume data:', error);
            this.resumeData = null;
        }
    }

    initializeSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';
            
            this.recognition.onstart = () => {
                this.isRecording = true;
                this.updateVoiceButton();
                this.addMessage('🎤 Listening...', 'system');
            };
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.handleVoiceInput(transcript);
            };
            
            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.isRecording = false;
                this.updateVoiceButton();
                this.addMessage('Voice recognition error. Please try again.', 'system');
            };
            
            this.recognition.onend = () => {
                this.isRecording = false;
                this.updateVoiceButton();
            };
            
            this.isVoiceEnabled = true;
        } else {
            console.log('Speech recognition not supported in this browser');
            this.isVoiceEnabled = false;
        }
    }

    createChatbotHTML() {
        const chatbotHTML = `
            <div class="chatbot-container">
                <button class="chatbot-toggle" id="chatbot-toggle">
                    <i class="fas fa-comments"></i>
                </button>
                <div class="chatbot-widget" id="chatbot-widget">
                    <div class="chatbot-header">
                        <h3 class="text-lg font-bold">Ask Maurice Anything</h3>
                        <p class="text-sm opacity-90">AI Assistant powered by Claude</p>
                        <button class="chatbot-close" id="chatbot-close" style="position: absolute; top: 15px; right: 15px; background: none; border: none; color: white; font-size: 18px; cursor: pointer;">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="chatbot-messages" id="chatbot-messages">
                        <!-- Messages will be added here -->
                    </div>
                    <div class="chatbot-input-container">
                        <input 
                            type="text" 
                            class="chatbot-input" 
                            id="chatbot-input" 
                            placeholder="Ask about my experience, skills, or services..."
                            maxlength="500"
                        >
                        <button class="chatbot-voice" id="chatbot-voice" title="Voice Input">
                            <i class="fas fa-microphone"></i>
                        </button>
                        <button class="chatbot-send" id="chatbot-send">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    <div class="chatbot-footer" style="padding: 10px 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
                        <div class="api-key-section" id="api-key-section">
                            <p>Enter your Claude API key for AI responses:</p>
                            <div style="display: flex; gap: 10px; margin-top: 8px;">
                                <input type="password" id="api-key-input" placeholder="sk-ant-..." style="flex: 1; padding: 8px; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 12px;">
                                <button id="api-key-save" style="padding: 8px 12px; background: var(--primary); color: white; border: none; border-radius: 6px; font-size: 12px; cursor: pointer;">Save</button>
                            </div>
                            <p style="margin-top: 5px; font-size: 11px;">Your API key is stored locally and never sent to our servers.</p>
                        </div>
                        <div class="api-status" id="api-status" style="display: none;">
                            <span style="color: var(--success);">✓ Claude API Connected</span>
                            <button id="api-key-reset" style="margin-left: 10px; background: none; border: none; color: #64748b; font-size: 11px; cursor: pointer; text-decoration: underline;">Change Key</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    bindEvents() {
        const toggle = document.getElementById('chatbot-toggle');
        const close = document.getElementById('chatbot-close');
        const input = document.getElementById('chatbot-input');
        const send = document.getElementById('chatbot-send');
        const voice = document.getElementById('chatbot-voice');
        const apiKeySave = document.getElementById('api-key-save');
        const apiKeyReset = document.getElementById('api-key-reset');

        if (toggle) toggle.addEventListener('click', () => this.toggleChat());
        if (close) close.addEventListener('click', () => this.toggleChat());
        if (send) send.addEventListener('click', () => this.sendMessage());
        if (voice) voice.addEventListener('click', () => this.toggleVoiceInput());
        if (apiKeySave) apiKeySave.addEventListener('click', () => this.saveApiKey());
        if (apiKeyReset) apiKeyReset.addEventListener('click', () => this.resetApiKey());
        
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.sendMessage();
            });
        }

        // Load saved API key
        this.loadApiKey();

        // Close chat when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.chatbot-container') && this.isOpen) {
                this.toggleChat();
            }
        });

        // Initialize voice button state
        this.updateVoiceButton();
    }

    saveApiKey() {
        const apiKeyInput = document.getElementById('api-key-input');
        if (!apiKeyInput) return;
        
        const apiKey = apiKeyInput.value.trim();
        
        if (!apiKey || !apiKey.startsWith('sk-ant-')) {
            alert('Please enter a valid Claude API key (starts with sk-ant-)');
            return;
        }

        this.apiKey = apiKey;
        localStorage.setItem('claude_api_key', apiKey);
        this.updateApiKeyUI();
        this.addMessage('Great! I\'m now connected to Claude AI. You can ask me detailed questions about Maurice\'s experience and expertise.', 'bot');
    }

    loadApiKey() {
        const savedKey = localStorage.getItem('claude_api_key');
        if (savedKey) {
            this.apiKey = savedKey;
            this.updateApiKeyUI();
        }
    }

    resetApiKey() {
        this.apiKey = null;
        localStorage.removeItem('claude_api_key');
        const apiKeyInput = document.getElementById('api-key-input');
        if (apiKeyInput) apiKeyInput.value = '';
        this.updateApiKeyUI();
        this.addMessage('API key removed. Enter a new key to enable AI responses.', 'bot');
    }

    updateApiKeyUI() {
        const apiKeySection = document.getElementById('api-key-section');
        const apiStatus = document.getElementById('api-status');
        
        if (this.apiKey) {
            if (apiKeySection) apiKeySection.style.display = 'none';
            if (apiStatus) apiStatus.style.display = 'block';
        } else {
            if (apiKeySection) apiKeySection.style.display = 'block';
            if (apiStatus) apiStatus.style.display = 'none';
        }
    }

    toggleChat() {
        const widget = document.getElementById('chatbot-widget');
        const toggle = document.getElementById('chatbot-toggle');
        
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            if (widget) widget.classList.add('active');
            if (toggle) toggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            if (widget) widget.classList.remove('active');
            if (toggle) toggle.innerHTML = '<i class="fas fa-comments"></i>';
        }
    }

    addWelcomeMessage() {
        const voiceStatus = this.isVoiceEnabled ? ' Click the 🎤 button to speak!' : '';
        const welcomeMessage = `Hi! I'm Maurice's AI assistant powered by Claude. I can answer detailed questions about his background, experience, and services.${voiceStatus} ${this.apiKey ? 'I\'m ready to help!' : 'Please enter your Claude API key to enable AI responses.'}`;
        this.addMessage(welcomeMessage, 'bot');
        
        if (this.isVoiceEnabled) {
            this.addMessage('🎤 Voice features enabled! You can speak to me and I\'ll respond with voice.', 'system');
        }
    }

    addMessage(content, sender, isHtml = false) {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (!messagesContainer) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        if (isHtml) {
            messageDiv.innerHTML = content;
        } else {
            messageDiv.textContent = content;
        }
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (!messagesContainer) return;
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    async sendMessage() {
        const input = document.getElementById('chatbot-input');
        if (!input) return;
        
        const message = input.value.trim();
        
        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        input.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        try {
            const response = await this.getClaudeResponse(message);
            this.hideTypingIndicator();
            this.addMessage(response, 'bot');
            
            // Speak the response if voice is enabled
            this.speakResponse(response);
        } catch (error) {
            this.hideTypingIndicator();
            console.error('Claude API Error:', error);
            
            // Fallback to basic responses
            const fallbackResponse = this.getFallbackResponse(message);
            this.addMessage(fallbackResponse, 'bot');
            
            // Speak the fallback response
            this.speakResponse(fallbackResponse);
        }
    }

    toggleVoiceInput() {
        if (!this.isVoiceEnabled) {
            this.addMessage('Voice input is not supported in this browser. Please use Chrome, Safari, or Edge for voice features.', 'system');
            return;
        }

        if (this.isRecording) {
            this.recognition.stop();
        } else {
            this.recognition.start();
        }
    }

    updateVoiceButton() {
        const voiceBtn = document.getElementById('chatbot-voice');
        if (!voiceBtn) return;

        if (!this.isVoiceEnabled) {
            voiceBtn.style.opacity = '0.5';
            voiceBtn.style.cursor = 'not-allowed';
            return;
        }

        if (this.isRecording) {
            voiceBtn.style.color = '#ef4444';
            voiceBtn.innerHTML = '<i class="fas fa-stop"></i>';
            voiceBtn.title = 'Stop Recording';
        } else {
            voiceBtn.style.color = '#0EA5E9';
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
            voiceBtn.title = 'Voice Input';
        }
    }

    handleVoiceInput(transcript) {
        const input = document.getElementById('chatbot-input');
        if (input) {
            input.value = transcript;
            this.addMessage(`🎤 You said: "${transcript}"`, 'system');
            // Automatically send the message
            setTimeout(() => this.sendMessage(), 500);
        }
    }

    speakResponse(text) {
        // Clean up text for better speech
        const cleanText = text.replace(/[#*_`]/g, '').replace(/\n+/g, ' ').trim();
        
        if (this.speechSynthesis && cleanText) {
            // Stop any current speech
            this.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.rate = 0.9;
            utterance.pitch = 1;
            utterance.volume = 0.8;
            
            // Try to use a natural voice
            const voices = this.speechSynthesis.getVoices();
            const preferredVoice = voices.find(voice => 
                voice.lang.startsWith('en') && 
                (voice.name.includes('Google') || voice.name.includes('Natural') || voice.name.includes('Premium'))
            ) || voices.find(voice => voice.lang.startsWith('en')) || voices[0];
            
            if (preferredVoice) {
                utterance.voice = preferredVoice;
            }
            
            this.speechSynthesis.speak(utterance);
        }
    }

    async getClaudeResponse(userMessage) {
        if (!this.apiKey) {
            return 'Please enter your Claude API key to enable AI responses. You can get one from Anthropic\'s website.';
        }

        const systemPrompt = this.buildSystemPrompt();
        
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-sonnet-20240229',
                max_tokens: 500,
                system: systemPrompt,
                messages: [
                    {
                        role: 'user',
                        content: userMessage
                    }
                ]
            })
        });

        if (!response.ok) {
            if (response.status === 401) {
                this.resetApiKey();
                throw new Error('Invalid API key. Please check your Claude API key.');
            }
            throw new Error(`Claude API error: ${response.status}`);
        }

        const data = await response.json();
        return data.content[0].text;
    }

    buildSystemPrompt() {
        let systemPrompt = `You are Maurice Rashad's AI assistant. You help potential clients learn about Maurice's background, services, and expertise. Be professional, helpful, and encouraging about contacting Maurice for consultations.

Maurice Rashad is a technology consultant with 10+ years of experience. He offers:

1. Strategic Consulting ($100/month, 2x 1-hour calls)
   - Strategic planning sessions
   - Technology roadmap development
   - Problem-solving workshops
   - Growth strategy recommendations

2. Technology Services ($75/hour)
   - Custom automation solutions
   - Website development & fixes
   - App development
   - Hosting & migration services

3. Expert Workshops ($99 each)
   - AI Agents & Automation
   - Cybersecurity Fundamentals
   - Modern Web Development
   - Cloud Technologies

Contact: mauricerashad@gmail.com
Response time: Within 24 hours
Availability: Global, Remote-First`;

        if (this.resumeData) {
            systemPrompt += `\n\nDetailed Background:\n${JSON.stringify(this.resumeData, null, 2)}`;
        }

        systemPrompt += `\n\nKey stats: 50+ businesses transformed, 99% client satisfaction, 24/7 support available.

When answering questions:
- Be specific about Maurice's experience and expertise
- Include relevant pricing when discussing services
- Encourage users to contact Maurice for consultations
- Keep responses concise but informative
- Always maintain a professional and friendly tone`;

        return systemPrompt;
    }

    getFallbackResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        const responses = {
            'experience': "Maurice has over 10 years of experience in technology consulting and development. He's helped 50+ businesses transform their operations through strategic tech solutions, with a 99% client satisfaction rate.",
            
            'skills': "Maurice specializes in Full-Stack Development, AI & Automation, Cloud Solutions, and Cybersecurity. He works with modern technologies to deliver cutting-edge solutions for businesses.",
            
            'services': "Maurice offers three main services:\n\n1. Strategic Consulting - $100/month for 2x 1-hour calls\n2. Technology Services - $75/hour for custom development\n3. Expert Workshops - $99 each for AI, cybersecurity, and web development training",
            
            'pricing': "Pricing: Strategic Consulting ($100/month), Technology Services ($75/hour), and Workshops ($99 each). Contact mauricerashad@gmail.com for detailed quotes.",
            
            'contact': "You can reach Maurice at mauricerashad@gmail.com. He responds within 24 hours and offers global, remote-first services.",
            
            'automation': "Maurice creates custom automation solutions that streamline business processes, from simple task automation to complex AI-powered workflow systems.",
            
            'ai': "Maurice helps businesses implement AI solutions including chatbots, automation agents, data analysis tools, and custom AI applications tailored to specific business needs.",
            
            'consulting': "Maurice's consulting combines technical expertise with business strategy. He helps identify opportunities, create roadmaps, and solve complex technical challenges.",
            
            'web': "Maurice provides comprehensive web development including website creation, fixes, hosting, migration, and modern web applications using the latest technologies."
        };

        // Find matching response
        for (const [keyword, response] of Object.entries(responses)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }

        return "I'd be happy to help you learn more about Maurice! You can ask about his experience, services, pricing, or expertise in areas like automation, AI, web development, and consulting. For detailed discussions, contact Maurice directly at mauricerashad@gmail.com.";
    }
}

// Initialize enhanced chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ClaudeChatbot();
});
