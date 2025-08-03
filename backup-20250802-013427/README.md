# Maurice Rashad - Tech Services Website

A modern, interactive website for Maurice Rashad's technology consulting business, featuring an AI-powered chatbot connected to resume data.

## 🚀 Features

- **Modern Design**: Responsive design with Tailwind CSS, gradient backgrounds, and smooth animations
- **Interactive Elements**: Hover effects, floating animations, and dynamic content
- **AI Chatbot**: Claude-powered assistant that can answer questions about services and experience
- **Modular Structure**: Separated CSS, JavaScript, and data files following best practices
- **Mobile-First**: Fully responsive design optimized for all devices

## 📁 File Structure

```
moewill.github.io/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Custom styles and animations
├── js/
│   ├── main.js            # Main website functionality
│   └── claude-chatbot.js  # Enhanced Claude AI chatbot
├── data/
│   └── resume.json        # Structured resume/service data
└── README.md              # This file
```

## 🤖 Chatbot Setup

The website includes an AI-powered chatbot that uses Claude API to answer questions about Maurice's services and experience.

### To use the chatbot:

1. **Get a Claude API Key**:
   - Visit [Anthropic's website](https://www.anthropic.com/)
   - Sign up and obtain an API key (starts with `sk-ant-`)

2. **Configure the Chatbot**:
   - Click the chat icon in the bottom-right corner
   - Enter your Claude API key when prompted
   - The key is stored locally in your browser

3. **Features**:
   - Answers questions about services, pricing, and experience
   - Connected to structured resume data
   - Fallback responses when API is unavailable
   - Professional, context-aware responses

## 🎨 Services Offered

### Strategic Consulting
- **Price**: $100/month
- **Includes**: 2x 1-hour calls, strategic planning, technology roadmaps

### Technology Services
- **Price**: $75/hour
- **Includes**: Custom automation, web development, hosting solutions

### Expert Workshops
- **Price**: $99/workshop
- **Topics**: AI agents, cybersecurity, web development, cloud technologies

## 🛠️ Technologies Used

- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Icons**: Font Awesome
- **AI**: Claude API (Anthropic)
- **Animation**: Custom CSS animations and transitions
- **Design**: Modern gradient designs, glassmorphism effects

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px-1199px)
- Mobile (320px-767px)

## 🔧 Customization

### Updating Services
Edit `data/resume.json` to modify service information, pricing, and experience details.

### Styling Changes
Modify `css/styles.css` for custom styles. The design uses CSS custom properties for easy color scheme updates.

### Chatbot Responses
The chatbot uses the data in `resume.json` to provide accurate responses. Update this file to improve chatbot knowledge.

## 📈 Performance Features

- **Fast Loading**: Optimized assets and minimal dependencies
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Accessibility**: ARIA labels and keyboard navigation support
- **Progressive Enhancement**: Works with JavaScript disabled

## 🚀 Deployment

This is a static website that can be deployed to:
- GitHub Pages (recommended for github.io domain)
- Netlify
- Vercel
- Any static hosting service

## 📞 Contact

**Maurice Rashad**
- Email: mauricerashad@gmail.com
- Response Time: Within 24 hours
- Availability: Global, Remote-First

## 📄 License

© 2024 Maurice Rashad. All rights reserved.
