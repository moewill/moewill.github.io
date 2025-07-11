// Enhanced Chatbot with Railway Backend Integration and Voice Features
class ClaudeChatbot {
    constructor() {
        this.messages = [];
        this.isOpen = false;
        this.resumeData = null;
        this.isRecording = false;
        this.speechSynthesis = window.speechSynthesis;
        this.isVoiceEnabled = false;
        this.backendUrl = CHATBOT_CONFIG.BACKEND_URL;
        this.wsUrl = CHATBOT_CONFIG.WS_URL;
        this.wsConnection = null;
        this.currentTranscriptionId = null;
        this.isSpeaking = false;
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
        // Check if browser supports WebSocket for voice chat
        if ('WebSocket' in window || 'MozWebSocket' in window) {
            this.isVoiceEnabled = true;
            console.log('Voice chat enabled via WebSocket');
        } else {
            console.log('WebSocket not supported in this browser');
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
                        <div class="connection-status" id="connection-status">
                            <span style="color: var(--success);">✓ Connected to Maurice's AI Backend</span>
                            <p style="margin-top: 5px; font-size: 11px;">Secure voice chat via Deepgram • Text chat via Claude Haiku</p>
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
        if (toggle) toggle.addEventListener('click', () => this.toggleChat());
        if (close) close.addEventListener('click', () => this.toggleChat());
        if (send) send.addEventListener('click', () => this.sendMessage());
        if (voice) voice.addEventListener('click', () => this.toggleVoiceInput());
        
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.sendMessage();
            });
        }

        // Close chat when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.chatbot-container') && this.isOpen) {
                this.toggleChat();
            }
        });

        // Initialize voice button state
        this.updateVoiceButton();
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
        const voiceStatus = this.isVoiceEnabled ? ' Click the 🎤 button for voice chat!' : '';
        const welcomeMessage = `Hi! I'm Maurice's AI assistant. I can answer detailed questions about his background, experience, and services.${voiceStatus} I'm ready to help!`;
        this.addMessage(welcomeMessage, 'bot');
        
        if (this.isVoiceEnabled) {
            this.addMessage('🎤 Voice chat enabled! Click the microphone to start a voice conversation with Deepgram + Claude.', 'system');
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
            this.stopVoiceChat();
        } else {
            this.startVoiceChat();
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

    async startVoiceChat() {
        try {
            this.isRecording = true;
            this.updateVoiceButton();
            this.addMessage('🎤 Connecting to voice chat...', 'system');
            
            // Connect to Railway backend WebSocket for voice chat
            this.wsConnection = new WebSocket(this.wsUrl);
            
            this.wsConnection.onopen = () => {
                this.addMessage('🎤 Voice chat connected! Speak now...', 'system');
                // Initialize voice recording via WebSocket
                this.initializeVoiceRecording();
            };
            
            this.wsConnection.onmessage = (event) => {
                const data = JSON.parse(event.data);
                console.log('WebSocket message received:', data);
                
                if (data.type === 'connected') {
                    this.addMessage('🎤 ' + data.message, 'system');
                } else if (data.type === 'response') {
                    this.addMessage(data.content, 'bot');
                    this.speakResponse(data.content);
                } else if (data.type === 'transcript') {
                    // Show live transcription
                    this.updateTranscription(data.content);
                } else if (data.type === 'final_transcript') {
                    this.addMessage(`🎤 You said: "${data.content}"`, 'user');
                }
            };
            
            this.wsConnection.onerror = (error) => {
                console.error('WebSocket error:', error);
                this.addMessage('Voice chat connection error. Please try again.', 'system');
                this.stopVoiceChat();
            };
            
            this.wsConnection.onclose = () => {
                this.addMessage('Voice chat disconnected.', 'system');
                this.stopVoiceChat();
            };
            
        } catch (error) {
            console.error('Voice chat error:', error);
            this.addMessage('Failed to start voice chat. Please try again.', 'system');
            this.stopVoiceChat();
        }
    }
    
    stopVoiceChat() {
        this.isRecording = false;
        this.updateVoiceButton();
        
        // Clear any live transcription
        this.clearTranscription();
        
        if (this.wsConnection) {
            this.wsConnection.close();
            this.wsConnection = null;
        }
        
        if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
            this.mediaRecorder.stop();
        }
        this.mediaRecorder = null;
        
        if (this.mediaStream) {
            this.mediaStream.getTracks().forEach(track => track.stop());
            this.mediaStream = null;
        }
    }
    
    async initializeVoiceRecording() {
        try {
            this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            this.mediaRecorder = new MediaRecorder(this.mediaStream, {
                mimeType: 'audio/webm;codecs=opus'
            });
            
            const audioChunks = [];
            
            this.mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunks.push(event.data);
                    
                    // Stop current speech if user starts speaking (interruption)
                    if (this.isSpeaking) {
                        this.stopSpeech();
                        this.addMessage('🎤 Interrupted! Listening...', 'system');
                    }
                    
                    // Send audio chunk for real-time processing
                    this.sendVoiceData(event.data);
                }
            };
            
            this.mediaRecorder.onstop = () => {
                console.log('Recording stopped');
            };
            
            // Record in small chunks for real-time processing
            this.mediaRecorder.start(500); // 500ms chunks for better real-time response
            
        } catch (error) {
            console.error('Microphone access error:', error);
            this.addMessage('Microphone access denied. Please allow microphone access for voice chat.', 'system');
            this.stopVoiceChat();
        }
    }
    
    sendVoiceData(audioBlob) {
        if (this.wsConnection && this.wsConnection.readyState === WebSocket.OPEN) {
            // Convert blob to base64 for WebSocket transmission
            const reader = new FileReader();
            reader.onload = () => {
                const base64Audio = reader.result.split(',')[1];
                this.wsConnection.send(JSON.stringify({
                    type: 'audio',
                    data: base64Audio,
                    timestamp: Date.now()
                }));
            };
            reader.readAsDataURL(audioBlob);
        }
    }
    
    updateTranscription(text) {
        // Show live transcription in a special message that updates
        if (this.currentTranscriptionId) {
            // Update existing transcription
            const existingMsg = document.getElementById(this.currentTranscriptionId);
            if (existingMsg) {
                existingMsg.textContent = `🎤 Transcribing: "${text}..."`;
                return;
            }
        }
        
        // Create new transcription message
        const messagesContainer = document.getElementById('chatbot-messages');
        if (!messagesContainer) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message system';
        this.currentTranscriptionId = 'transcription-' + Date.now();
        messageDiv.id = this.currentTranscriptionId;
        messageDiv.textContent = `🎤 Transcribing: "${text}..."`;
        messageDiv.style.opacity = '0.7';
        messageDiv.style.fontStyle = 'italic';
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    clearTranscription() {
        if (this.currentTranscriptionId) {
            const msg = document.getElementById(this.currentTranscriptionId);
            if (msg) {
                msg.remove();
            }
            this.currentTranscriptionId = null;
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
            
            // Allow interruption during voice recording
            utterance.onstart = () => {
                this.isSpeaking = true;
            };
            
            utterance.onend = () => {
                this.isSpeaking = false;
            };
            
            this.speechSynthesis.speak(utterance);
        }
    }
    
    // Add method to stop current speech (for interruption)
    stopSpeech() {
        if (this.speechSynthesis) {
            this.speechSynthesis.cancel();
            this.isSpeaking = false;
        }
    }

    async getClaudeResponse(userMessage) {
        try {
            // Use Railway backend for text chat (secure, uses Haiku model)
            const response = await fetch(`${this.backendUrl}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage,
                    type: 'text'
                })
            });

            if (!response.ok) {
                throw new Error(`Backend error: ${response.status}`);
            }

            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error('Backend chat error:', error);
            
            // Fallback to basic responses if backend is unavailable
            return this.getFallbackResponse(userMessage);
        }
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
