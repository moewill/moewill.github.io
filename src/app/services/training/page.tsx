'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { MainLayout } from '@/components/Layout';
import { Container, Grid, Stack, Flex } from '@/components/Layout/Container';
import { Button, Card } from '@/components/UI';
import { FadeInWhenVisible, ParallaxSection } from '@/components/Animations';

const trainingPrograms = [
  {
    title: 'Executive Technology Briefings',
    description: 'Strategic technology overviews designed for C-level executives and senior leadership teams.',
    format: 'In-person or Virtual',
    duration: '2-4 hours',
    participants: '5-15 executives',
    topics: [
      'Digital Transformation Strategy',
      'Technology Investment ROI',
      'Cybersecurity & Risk Management',
      'AI & Automation Impact',
      'Cloud Strategy & Migration',
      'Data-Driven Decision Making'
    ],
    outcomes: [
      'Clear technology vision alignment',
      'Informed investment decisions',
      'Enhanced digital leadership skills',
      'Risk mitigation strategies'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Digital Leadership Development',
    description: 'Comprehensive leadership development program focused on technology-driven business transformation.',
    format: 'Multi-session Workshop Series',
    duration: '6-8 weeks',
    participants: '8-20 leaders',
    topics: [
      'Leading Digital Teams',
      'Change Management in Tech',
      'Agile Leadership Principles',
      'Innovation Management',
      'Technology Communication',
      'Strategic Planning & Execution'
    ],
    outcomes: [
      'Enhanced leadership capabilities',
      'Improved team performance',
      'Accelerated digital adoption',
      'Better stakeholder alignment'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Team Training & Skill Development',
    description: 'Technical and non-technical training programs designed to upskill your entire organization.',
    format: 'Customized Workshops',
    duration: '1-5 days',
    participants: '10-50 team members',
    topics: [
      'Modern Development Practices',
      'Cloud Platform Training',
      'Data Analytics & Visualization',
      'Cybersecurity Awareness',
      'Project Management',
      'Cross-functional Collaboration'
    ],
    outcomes: [
      'Improved technical capabilities',
      'Enhanced productivity',
      'Better collaboration',
      'Reduced knowledge gaps'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    )
  },
  {
    title: 'Change Management & Adoption',
    description: 'Strategic change management programs to ensure successful technology adoption and transformation.',
    format: 'Consultation + Training',
    duration: '4-12 weeks',
    participants: 'Organization-wide',
    topics: [
      'Change Strategy Development',
      'Stakeholder Engagement',
      'Communication Planning',
      'Training Program Design',
      'Resistance Management',
      'Success Measurement'
    ],
    outcomes: [
      'Smooth technology transitions',
      'High adoption rates',
      'Reduced resistance',
      'Sustainable change'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
];

const trainingApproach = [
  {
    step: '01',
    title: 'Needs Assessment',
    description: 'Comprehensive evaluation of your organization&rsquo;s training needs and learning objectives.',
    duration: '1 week',
    activities: [
      'Stakeholder interviews',
      'Skills gap analysis',
      'Learning style assessment',
      'Organizational culture review',
      'Success metrics definition'
    ]
  },
  {
    step: '02',
    title: 'Curriculum Design',
    description: 'Custom training curriculum development tailored to your specific requirements and goals.',
    duration: '2-3 weeks',
    activities: [
      'Learning objectives mapping',
      'Content development',
      'Interactive exercise design',
      'Assessment creation',
      'Material preparation'
    ]
  },
  {
    step: '03',
    title: 'Training Delivery',
    description: 'Engaging and interactive training sessions with hands-on learning and practical applications.',
    duration: 'Variable',
    activities: [
      'Interactive workshops',
      'Hands-on exercises',
      'Case study analysis',
      'Group discussions',
      'Real-world applications'
    ]
  },
  {
    step: '04',
    title: 'Follow-up & Support',
    description: 'Ongoing support and reinforcement to ensure knowledge retention and practical application.',
    duration: '4-8 weeks',
    activities: [
      'Progress assessments',
      'Additional coaching',
      'Q&A sessions',
      'Resource sharing',
      'Success measurement'
    ]
  }
];

const clientSuccessStories = [
  {
    company: 'TechFlow Solutions',
    industry: 'B2B SaaS',
    challenge: 'Leadership team lacked technical knowledge to make informed decisions about product development and infrastructure investments.',
    solution: 'Delivered comprehensive executive technology briefings covering cloud architecture, security, and development methodologies.',
    results: [
      '90% improvement in technology decision-making confidence',
      'Reduced development cycle time by 40%',
      '$500K savings on infrastructure costs',
      'Enhanced communication between technical and business teams'
    ],
    program: 'Executive Technology Briefings',
    duration: '6 weeks'
  },
  {
    company: 'InnovateLabs Healthcare',
    industry: 'Healthcare Technology',
    challenge: 'Rapid growth required upskilling the entire development team on modern cloud technologies and DevOps practices.',
    solution: 'Designed and delivered multi-track training program covering AWS, containerization, and CI/CD best practices.',
    results: [
      '100% team certification on AWS fundamentals',
      '60% reduction in deployment time',
      'Zero critical security incidents',
      '85% improvement in development velocity'
    ],
    program: 'Team Training & Skill Development',
    duration: '8 weeks'
  }
];

const trainingFormats = [
  {
    format: 'In-Person Workshops',
    description: 'Interactive, hands-on training sessions at your location with full engagement and collaboration.',
    benefits: [
      'Maximum engagement and interaction',
      'Team building opportunities',
      'Customized on-site experience',
      'Immediate Q&A and discussion'
    ],
    bestFor: 'Leadership teams, intensive skill development'
  },
  {
    format: 'Virtual Training Sessions',
    description: 'Live, interactive online training with screen sharing, breakout rooms, and collaborative tools.',
    benefits: [
      'Flexible scheduling and location',
      'Cost-effective for distributed teams',
      'Recorded sessions for review',
      'Global accessibility'
    ],
    bestFor: 'Distributed teams, ongoing education'
  },
  {
    format: 'Hybrid Learning Programs',
    description: 'Combination of in-person and virtual sessions for optimal flexibility and engagement.',
    benefits: [
      'Best of both formats',
      'Flexible participation options',
      'Extended learning timeline',
      'Progressive skill building'
    ],
    bestFor: 'Long-term development programs'
  }
];

export default function TrainingPage() {
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
                    <span className="text-nagara-gold">Training</span>
                  </motion.div>

                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-block"
                  >
                    <span className="px-4 py-2 rounded-nagara-lg bg-nagara-gold/10 border border-nagara-gold/30 text-nagara-gold nagara-caption font-semibold">
                      Executive Technology Training
                    </span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold nagara-headline text-nagara-white leading-tight"
                  >
                    Technology Leadership
                    <span className="block text-nagara-gold">
                      Development
                    </span>
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-nagara-white/80 nagara-body-large"
                  >
                    Specialized technology training programs designed for executive teams and decision makers to enhance digital leadership capabilities and strategic thinking.
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
                          $99<span className="text-lg text-nagara-white/60">/workshop</span>
                        </div>
                        <div className="text-nagara-white/70 nagara-body">
                          Per participant for standard workshops
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-nagara-white/60 nagara-caption">
                          Custom programs available
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
                        Design Custom Program
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => {
                          const programsSection = document.getElementById('programs');
                          if (programsSection) {
                            programsSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-full sm:w-auto"
                      >
                        View Programs
                      </Button>
                    </Flex>
                  </motion.div>
                </Stack>
              </motion.div>

              {/* Learning Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative lg:block hidden"
              >
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 rounded-nagara-xl bg-gradient-to-br from-nagara-gold/20 to-nagara-silver/20 backdrop-blur-sm border border-nagara-white/10" />
                  
                  {/* Learning Elements */}
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
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
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
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
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
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </motion.div>

                  {/* Central Element */}
                  <div className="absolute inset-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-nagara-xl bg-nagara-gold/20 flex items-center justify-center">
                        <svg className="w-16 h-16 text-nagara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="text-nagara-white/90 nagara-subheadline font-semibold">
                        Leadership Excellence
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Grid>
          </Container>
        </ParallaxSection>

        {/* Training Programs Section */}
        <section id="programs" className="relative py-20 lg:py-32 bg-nagara-dark">
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
                  Comprehensive Training
                  <span className="block text-nagara-gold">Program Portfolio</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl mx-auto"
                >
                  Customized training programs designed to enhance technology leadership capabilities and drive digital transformation success.
                </motion.p>
              </div>
            </FadeInWhenVisible>

            <Grid cols={2} gap="lg" className="lg:grid-cols-2">
              {trainingPrograms.map((program, index) => (
                <motion.div
                  key={program.title}
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
                          {program.icon}
                        </div>
                        <div className="text-right text-nagara-white/60 nagara-caption">
                          <div>{program.duration}</div>
                          <div>{program.participants}</div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold nagara-subheadline text-nagara-white mb-2">
                          {program.title}
                        </h3>
                        <div className="text-nagara-gold nagara-body font-semibold mb-4">
                          {program.format}
                        </div>
                        <p className="text-nagara-white/80 nagara-body">
                          {program.description}
                        </p>
                      </div>

                      {/* Topics */}
                      <div>
                        <h4 className="text-nagara-white font-semibold nagara-body mb-3">
                          Key Topics:
                        </h4>
                        <div className="space-y-2">
                          {program.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-nagara-gold" />
                              <span className="text-nagara-white/70 nagara-body">
                                {topic}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <h4 className="text-nagara-white font-semibold nagara-body mb-3">
                          Expected Outcomes:
                        </h4>
                        <div className="space-y-2">
                          {program.outcomes.map((outcome, outcomeIndex) => (
                            <div key={outcomeIndex} className="flex items-start gap-3">
                              <svg className="w-4 h-4 text-nagara-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-nagara-white/70 nagara-body">
                                {outcome}
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

        {/* Training Formats Section */}
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
                  Flexible Training
                  <span className="block text-nagara-gold">Delivery Formats</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl mx-auto"
                >
                  Choose the training format that best fits your team&rsquo;s needs, schedule, and learning preferences.
                </motion.p>
              </div>
            </FadeInWhenVisible>

            <Grid cols={3} gap="lg" className="lg:grid-cols-3">
              {trainingFormats.map((format, index) => (
                <motion.div
                  key={format.format}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 lg:p-8 text-center">
                    <Stack spacing="lg">
                      <h3 className="text-xl font-bold nagara-subheadline text-nagara-white">
                        {format.format}
                      </h3>
                      
                      <p className="text-nagara-white/80 nagara-body">
                        {format.description}
                      </p>

                      <div>
                        <h4 className="text-nagara-white font-semibold nagara-body mb-3">
                          Benefits:
                        </h4>
                        <div className="space-y-2">
                          {format.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start gap-3 text-left">
                              <svg className="w-4 h-4 text-nagara-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-nagara-white/70 nagara-body">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-nagara-white/10">
                        <div className="text-nagara-gold nagara-body font-semibold">
                          Best for: {format.bestFor}
                        </div>
                      </div>
                    </Stack>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </Container>
        </section>

        {/* Training Approach Section */}
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
                  Our Training
                  <span className="block text-nagara-gold">Methodology</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl mx-auto"
                >
                  A systematic approach that ensures maximum learning retention and practical application of new skills and knowledge.
                </motion.p>
              </div>
            </FadeInWhenVisible>

            <div className="space-y-12 lg:space-y-16">
              {trainingApproach.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Grid cols={4} gap="xl" className="lg:grid-cols-4 items-center">
                    {/* Step Number */}
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-nagara-xl bg-nagara-gold/10 border border-nagara-gold/30 mb-4">
                        <span className="text-2xl font-bold nagara-subheadline text-nagara-gold">
                          {step.step}
                        </span>
                      </div>
                      <div className="text-nagara-gold nagara-caption font-semibold">
                        {step.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3">
                      <Card className="p-8">
                        <Stack spacing="lg">
                          <div>
                            <h3 className="text-2xl font-bold nagara-subheadline text-nagara-white mb-4">
                              {step.title}
                            </h3>
                            <p className="text-lg text-nagara-white/80 nagara-body-large">
                              {step.description}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-nagara-white font-semibold nagara-body mb-3">
                              Key Activities:
                            </h4>
                            <Grid cols={2} gap="md" className="md:grid-cols-2">
                              {step.activities.map((activity, activityIndex) => (
                                <div key={activityIndex} className="flex items-center gap-3">
                                  <svg className="w-4 h-4 text-nagara-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="text-nagara-white/70 nagara-body">
                                    {activity}
                                  </span>
                                </div>
                              ))}
                            </Grid>
                          </div>
                        </Stack>
                      </Card>
                    </div>
                  </Grid>

                  {/* Connector Line */}
                  {index < trainingApproach.length - 1 && (
                    <div className="hidden lg:block absolute left-12 top-24 w-0.5 h-16 bg-nagara-gold/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Success Stories Section */}
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
                  Training Success Stories
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl mx-auto"
                >
                  See how our training programs have enhanced leadership capabilities and driven organizational transformation.
                </motion.p>
              </div>
            </FadeInWhenVisible>

            <Grid cols={1} gap="lg" className="lg:grid-cols-1 max-w-6xl mx-auto">
              {clientSuccessStories.map((story, index) => (
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
                                {story.company}
                              </h3>
                              <span className="text-nagara-gold nagara-caption font-semibold bg-nagara-gold/10 px-3 py-1 rounded-nagara-md">
                                {story.duration}
                              </span>
                            </div>
                            <div className="text-nagara-gold nagara-body font-semibold mb-2">
                              {story.industry}
                            </div>
                            <div className="text-nagara-silver nagara-body">
                              {story.program}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-nagara-white font-semibold nagara-body mb-2">
                              Challenge:
                            </h4>
                            <p className="text-nagara-white/80 nagara-body">
                              {story.challenge}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-nagara-white font-semibold nagara-body mb-2">
                              Solution:
                            </h4>
                            <p className="text-nagara-white/80 nagara-body">
                              {story.solution}
                            </p>
                          </div>
                        </Stack>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-xl font-bold nagara-subheadline text-nagara-gold mb-6">
                          Training Impact:
                        </h4>
                        <div className="space-y-4">
                          {story.results.map((result, resultIndex) => (
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
                    Ready to Develop Your
                    <span className="block text-nagara-gold">Technology Leadership?</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-nagara-white/80 nagara-body-large max-w-3xl"
                  >
                    Let&rsquo;s design a custom training program that enhances your team&rsquo;s technology leadership capabilities and drives digital transformation success.
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
                        Free Training Consultation
                      </div>
                      <div className="text-nagara-white/80 nagara-body">
                        Needs assessment & custom program design
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
                        Design Custom Program
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