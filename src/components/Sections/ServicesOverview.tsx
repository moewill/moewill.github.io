'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container, Grid, Stack } from '@/components/Layout/Container';
import { Card } from '@/components/UI';
import { FadeInWhenVisible } from '@/components/Animations';

const services = [
  {
    href: '/services/strategic-consulting',
    title: 'Strategic Technical Consulting',
    price: '$99/month',
    description: 'Comprehensive technology strategy and roadmap development for sophisticated business leaders.',
    features: [
      'Technology Assessment & Strategy',
      'Digital Transformation Roadmap',
      'Vendor Selection & Management',
      'Risk Assessment & Mitigation'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    href: '/services/implementation',
    title: 'Complete Implementation',
    price: '$75/hour',
    description: 'End-to-end technical implementation services with hands-on development and deployment.',
    features: [
      'Custom Software Development',
      'System Integration & APIs',
      'Cloud Infrastructure Setup',
      'Performance Optimization'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    href: '/services/training',
    title: 'Executive Training',
    price: '$99/workshop',
    description: 'Specialized technology training programs designed for executive teams and decision makers.',
    features: [
      'Executive Technology Briefings',
      'Digital Leadership Workshops',
      'Team Training Programs',
      'Change Management Support'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    href: '/services/ai-lead-generation',
    title: 'Revenue Acceleration',
    price: '$149/month',
    description: 'AI-powered lead generation and revenue acceleration systems for sustained business growth.',
    features: [
      'AI Lead Generation Systems',
      'Sales Process Automation',
      'Customer Journey Optimization',
      'Revenue Analytics & Insights'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export const ServicesOverview: React.FC = () => {
  return (
    <section id="services" className="relative py-20 lg:py-32 bg-nagara-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-nagara-gold/10 via-transparent to-nagara-silver/10" />
      </div>

      <Container className="relative">
        <FadeInWhenVisible>
          <div className="text-center mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-nagara-lg bg-nagara-gold/10 border border-nagara-gold/30 text-nagara-gold nagara-caption font-semibold">
                Our Services
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold nagara-headline text-nagara-white mb-6"
            >
              Strategic Solutions for
              <span className="block text-nagara-gold">Modern Business Leaders</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl mx-auto"
            >
              Comprehensive technology services designed to accelerate growth and drive innovation for sophisticated SMB clients.
            </motion.p>
          </div>
        </FadeInWhenVisible>

        <Grid cols={2} gap="lg" className="lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Link href={service.href} className="block group">
                <Card className="h-full p-8 hover:border-nagara-gold/30 transition-all duration-500 group-hover:bg-nagara-charcoal/50">
                  <Stack spacing="lg">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-nagara-lg bg-nagara-gold/10 text-nagara-gold group-hover:bg-nagara-gold/20 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-nagara-gold font-bold nagara-subheadline">
                          {service.price}
                        </div>
                        <div className="text-nagara-white/60 nagara-caption">
                          Starting at
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold nagara-subheadline text-nagara-white mb-4 group-hover:text-nagara-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-nagara-white/80 nagara-body mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-nagara-gold group-hover:bg-nagara-gold/80 transition-colors duration-300" />
                          <span className="text-nagara-white/70 nagara-body">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4 flex items-center justify-between border-t border-nagara-white/10">
                      <span className="text-nagara-gold font-semibold nagara-body group-hover:text-nagara-gold/80 transition-colors duration-300">
                        Learn More
                      </span>
                      <motion.svg
                        className="w-5 h-5 text-nagara-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </div>
                  </Stack>
                </Card>
              </Link>
            </motion.div>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <FadeInWhenVisible delay={0.6}>
          <div className="text-center mt-16 lg:mt-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-12 rounded-nagara-xl bg-nagara-charcoal border border-nagara-white/10"
            >
              <h3 className="text-2xl lg:text-3xl font-bold nagara-subheadline text-nagara-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-nagara-white/80 nagara-body-large mb-8 max-w-2xl mx-auto">
                Schedule a consultation to discuss your specific needs and discover how our strategic technology solutions can accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-nagara-lg bg-nagara-gold text-nagara-black font-semibold nagara-body hover:bg-nagara-gold/90 transition-colors duration-300"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-nagara-lg border border-nagara-white/20 text-nagara-white font-semibold nagara-body hover:border-nagara-gold/50 hover:text-nagara-gold transition-colors duration-300"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </FadeInWhenVisible>
      </Container>
    </section>
  );
};