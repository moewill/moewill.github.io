'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MainLayout } from '@/components/Layout';
import { Container, Grid, Stack, Flex } from '@/components/Layout/Container';
import { Button, Card } from '@/components/UI';
import { FadeInWhenVisible, ParallaxSection } from '@/components/Animations';

const services = [
  {
    id: 'strategic-consulting',
    href: '/services/strategic-consulting',
    title: 'Strategic Technical Consulting',
    price: '$99',
    period: 'per month',
    subtitle: 'Technology Leadership & Strategy',
    description: 'Comprehensive technology strategy and roadmap development for sophisticated business leaders seeking competitive advantage through strategic technology investments.',
    features: [
      'Technology Assessment & Strategy Development',
      'Digital Transformation Roadmap Creation',
      'Vendor Selection & Technology Evaluation',
      'Risk Assessment & Mitigation Planning',
      'Executive Technology Briefings',
      'ROI Analysis & Investment Prioritization'
    ],
    benefits: [
      'Clear strategic direction for technology investments',
      'Reduced technology risks and implementation costs',
      'Accelerated time-to-market for digital initiatives',
      'Enhanced competitive positioning through technology'
    ],
    deliverables: [
      'Comprehensive Technology Assessment Report',
      'Strategic Roadmap with Prioritized Initiatives',
      'Vendor Evaluation & Recommendation Matrix',
      'Risk Assessment & Mitigation Strategies'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 'implementation',
    href: '/services/implementation',
    title: 'Complete Implementation Services',
    price: '$75',
    period: 'per hour',
    subtitle: 'End-to-End Technical Development',
    description: 'Hands-on technical implementation services with full-stack development, system integration, and seamless deployment for mission-critical business applications.',
    features: [
      'Custom Software Development & Architecture',
      'API Development & System Integration',
      'Cloud Infrastructure Setup & Management',
      'Database Design & Optimization',
      'Performance Optimization & Scaling',
      'Security Implementation & Compliance'
    ],
    benefits: [
      'Rapid development with proven methodologies',
      'Scalable architecture designed for growth',
      'Seamless integration with existing systems',
      'Enterprise-grade security and performance'
    ],
    deliverables: [
      'Production-Ready Application Deployment',
      'Complete Technical Documentation',
      'Performance Monitoring & Analytics',
      'Training & Knowledge Transfer Sessions'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 'training',
    href: '/services/training',
    title: 'Executive Technology Training',
    price: '$99',
    period: 'per workshop',
    subtitle: 'Leadership Development & Education',
    description: 'Specialized technology training programs designed for executive teams and decision makers to enhance digital leadership capabilities and strategic thinking.',
    features: [
      'Executive Technology Briefings & Workshops',
      'Digital Leadership Development Programs',
      'Team Training & Skill Development',
      'Change Management & Adoption Strategies',
      'Technology Trend Analysis & Insights',
      'Strategic Decision-Making Frameworks'
    ],
    benefits: [
      'Enhanced technology leadership capabilities',
      'Improved decision-making for tech investments',
      'Accelerated team adoption of new technologies',
      'Reduced resistance to digital transformation'
    ],
    deliverables: [
      'Customized Training Curriculum',
      'Executive Briefing Materials',
      'Skills Assessment & Development Plans',
      'Ongoing Support & Consultation'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 'ai-lead-generation',
    href: '/services/ai-lead-generation',
    title: 'Revenue Acceleration Systems',
    price: '$149',
    period: 'per month',
    subtitle: 'AI-Powered Growth & Lead Generation',
    description: 'Advanced AI-powered lead generation and revenue acceleration systems designed to drive sustainable business growth through intelligent automation and optimization.',
    features: [
      'AI Lead Generation & Qualification Systems',
      'Sales Process Automation & Optimization',
      'Customer Journey Mapping & Enhancement',
      'Revenue Analytics & Performance Tracking',
      'Conversion Rate Optimization',
      'Predictive Analytics & Forecasting'
    ],
    benefits: [
      'Increased lead quality and conversion rates',
      'Automated lead nurturing and qualification',
      'Data-driven revenue optimization',
      'Scalable growth systems and processes'
    ],
    deliverables: [
      'AI Lead Generation System Implementation',
      'Custom Sales Automation Workflows',
      'Revenue Analytics Dashboard',
      'Performance Optimization Reports'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <MainLayout>
      <div ref={containerRef}>
        {/* Hero Section with Parallax */}
        <ParallaxSection className="relative min-h-screen flex items-center bg-nagara-black overflow-hidden">
          {/* Background Elements */}
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-nagara-gold/10 via-transparent to-nagara-silver/10" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-nagara-gold/20 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-nagara-silver/20 blur-3xl transform translate-x-1/2 translate-y-1/2" />
          </motion.div>

          <Container className="relative z-10">
            <div className="text-center">
              <FadeInWhenVisible>
                <Stack spacing="xl" className="items-center">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block"
                  >
                    <span className="px-4 py-2 rounded-nagara-lg bg-nagara-gold/10 border border-nagara-gold/30 text-nagara-gold nagara-caption font-semibold">
                      Our Services
                    </span>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold nagara-headline text-nagara-white leading-tight max-w-5xl"
                  >
                    Strategic Technology Solutions for
                    <span className="block text-nagara-gold">
                      Modern Business Leaders
                    </span>
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-nagara-white/80 nagara-body-large max-w-4xl"
                  >
                    Comprehensive consulting, implementation, and training services designed to accelerate growth and drive innovation for sophisticated SMB clients.
                  </motion.p>

                  {/* Quick Navigation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap gap-4 justify-center"
                  >
                    {services.map((service, index) => (
                      <motion.a
                        key={service.id}
                        href={`#${service.id}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        className="px-4 py-2 rounded-nagara-lg bg-nagara-charcoal/50 border border-nagara-white/10 text-nagara-white/80 hover:text-nagara-gold hover:border-nagara-gold/30 transition-all duration-300 nagara-body"
                      >
                        {service.title}
                      </motion.a>
                    ))}
                  </motion.div>
                </Stack>
              </FadeInWhenVisible>
            </div>
          </Container>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => {
                const firstService = document.getElementById(services[0].id);
                if (firstService) {
                  firstService.scrollIntoView({ behavior: 'smooth' });
                }
              }}
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
        </ParallaxSection>

        {/* Services Detail Sections */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`relative py-20 lg:py-32 ${
              index % 2 === 0 ? 'bg-nagara-dark' : 'bg-nagara-black'
            }`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className={`absolute inset-0 bg-gradient-to-br ${
                index % 2 === 0 
                  ? 'from-nagara-gold/10 via-transparent to-nagara-silver/10'
                  : 'from-nagara-silver/10 via-transparent to-nagara-gold/10'
              }`} />
            </div>

            <Container className="relative">
              <Grid cols={2} gap="xl" className="lg:grid-cols-2 items-center">
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <Stack spacing="xl">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-nagara-lg bg-nagara-gold/10 text-nagara-gold">
                          {service.icon}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold nagara-subheadline text-nagara-gold">
                            {service.price}
                            <span className="text-sm text-nagara-white/60 ml-1">
                              {service.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold nagara-headline text-nagara-white mb-2">
                        {service.title}
                      </h2>
                      <p className="text-xl text-nagara-gold nagara-subheadline font-semibold mb-6">
                        {service.subtitle}
                      </p>
                      <p className="text-lg text-nagara-white/80 nagara-body-large">
                        {service.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <Flex gap="md" className="flex-col sm:flex-row">
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={() => window.location.href = service.href}
                        className="w-full sm:w-auto"
                      >
                        Learn More
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => window.location.href = '/contact'}
                        className="w-full sm:w-auto"
                      >
                        Get Started
                      </Button>
                    </Flex>
                  </Stack>
                </motion.div>

                {/* Features & Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <Stack spacing="lg">
                    {/* Features */}
                    <Card className="p-6">
                      <h3 className="text-xl font-bold nagara-subheadline text-nagara-white mb-4">
                        Key Features
                      </h3>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-nagara-gold flex-shrink-0" />
                            <span className="text-nagara-white/80 nagara-body">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </Card>

                    {/* Benefits */}
                    <Card className="p-6">
                      <h3 className="text-xl font-bold nagara-subheadline text-nagara-white mb-4">
                        Business Benefits
                      </h3>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <motion.div
                            key={benefitIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: benefitIndex * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <svg className="w-5 h-5 text-nagara-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-nagara-white/80 nagara-body">
                              {benefit}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </Stack>
                </motion.div>
              </Grid>
            </Container>
          </section>
        ))}

        {/* CTA Section */}
        <section className="relative py-20 lg:py-32 bg-nagara-charcoal">
          <div className="absolute inset-0 bg-gradient-to-br from-nagara-gold/5 to-nagara-silver/5" />
          
          <Container className="relative">
            <FadeInWhenVisible>
              <div className="text-center">
                <Stack spacing="xl" className="items-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold nagara-headline text-nagara-white max-w-4xl"
                  >
                    Ready to Transform Your Business with
                    <span className="block text-nagara-gold">Strategic Technology?</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl"
                  >
                    Schedule a consultation to discuss your specific needs and discover how our proven solutions can accelerate your growth.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Flex gap="md" className="flex-col sm:flex-row">
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={() => window.location.href = '/contact'}
                        className="w-full sm:w-auto"
                      >
                        Schedule Free Consultation
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => window.location.href = '/about'}
                        className="w-full sm:w-auto"
                      >
                        Learn About Maurice
                      </Button>
                    </Flex>
                  </motion.div>
                </Stack>
              </div>
            </FadeInWhenVisible>
          </Container>
        </section>
      </div>
    </MainLayout>
  );
}