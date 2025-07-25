# Email Setup Instructions

## Current Status
The contact form currently uses a **mailto fallback** which opens the user's email client. This works but isn't ideal for user experience.

## Option 1: Formspree (Recommended - Free)

1. Go to https://formspree.io
2. Sign up with your email
3. Create a new form
4. Get your form endpoint (looks like: `https://formspree.io/f/YOUR_ID`)
5. Replace `YOUR_FORMSPREE_ID` in `js/main.js` line 174 with your actual ID

**Pros:** 
- Free tier (50 submissions/month)
- No backend required
- Spam protection
- Email notifications

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