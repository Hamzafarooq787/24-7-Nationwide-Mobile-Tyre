"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    icon: 'phone_in_talk',
    title: 'Call or Request Online',
    description: 'Contact our 24/7 hotline or submit a quick booking request. We\'ll get your details and provide an instant quote.',
  },
  {
    number: '02',
    icon: 'local_shipping',
    title: 'Technician Dispatched',
    description: 'We locate the nearest available technician and dispatch them straight to your location — no waiting around.',
  },
  {
    number: '03',
    icon: 'check_circle',
    title: 'Back on the Road',
    description: 'Our expert fits your tyre or repairs the puncture on-site. Job done — you\'re ready to drive again in no time.',
  },
];

// Animation variants for different icon types
const iconAnimations = {
  // Continuous floating animation
  float: {
    y: [0, -8, 0, 8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }
  },
  // Gentle bounce
  bounce: {
    y: [0, -12, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }
  },
  // Subtle vibration/wiggle
  vibrate: {
    rotate: [0, 5, -5, 5, -5, 0],
    x: [0, 2, -2, 2, -2, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "linear",
    }
  },
  // Pulse effect
  pulse: {
    scale: [1, 1.15, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }
  },
  // Rotating/spinning
  spin: {
    rotate: [0, 360],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    }
  },
  // Combined effects
  combined: {
    y: [0, -5, 0, 5, 0],
    rotate: [0, 3, -3, 3, -3, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-yellow-50"
      id="how-it-works"
    >
      {/* Floating Icons Background (with continuous animations) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { icon: 'phone_in_talk', animation: 'float', left: '5%', top: '15%', size: 40 },
          { icon: 'local_shipping', animation: 'bounce', left: '85%', top: '25%', size: 50 },
          { icon: 'check_circle', animation: 'pulse', left: '75%', top: '80%', size: 35 },
          { icon: 'schedule', animation: 'vibrate', left: '20%', top: '70%', size: 30 },
          { icon: 'bolt', animation: 'spin', left: '40%', top: '85%', size: 25 },
          { icon: 'tire_repair', animation: 'combined', left: '60%', top: '10%', size: 45 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-red-500/10"
            style={{ left: item.left, top: item.top, fontSize: item.size }}
            animate={iconAnimations[item.animation]}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 'inherit' }}>
              {item.icon}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-600 font-semibold text-sm mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-red-700 mb-4">
            How It Works
          </h2>
          <p className="text-red-800/60 text-lg leading-relaxed">
            Three straightforward steps stand between you and getting back on the road.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group"
            >
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] right-0 h-0.5 bg-red-200 -translate-y-1/2 z-0" />
              )}

              {/* Step Card */}
              <div className="relative bg-white border-2 border-red-100 rounded-2xl p-6 sm:p-8 h-full flex flex-col shadow-lg hover:shadow-xl transition-all hover:border-red-300">
                {/* Step Number Badge */}
                <span className="absolute top-4 right-4 text-red-100 font-black text-6xl leading-none select-none">
                  {step.number}
                </span>

                {/* Icon with Continuous Animation */}
                <motion.div
                  animate={i === 0 ? iconAnimations.bounce : i === 1 ? iconAnimations.float : iconAnimations.combined}
                  whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.2 } }}
                  className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-5 shadow-md relative z-10"
                >
                  <span className="material-symbols-outlined text-white text-3xl">
                    {step.icon}
                  </span>
                </motion.div>

                <h3 className="text-xl font-bold text-red-700 mb-2 relative z-10">{step.title}</h3>
                <p className="text-red-800/60 text-sm leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 bg-red-600 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <motion.span
              animate={iconAnimations.pulse}
              className="material-symbols-outlined text-yellow-300 text-3xl"
            >
              headset_mic
            </motion.span>
            <p className="text-white font-semibold text-sm sm:text-base">
              Questions before you book?{' '}
              <span className="text-yellow-100 font-normal">Our team is on hand to help.</span>
            </p>
          </div>
          <Link
            href="tel:+447856978630"
            className="flex items-center gap-2 bg-yellow-400 text-red-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-yellow-300 transition-all shadow-md whitespace-nowrap group"
          >
            <motion.span
              animate={iconAnimations.vibrate}
              className="material-symbols-outlined text-[20px] group-hover:scale-110"
            >
              call
            </motion.span>
            Get in Touch Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}