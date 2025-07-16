'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/UI';
import { Container, Flex, Stack } from '@/components/Layout/Container';

export const HeroSection: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-nagara-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-nagara-gold/5 via-transparent to-nagara-silver/5" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-nagara-gold blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-nagara-silver blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Stack spacing="xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-nagara-lg bg-nagara-gold/10 border border-nagara-gold/30 text-nagara-gold nagara-caption font-semibold">
                  Strategic Technical Leadership
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold nagara-headline text-nagara-white leading-tight"
              >
                Transform Your Business
                <span className="block text-nagara-gold">
                  Through Technology
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl md:text-2xl text-nagara-white/80 nagara-body-large max-w-2xl"
              >
                Strategic technical consulting and implementation services for sophisticated SMB leaders ready to accelerate growth through proven technology solutions.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Flex gap="md" className="flex-col sm:flex-row">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => window.location.href = '/contact'}
                    className="w-full sm:w-auto"
                  >
                    Schedule Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={scrollToServices}
                    className="w-full sm:w-auto"
                  >
                    Explore Services
                  </Button>
                </Flex>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="pt-8 border-t border-nagara-white/10"
              >
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold nagara-subheadline text-nagara-gold">
                      99%
                    </div>
                    <div className="text-nagara-white/70 nagara-body">
                      Client Satisfaction
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold nagara-subheadline text-nagara-gold">
                      10+
                    </div>
                    <div className="text-nagara-white/70 nagara-body">
                      Years Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold nagara-subheadline text-nagara-gold">
                      $2M+
                    </div>
                    <div className="text-nagara-white/70 nagara-body">
                      Revenue Generated
                    </div>
                  </div>
                </div>
              </motion.div>
            </Stack>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Geometric Elements */}
              <div className="absolute inset-0 rounded-nagara-xl bg-gradient-to-br from-nagara-gold/20 to-nagara-silver/20 backdrop-blur-sm border border-nagara-white/10" />
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 w-16 h-16 rounded-nagara-lg bg-nagara-gold/30 backdrop-blur-sm"
              />
              
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-nagara-silver/40 backdrop-blur-sm"
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-1/2 right-1/6 w-8 h-8 rounded-nagara-sm bg-nagara-gold/50"
              />

              {/* Central Content */}
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-nagara-xl bg-nagara-gold/20 flex items-center justify-center">
                    <svg className="w-12 h-12 text-nagara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-nagara-white/90 nagara-body font-semibold">
                    Strategic Innovation
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToServices}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-3 rounded-nagara-lg border border-nagara-white/20 hover:border-nagara-gold/50 transition-colors duration-300"
          aria-label="Scroll to services"
        >
          <svg className="w-5 h-5 text-nagara-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
};