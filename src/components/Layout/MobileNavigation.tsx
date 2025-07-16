'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/UI';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const navigationItems = [
  { 
    href: '/', 
    label: 'Home',
    description: 'Strategic tech solutions' 
  },
  { 
    href: '/services', 
    label: 'Services',
    description: 'Our service offerings'
  },
  { 
    href: '/about', 
    label: 'About',
    description: 'Meet Maurice Rashad'
  },
  { 
    href: '/contact', 
    label: 'Contact',
    description: 'Get in touch today'
  },
];

const serviceItems = [
  { 
    href: '/services/strategic-consulting', 
    label: 'Strategic Consulting',
    price: '$99/month'
  },
  { 
    href: '/services/implementation', 
    label: 'Implementation Services',
    price: '$75/hour'
  },
  { 
    href: '/services/training', 
    label: 'Executive Training',
    price: '$99/workshop'
  },
  { 
    href: '/services/ai-lead-generation', 
    label: 'Revenue Acceleration',
    price: '$149/month'
  },
];

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  className,
}) => {
  const [activeSection, setActiveSection] = useState<'main' | 'services'>('main');
  const pathname = usePathname();

  // Reset to main section when menu opens
  useEffect(() => {
    if (isOpen) {
      setActiveSection('main');
    }
  }, [isOpen]);

  // Close menu when pathname changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={cn(
            'fixed inset-0 z-50 md:hidden',
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-nagara-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Menu Content */}
          <motion.div
            className="relative h-full flex flex-col"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Header */}
            <motion.div 
              className="flex items-center justify-between p-4 border-b border-nagara-white/10"
              variants={itemVariants}
            >
              <h2 className="text-xl font-bold nagara-headline text-nagara-white">
                Menu
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-nagara-md hover:bg-nagara-white/10 transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-nagara-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                {activeSection === 'main' && (
                  <motion.div
                    key="main"
                    className="p-4 space-y-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Main Navigation */}
                    <div className="space-y-2">
                      {navigationItems.map((item) => (
                        <motion.div
                          key={item.href}
                          variants={itemVariants}
                          className="relative"
                        >
                          {item.href === '/services' ? (
                            <button
                              onClick={() => setActiveSection('services')}
                              className={cn(
                                'w-full flex items-center justify-between p-4 rounded-nagara-lg',
                                'bg-nagara-charcoal hover:bg-nagara-gold/10 transition-all duration-300',
                                'border border-nagara-white/10 hover:border-nagara-gold/30'
                              )}
                            >
                              <div className="text-left">
                                <div className="text-lg font-semibold nagara-subheadline text-nagara-white">
                                  {item.label}
                                </div>
                                <div className="text-sm text-nagara-white/70 nagara-body">
                                  {item.description}
                                </div>
                              </div>
                              <svg className="w-5 h-5 text-nagara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              className={cn(
                                'block p-4 rounded-nagara-lg transition-all duration-300',
                                'bg-nagara-charcoal hover:bg-nagara-gold/10',
                                'border border-nagara-white/10 hover:border-nagara-gold/30',
                                pathname === item.href && 'border-nagara-gold bg-nagara-gold/10'
                              )}
                            >
                              <div className="text-lg font-semibold nagara-subheadline text-nagara-white">
                                {item.label}
                              </div>
                              <div className="text-sm text-nagara-white/70 nagara-body">
                                {item.description}
                              </div>
                            </Link>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Quick Actions */}
                    <motion.div 
                      className="space-y-4 pt-6 border-t border-nagara-white/10"
                      variants={itemVariants}
                    >
                      <h3 className="text-sm font-semibold nagara-caption text-nagara-white/80">
                        Quick Actions
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          variant="primary"
                          size="sm"
                          className="w-full"
                          onClick={() => {
                            onClose();
                            window.location.href = '/contact';
                          }}
                        >
                          Book Call
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() => {
                            onClose();
                            window.location.href = '/contact#quote';
                          }}
                        >
                          Get Quote
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {activeSection === 'services' && (
                  <motion.div
                    key="services"
                    className="p-4 space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Back Button */}
                    <button
                      onClick={() => setActiveSection('main')}
                      className="flex items-center gap-2 text-nagara-gold hover:text-nagara-gold/80 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="nagara-caption">Back</span>
                    </button>

                    {/* Services List */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold nagara-subheadline text-nagara-white">
                        Our Services
                      </h3>
                      {serviceItems.map((service, index) => (
                        <motion.div
                          key={service.href}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <Link
                            href={service.href}
                            className={cn(
                              'block p-4 rounded-nagara-lg transition-all duration-300',
                              'bg-nagara-charcoal hover:bg-nagara-gold/10',
                              'border border-nagara-white/10 hover:border-nagara-gold/30',
                              pathname === service.href && 'border-nagara-gold bg-nagara-gold/10'
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold nagara-subheadline text-nagara-white">
                                  {service.label}
                                </div>
                              </div>
                              <div className="text-nagara-gold font-semibold nagara-body">
                                {service.price}
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Services CTA */}
                    <motion.div
                      className="pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <Button
                        variant="primary"
                        size="md"
                        className="w-full"
                        onClick={() => {
                          onClose();
                          window.location.href = '/services';
                        }}
                      >
                        View All Services
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <motion.div 
              className="p-4 border-t border-nagara-white/10"
              variants={itemVariants}
            >
              <div className="text-center text-sm text-nagara-white/60 nagara-body">
                © 2024 Maurice Rashad. All rights reserved.
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};