'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
];

const serviceLinks = [
  { label: 'Tyre Replacement', href: '/services' },
  { label: 'Puncture Repair', href: '/services' },
  { label: 'Wheel Balancing', href: '/services' },
  { label: 'Emergency Callout', href: '/services' },
];

// Animation variants for icons
const iconAnimations = {
  float: {
    y: [0, -8, 0, 8, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  },
  bounce: {
    y: [0, -12, 0],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
  },
  vibrate: {
    rotate: [0, 5, -5, 5, -5, 0],
    x: [0, 2, -2, 2, -2, 0],
    transition: { duration: 0.8, repeat: Infinity, ease: "linear" }
  },
  pulse: {
    scale: [1, 1.15, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  },
  spin: {
    rotate: [0, 360],
    transition: { duration: 3, repeat: Infinity, ease: "linear" }
  },
  combined: {
    y: [0, -5, 0, 5, 0],
    rotate: [0, 3, -3, 3, -3, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <footer
      ref={ref}
      className="relative bg-yellow-50 overflow-hidden"
    >
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { icon: 'call', animation: 'bounce', left: '5%', top: '15%', size: 40 },
          { icon: 'location_on', animation: 'float', left: '90%', top: '30%', size: 45 },
          { icon: 'star', animation: 'pulse', left: '15%', top: '70%', size: 35 },
          { icon: 'tire_repair', animation: 'spin', left: '80%', top: '80%', size: 50 },
          { icon: 'directions_car', animation: 'combined', left: '45%', top: '20%', size: 55 },
          { icon: 'schedule', animation: 'vibrate', left: '60%', top: '60%', size: 30 },
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

      <div className="relative z-10">
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="border-b border-red-200 bg-white/80 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-red-600 text-sm font-medium flex items-center gap-2">
              <motion.span
                animate={iconAnimations.pulse}
                className="material-symbols-outlined text-[20px]"
              >
                schedule
              </motion.span>
              Available 24/7 across the UK — call us anytime
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="tel:+447856978630"
                className="flex items-center gap-2 bg-red-500 text-white font-black text-sm px-5 py-2.5 rounded-lg hover:bg-red-600 transition-colors shadow-md"
              >
                <motion.span
                  animate={iconAnimations.bounce}
                  className="material-symbols-outlined text-[18px]"
                >
                  call
                </motion.span>
                Call for Assistance
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Main grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Brand */}
            <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1 space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HS%20247%20Logo%20%282%29-1IVy6QHhQxtalIYhuLfBJJOiarA2JB.png"
                  alt="HS 24/7 Mobile Tyres"
                  width={160}
                  height={56}
                  className="h-12 w-auto object-contain brightness-0 invert hue-rotate-15"
                />
              </Link>
              <p className="text-red-700/70 text-sm leading-relaxed">
                The UK&apos;s most trusted name in mobile tyre replacement and emergency roadside repair.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.span
                      key={i}
                      animate={iconAnimations.pulse}
                      transition={{ delay: i * 0.1 }}
                      className="text-red-500 text-sm"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <span className="text-red-400 text-xs">4.9 / 5 · 2,400+ reviews</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-sm uppercase tracking-widest text-red-500 mb-5">Quick Links</h4>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-3"
              >
                {quickLinks.map(({ label, href }) => (
                  <motion.li key={label} variants={linkVariants}>
                    <Link
                      href={href}
                      className="text-red-700 text-sm hover:text-red-500 transition-colors flex items-center gap-2 group"
                    >
                      <motion.span
                        animate={iconAnimations.pulse}
                        className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 group-hover:bg-red-500"
                      />
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-sm uppercase tracking-widest text-red-500 mb-5">Our Services</h4>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-3"
              >
                {serviceLinks.map(({ label, href }) => (
                  <motion.li key={label} variants={linkVariants}>
                    <Link
                      href={href}
                      className="text-red-700 text-sm hover:text-red-500 transition-colors flex items-center gap-2 group"
                    >
                      <motion.span
                        animate={iconAnimations.pulse}
                        className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 group-hover:bg-red-500"
                      />
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-sm uppercase tracking-widest text-red-500 mb-5">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="tel:+447856978630"
                    className="flex items-start gap-3 group"
                  >
                    <motion.span
                      animate={iconAnimations.bounce}
                      className="material-symbols-outlined text-red-500 text-[20px] mt-0.5"
                    >
                      call
                    </motion.span>
                    <div>
                      <p className="text-red-700 font-bold text-sm group-hover:text-red-500 transition-colors">24/7 Emergency Line</p>
                      <p className="text-red-400 text-xs">+44 7856 978630</p>
                    </div>
                  </Link>
                </li>

                <li className="flex items-start gap-3">
                  <motion.span
                    animate={iconAnimations.float}
                    className="material-symbols-outlined text-red-500 text-[20px] mt-0.5"
                  >
                    location_on
                  </motion.span>
                  <p className="text-red-700 text-sm">National Operations Centre, United Kingdom</p>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-red-200 bg-white/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
            <p className="text-red-400 text-xs">
              Designed &amp; Developed By{' '}
              <a
                href="https://linkedo.co.uk/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-red-500 hover:text-red-600 hover:underline font-medium"
              >
                Linkedo
              </a>
            </p>
            <p className="text-red-400 text-xs">©2026 HS 24/7 Mobile Tyres Ltd. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}