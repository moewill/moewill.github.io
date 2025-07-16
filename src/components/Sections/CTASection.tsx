'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container, Grid, Stack, Flex } from '@/components/Layout/Container';
import { Button } from '@/components/UI';
import { FadeInWhenVisible } from '@/components/Animations';

const benefits = [
  {
    title: 'Strategic Clarity',
    description: 'Get clear direction on technology investments and digital transformation priorities.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: 'Proven ROI',
    description: 'Technology solutions that deliver measurable business results and competitive advantage.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'Expert Implementation',
    description: 'End-to-end execution with hands-on development and seamless deployment.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-nagara-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-nagara-gold/10 via-transparent to-nagara-silver/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-nagara-gold blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-5">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-nagara-silver blur-3xl" />
        </div>
      </div>

      <Container className="relative">
        <div className="text-center mb-16 lg:mb-20">
          <FadeInWhenVisible>
            <Stack spacing="lg" className="items-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-nagara-lg bg-nagara-gold/10 border border-nagara-gold/30 text-nagara-gold nagara-caption font-semibold">
                  Ready to Get Started?
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold nagara-headline text-nagara-white max-w-4xl"
              >
                Transform Your Business with
                <span className="block text-nagara-gold">Strategic Technology</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl"
              >
                Schedule a consultation to discover how our proven technology solutions can accelerate your growth, streamline operations, and drive sustainable competitive advantage.
              </motion.p>
            </Stack>
          </FadeInWhenVisible>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16 lg:mb-20">
          <Grid cols={3} gap="lg" className="lg:grid-cols-3 md:grid-cols-1">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-nagara-xl bg-nagara-charcoal/20 border border-nagara-white/5"
              >
                <div className="inline-flex p-4 rounded-nagara-lg bg-nagara-gold/10 text-nagara-gold mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold nagara-subheadline text-nagara-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-nagara-white/70 nagara-body">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </Grid>
        </div>

        {/* Main CTA */}
        <FadeInWhenVisible delay={0.6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 lg:p-12 rounded-nagara-xl bg-nagara-charcoal border border-nagara-white/10 overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-nagara-gold/5 to-nagara-silver/5" />
            
            <div className="relative">
              <Grid cols={2} gap="xl" className="lg:grid-cols-2 items-center">
                {/* Content */}
                <div>
                  <Stack spacing="lg">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold nagara-subheadline text-nagara-white mb-4">
                        Book Your Strategic Consultation
                      </h3>
                      <p className="text-nagara-white/80 nagara-body-large mb-6">
                        Get personalized insights and a custom technology roadmap designed specifically for your business goals and growth objectives.
                      </p>
                    </div>

                    {/* Consultation details */}
                    <div className="space-y-3">
                      {[
                        '60-minute strategic technology assessment',
                        'Custom roadmap with prioritized recommendations',
                        'ROI projections and implementation timeline',
                        'Complimentary follow-up session included'
                      ].map((detail, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-nagara-gold" />
                          <span className="text-nagara-white/70 nagara-body">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Stack>
                </div>

                {/* CTA */}
                <div className="text-center lg:text-right">
                  <Stack spacing="lg" className="items-center lg:items-end">
                    <div className="p-6 rounded-nagara-lg bg-nagara-gold/10 border border-nagara-gold/20">
                      <div className="text-3xl font-bold nagara-subheadline text-nagara-gold mb-2">
                        $0
                      </div>
                      <div className="text-nagara-white/80 nagara-body">
                        Initial Consultation
                      </div>
                      <div className="text-nagara-white/60 nagara-caption mt-1">
                        (Usually $299)
                      </div>
                    </div>

                    <Flex gap="md" className="flex-col w-full lg:w-auto">
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={() => window.location.href = '/contact'}
                        className="w-full lg:w-auto text-center"
                      >
                        Schedule Free Consultation
                      </Button>
                      <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => window.location.href = '/services'}
                        className="w-full lg:w-auto text-center"
                      >
                        View Services & Pricing
                      </Button>
                    </Flex>

                    <div className="text-nagara-white/60 nagara-caption text-center lg:text-right">
                      <div>Available within 48 hours</div>
                      <div>No commitment required</div>
                    </div>
                  </Stack>
                </div>
              </Grid>
            </div>
          </motion.div>
        </FadeInWhenVisible>

        {/* Trust indicators */}
        <FadeInWhenVisible delay={0.8}>
          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center items-center gap-8 text-nagara-white/60 nagara-caption"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-nagara-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>99% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-nagara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-nagara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Confidential & Secure</span>
              </div>
            </motion.div>
          </div>
        </FadeInWhenVisible>
      </Container>
    </section>
  );
};