// Secure serverless contact form handler
// Netlify Functions - keeps API keys server-side

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { name, email, service, message } = JSON.parse(event.body);
        
        // Basic validation
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required fields' })
            };
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid email format' })
            };
        }

        // Rate limiting (simple implementation)
        const clientIP = event.headers['client-ip'] || event.headers['x-forwarded-for'];
        // TODO: Implement proper rate limiting with database/cache

        // Send email using server-side Formspree (API key hidden)
        const formspreeResponse = await fetch('https://formspree.io/f/YOUR_ACTUAL_FORMSPREE_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                service,
                message,
                _subject: `New Contact Form: ${service || 'General Inquiry'}`,
                _replyto: email
            })
        });

        if (formspreeResponse.ok) {
            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type'
                },
                body: JSON.stringify({ 
                    success: true, 
                    message: 'Email sent successfully' 
                })
            };
        } else {
            throw new Error('Formspree failed');
        }

    } catch (error) {
        console.error('Contact form error:', error);
        
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ 
                error: 'Failed to send email',
                fallback: 'Please email mauricerashad@gmail.com directly'
            })
        };
    }
};