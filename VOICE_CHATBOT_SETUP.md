# Voice Chatbot Setup Instructions

## ✅ Completed
- ✅ Backend implementation with FastAPI + Pipecat
- ✅ Frontend voice and text chat integration
- ✅ Secure API key management (server-side)
- ✅ Docker containerization
- ✅ Railway deployment configuration
- ✅ Architecture documentation
- ✅ Repository cleanup

## 🎯 Final Steps to Complete

### 1. Deploy to Railway
1. **Push code to GitHub** (already done)
2. **Create Railway account**: [railway.app](https://railway.app)
3. **Deploy from GitHub**: Select `moewill/maurice-chat` repository
4. **Set environment variables** in Railway dashboard:
   ```
   ANTHROPIC_API_KEY=sk-ant-your-key-here
   DEEPGRAM_API_KEY=your-deepgram-key-here
   WEBSOCKET_HOST=0.0.0.0
   ```

### 2. Get API Keys
- **Anthropic**: [console.anthropic.com](https://console.anthropic.com) → API Keys
- **Deepgram**: [console.deepgram.com](https://console.deepgram.com) → API Keys

### 3. Update Website Configuration
1. **Get Railway URL**: After deployment, copy your Railway app URL
2. **Update config file**: Edit `js/chatbot-config.js`
   ```javascript
   const CHATBOT_CONFIG = {
       BACKEND_URL: 'https://your-actual-railway-url.up.railway.app',
       // ... rest of config
   };
   ```
3. **Commit and push** the updated configuration

### 4. Test the Integration
1. **Visit your website**: [moewill.github.io](https://moewill.github.io)
2. **Test text chat**: Click chat button, type a message
3. **Test voice chat**: Click microphone icon, speak a question
4. **Verify responses**: Should get AI responses about your services

## 🔧 Troubleshooting

### If Railway deployment fails:
- Check Railway logs in dashboard
- Verify all environment variables are set
- Ensure API keys are valid and have credits

### If chat doesn't work:
- Check browser console for errors
- Verify Railway URL is correct in config
- Test backend health endpoint: `https://your-app.up.railway.app/health`

### If voice chat doesn't work:
- Ensure microphone permissions are granted
- Try different browsers (Chrome works best)
- Check WebSocket connection in browser dev tools

## 📊 Expected Costs
- **Railway**: $5-15/month (free tier available)
- **Anthropic**: ~$0.25-1.25 per 1K tokens (Haiku pricing)
- **Deepgram**: ~$0.004 per minute of audio
- **Total**: ~$20-50/month for moderate usage

## 🎉 Success Indicators
- ✅ Railway deployment shows "Healthy" status
- ✅ `/health` endpoint returns 200 OK
- ✅ Text chat responds with AI-generated content
- ✅ Voice chat processes speech and responds
- ✅ No console errors in browser

## 🚀 Next Steps After Setup
1. **Monitor usage**: Check Railway dashboard for metrics
2. **Optimize prompts**: Refine AI responses for your services
3. **Add analytics**: Track user interactions
4. **Mobile testing**: Ensure works on all devices
5. **Performance tuning**: Optimize for your traffic patterns

## 📞 Support
If you encounter issues:
1. Check Railway logs first
2. Verify API keys are working independently
3. Test with curl commands provided in documentation
4. Review architecture diagram for understanding

---

*Once completed, you'll have a professional voice chatbot that showcases your AI integration expertise and provides 24/7 client support!*