# Email Setup Instructions

## ⚠️ SECURITY WARNING
**NEVER put API keys or form IDs directly in client-side JavaScript!** Hackers can easily steal them from your source code and abuse your email service.

## Current Status
The contact form uses a **secure serverless approach** with mailto fallback. API keys are hidden server-side.

## SECURE Option 1: Netlify Functions (Recommended)

**Already implemented!** Just need to:
1. Go to https://formspree.io
2. Sign up with your email  
3. Create a new form
4. Get your form endpoint ID
5. Replace `YOUR_ACTUAL_FORMSPREE_ID` in `netlify/functions/contact.js` line 37
6. Deploy to Netlify (automatically handles serverless functions)

**Security Benefits:**
- ✅ API keys hidden on server
- ✅ Rate limiting possible
- ✅ Input validation
- ✅ CORS protection
- ✅ No client-side exposure

## Option 2: EmailJS (More features)

1. Go to https://emailjs.com
2. Sign up and create a service
3. Add this script to your HTML head:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
4. Initialize EmailJS and replace service/template IDs in the JavaScript

**Pros:**
- More customization
- Templates
- Multiple email services

## Option 3: Netlify Forms (If hosting on Netlify)

1. Add `netlify` attribute to form
2. Deploy to Netlify
3. Automatic form handling

## Quick Fix (5 minutes)

**For Formspree:**
1. Sign up at formspree.io
2. Create form, get endpoint
3. Replace line 174 in `js/main.js`:
```javascript
const formspreeEndpoint = 'https://formspree.io/f/YOUR_ACTUAL_ID';
```

## Current Fallback
Right now it opens the user's email client with pre-filled content. This works but requires users to manually send the email.