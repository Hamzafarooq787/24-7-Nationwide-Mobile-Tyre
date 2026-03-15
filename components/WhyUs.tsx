"use client";

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  {
    icon: 'schedule',
    title: 'Available 24/7, 365 Days',
    description:
      'Day or night, bank holiday or weekend — our dispatch team never sleeps. When you call, we answer and we arrive.',
  },
  {
    icon: 'public',
    title: 'Nationwide Coverage',
    description:
      'From the Scottish Highlands to the South Coast, our strategically positioned fleet covers every corner of the UK.',
  },
  {
    icon: 'verified_user',
    title: 'Certified Technicians',
    description:
      'Every member of our team is fully certified and undergoes regular training on the latest vehicle technology.',
  },
  {
    icon: 'payments',
    title: 'Upfront, Honest Pricing',
    description:
      'No hidden fees, no surprises. We give you a fixed quote before we start — you only pay what you&apos;re told.',
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  // Floating icons with red color
  const floatingIcons = [
    { icon: 'tire_repair', delay: 0, x: '5%', y: '10%', size: 40 },
    { icon: 'directions_car', delay: 1, x: '90%', y: '20%', size: 50 },
    { icon: 'build', delay: 2, x: '80%', y: '80%', size: 35 },
    { icon: 'speed', delay: 0.5, x: '15%', y: '70%', size: 45 },
    { icon: 'star', delay: 1.5, x: '70%', y: '40%', size: 30 },
    { icon: 'bolt', delay: 2.5, x: '30%', y: '85%', size: 25 },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      id="why-us"
      style={{ background: '#fef9c3' }} // Light yellow background
    >
      {/* Floating Background Icons (Red, very light) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-red-600/10"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -20, 0, 20, 0],
              x: [0, 10, -10, 10, 0],
              rotate: [0, 10, -10, 5, 0],
              scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: item.size }}>
              {item.icon}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-600 font-semibold text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-red-600 mb-4">
            Trusted by Thousands of <br />
            <span className="text-red-700">UK Drivers</span>
          </h2>
          <p className="text-red-800/70 max-w-2xl mx-auto">
            We've built our reputation one callout at a time — delivering fast, professional tyre services across the UK every single day.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { value: '15+', label: 'Years Experience', icon: 'calendar_month', color: 'red' },
            { value: '50k+', label: 'Tyres Fitted', icon: 'tire_repair', color: 'red' },
            { value: '4.9★', label: 'Average Rating', icon: 'star', color: 'red' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl" />
              <div className="relative bg-white border border-red-100 rounded-2xl p-6 overflow-hidden shadow-lg">
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-red-500 text-white mb-4 shadow-md">
                    <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                  </div>
                  <p className="text-4xl font-black text-red-600 mb-1">{stat.value}</p>
                  <p className="text-red-700/60">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-red-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile-Tyre-Fitting-2-opt-5H5ca6Bpzn3ULZTfhlgwQIioxuxCgZ.webp"
                alt="HS 24/7 technician fitting a tyre"
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-100 via-transparent to-transparent" />

              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm border border-red-200 rounded-lg px-4 py-2 shadow-lg"
              >
                <p className="text-red-600 font-bold flex items-center gap-1">
                  <span>🚐</span> 24/7 Mobile Service
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Reasons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-red-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-white border border-red-100 rounded-xl p-6 hover:border-red-300 transition-colors shadow-md">
                  <div className="flex gap-5">
                    <div className="shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-500 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                        <div className="relative w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center shadow-md">
                          <span className="material-symbols-outlined text-white text-2xl">
                            {reason.icon}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-red-700 mb-2">{reason.title}</h4>
                      <p className="text-red-800/70 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="pt-4"
            >
              <button className="group relative px-8 py-4 bg-red-600 rounded-xl font-bold text-white overflow-hidden shadow-lg hover:bg-red-700 transition-colors">
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Get Your Quote Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}