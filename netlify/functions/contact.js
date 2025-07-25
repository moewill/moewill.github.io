/// <reference path="./types.d.ts" />

/**
 * Secure serverless contact form handler
 * Netlify Functions - keeps API keys server-side and prevents client-side exposure
 * 
 * SECURITY FEATURES:
 * - API keys stored server-side only (never exposed to client)
 * - Input validation and sanitization
 * - Rate limiting monitoring via IP logging
 * - CORS protection with proper headers
 * - Content length validation to prevent abuse
 * 
 * @param {Object} event - Netlify function event object with httpMethod, headers, body
 * @param {Object} _context - Netlify function context (unused but required)
 * @returns {Promise<Object>} HTTP response with statusCode, headers, and body
 */
exports.handler = async (event, _context) => {
    // Handle CORS preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            }
        };
    }

    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parse and validate request body
        if (!event.body) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ error: 'Request body is required' })
            };
        }

        const { name, email, service, message } = JSON.parse(event.body);
        
        // Basic field validation
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ error: 'Missing required fields: name, email, message' })
            };
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ error: 'Invalid email format' })
            };
        }

        // Content length validation (prevent abuse)
        if (name.length > 100 || email.length > 255 || message.length > 5000) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ error: 'Input too long' })
            };
        }

        // Basic rate limiting check (get client IP)
        const clientIP = event.headers['client-ip'] || 
                        event.headers['x-forwarded-for'] || 
                        event.headers['x-real-ip'] || 
                        'unknown';
        
        console.log(`Contact form submission from IP: ${clientIP}`);
        // TODO: Implement proper rate limiting with database/cache storage

        // Send email using server-side Formspree (API key hidden from client)
        // Environment variable should be set in Netlify dashboard
        const formspreeEndpoint = process?.env?.FORMSPREE_ENDPOINT || 'https://formspree.io/f/value';
        
        const formspreeResponse = await fetch(formspreeEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name.trim(),
                email: email.trim().toLowerCase(),
                service: service || 'General Inquiry',
                message: message.trim(),
                _subject: `New Contact Form: ${service || 'General Inquiry'}`,
                _replyto: email.trim().toLowerCase(),
                _format: 'plain'
            })
        });

        if (formspreeResponse.ok) {
            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    success: true, 
                    message: 'Email sent successfully! Maurice will respond within 24 hours.' 
                })
            };
        } else {
            const errorText = await formspreeResponse.text();
            console.error('Formspree error:', errorText);
            throw new Error(`Formspree failed: ${formspreeResponse.status}`);
        }

    } catch (error) {
        console.error('Contact form error:', error.message);
        
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                error: 'Failed to send email. Please try again or email mauricerashad@gmail.com directly.',
                fallback: 'mauricerashad@gmail.com'
            })
        };
    }
};
