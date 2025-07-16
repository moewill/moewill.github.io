'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { MainLayout } from '@/components/Layout';
import { Container, Grid, Stack, Flex } from '@/components/Layout/Container';
import { Button, Card } from '@/components/UI';
import { FadeInWhenVisible, ParallaxSection } from '@/components/Animations';

const revenueAccelerationServices = [
  {
    title: 'AI Lead Generation Systems',
    description: 'Advanced AI-powered lead identification, qualification, and nurturing systems that identify high-value prospects.',
    capabilities: [
      'Intelligent prospect identification',
      'Automated lead scoring & qualification',
      'Behavioral analysis & segmentation',
      'Multi-channel outreach automation',
      'Real-time lead prioritization',
      'Conversion optimization'
    ],
    technologies: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'CRM Integration'],
    roi: '300% average increase in qualified leads',
    timeline: '6-8 weeks',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Sales Process Automation',
    description: 'End-to-end sales workflow automation that streamlines your entire sales process from lead to close.',
    capabilities: [
      'Automated follow-up sequences',
      'Dynamic content personalization',
      'Sales pipeline optimization',
      'Appointment scheduling automation',
      'Proposal & contract generation',
      'Performance analytics & reporting'
    ],
    technologies: ['Marketing Automation', 'CRM Systems', 'API Integrations', 'Workflow Engines'],
    roi: '250% improvement in sales velocity',
    timeline: '4-6 weeks',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: 'Customer Journey Optimization',
    description: 'Data-driven customer journey mapping and optimization to maximize conversion at every touchpoint.',
    capabilities: [
      'Customer journey mapping',
      'Touchpoint optimization',
      'Conversion funnel analysis',
      'A/B testing frameworks',
      'User experience enhancement',
      'Retention strategy development'
    ],
    technologies: ['Analytics Platforms', 'Heat Mapping', 'User Tracking', 'Conversion Optimization'],
    roi: '180% increase in conversion rates',
    timeline: '3-5 weeks',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    title: 'Revenue Analytics & Forecasting',
    description: 'Advanced analytics platform that provides real-time insights and predictive revenue forecasting.',
    capabilities: [
      'Real-time revenue dashboards',
      'Predictive revenue modeling',
      'Performance attribution analysis',
      'Customer lifetime value tracking',
      'Churn prediction & prevention',
      'ROI measurement & optimization'
    ],
    technologies: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'Machine Learning'],
    roi: '400% improvement in forecast accuracy',
    timeline: '4-7 weeks',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const implementationPhases = [
  {
    phase: '01',
    title: 'Revenue Assessment & Strategy',
    description: 'Comprehensive analysis of your current revenue processes and development of AI-driven growth strategy.',
    duration: '1-2 weeks',
    deliverables: [
      'Current state revenue analysis',
      'Lead generation audit',
      'Sales process evaluation',
      'AI opportunity assessment',
      'Custom growth strategy',
      'ROI projections & timeline'
    ],
    activities: [
      'Revenue process mapping',
      'Data source identification',
      'Technology stack evaluation',
      'Stakeholder interviews',
      'Competitive analysis',
      'Success metrics definition'
    ]
  },
  {
    phase: '02',
    title: 'System Design & Integration',
    description: 'Design and configure AI-powered revenue acceleration systems integrated with your existing technology stack.',
    duration: '2-4 weeks',
    deliverables: [
      'AI system architecture',
      'Integration specifications',
      'Data flow design',
      'Security protocols',
      'Testing framework',
      'Training materials'
    ],
    activities: [
      'AI model development',
      'CRM system integration',
      'Data pipeline setup',
      'Automation workflow design',
      'Quality assurance testing',
      'Performance optimization'
    ]
  },
  {
    phase: '03',
    title: 'Deployment & Optimization',
    description: 'Launch AI systems with continuous monitoring and optimization for maximum revenue impact.',
    duration: '2-3 weeks',
    deliverables: [
      'Production deployment',
      'Performance monitoring',
      'Analytics dashboard',
      'Optimization reports',
      'Team training completion',
      'Success measurement plan'
    ],
    activities: [
      'Production system launch',
      'Real-time monitoring setup',
      'Performance tuning',
      'User training sessions',
      'Feedback collection',
      'Continuous improvement'
    ]
  },
  {
    phase: '04',
    title: 'Scaling & Enhancement',
    description: 'Scale successful systems and continuously enhance performance based on data insights and business growth.',
    duration: 'Ongoing',
    deliverables: [
      'Scaling recommendations',
      'Enhanced AI models',
      'Advanced analytics',
      'Performance reports',
      'Strategic insights',
      'Growth optimization plan'
    ],
    activities: [
      'Performance analysis',
      'System scaling',
      'Model refinement',
      'Feature enhancement',
      'Strategic consultation',
      'ROI optimization'
    ]
  }
];

const aiTechnologies = [
  {
    category: 'Machine Learning',
    description: 'Advanced algorithms for predictive lead scoring and customer behavior analysis.',
    applications: ['Lead scoring', 'Churn prediction', 'Price optimization', 'Demand forecasting']
  },
  {
    category: 'Natural Language Processing',
    description: 'AI-powered content analysis and generation for personalized communication.',
    applications: ['Content personalization', 'Sentiment analysis', 'Chatbot development', 'Email optimization']
  },
  {
    category: 'Predictive Analytics',
    description: 'Data-driven insights for revenue forecasting and growth opportunity identification.',
    applications: ['Revenue forecasting', 'Market analysis', 'Customer lifetime value', 'Growth modeling']
  },
  {
    category: 'Automation Platforms',
    description: 'Sophisticated workflow automation for seamless revenue process execution.',
    applications: ['Lead nurturing', 'Sales workflows', 'Customer onboarding', 'Retention campaigns']
  }
];

const revenueResults = [
  {
    company: 'TechSolutions Inc.',
    industry: 'B2B Software',
    challenge: 'Low-quality leads and poor conversion rates resulted in stagnant revenue growth despite increased marketing spend.',
    solution: 'Implemented AI lead scoring system with automated nurturing sequences and predictive analytics for revenue forecasting.',
    timeline: '8 weeks',
    results: [
      '350% increase in qualified leads',
      '180% improvement in conversion rates',
      '$1.2M additional revenue in 6 months',
      '65% reduction in sales cycle time',
      '90% improvement in lead quality scores'
    ],
    technologies: ['Machine Learning', 'CRM Integration', 'Marketing Automation', 'Predictive Analytics']
  },
  {
    company: 'GrowthTech Partners',
    industry: 'Professional Services',
    challenge: 'Manual sales processes and lack of data-driven insights limited their ability to scale revenue operations effectively.',
    solution: 'Built comprehensive revenue acceleration platform with AI-powered analytics and automated sales workflows.',
    timeline: '10 weeks',
    results: [
      '275% increase in sales velocity',
      '$800K additional recurring revenue',
      '95% automation of lead qualification',
      '70% improvement in forecast accuracy',
      '40% reduction in customer acquisition cost'
    ],
    technologies: ['Workflow Automation', 'Business Intelligence', 'AI Analytics', 'CRM Systems']
  }
];

const pricingPlans = [
  {
    name: 'Growth Accelerator',
    price: '$149',
    period: 'per month',
    description: 'Perfect for SMBs looking to implement AI-powered lead generation and basic automation.',
    features: [
      'AI lead scoring system',
      'Automated email sequences',
      'Basic analytics dashboard',
      'CRM integration',
      'Monthly optimization reviews',
      'Email support'
    ],
    limitations: ['Up to 1,000 leads/month', 'Basic automation workflows', 'Standard integrations'],
    popular: false
  },
  {
    name: 'Revenue Optimizer',
    price: '$299',
    period: 'per month',
    description: 'Comprehensive revenue acceleration platform for growing businesses seeking advanced AI capabilities.',
    features: [
      'Advanced AI lead generation',
      'Predictive analytics & forecasting',
      'Multi-channel automation',
      'Custom integrations',
      'A/B testing framework',
      'Priority support & training'
    ],
    limitations: ['Up to 5,000 leads/month', 'Advanced automation', 'Custom reporting'],
    popular: true
  },
  {
    name: 'Enterprise Growth',
    price: 'Custom',
    period: 'pricing',
    description: 'Enterprise-grade AI revenue acceleration with unlimited scalability and dedicated support.',
    features: [
      'Unlimited AI-powered lead generation',
      'Custom machine learning models',
      'Advanced predictive analytics',
      'Enterprise integrations',
      'Dedicated success manager',
      '24/7 premium support'
    ],
    limitations: ['Unlimited leads', 'Custom AI development', 'White-label options'],
    popular: false
  }
];

export default function AILeadGenerationPage() {
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
                    <span className="text-nagara-gold">AI Lead Generation</span>
                  </motion.div>

                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-block"
                  >
                    <span className="px-4 py-2 rounded-nagara-lg bg-nagara-gold/10 border border-nagara-gold/30 text-nagara-gold nagara-caption font-semibold">
                      Revenue Acceleration Systems
                    </span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold nagara-headline text-nagara-white leading-tight"
                  >
                    AI-Powered Revenue
                    <span className="block text-nagara-gold">
                      Acceleration
                    </span>
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-nagara-white/80 nagara-body-large"
                  >
                    Advanced AI-powered lead generation and revenue acceleration systems designed to drive sustainable business growth through intelligent automation and optimization.
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
                          $149<span className="text-lg text-nagara-white/60">/month</span>
                        </div>
                        <div className="text-nagara-white/70 nagara-body">
                          Starting price for Growth Accelerator
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-nagara-white/60 nagara-caption">
                          Custom enterprise solutions available
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
                        Start Revenue Growth
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => {
                          const systemsSection = document.getElementById('systems');
                          if (systemsSection) {
                            systemsSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-full sm:w-auto"
                      >
                        Explore AI Systems
                      </Button>
                    </Flex>
                  </motion.div>
                </Stack>
              </motion.div>

              {/* AI Revenue Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative lg:block hidden"
              >
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 rounded-nagara-xl bg-gradient-to-br from-nagara-gold/20 to-nagara-silver/20 backdrop-blur-sm border border-nagara-white/10" />
                  
                  {/* AI Elements */}
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
                    <span className="text-xs font-bold text-white">AI</span>
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
                    <span className="text-xs font-bold text-white">$$$</span>
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
                    className="absolute bottom-1/6 left-1/6 w-12 h-12 rounded-nagara-sm bg-purple-500/50 flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">ML</span>
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
                    className="absolute bottom-1/6 right-1/6 w-14 h-14 rounded-nagara-lg bg-orange-500/40 backdrop-blur-sm flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">ROI</span>
                  </motion.div>

                  {/* Central Element */}
                  <div className="absolute inset-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-nagara-xl bg-nagara-gold/20 flex items-center justify-center">
                        <svg className="w-16 h-16 text-nagara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-nagara-white/90 nagara-subheadline font-semibold">
                        Revenue Growth
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Grid>
          </Container>
        </ParallaxSection>

        {/* AI Revenue Systems Section */}
        <section id="systems" className="relative py-20 lg:py-32 bg-nagara-dark">
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
                  AI-Powered Revenue
                  <span className="block text-nagara-gold">Acceleration Systems</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl mx-auto"
                >
                  Intelligent systems that identify, qualify, and convert high-value prospects while optimizing every aspect of your revenue operations.
                </motion.p>
              </div>
            </FadeInWhenVisible>

            <Grid cols={2} gap="lg" className="lg:grid-cols-2">
              {revenueAccelerationServices.map((service, index) => (
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
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-nagara-lg bg-nagara-gold/10 text-nagara-gold">
                          {service.icon}
                        </div>
                        <div className="text-right text-nagara-white/60 nagara-caption">
                          <div>{service.timeline}</div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold nagara-subheadline text-nagara-white mb-4">
                          {service.title}
                        </h3>
                        <p className="text-nagara-white/80 nagara-body">
                          {service.description}
                        </p>
                      </div>

                      {/* ROI Highlight */}
                      <div className="p-4 rounded-nagara-lg bg-nagara-gold/5 border border-nagara-gold/20">
                        <div className="text-nagara-gold font-bold nagara-body">
                          Expected ROI: {service.roi}
                        </div>
                      </div>

                      {/* Capabilities */}
                      <div>
                        <h4 className="text-nagara-white font-semibold nagara-body mb-3">
                          Key Capabilities:
                        </h4>
                        <div className="space-y-2">
                          {service.capabilities.map((capability, capIndex) => (
                            <div key={capIndex} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-nagara-gold" />
                              <span className="text-nagara-white/70 nagara-body">
                                {capability}
                              </span>
                            </div>
                          ))}
                        </div>
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
                    </Stack>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </Container>
        </section>

        {/* AI Technologies Section */}
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
                  Advanced AI Technologies
                  <span className="block text-nagara-gold">for Revenue Growth</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl mx-auto"
                >
                  Cutting-edge AI technologies that power intelligent revenue acceleration and drive measurable business growth.
                </motion.p>
              </div>
            </FadeInWhenVisible>

            <Grid cols={2} gap="lg" className="lg:grid-cols-2">
              {aiTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 lg:p-8">
                    <Stack spacing="lg">
                      <h3 className="text-xl font-bold nagara-subheadline text-nagara-gold">
                        {tech.category}
                      </h3>
                      
                      <p className="text-nagara-white/80 nagara-body">
                        {tech.description}
                      </p>

                      <div>
                        <h4 className="text-nagara-white font-semibold nagara-body mb-3">
                          Applications:
                        </h4>
                        <div className="space-y-2">
                          {tech.applications.map((application, appIndex) => (
                            <div key={appIndex} className="flex items-center gap-3">
                              <svg className="w-4 h-4 text-nagara-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-nagara-white/70 nagara-body">
                                {application}
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

        {/* Implementation Process Section */}
        <section className="relative py-20 lg:py-32 bg-nagara-dark">
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
                  Revenue Acceleration
                  <span className="block text-nagara-gold">Implementation Process</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl mx-auto"
                >
                  A systematic approach to implementing AI-powered revenue systems that deliver rapid ROI and sustainable growth.
                </motion.p>
              </div>
            </FadeInWhenVisible>

            <div className="space-y-12 lg:space-y-16">
              {implementationPhases.map((phase, index) => (
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
                  {index < implementationPhases.length - 1 && (
                    <div className="hidden lg:block absolute left-12 top-24 w-0.5 h-16 bg-nagara-gold/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Results & Case Studies Section */}
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
                  AI Revenue Success Stories
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl mx-auto"
                >
                  Real results from businesses that have transformed their revenue operations with AI-powered acceleration systems.
                </motion.p>
              </div>
            </FadeInWhenVisible>

            <Grid cols={1} gap="lg" className="lg:grid-cols-1 max-w-6xl mx-auto">
              {revenueResults.map((result, index) => (
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
                                {result.company}
                              </h3>
                              <span className="text-nagara-gold nagara-caption font-semibold bg-nagara-gold/10 px-3 py-1 rounded-nagara-md">
                                {result.timeline}
                              </span>
                            </div>
                            <div className="text-nagara-gold nagara-body font-semibold">
                              {result.industry}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-nagara-white font-semibold nagara-body mb-2">
                              Challenge:
                            </h4>
                            <p className="text-nagara-white/80 nagara-body">
                              {result.challenge}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-nagara-white font-semibold nagara-body mb-2">
                              AI Solution:
                            </h4>
                            <p className="text-nagara-white/80 nagara-body">
                              {result.solution}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-nagara-white font-semibold nagara-body mb-3">
                              Technologies Used:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {result.technologies.map((tech, techIndex) => (
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
                          Revenue Impact:
                        </h4>
                        <div className="space-y-4">
                          {result.results.map((resultItem, resultIndex) => (
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
                                {resultItem}
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

        {/* Pricing Section */}
        <section className="relative py-20 lg:py-32 bg-nagara-dark">
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
                  Revenue Acceleration
                  <span className="block text-nagara-gold">Pricing Plans</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl mx-auto"
                >
                  Choose the AI revenue acceleration plan that fits your business size and growth objectives.
                </motion.p>
              </div>
            </FadeInWhenVisible>

            <Grid cols={3} gap="lg" className="lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 rounded-nagara-lg bg-nagara-gold text-nagara-black font-semibold nagara-caption">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <Card className={`h-full p-8 ${plan.popular ? 'border-nagara-gold/50 bg-nagara-charcoal/50' : ''}`}>
                    <Stack spacing="lg">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold nagara-subheadline text-nagara-white mb-2">
                          {plan.name}
                        </h3>
                        <div className="text-3xl font-bold nagara-subheadline text-nagara-gold mb-1">
                          {plan.price}
                          {plan.price !== 'Custom' && <span className="text-lg text-nagara-white/60">/{plan.period}</span>}
                        </div>
                        <p className="text-nagara-white/80 nagara-body">
                          {plan.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-nagara-white font-semibold nagara-body mb-3">
                          Features:
                        </h4>
                        <div className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3">
                              <svg className="w-4 h-4 text-nagara-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-nagara-white/70 nagara-body">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-nagara-white/10 pt-4">
                        <div className="space-y-2">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <div key={limitIndex} className="text-nagara-white/60 nagara-caption">
                              • {limitation}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        onClick={() => window.location.href = '/contact'}
                        className="w-full"
                      >
                        {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                      </Button>
                    </Stack>
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
                    Ready to Accelerate Your
                    <span className="block text-nagara-gold">Revenue with AI?</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl"
                  >
                    Let&rsquo;s implement AI-powered revenue acceleration systems that drive sustainable growth and deliver measurable ROI for your business.
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
                        Free Revenue Assessment
                      </div>
                      <div className="text-nagara-white/80 nagara-body">
                        AI opportunity analysis & custom growth plan
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
                        Start Revenue Growth
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