# Voice Chatbot Architecture

## Project Overview
Professional voice and text chatbot for Maurice Rashad's consulting website, featuring real-time voice chat with Deepgram speech-to-text and Claude AI responses.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            Client Side (Browser)                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                │
│  │     Text Chat UI        │    │     Voice Chat UI       │                │
│  │                         │    │                         │                │
│  │  • Input field          │    │  • Microphone button    │                │
│  │  • Send button          │    │  • Recording indicator  │                │
│  │  • Message display      │    │  • Audio playback       │                │
│  └─────────────────────────┘    └─────────────────────────┘                │
│            │                              │                                 │
│            │ HTTP POST                    │ WebSocket                       │
│            │ /api/chat                    │ /ws                             │
│            ▼                              ▼                                 │
└─────────────────────────────────────────────────────────────────────────────┘
             │                              │
             │                              │
             ▼                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       Railway Backend (FastAPI)                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                │
│  │    Text Chat Handler    │    │   Voice Chat Handler    │                │
│  │                         │    │                         │                │
│  │  • /api/chat endpoint   │    │  • /ws WebSocket         │                │
│  │  • JSON request/response│    │  • Real-time audio       │                │
│  │  • Direct to Claude     │    │  • Pipecat framework    │                │
│  └─────────────────────────┘    └─────────────────────────┘                │
│            │                              │                                 │
│            │ HTTP API                     │ WebSocket API                   │
│            ▼                              ▼                                 │
└─────────────────────────────────────────────────────────────────────────────┘
             │                              │
             │                              │
             ▼                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         External AI Services                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                │
│  │    Anthropic Claude     │    │       Deepgram          │                │
│  │                         │    │                         │                │
│  │  • Claude 3 Haiku       │    │  • Speech-to-Text       │                │
│  │  • Fast responses       │    │  • Real-time streaming  │                │
│  │  • Cost-effective       │    │  • High accuracy        │                │
│  │  • Text generation      │    │  • Voice processing     │                │
│  └─────────────────────────┘    └─────────────────────────┘                │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Data Flow

### Text Chat Flow
1. **User Input**: User types message in text field
2. **Frontend**: JavaScript sends HTTP POST to `/api/chat`
3. **Backend**: FastAPI receives request, validates input
4. **AI Processing**: Backend calls Claude 3 Haiku API
5. **Response**: Backend returns JSON response to frontend
6. **Display**: Frontend displays response and converts to speech

### Voice Chat Flow
1. **User Input**: User clicks microphone, speaks into device
2. **Frontend**: JavaScript establishes WebSocket connection to `/ws`
3. **Audio Capture**: Browser captures audio via MediaRecorder
4. **Streaming**: Audio chunks sent to backend via WebSocket
5. **Speech Processing**: Backend forwards audio to Deepgram API
6. **Transcription**: Deepgram returns text transcription
7. **AI Processing**: Backend sends transcription to Claude API
8. **Response**: Backend sends text response back via WebSocket
9. **Audio Output**: Frontend converts response to speech and plays

## Technology Stack

### Frontend
- **HTML/CSS/JavaScript**: Core web technologies
- **WebSocket API**: Real-time communication
- **MediaRecorder API**: Audio capture
- **Speech Synthesis API**: Text-to-speech playback
- **Fetch API**: HTTP requests for text chat

### Backend
- **FastAPI**: Modern Python web framework
- **Pipecat**: Voice chat pipeline framework
- **WebSocket**: Real-time bidirectional communication
- **Docker**: Containerization for deployment
- **Railway**: Cloud hosting platform

### AI Services
- **Anthropic Claude 3 Haiku**: Fast, cost-effective text generation
- **Deepgram**: Advanced speech-to-text processing
- **System Prompt**: Customized for Maurice's consulting services

## Security Features

### API Key Management
- **Server-side Storage**: API keys stored as environment variables
- **No Client Exposure**: Keys never sent to browser
- **Secure Transmission**: All communications over HTTPS/WSS

### Data Protection
- **Encrypted Communication**: TLS encryption for all data
- **No Audio Storage**: Audio processed in real-time, not stored
- **Minimal Data Collection**: Only message content processed

## Performance Optimizations

### Response Speed
- **Claude 3 Haiku**: Fastest Claude model for sub-second responses
- **Streaming Audio**: Real-time audio processing
- **WebSocket Persistence**: Maintains connection for voice chat

### Cost Efficiency
- **Haiku Model**: Most cost-effective Claude variant
- **Streaming Processing**: Reduces latency and costs
- **Railway Scaling**: Auto-scaling based on usage

## Deployment Architecture

### Railway Platform
- **Automatic Deployment**: Git-based CI/CD
- **Environment Variables**: Secure credential management
- **Auto-scaling**: Handles traffic spikes
- **Health Monitoring**: Automatic restart on failures

### Domain Setup
- **Custom Domain**: Professional appearance
- **SSL Certificate**: Automatic HTTPS
- **CDN Integration**: Fast global delivery

## Monitoring & Analytics

### Performance Metrics
- **Response Time**: API endpoint performance
- **WebSocket Latency**: Real-time communication speed
- **Error Rates**: System reliability tracking

### Usage Analytics
- **Chat Volume**: Number of conversations
- **Feature Usage**: Voice vs text preferences
- **User Engagement**: Session duration and interactions

## Future Enhancements

### Planned Features
- **Multi-language Support**: International client support
- **Voice Cloning**: Personalized voice responses
- **Advanced Analytics**: Business intelligence dashboard
- **Mobile App**: Native mobile experience

### Technical Improvements
- **Edge Computing**: Reduced latency with edge deployment
- **Advanced AI Models**: Integration with latest AI capabilities
- **Enhanced Security**: Advanced authentication and authorization
- **Scalability**: Multi-region deployment for global reach

## File Structure

```
maurice-chat/
├── backend/
│   ├── server.py          # FastAPI application
│   ├── bot.py             # Pipecat voice chat logic
│   └── requirements.txt   # Python dependencies
├── Dockerfile             # Container configuration
├── railway.toml          # Railway deployment config
└── README.md             # Documentation

moewill.github.io/
├── js/
│   ├── chatbot-config.js  # Configuration settings
│   └── claude-chatbot.js  # Frontend implementation
├── projects/
│   └── voice-chatbot-architecture.md  # This file
└── index.html            # Main website
```

## Configuration

### Environment Variables
```bash
ANTHROPIC_API_KEY=sk-ant-...    # Claude API access
DEEPGRAM_API_KEY=...            # Speech-to-text API
WEBSOCKET_HOST=0.0.0.0          # Server binding
LOG_LEVEL=INFO                  # Logging level
```

### Frontend Configuration
```javascript
const CHATBOT_CONFIG = {
    BACKEND_URL: 'https://your-app.up.railway.app',
    ENDPOINTS: {
        HEALTH: '/health',
        CONNECT: '/connect',
        TEXT_CHAT: '/api/chat'
    }
};
```

## Cost Analysis

### Monthly Operational Costs
- **Railway Hosting**: $5-15/month (scales with usage)
- **Anthropic Claude**: $0.25 per 1K input tokens, $1.25 per 1K output tokens
- **Deepgram**: $0.0043 per minute of audio processed
- **Estimated Total**: $20-50/month for moderate usage

### Cost Optimization Strategies
- **Haiku Model**: 10x cheaper than Claude 3 Sonnet
- **Streaming Processing**: Reduces token usage
- **Efficient Prompts**: Minimizes input/output tokens
- **Caching**: Reduces redundant API calls

---

*This architecture provides a professional, scalable voice chatbot solution for Maurice Rashad's consulting website, combining modern web technologies with advanced AI capabilities for an exceptional user experience.*