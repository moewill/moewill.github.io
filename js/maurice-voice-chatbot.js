// Maurice Voice Chatbot Widget
class MauriceVoiceChatbot {
  constructor() {
    this.isOpen = false;
    this.isConnected = false;
    this.client = null;
    this.botAudio = null;
    this.init();
  }

  init() {
    this.createWidget();
    this.bindEvents();
    this.setupAudio();
  }

  createWidget() {
    const widget = document.createElement('div');
    widget.id = 'maurice-voice-widget';
    widget.className = 'maurice-voice-widget';
    widget.innerHTML = `
      <div class="voice-toggle" id="voice-toggle">
        <svg class="voice-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
        </svg>
      </div>
      
      <div class="voice-panel" id="voice-panel">
        <div class="voice-header">
          <h3>Voice Chat with Maurice</h3>
          <p>AI Assistant powered by Claude</p>
          <button class="close-btn" id="voice-close">×</button>
        </div>
        
        <div class="voice-content">
          <div class="connection-status" id="connection-status">
            <div class="status-indicator" id="status-indicator"></div>
            <span id="status-text">Disconnected</span>
          </div>
          
          <div class="voice-indicator-container">
            <div class="voice-indicator" id="voice-indicator">
              <div class="voice-wave" id="voice-wave"></div>
              <svg class="mic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
              </svg>
            </div>
          </div>
          
          <div class="voice-controls">
            <button class="voice-btn primary" id="connect-btn">Start Voice Chat</button>
            <button class="voice-btn secondary" id="disconnect-btn" disabled>End Chat</button>
          </div>
          
          <div class="conversation-section">
            <h4>Conversation</h4>
            <div class="conversation-log" id="conversation-log">
              <div class="placeholder">Voice conversation will appear here...</div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Add CSS styles
    const style = document.createElement('style');
    style.textContent = `
      .maurice-voice-widget {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        font-family: Inter, system-ui, sans-serif;
      }
      
      .voice-toggle {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #0EA5E9, #06B6D4);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(14, 165, 233, 0.3);
        transition: all 0.3s ease;
        border: none;
      }
      
      .voice-toggle:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 25px rgba(14, 165, 233, 0.4);
      }
      
      .voice-icon {
        width: 24px;
        height: 24px;
        color: white;
      }
      
      .voice-panel {
        position: absolute;
        bottom: 80px;
        right: 0;
        width: 350px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        opacity: 0;
        transform: translateY(20px) scale(0.95);
        transition: all 0.3s ease;
        pointer-events: none;
      }
      
      .voice-panel.active {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: all;
      }
      
      .voice-header {
        padding: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        position: relative;
      }
      
      .voice-header h3 {
        margin: 0 0 5px 0;
        font-size: 18px;
        font-weight: 600;
        color: #0F172A;
      }
      
      .voice-header p {
        margin: 0;
        font-size: 14px;
        color: #64748B;
      }
      
      .close-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        font-size: 24px;
        color: #64748B;
        cursor: pointer;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.2s ease;
      }
      
      .close-btn:hover {
        background: rgba(0, 0, 0, 0.1);
      }
      
      .voice-content {
        padding: 20px;
      }
      
      .connection-status {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        font-size: 14px;
        font-weight: 500;
      }
      
      .status-indicator {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 8px;
        background: #EF4444;
        transition: all 0.3s ease;
      }
      
      .status-indicator.connected {
        background: #10B981;
      }
      
      .status-indicator.connecting {
        background: #F59E0B;
        animation: pulse 1s infinite;
      }
      
      .voice-indicator-container {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
      }
      
      .voice-indicator {
        width: 100px;
        height: 100px;
        border: 3px solid rgba(14, 165, 233, 0.3);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
      }
      
      .voice-wave {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(14, 165, 233, 0.3), rgba(6, 182, 212, 0.3));
        border-radius: 50%;
        transform: scale(0);
        transition: transform 0.3s ease;
      }
      
      .voice-wave.active {
        transform: scale(1);
        animation: voice-pulse 1.5s infinite;
      }
      
      .mic-icon {
        width: 30px;
        height: 30px;
        color: #0EA5E9;
        z-index: 2;
      }
      
      .voice-controls {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
      }
      
      .voice-btn {
        padding: 12px 20px;
        border: none;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .voice-btn.primary {
        background: linear-gradient(135deg, #0EA5E9, #06B6D4);
        color: white;
      }
      
      .voice-btn.primary:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
      }
      
      .voice-btn.secondary {
        background: #64748B;
        color: white;
      }
      
      .voice-btn.secondary:hover:not(:disabled) {
        background: #475569;
      }
      
      .voice-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
      }
      
      .conversation-section h4 {
        margin: 0 0 10px 0;
        font-size: 16px;
        font-weight: 600;
        color: #0F172A;
      }
      
      .conversation-log {
        max-height: 200px;
        overflow-y: auto;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        padding: 15px;
        font-size: 14px;
        line-height: 1.4;
      }
      
      .placeholder {
        color: #64748B;
        text-align: center;
        font-style: italic;
      }
      
      .conversation-message {
        margin-bottom: 10px;
        padding: 8px 12px;
        border-radius: 8px;
        word-wrap: break-word;
      }
      
      .conversation-user {
        background: rgba(14, 165, 233, 0.1);
        color: #0EA5E9;
        font-weight: 500;
      }
      
      .conversation-bot {
        background: rgba(16, 185, 129, 0.1);
        color: #059669;
      }
      
      .conversation-system {
        background: rgba(100, 116, 139, 0.1);
        color: #64748B;
        font-size: 12px;
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      
      @keyframes voice-pulse {
        0%, 100% { transform: scale(1); opacity: 0.7; }
        50% { transform: scale(1.1); opacity: 1; }
      }
      
      @media (max-width: 768px) {
        .voice-panel {
          width: 320px;
          right: -10px;
        }
        
        .maurice-voice-widget {
          bottom: 80px;
          right: 10px;
        }
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(widget);
  }

  bindEvents() {
    const toggle = document.getElementById('voice-toggle');
    const close = document.getElementById('voice-close');
    const connectBtn = document.getElementById('connect-btn');
    const disconnectBtn = document.getElementById('disconnect-btn');

    toggle.addEventListener('click', () => this.toggleWidget());
    close.addEventListener('click', () => this.toggleWidget());
    connectBtn.addEventListener('click', () => this.connect());
    disconnectBtn.addEventListener('click', () => this.disconnect());

    // Close widget when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.maurice-voice-widget') && this.isOpen) {
        this.toggleWidget();
      }
    });
  }

  setupAudio() {
    this.botAudio = document.createElement('audio');
    this.botAudio.autoplay = true;
    this.botAudio.playsInline = true;
    document.body.appendChild(this.botAudio);
  }

  toggleWidget() {
    const panel = document.getElementById('voice-panel');
    this.isOpen = !this.isOpen;
    
    if (this.isOpen) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  }

  updateStatus(status, message) {
    const indicator = document.getElementById('status-indicator');
    const text = document.getElementById('status-text');
    
    indicator.className = 'status-indicator';
    text.textContent = message;
    
    if (status === 'connected') {
      indicator.classList.add('connected');
    } else if (status === 'connecting') {
      indicator.classList.add('connecting');
    }
  }

  addToConversation(type, message) {
    const log = document.getElementById('conversation-log');
    
    // Remove placeholder
    if (log.querySelector('.placeholder')) {
      log.innerHTML = '';
    }
    
    const messageEl = document.createElement('div');
    messageEl.className = `conversation-message conversation-${type}`;
    
    switch (type) {
      case 'user':
        messageEl.textContent = `You: ${message}`;
        break;
      case 'bot':
        messageEl.textContent = `Maurice: ${message}`;
        break;
      case 'system':
        messageEl.textContent = message;
        break;
    }
    
    log.appendChild(messageEl);
    log.scrollTop = log.scrollHeight;
  }

  animateVoiceActivity(active) {
    const wave = document.getElementById('voice-wave');
    const indicator = document.getElementById('voice-indicator');
    
    if (active) {
      wave.classList.add('active');
      indicator.style.borderColor = '#0EA5E9';
    } else {
      wave.classList.remove('active');
      indicator.style.borderColor = 'rgba(14, 165, 233, 0.3)';
    }
  }

  async connect() {
    if (this.isConnected) return;

    try {
      this.updateStatus('connecting', 'Connecting...');
      const connectBtn = document.getElementById('connect-btn');
      const disconnectBtn = document.getElementById('disconnect-btn');
      
      connectBtn.disabled = true;
      this.addToConversation('system', 'Initializing voice connection...');

      // Check if we have the RTVI client available
      if (typeof RTVIClient === 'undefined') {
        // Load the RTVI client dynamically
        await this.loadRTVIClient();
      }

      const config = {
        params: {
          baseUrl: 'http://localhost:7860',
          endpoints: {
            connect: '/connect'
          }
        },
        callbacks: {
          onConnected: () => {
            this.updateStatus('connected', 'Connected');
            this.isConnected = true;
            connectBtn.disabled = true;
            disconnectBtn.disabled = false;
            this.addToConversation('system', 'Connected to Maurice! Start speaking...');
          },
          onDisconnected: () => {
            this.updateStatus('disconnected', 'Disconnected');
            this.isConnected = false;
            connectBtn.disabled = false;
            disconnectBtn.disabled = true;
            this.addToConversation('system', 'Disconnected from Maurice');
            this.animateVoiceActivity(false);
          },
          onBotReady: (data) => {
            this.addToConversation('system', 'Maurice is ready to chat!');
            console.log('Bot ready:', data);
          },
          onError: (error) => {
            console.error('RTVI Client error:', error);
            this.addToConversation('system', `Connection error: ${error.message || 'Unknown error'}`);
          },
          onUserTranscript: (data) => {
            if (data.final) {
              this.addToConversation('user', data.text);
              this.animateVoiceActivity(false);
            } else {
              this.animateVoiceActivity(true);
            }
          },
          onBotTranscript: (data) => {
            this.addToConversation('bot', data.text);
          }
        }
      };

      // Initialize the client (this would need the actual RTVI client library)
      this.addToConversation('system', 'Voice chat requires backend connection to localhost:7860');
      this.addToConversation('system', 'Please ensure the maurice-chat backend is running');
      
      // For now, simulate connection for demonstration
      setTimeout(() => {
        this.updateStatus('connected', 'Demo Mode - Connected');
        this.isConnected = true;
        connectBtn.disabled = true;
        disconnectBtn.disabled = false;
        this.addToConversation('system', 'Demo mode: Voice chat UI is ready');
        this.addToConversation('system', 'To enable full functionality, run: docker-compose up from maurice-chat repo');
      }, 2000);

    } catch (error) {
      console.error('Connection error:', error);
      this.addToConversation('system', `Failed to connect: ${error.message}`);
      this.updateStatus('disconnected', 'Connection failed');
      document.getElementById('connect-btn').disabled = false;
      this.isConnected = false;
    }
  }

  async disconnect() {
    if (!this.isConnected) return;

    try {
      this.addToConversation('system', 'Disconnecting...');
      
      // Clean up audio
      if (this.botAudio && this.botAudio.srcObject) {
        const tracks = this.botAudio.srcObject.getTracks();
        tracks.forEach(track => track.stop());
        this.botAudio.srcObject = null;
      }
      
      this.updateStatus('disconnected', 'Disconnected');
      this.isConnected = false;
      document.getElementById('connect-btn').disabled = false;
      document.getElementById('disconnect-btn').disabled = true;
      this.animateVoiceActivity(false);
      
    } catch (error) {
      console.error('Disconnect error:', error);
      this.addToConversation('system', `Disconnect error: ${error.message}`);
    }
  }

  async loadRTVIClient() {
    // This would load the actual RTVI client library
    // For now, we'll just note that it's needed
    console.log('RTVI Client would be loaded here');
  }
}

// Initialize the voice chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new MauriceVoiceChatbot();
});