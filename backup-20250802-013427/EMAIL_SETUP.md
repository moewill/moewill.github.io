# Email Setup for Contact Form

## Overview
Your contact form is currently set up with client-side validation and a success message. To enable actual email sending, you'll need to implement a backend service.

## Option 1: Netlify Forms (Recommended for GitHub Pages)
If you deploy to Netlify instead of GitHub Pages:

1. **Add form attributes to your contact form:**
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

2. **Add hidden input for form name:**
   ```html
   <input type="hidden" name="form-name" value="contact">
   ```

3. **Deploy to Netlify** - Forms will automatically work with email notifications

## Option 2: Formspree (Works with GitHub Pages)
1. **Sign up at [formspree.io](https://formspree.io)**
2. **Get your form endpoint** (e.g., `https://formspree.io/f/xpznvwkr`)
3. **Update your form action:**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## Option 3: EmailJS (Client-side solution)
1. **Sign up at [emailjs.com](https://www.emailjs.com/)**
2. **Create email template**
3. **Add EmailJS SDK to your HTML:**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
4. **Update JavaScript in main.js:**
   ```javascript
   // Replace the current form handler with:
   const form = document.querySelector('form');
   if (form) {
       form.addEventListener('submit', function(e) {
           e.preventDefault();
           
           emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_PUBLIC_KEY')
               .then(function() {
                   alert('Thank you for your message! I\'ll get back to you within 24 hours.');
                   form.reset();
               }, function(error) {
                   alert('Sorry, something went wrong. Please try again or email me directly.');
                   console.error('EmailJS error:', error);
               });
       });
   }
   ```

## Option 4: Serverless Function (Vercel/Netlify)
Create an API endpoint that handles form submissions and sends emails via SendGrid, Mailgun, or similar service.

## Current Form Fields
Your form captures:
- Name
- Email
- Service Interest (Tech Chat, Done For You Tech Services, Expert Workshops)
- Message

## Recommended: Formspree for Simplicity
For GitHub Pages deployment, Formspree is the easiest option:
1. Free tier allows 50 submissions/month
2. No server setup required
3. Spam protection included
4. Email notifications automatic

## Security Notes
- Never expose API keys in client-side code
- Use environment variables for sensitive data
- Implement rate limiting to prevent spam
- Add CAPTCHA for additional protection

## Testing
After implementing any solution:
1. Test with valid email addresses
2. Check spam folders
3. Verify all form fields are captured
4. Test error handling scenarios