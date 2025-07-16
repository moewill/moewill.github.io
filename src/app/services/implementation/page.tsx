'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { MainLayout } from '@/components/Layout';
import { Container, Grid, Stack, Flex } from '@/components/Layout/Container';
import { Button, Card } from '@/components/UI';
import { FadeInWhenVisible, ParallaxSection } from '@/components/Animations';

const implementationServices = [
  {
    title: 'Custom Software Development',
    description: 'Full-stack application development with modern frameworks and scalable architecture.',
    technologies: ['React/Next.js', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB'],
    deliverables: [
      'Production-ready application',
      'Responsive UI/UX design',
      'API development & integration',
      'Database design & optimization',
      'Testing & quality assurance',
      'Deployment & DevOps setup'
    ],
    timeline: '6-12 weeks',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: 'API Development & Integration',
    description: 'RESTful APIs, GraphQL, and seamless third-party service integrations.',
    technologies: ['REST APIs', 'GraphQL', 'OAuth', 'Webhooks', 'Microservices', 'Docker'],
    deliverables: [
      'Scalable API architecture',
      'Third-party integrations',
      'Authentication & security',
      'API documentation',
      'Rate limiting & monitoring',
      'Error handling & logging'
    ],
    timeline: '3-8 weeks',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    description: 'Scalable cloud infrastructure setup with automated deployment and monitoring.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Monitoring'],
    deliverables: [
      'Cloud infrastructure setup',
      'Automated CI/CD pipelines',
      'Container orchestration',
      'Security & compliance',
      'Monitoring & alerting',
      'Backup & disaster recovery'
    ],
    timeline: '4-8 weeks',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )
  },
  {
    title: 'Database Design & Optimization',
    description: 'Efficient database architecture with performance optimization and scaling strategies.',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Data Modeling', 'Performance'],
    deliverables: [
      'Database schema design',
      'Query optimization',
      'Indexing strategies',
      'Backup & recovery',
      'Performance monitoring',
      'Scaling & replication'
    ],
    timeline: '2-6 weeks',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  }
];

const developmentProcess = [
  {
    phase: '01',
    title: 'Requirements & Planning',
    description: 'Detailed requirements gathering, technical architecture planning, and project roadmap development.',
    duration: '1-2 weeks',
    activities: [
      'Stakeholder requirements gathering',
      'Technical architecture design',
      'Technology stack selection',
      'Project timeline & milestones',
      'Risk assessment & mitigation',
      'Development environment setup'
    ],
    deliverables: [
      'Technical Requirements Document',
      'System Architecture Diagram',
      'Development Roadmap',
      'Technology Stack Recommendations'
    ]
  },
  {
    phase: '02',
    title: 'Development & Implementation',
    description: 'Agile development with regular updates, code reviews, and continuous integration.',
    duration: '4-10 weeks',
    activities: [
      'Sprint planning & execution',
      'Feature development & testing',
      'Code reviews & quality assurance',
      'Continuous integration setup',
      'Regular stakeholder demos',
      'Performance optimization'
    ],
    deliverables: [
      'Working Software Increments',
      'Test Coverage Reports',
      'Code Documentation',
      'Performance Benchmarks'
    ]
  },
  {
    phase: '03',
    title: 'Testing & Quality Assurance',
    description: 'Comprehensive testing including unit tests, integration tests, and user acceptance testing.',
    duration: '1-2 weeks',
    activities: [
      'Unit & integration testing',
      'Performance & load testing',
      'Security vulnerability testing',
      'User acceptance testing',
      'Bug fixes & optimization',
      'Documentation finalization'
    ],
    deliverables: [
      'Test Results & Coverage',
      'Security Audit Report',
      'Performance Analysis',
      'User Acceptance Sign-off'
    ]
  },
  {
    phase: '04',
    title: 'Deployment & Launch',
    description: 'Production deployment with monitoring setup and post-launch support.',
    duration: '1 week',
    activities: [
      'Production environment setup',
      'Deployment automation',
      'Monitoring & alerting setup',
      'Go-live coordination',
      'Post-launch monitoring',
      'Knowledge transfer'
    ],
    deliverables: [
      'Production Deployment',
      'Monitoring Dashboard',
      'Deployment Documentation',
      'Support & Maintenance Plan'
    ]
  }
];

const techStack = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Python', 'FastAPI', 'Express.js', 'GraphQL'],
  database: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  cloud: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'Terraform'],
  tools: ['Git', 'GitHub Actions', 'Jest', 'Cypress', 'Monitoring']
};

const caseStudies = [
  {
    title: 'E-commerce Platform Modernization',
    client: 'RetailTech Solutions',
    challenge: 'Legacy e-commerce platform struggling with performance and scalability issues during peak traffic.',
    solution: 'Complete platform rebuild with modern React/Node.js stack, microservices architecture, and cloud infrastructure.',
    results: [
      '300% improvement in page load times',
      '99.9% uptime during Black Friday sales',
      '150% increase in conversion rates',
      '$2M additional revenue in first quarter'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Redis'],
    timeline: '12 weeks'
  },
  {
    title: 'Healthcare Data Integration Platform',
    client: 'MedConnect Systems',
    challenge: 'Multiple healthcare systems needed secure integration for patient data sharing and analytics.',
    solution: 'HIPAA-compliant integration platform with real-time data synchronization and advanced analytics.',
    results: [
      '50% reduction in manual data entry',
      '100% HIPAA compliance achieved',
      '75% faster patient data retrieval',
      '40% improvement in care coordination'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
    timeline: '16 weeks'
  }
];

export default function ImplementationPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <MainLayout>
      <div ref={containerRef}>
        {/* Hero Section */}
        <ParallaxSection className="relative min-h-screen flex items-center bg-nagara-black overflow-hidden">
          <motion.div 
            style={{ y }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-nagara-gold/10 via-transparent to-nagara-silver/10" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-nagara-gold/20 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-nagara-silver/20 blur-3xl transform translate-x-1/2 translate-y-1/2" />
          </motion.div>

          <Container className="relative z-10">
            <Grid cols={2} gap="xl" className="lg:grid-cols-2 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Stack spacing="xl">
                  {/* Breadcrumb */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 text-nagara-white/60 nagara-body"
                  >
                    <Link href="/services" className="hover:text-nagara-gold transition-colors duration-300">
                      Services
                    </Link>
                    <span>/</span>
                    <span className="text-nagara-gold">Implementation</span>
                  </motion.div>

                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-block"
                  >
                    <span className="px-4 py-2 rounded-nagara-lg bg-nagara-gold/10 border border-nagara-gold/30 text-nagara-gold nagara-caption font-semibold">
                      Complete Implementation Services
                    </span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold nagara-headline text-nagara-white leading-tight"
                  >
                    End-to-End Technical
                    <span className="block text-nagara-gold">
                      Implementation
                    </span>
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-nagara-white/80 nagara-body-large"
                  >
                    Hands-on technical implementation services with full-stack development, system integration, and seamless deployment for mission-critical business applications.
                  </motion.p>

                  {/* Pricing & CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="p-6 rounded-nagara-xl bg-nagara-charcoal/30 border border-nagara-white/10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-3xl font-bold nagara-subheadline text-nagara-gold">
                          $75<span className="text-lg text-nagara-white/60">/hour</span>
                        </div>
                        <div className="text-nagara-white/70 nagara-body">
                          Competitive hourly rates for development
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-nagara-white/60 nagara-caption">
                          Fixed-price projects available
                        </div>
                      </div>
                    </div>
                    
                    <Flex gap="md" className="flex-col sm:flex-row">
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={() => window.location.href = '/contact'}
                        className="w-full sm:w-auto"
                      >
                        Get Project Quote
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => {
                          const processSection = document.getElementById('process');
                          if (processSection) {
                            processSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-full sm:w-auto"
                      >
                        View Our Process
                      </Button>
                    </Flex>
                  </motion.div>
                </Stack>
              </motion.div>

              {/* Tech Stack Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative lg:block hidden"
              >
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 rounded-nagara-xl bg-gradient-to-br from-nagara-gold/20 to-nagara-silver/20 backdrop-blur-sm border border-nagara-white/10" />
                  
                  {/* Tech Stack Elements */}
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
                    className="absolute top-1/6 left-1/6 w-16 h-16 rounded-nagara-lg bg-blue-500/30 backdrop-blur-sm flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">React</span>
                  </motion.div>
                  
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
                    className="absolute top-1/6 right-1/6 w-14 h-14 rounded-full bg-green-500/40 backdrop-blur-sm flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">Node</span>
                  </motion.div>
                  
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
                    className="absolute bottom-1/6 left-1/6 w-12 h-12 rounded-nagara-sm bg-orange-500/50 flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">AWS</span>
                  </motion.div>
                  
                  <motion.div
                    animate={{
                      y: [-5, 5, -5],
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                    className="absolute bottom-1/6 right-1/6 w-14 h-14 rounded-nagara-lg bg-purple-500/40 backdrop-blur-sm flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">SQL</span>
                  </motion.div>

                  {/* Central Element */}
                  <div className="absolute inset-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-nagara-xl bg-nagara-gold/20 flex items-center justify-center">
                        <svg className="w-16 h-16 text-nagara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="text-nagara-white/90 nagara-subheadline font-semibold">
                        Full-Stack Development
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Grid>
          </Container>
        </ParallaxSection>

        {/* Implementation Services Section */}
        <section className="relative py-20 lg:py-32 bg-nagara-dark">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-nagara-gold/10 via-transparent to-nagara-silver/10" />
          </div>

          <Container className="relative">
            <FadeInWhenVisible>
              <div className="text-center mb-16 lg:mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold nagara-headline text-nagara-white mb-6"
                >
                  Complete Implementation
                  <span className="block text-nagara-gold">Services Portfolio</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl mx-auto"
                >
                  From concept to deployment, we deliver production-ready solutions with modern technologies and industry best practices.
                </motion.p>
              </div>
            </FadeInWhenVisible>

            <Grid cols={2} gap="lg" className="lg:grid-cols-2">
              {implementationServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <Card className="h-full p-8">
                    <Stack spacing="lg">
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-nagara-lg bg-nagara-gold/10 text-nagara-gold">
                          {service.icon}
                        </div>
                        <span className="text-nagara-gold nagara-caption font-semibold bg-nagara-gold/10 px-3 py-1 rounded-nagara-md">
                          {service.timeline}
                        </span>
                      </div>
                      
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold nagara-subheadline text-nagara-white mb-4">
                          {service.title}
                        </h3>
                        <p className="text-nagara-white/80 nagara-body">
                          {service.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-nagara-white font-semibold nagara-body mb-3">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 rounded-nagara-md bg-nagara-charcoal/50 border border-nagara-white/10 text-nagara-white/70 nagara-caption"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="text-nagara-white font-semibold nagara-body mb-3">
                          Key Deliverables:
                        </h4>
                        <div className="space-y-2">
                          {service.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-nagara-gold" />
                              <span className="text-nagara-white/70 nagara-body">
                                {deliverable}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Stack>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </Container>
        </section>

        {/* Technology Stack Section */}
        <section className="relative py-20 lg:py-32 bg-nagara-black">
          <Container className="relative">
            <FadeInWhenVisible>
              <div className="text-center mb-16 lg:mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold nagara-headline text-nagara-white mb-6"
                >
                  Modern Technology
                  <span className="block text-nagara-gold">Stack & Tools</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl mx-auto"
                >
                  We use cutting-edge technologies and proven frameworks to build scalable, maintainable, and high-performance applications.
                </motion.p>
              </div>
            </FadeInWhenVisible>

            <Grid cols={1} gap="lg" className="lg:grid-cols-1 max-w-4xl mx-auto">
              {Object.entries(techStack).map(([category, technologies], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 lg:p-8">
                    <Stack spacing="lg">
                      <h3 className="text-xl font-bold nagara-subheadline text-nagara-white capitalize">
                        {category} Technologies
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            className="px-4 py-2 rounded-nagara-lg bg-nagara-gold/10 border border-nagara-gold/30 text-nagara-gold nagara-body font-semibold hover:bg-nagara-gold/20 transition-colors duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </Stack>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </Container>
        </section>

        {/* Development Process Section */}
        <section id="process" className="relative py-20 lg:py-32 bg-nagara-dark">
          <Container className="relative">
            <FadeInWhenVisible>
              <div className="text-center mb-16 lg:mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold nagara-headline text-nagara-white mb-6"
                >
                  Our Development
                  <span className="block text-nagara-gold">Process & Methodology</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl mx-auto"
                >
                  A proven agile methodology that ensures quality, transparency, and on-time delivery for every project.
                </motion.p>
              </div>
            </FadeInWhenVisible>

            <div className="space-y-12 lg:space-y-16">
              {developmentProcess.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Grid cols={4} gap="xl" className="lg:grid-cols-4 items-start">
                    {/* Phase Number */}
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-nagara-xl bg-nagara-gold/10 border border-nagara-gold/30 mb-4">
                        <span className="text-2xl font-bold nagara-subheadline text-nagara-gold">
                          {phase.phase}
                        </span>
                      </div>
                      <div className="text-nagara-gold nagara-caption font-semibold">
                        {phase.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3">
                      <Card className="p-8">
                        <Stack spacing="lg">
                          <div>
                            <h3 className="text-2xl font-bold nagara-subheadline text-nagara-white mb-4">
                              {phase.title}
                            </h3>
                            <p className="text-lg text-nagara-white/80 nagara-body-large">
                              {phase.description}
                            </p>
                          </div>

                          <Grid cols={2} gap="lg" className="lg:grid-cols-2">
                            {/* Activities */}
                            <div>
                              <h4 className="text-nagara-white font-semibold nagara-body mb-3">
                                Key Activities:
                              </h4>
                              <div className="space-y-2">
                                {phase.activities.map((activity, activityIndex) => (
                                  <div key={activityIndex} className="flex items-start gap-3">
                                    <svg className="w-4 h-4 text-nagara-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-nagara-white/70 nagara-body">
                                      {activity}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Deliverables */}
                            <div>
                              <h4 className="text-nagara-white font-semibold nagara-body mb-3">
                                Deliverables:
                              </h4>
                              <div className="space-y-2">
                                {phase.deliverables.map((deliverable, deliverableIndex) => (
                                  <div key={deliverableIndex} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-nagara-gold flex-shrink-0" />
                                    <span className="text-nagara-white/70 nagara-body">
                                      {deliverable}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Grid>
                        </Stack>
                      </Card>
                    </div>
                  </Grid>

                  {/* Connector Line */}
                  {index < developmentProcess.length - 1 && (
                    <div className="hidden lg:block absolute left-12 top-24 w-0.5 h-16 bg-nagara-gold/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Case Studies Section */}
        <section className="relative py-20 lg:py-32 bg-nagara-black">
          <Container className="relative">
            <FadeInWhenVisible>
              <div className="text-center mb-16 lg:mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold nagara-headline text-nagara-white mb-6"
                >
                  Implementation Success Stories
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl mx-auto"
                >
                  Real-world examples of how our implementation services have transformed businesses and driven measurable results.
                </motion.p>
              </div>
            </FadeInWhenVisible>

            <Grid cols={1} gap="lg" className="lg:grid-cols-1 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-8 lg:p-12">
                    <Grid cols={2} gap="xl" className="lg:grid-cols-2">
                      {/* Content */}
                      <div>
                        <Stack spacing="lg">
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <h3 className="text-2xl font-bold nagara-subheadline text-nagara-white">
                                {study.title}
                              </h3>
                              <span className="text-nagara-gold nagara-caption font-semibold bg-nagara-gold/10 px-3 py-1 rounded-nagara-md">
                                {study.timeline}
                              </span>
                            </div>
                            <div className="text-nagara-gold nagara-body font-semibold mb-4">
                              {study.client}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-nagara-white font-semibold nagara-body mb-2">
                              Challenge:
                            </h4>
                            <p className="text-nagara-white/80 nagara-body">
                              {study.challenge}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-nagara-white font-semibold nagara-body mb-2">
                              Solution:
                            </h4>
                            <p className="text-nagara-white/80 nagara-body">
                              {study.solution}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-nagara-white font-semibold nagara-body mb-3">
                              Technologies Used:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.map((tech, techIndex) => (
                                <span 
                                  key={techIndex}
                                  className="px-3 py-1 rounded-nagara-md bg-nagara-charcoal/50 border border-nagara-white/10 text-nagara-white/70 nagara-caption"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Stack>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-xl font-bold nagara-subheadline text-nagara-gold mb-6">
                          Measurable Results:
                        </h4>
                        <div className="space-y-4">
                          {study.results.map((result, resultIndex) => (
                            <motion.div
                              key={resultIndex}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: resultIndex * 0.1 }}
                              className="flex items-center gap-3 p-4 rounded-nagara-lg bg-nagara-gold/5 border border-nagara-gold/20"
                            >
                              <svg className="w-5 h-5 text-nagara-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              <span className="text-nagara-white nagara-body font-semibold">
                                {result}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </Grid>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 lg:py-32 bg-nagara-charcoal">
          <div className="absolute inset-0 bg-gradient-to-br from-nagara-gold/5 to-nagara-silver/5" />
          
          <Container className="relative">
            <FadeInWhenVisible>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center p-8 lg:p-12 rounded-nagara-xl bg-nagara-dark border border-nagara-white/10"
              >
                <Stack spacing="xl" className="items-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold nagara-headline text-nagara-white max-w-4xl"
                  >
                    Ready to Build Your
                    <span className="block text-nagara-gold">Next Solution?</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl"
                  >
                    Let&rsquo;s discuss your project requirements and create a custom development plan that delivers exceptional results.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="p-6 rounded-nagara-lg bg-nagara-gold/10 border border-nagara-gold/20 mb-8"
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold nagara-subheadline text-nagara-gold mb-2">
                        Free Project Consultation
                      </div>
                      <div className="text-nagara-white/80 nagara-body">
                        Detailed project assessment & custom quote
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Flex gap="md" className="flex-col sm:flex-row">
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={() => window.location.href = '/contact'}
                        className="w-full sm:w-auto"
                      >
                        Get Project Quote
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => window.location.href = '/services'}
                        className="w-full sm:w-auto"
                      >
                        View All Services
                      </Button>
                    </Flex>
                  </motion.div>
                </Stack>
              </motion.div>
            </FadeInWhenVisible>
          </Container>
        </section>
      </div>
    </MainLayout>
  );
}