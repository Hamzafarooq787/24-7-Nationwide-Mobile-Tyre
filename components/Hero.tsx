"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-section-Background-Image-opt-dlX7U26YsoxCW7Xv8XHdkPKe8QvoCo.webp"
          alt="HS 24/7 Mobile Tyres branded van with technician servicing a car roadside"
          fill
          className="object-cover"
          priority
        />
        
        {/* Floating Icons Background (Hidden on mobile) */}
        <div className="hidden md:block">
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute text-6xl text-white/10 left-[10%] top-[20%]"
          >
            <span className="material-symbols-outlined text-6xl">tire_repair</span>
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute text-6xl text-white/10 right-[15%] top-[60%]"
          >
            <span className="material-symbols-outlined text-6xl">directions_car</span>
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute text-6xl text-white/10 left-[20%] bottom-[20%]"
          >
            <span className="material-symbols-outlined text-6xl">build</span>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl">
          {/* Badge with tyre icon */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1 rounded-full mb-5 sm:mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-1">
              <span className="material-symbols-outlined text-base">tire_repair</span>
              Available 24/7 Nationwide
            </span>
          </motion.div>

          {/* Heading with car icon */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-4 sm:mb-6"
          >
            24/7 Nationwide{' '}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-secondary inline-flex items-center gap-2"
            >
              Mobile Tyre
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="material-symbols-outlined text-4xl"
              >
                directions_car
              </motion.span>
            </motion.span>{' '}
            Services
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-white/80 mb-8 sm:mb-10 leading-relaxed"
          >
            Fast, reliable mobile tyre fitting and emergency roadside assistance across the UK. We come to you at home, work, or roadside.
          </motion.p>

          {/* Buttons with animated icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              href="tel:+447856978630"
              className="bg-secondary text-primary px-6 sm:px-8 py-3.5 rounded-lg font-black text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-secondary/80 transition-all shadow-xl group"
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="material-symbols-outlined text-[22px]"
              >
                call
              </motion.span>
              Call Now 24/7
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-6 sm:px-8 py-3.5 rounded-lg font-bold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all group"
            >
              <span>Request Service</span>
              <motion.span
                whileHover={{ x: 5 }}
                className="material-symbols-outlined"
              >
                arrow_forward
              </motion.span>
            </Link>
          </motion.div>

          {/* Small icons row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 mt-8 text-white/40"
          >
            <motion.span 
              animate={{ y: [0, -5, 0] }} 
              transition={{ duration: 2, repeat: Infinity }}
              className="material-symbols-outlined text-2xl"
            >
              tire_repair
            </motion.span>
            <motion.span 
              animate={{ y: [0, -5, 0] }} 
              transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
              className="material-symbols-outlined text-2xl"
            >
              directions_car
            </motion.span>
            <motion.span 
              animate={{ y: [0, -5, 0] }} 
              transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
              className="material-symbols-outlined text-2xl"
            >
              build
            </motion.span>
            <motion.span 
              animate={{ y: [0, -5, 0] }} 
              transition={{ duration: 2, delay: 0.9, repeat: Infinity }}
              className="material-symbols-outlined text-2xl"
            >
              speed
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}