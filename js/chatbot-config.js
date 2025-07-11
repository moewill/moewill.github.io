// Chatbot Configuration
// Update this file with your actual Railway deployment URL
const CHATBOT_CONFIG = {
    // Replace with your actual Railway URL after deployment
    // Example: 'https://maurice-chat-production.up.railway.app'
    BACKEND_URL: 'https://maurice-chat-production.up.railway.app',
    
    // WebSocket URL for voice chat (usually same domain with /ws)
    get WS_URL() {
        return this.BACKEND_URL.replace('https://', 'wss://') + '/ws';
    },
    
    // API endpoints
    ENDPOINTS: {
        HEALTH: '/health',
        CONNECT: '/connect',
        TEXT_CHAT: '/api/chat'
    },
    
    // Voice settings
    VOICE_SETTINGS: {
        ENABLED: true,
        RATE: 0.9,
        PITCH: 1.0,
        VOLUME: 0.8
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHATBOT_CONFIG;
}