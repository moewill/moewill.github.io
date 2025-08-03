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
        VOLUME: 0.8,
        // Deepgram voice model for more human-like speech
        DEEPGRAM_MODEL: 'aura-asteria-en', // Natural, conversational female voice
        // Alternative options: 'aura-luna-en' (warm female), 'aura-stella-en' (friendly female)
        // 'aura-athena-en' (professional female), 'aura-hera-en' (mature female)
        DEEPGRAM_SETTINGS: {
            model: 'nova-2',
            language: 'en-US',
            smart_format: true,
            punctuate: true,
            utterance_end_ms: 1000,
            vad_turnoff: 500
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHATBOT_CONFIG;
}