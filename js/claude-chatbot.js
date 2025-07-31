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
        this.checkBackendConnection();
        this.addWelcomeMessage();
    }
    
    async checkBackendConnection() {
        try {
            // Add timeout to prevent hanging requests
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
            
            const response = await fetch(`${this.backendUrl}/health`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                },
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            const statusEl = document.getElementById('connection-status');
            if (response.ok) {
                if (statusEl) {
                    statusEl.innerHTML = `
                        <span style="color: var(--success);">✓ Connected to Maurice's AI Backend</span>
                        <p style="margin-top: 5px; font-size: 11px;">Secure voice chat via Deepgram • Text chat via Claude Haiku</p>
                    `;
                }
                console.log('Backend connection successful');
                this.backendAvailable = true;
            } else {
                throw new Error(`Backend returned ${response.status}`);
            }
        } catch (error) {
            console.warn('Backend connection failed, using fallback mode:', error.message);
            this.backendAvailable = false;
            
            const statusEl = document.getElementById('connection-status');
            if (statusEl) {
                statusEl.innerHTML = `
                    <span style="color: var(--warning);">⚠ Offline Mode - Using Basic Responses</span>
                    <p style="margin-top: 5px; font-size: 11px;">Voice chat unavailable • Text chat uses fallback responses</p>
                `;
            }
            
            // Disable voice features if backend is unavailable
            this.isVoiceEnabled = false;
            this.updateVoiceButton();
        }
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
            
            // CRITICAL FIX: Stop all audio/speech when closing
            this.stopAllAudio();
        }
    }
    
    stopAllAudio() {
        // Stop speech synthesis
        if (this.speechSynthesis) {
            this.speechSynthesis.cancel();
            this.isSpeaking = false;
        }
        
        // Stop voice recording if active
        if (this.isRecording) {
            this.stopVoiceChat();
        }
        
        // Clear any typing indicators
        this.hideTypingIndicator();
        
        // Clear transcription
        this.clearTranscription();
        
        console.log('All audio stopped due to chatbot close');
    }

    addWelcomeMessage() {
        const voiceStatus = this.isVoiceEnabled ? ' You can also click the 🎤 button for voice chat!' : '';
        const welcomeMessage = `Hi! I'm Maurice's AI assistant, here to help answer any questions about his technology consulting services, experience, and expertise.${voiceStatus}

What brings you to Maurice's website today? Are you looking for help with a specific technology challenge or project?`;
        this.addMessage(welcomeMessage, 'bot');
        
        if (this.isVoiceEnabled) {
            this.addMessage('💡 Pro tip: Try voice chat for a more natural conversation experience!', 'system');
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
            this.startRealtimeVoiceChat();
        }
    }
    
    async startRealtimeVoiceChat() {
        try {
            this.isRecording = true;
            this.updateVoiceButton();
            this.addMessage('🎤 Starting realtime voice chat...', 'system');
            
            // Connect to Railway backend WebSocket for voice chat
            this.wsConnection = new WebSocket(this.wsUrl);
            
            this.wsConnection.onopen = () => {
                this.addMessage('🎤 Voice chat connected! Start speaking - I\'ll respond automatically when you pause.', 'system');
                // Initialize continuous voice recording
                this.initializeContinuousVoiceRecording();
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
                    this.clearTranscription();
                } else if (data.type === 'silence_detected') {
                    // Automatically process when user stops speaking
                    this.addMessage('🤔 Processing your message...', 'system');
                }
            };
            
            this.wsConnection.onerror = (error) => {
                console.error('WebSocket error:', error);
                this.addMessage('❌ Voice chat connection failed. Please check your internet connection and try again.', 'system');
                this.stopVoiceChat();
            };
            
            this.wsConnection.onclose = (event) => {
                if (event.code !== 1000) {
                    // Abnormal closure
                    this.addMessage('❌ Voice chat disconnected unexpectedly. Please try again.', 'system');
                } else {
                    this.addMessage('Voice chat disconnected.', 'system');
                }
                this.stopVoiceChat();
            };
            
        } catch (error) {
            console.error('Voice chat error:', error);
            this.addMessage('Failed to start voice chat. Please try again.', 'system');
            this.stopVoiceChat();
        }
    }
    
    async initializeContinuousVoiceRecording() {
        try {
            this.mediaStream = await navigator.mediaDevices.getUserMedia({ 
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    sampleRate: 16000
                } 
            });
            
            // Use shorter chunks for more responsive streaming
            this.mediaRecorder = new MediaRecorder(this.mediaStream, {
                mimeType: 'audio/webm;codecs=opus'
            });
            
            this.mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0 && this.wsConnection && this.wsConnection.readyState === WebSocket.OPEN) {
                    // Stop current speech if user starts speaking (interruption)
                    if (this.isSpeaking) {
                        this.stopSpeech();
                        this.addMessage('🎤 Interrupted! Listening...', 'system');
                    }
                    
                    // Send audio chunk immediately for real-time processing
                    this.sendVoiceDataRealtime(event.data);
                }
            };
            
            this.mediaRecorder.onstop = () => {
                console.log('Continuous recording stopped');
            };
            
            // Record in very small chunks for real-time streaming (250ms)
            this.mediaRecorder.start(250);
            
        } catch (error) {
            console.error('Microphone access error:', error);
            
            let errorMessage = 'Microphone access denied. ';
            if (error.name === 'NotAllowedError') {
                errorMessage += 'Please allow microphone access in your browser settings and try again.';
            } else if (error.name === 'NotFoundError') {
                errorMessage += 'No microphone found. Please connect a microphone and try again.';
            } else if (error.name === 'NotSupportedError') {
                errorMessage += 'Your browser does not support voice recording.';
            } else {
                errorMessage += 'Please check your microphone settings and try again.';
            }
            
            this.addMessage(`❌ ${errorMessage}`, 'system');
            this.stopVoiceChat();
        }
    }
    
    sendVoiceDataRealtime(audioBlob) {
        if (this.wsConnection && this.wsConnection.readyState === WebSocket.OPEN) {
            // Convert blob to base64 for WebSocket transmission
            const reader = new FileReader();
            reader.onload = () => {
                const base64Audio = reader.result.split(',')[1];
                this.wsConnection.send(JSON.stringify({
                    type: 'audio_stream',
                    data: base64Audio,
                    timestamp: Date.now(),
                    realtime: true
                }));
            };
            reader.readAsDataURL(audioBlob);
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

    // Removed old startVoiceChat method - replaced with startRealtimeVoiceChat
    
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
    // Removed old initializeVoiceRecording method - replaced with initializeContinuousVoiceRecording
    
    // Removed old sendVoiceData method - replaced with sendVoiceDataRealtime
    
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
            
            // Try to use a more natural, human-like voice
            const voices = this.speechSynthesis.getVoices();
            const preferredVoice = voices.find(voice => 
                voice.lang.startsWith('en') && 
                (voice.name.includes('Samantha') || 
                 voice.name.includes('Ava') || 
                 voice.name.includes('Google US English') ||
                 voice.name.includes('Microsoft') ||
                 voice.name.includes('Natural') || 
                 voice.name.includes('Premium'))
            ) || voices.find(voice => voice.lang.startsWith('en') && voice.name.includes('Female')) || 
               voices.find(voice => voice.lang.startsWith('en')) || voices[0];
            
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

    async buildSystemPrompt() {
        let knowledgeBase = '';
        
        // Load the comprehensive knowledge base
        try {
            const response = await fetch('data/chatbot-knowledge-base.md');
            if (response.ok) {
                knowledgeBase = await response.text();
            } else {
                throw new Error('Could not fetch knowledge base');
            }
        } catch (error) {
            console.warn('Could not load knowledge base, using fallback');
            knowledgeBase = this.getFallbackKnowledgeBase();
        }

        let systemPrompt = `You are Maurice Rashad's helpful AI assistant. Your primary goal is to answer questions thoroughly and naturally discover what brought the user to the website.

KNOWLEDGE BASE:
${knowledgeBase}

CONVERSATION STYLE:
- Be genuinely helpful and knowledgeable first
- Answer questions thoroughly using the knowledge base
- Naturally weave in discovery questions during conversation
- Only suggest consultations when genuinely relevant (not pushy)
- Maintain a professional yet approachable tone
- Keep responses concise but comprehensive

DISCOVERY APPROACH:
1. Answer their immediate questions fully
2. Naturally ask follow-up questions like:
   - "What specific challenge brought you here today?"
   - "Are you working on a particular technology project?"
   - "What caught your attention about Maurice's services?"
3. When appropriate, mention: "Maurice offers a complimentary 30-minute consultation if you'd like to discuss your specific needs"

IMPORTANT:
- Never be pushy or sales-focused
- Let conversation flow naturally
- Always prioritize being helpful over promoting services
- Provide specific examples and details from the knowledge base
- If someone seems interested in services, offer the free consultation naturally`;

        if (this.resumeData) {
            systemPrompt += `\n\nADDITIONAL RESUME DATA:\n${JSON.stringify(this.resumeData, null, 2)}`;
        }

        return systemPrompt;
    }

    getFallbackKnowledgeBase() {
        return `Maurice Rashad - Senior Technology Consultant
        
10+ years enterprise experience, 50+ businesses transformed, 99% satisfaction rate.

Services:
- Tech Chat Consultation ($100/month) - 2x 1-hour calls, 30min free initial
- Done-For-You Services ($75/hour) - Full development & implementation  
- Expert Workshops ($99/workshop) - Cybersecurity, AI, DevOps, Cloud

Expertise: AWS Certified Solutions Architect, Kubernetes (CKAD), AI/Automation specialist, CISSP preparation, Full-stack development

Major Project: Enterprise Infrastructure at NTT Data/SHI - 40% efficiency improvement, 75% deployment time reduction

Contact: mauricerashad@gmail.com, Global remote-first, 24/7 support`;
    }

    getFallbackResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        const responses = {
            'experience': "Maurice has 10+ years of enterprise technology experience, including leading major infrastructure transformations at NTT Data/SHI International with 40% efficiency improvements. He's helped 50+ businesses with 99% satisfaction rate.\n\nWhat type of technology challenge are you working on? I can share more specific examples of his relevant experience.",
            
            'skills': "Maurice is AWS Solutions Architect certified and specializes in Full-Stack Development, AI & Automation (Anthropic Claude certified), Cloud Solutions, DevOps (Kubernetes CKAD), and Cybersecurity (CISSP prep).\n\nWhich area caught your attention? Are you looking to modernize infrastructure, implement AI, or something else?",
            
            'services': "Maurice offers three main services:\n\n1. Tech Chat Consultation - $100/month (2x 1-hour calls + free 30-min initial)\n2. Done-For-You Services - $75/hour (full development & implementation)\n3. Expert Workshops - $99 each (AI, cybersecurity, DevOps, cloud)\n\nWhat type of support are you looking for - ongoing guidance or hands-on development?",
            
            'pricing': "Here's Maurice's pricing: Tech Chat Consultation ($100/month with free initial consultation), Done-For-You Services ($75/hour), and Expert Workshops ($99 each).\n\nWhat kind of project scope are you considering? I can help you figure out the best approach.",
            
            'contact': "You can reach Maurice at mauricerashad@gmail.com - he responds within 24 hours and offers global, remote-first services.\n\nWould you like me to help you prepare for that conversation? What specific challenge brought you here?",
            
            'automation': "Maurice specializes in practical automation that saves real time and reduces errors. He's built everything from simple task automation to complex AI-powered workflows for 50+ businesses.\n\nWhat processes are you looking to automate? Data entry, customer communications, reporting, or something else?",
            
            'ai': "Maurice helps businesses implement AI that actually works - chatbots like this one, automation agents, data analysis tools, and custom applications. He's Anthropic Claude certified and focuses on practical business value.\n\nWhat caught your interest about AI? Customer service, task automation, data analysis, or another use case?",
            
            'consulting': "Maurice's Tech Chat service combines deep technical expertise with business strategy. You get 2 monthly calls for planning, problem-solving, and implementation guidance, plus a free initial consultation.\n\nWhat's the main challenge you're trying to solve? Technical roadmap, system architecture, or implementation strategy?",
            
            'web': "Maurice provides full-stack web development including modern websites, web applications, hosting, migrations, and custom functionality. He's worked on everything from small business sites to enterprise applications.\n\nAre you starting from scratch, updating an existing site, or looking to add specific functionality?"
        };

        // Find matching response
        for (const [keyword, response] of Object.entries(responses)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }

        return "I'd love to help you learn more about Maurice and his technology consulting services! You can ask about his experience, services, pricing, or specific expertise in areas like automation, AI, web development, cloud computing, and cybersecurity.\n\nWhat brought you to Maurice's website today? Are you working on a specific technology project or challenge I can help you with?";
    }
}

// Initialize enhanced chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ClaudeChatbot();
});
