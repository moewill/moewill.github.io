'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container, Grid, Stack, Flex } from '@/components/Layout/Container';
import { Button } from '@/components/UI';
import { FadeInWhenVisible } from '@/components/Animations';

const credentials = [
  {
    title: 'Technical Leadership',
    description: '10+ years leading technology initiatives for growth-stage companies',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: 'Strategic Consulting',
    description: 'Proven track record of delivering technology strategies that drive measurable ROI',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: 'Full-Stack Implementation',
    description: 'End-to-end development expertise across modern web technologies and cloud platforms',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

const achievements = [
  { metric: '$2M+', label: 'Revenue Generated' },
  { metric: '50+', label: 'Projects Delivered' },
  { metric: '99%', label: 'Client Satisfaction' },
  { metric: '10+', label: 'Years Experience' }
];

export const AboutPreview: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-nagara-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-tr from-nagara-silver/10 via-transparent to-nagara-gold/10" />
      </div>

      <Container className="relative">
        <Grid cols={2} gap="xl" className="lg:grid-cols-2 items-center">
          {/* Content */}
          <div>
            <FadeInWhenVisible>
              <Stack spacing="xl">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block"
                >
                  <span className="px-4 py-2 rounded-nagara-lg bg-nagara-silver/10 border border-nagara-silver/30 text-nagara-silver nagara-caption font-semibold">
                    About Maurice Rashad
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold nagara-headline text-nagara-white"
                >
                  Strategic Technology Leadership
                  <span className="block text-nagara-gold">for Modern Business</span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-nagara-white/80 nagara-body-large"
                >
                  With over a decade of experience in technology leadership and strategic consulting, 
                  I specialize in helping sophisticated SMB leaders transform their operations through 
                  proven technology solutions that drive measurable growth and competitive advantage.
                </motion.p>

                {/* Credentials */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-4"
                >
                  {credentials.map((credential, index) => (
                    <motion.div
                      key={credential.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-nagara-lg bg-nagara-charcoal/30 border border-nagara-white/5"
                    >
                      <div className="p-2 rounded-nagara-md bg-nagara-gold/10 text-nagara-gold mt-1">
                        {credential.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold nagara-subheadline text-nagara-white mb-1">
                          {credential.title}
                        </h4>
                        <p className="text-nagara-white/70 nagara-body">
                          {credential.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <Flex gap="md" className="flex-col sm:flex-row">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => window.location.href = '/about'}
                      className="w-full sm:w-auto"
                    >
                      Learn More About Maurice
                    </Button>
                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={() => window.location.href = '/contact'}
                      className="w-full sm:w-auto"
                    >
                      Schedule a Call
                    </Button>
                  </Flex>
                </motion.div>
              </Stack>
            </FadeInWhenVisible>
          </div>

          {/* Achievements & Visual */}
          <div>
            <FadeInWhenVisible delay={0.3}>
              <Stack spacing="xl">
                {/* Achievements Grid */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-8 rounded-nagara-xl bg-nagara-dark border border-nagara-white/10"
                >
                  <h3 className="text-xl font-bold nagara-subheadline text-nagara-white mb-8 text-center">
                    Proven Track Record
                  </h3>
                  
                  <Grid cols={2} gap="lg" className="grid-cols-2">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl lg:text-3xl font-bold nagara-subheadline text-nagara-gold mb-2">
                          {achievement.metric}
                        </div>
                        <div className="text-nagara-white/70 nagara-body">
                          {achievement.label}
                        </div>
                      </motion.div>
                    ))}
                  </Grid>
                </motion.div>

                {/* Quote/Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-6 rounded-nagara-lg bg-nagara-charcoal/30 border border-nagara-white/10"
                >
                  <div className="text-nagara-gold mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  <blockquote className="text-nagara-white/90 nagara-body-large italic mb-4">
                    &ldquo;Maurice transformed our technology infrastructure and helped us scale from $500K to $2M in annual revenue. His strategic approach and hands-on implementation were game-changing.&rdquo;
                  </blockquote>
                  <div className="text-nagara-white/70 nagara-body">
                    <div className="font-semibold">Sarah Chen</div>
                    <div>CEO, TechFlow Solutions</div>
                  </div>
                </motion.div>
              </Stack>
            </FadeInWhenVisible>
          </div>
        </Grid>
      </Container>
    </section>
  );
};