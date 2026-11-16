'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

// Animation variants for icons
const iconAnimations = {
  bounce: {
    y: [0, -8, 0, -4, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  },
  vibrate: {
    rotate: [0, 5, -5, 5, -5, 0],
    x: [0, 2, -2, 2, -2, 0],
    transition: { duration: 0.8, repeat: Infinity, ease: "linear" }
  },
  pulse: {
    scale: [1, 1.1, 1],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
  },
  float: {
    y: [0, -5, 0, 5, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function ContactPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });

  const leftColRef = useRef(null);
  const leftColInView = useInView(leftColRef, { once: true, amount: 0.1 });

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, amount: 0.1 });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen w-full overflow-x-hidden bg-yellow-50">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="bg-gradient-to-br from-red-600 to-red-700 py-10 sm:py-16 text-white relative overflow-hidden"
        >
          {/* Floating background icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {['call', 'chat', 'location_on', 'schedule'].map((icon, i) => (
              <motion.div
                key={i}
                className="absolute text-white/10"
                style={{ left: `${10 + i * 25}%`, top: `${20 + i * 15}%`, fontSize: 40 + i * 10 }}
                animate={iconAnimations.float}
                transition={{ duration: 4 + i, repeat: Infinity, delay: i }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 'inherit' }}>
                  {icon}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-3 py-1 text-yellow-300 border border-yellow-400/30 mb-4 sm:mb-5"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-300" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                24/7 Emergency Assistance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3 sm:mb-4 text-pretty max-w-2xl"
            >
              Need a tyre change?{' '}
              <span className="text-yellow-300">We come to you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl text-sm sm:text-base text-red-100 leading-relaxed"
            >
              Fast, reliable mobile tyre fitting available around the clock. Anywhere in the UK, any time of day.
            </motion.p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left column */}
              <div ref={leftColRef} className="w-full lg:w-80 shrink-0 flex flex-col gap-5">
                {/* Direct Contact Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={leftColInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="rounded-xl bg-white p-5 sm:p-6 shadow-md border-2 border-red-100"
                >
                  <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-red-700">
                    <motion.span
                      animate={iconAnimations.pulse}
                      className="material-symbols-outlined text-red-500 text-[20px]"
                    >
                      headset_mic
                    </motion.span>
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <motion.div
                        animate={iconAnimations.bounce}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500"
                      >
                        <span className="material-symbols-outlined text-[18px]">call</span>
                      </motion.div>
                      <div>
                        <p className="text-xs font-bold uppercase text-red-400 tracking-wider">Emergency Line</p>
                        <p className="text-sm font-bold text-red-700">Available 24/7</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pt-3 border-t border-red-100">
                      <motion.div
                        animate={iconAnimations.float}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500"
                      >
                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                      </motion.div>
                      <div>
                        <p className="text-xs font-bold uppercase text-red-400 tracking-wider">Hours</p>
                        <p className="text-xs font-medium text-red-700">24 Hours, 7 Days a Week</p>
                        <p className="text-xs text-red-400">Always available</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Coverage card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={leftColInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -5 }}
                  className="rounded-xl bg-red-600 p-5 sm:p-6 text-white shadow-md overflow-hidden relative group"
                >
                  <div className="relative z-10">
                    <h3 className="text-sm font-bold mb-1">Nationwide Coverage</h3>
                    <p className="text-xs text-yellow-100 mb-3 leading-relaxed">
                      We cover the entire UK mainland with over 200 mobile units.
                    </p>
                    <ul className="space-y-1.5 text-xs">
                      <li className="flex items-center gap-2">
                        <motion.span
                          animate={iconAnimations.pulse}
                          className="material-symbols-outlined text-yellow-300 text-[16px]"
                        >
                          check_circle
                        </motion.span>
                        Average response: 15–30 mins
                      </li>
                      <li className="flex items-center gap-2">
                        <motion.span
                          animate={iconAnimations.pulse}
                          transition={{ delay: 0.2 }}
                          className="material-symbols-outlined text-yellow-300 text-[16px]"
                        >
                          check_circle
                        </motion.span>
                        Roadside, Home or Work
                      </li>
                    </ul>
                  </div>
                  <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile-Tyre-Replacement-opt-jPKvJKqwPQu0D8uQJ9T42yxfUZH4f9.webp"
                      alt=""
                      width={160}
                      height={160}
                      className="w-40 h-40 object-contain"
                      unoptimized
                    />
                  </div>
                </motion.div>
              </div>

              {/* Contact Form */}
              <div ref={formRef} className="flex-1 min-w-0">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={formInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section ref={ctaRef} className="bg-yellow-400 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <h4 className="text-base sm:text-lg font-black text-red-700">Stranded with a flat tyre?</h4>
              <p className="text-sm text-red-600/80 mt-0.5">
                Our mobile technicians are ready to deploy now.
              </p>
            </div>
            <Link
              href="tel:+447856978630"
              className="flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 rounded-lg font-bold text-sm hover:bg-red-700 transition-colors shrink-0 w-full sm:w-auto group"
            >
              <motion.span
                animate={iconAnimations.vibrate}
                className="material-symbols-outlined text-[20px]"
              >
                call
              </motion.span>
              Call for Emergency Fitting
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}