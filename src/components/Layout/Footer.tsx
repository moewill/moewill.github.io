'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container, Grid, Stack, Flex } from './Container';
import { FadeInWhenVisible } from '@/components/Animations';

const footerSections = {
  services: {
    title: 'Services',
    links: [
      { href: '/services/strategic-consulting', label: 'Strategic Technical Consulting' },
      { href: '/services/implementation', label: 'Complete Implementation' },
      { href: '/services/training', label: 'Executive Technology Training' },
      { href: '/services/ai-lead-generation', label: 'Revenue Acceleration Systems' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Maurice' },
      { href: '/contact', label: 'Contact' },
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/testimonials', label: 'Testimonials' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { href: '/blog', label: 'Technical Blog' },
      { href: '/guides', label: 'Implementation Guides' },
      { href: '/faq', label: 'FAQ' },
      { href: '/support', label: 'Support' },
    ],
  },
};

const socialLinks = [
  { 
    href: 'https://linkedin.com/in/mauricerashad', 
    label: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  { 
    href: 'https://github.com/mauricerashad', 
    label: 'GitHub',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  { 
    href: 'https://twitter.com/mauricerashad', 
    label: 'Twitter',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    )
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-nagara-dark border-t border-nagara-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-nagara-gold/20 via-transparent to-nagara-silver/20" />
      </div>
      
      <Container className="relative">
        {/* Main Footer Content */}
        <FadeInWhenVisible>
          <div className="py-16 lg:py-20">
            <Grid cols={4} gap="lg" className="lg:grid-cols-4 md:grid-cols-2">
              {/* Brand Section */}
              <div className="lg:col-span-1 md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold nagara-headline text-nagara-white mb-4">
                    Maurice Rashad
                  </h3>
                  <p className="text-nagara-white/80 nagara-body-large mb-6 max-w-sm">
                    Accelerating business growth through strategic technical solutions for sophisticated SMB clients.
                  </p>
                  
                  {/* Social Links */}
                  <Flex gap="md" className="mb-8">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-nagara-lg bg-nagara-charcoal hover:bg-nagara-gold hover:text-nagara-black transition-all duration-300 text-nagara-white/80 hover:text-nagara-black group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </Flex>
                </motion.div>
              </div>

              {/* Footer Sections */}
              {Object.entries(footerSections).map(([key, section], sectionIndex) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
                >
                  <h4 className="text-lg font-semibold nagara-subheadline text-nagara-white mb-6">
                    {section.title}
                  </h4>
                  <Stack spacing="sm">
                    {section.links.map((link, linkIndex) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.1 * sectionIndex + 0.05 * linkIndex 
                        }}
                      >
                        <Link
                          href={link.href}
                          className="text-nagara-white/70 hover:text-nagara-gold transition-colors duration-300 nagara-body block"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </Stack>
                </motion.div>
              ))}
            </Grid>
          </div>
        </FadeInWhenVisible>

        {/* Bottom Section */}
        <FadeInWhenVisible delay={0.3}>
          <div className="py-8 border-t border-nagara-white/10">
            <Flex 
              justify="between" 
              align="center" 
              className="flex-col md:flex-row gap-4"
            >
              <div className="text-nagara-white/60 nagara-body text-center md:text-left">
                <p>
                  © {new Date().getFullYear()} Maurice Rashad. All rights reserved.
                </p>
              </div>
              
              <Flex gap="lg" className="flex-wrap justify-center md:justify-end">
                <Link
                  href="/privacy"
                  className="text-nagara-white/60 hover:text-nagara-gold transition-colors duration-300 nagara-body"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-nagara-white/60 hover:text-nagara-gold transition-colors duration-300 nagara-body"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-nagara-white/60 hover:text-nagara-gold transition-colors duration-300 nagara-body"
                >
                  Cookie Policy
                </Link>
              </Flex>
            </Flex>
          </div>
        </FadeInWhenVisible>
      </Container>
    </footer>
  );
};