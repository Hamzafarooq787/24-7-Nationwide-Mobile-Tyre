'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

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

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="relative py-6 sm:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-yellow-50"
    >
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { icon: 'call', animation: 'bounce', left: '10%', top: '20%', size: 50 },
          { icon: 'schedule', animation: 'float', left: '85%', top: '30%', size: 45 },
          { icon: 'check_circle', animation: 'pulse', left: '15%', top: '70%', size: 40 },
          { icon: 'arrow_forward', animation: 'vibrate', left: '75%', top: '80%', size: 35 },
          { icon: 'emergency', animation: 'combined', left: '45%', top: '15%', size: 55 },
          { icon: 'local_shipping', animation: 'spin', left: '60%', top: '60%', size: 30 },
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

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-red-100"
        >
          {/* Red accent bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 w-full bg-red-500 origin-left"
          />

          <div className="px-6 sm:px-10 lg:px-16 py-10 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-xl"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-600 font-semibold text-sm mb-4">
                Emergency or Scheduled
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-red-700 text-pretty leading-tight mb-3">
                Ready to get back on the road?
              </h2>
              <p className="text-red-800/60 text-base leading-relaxed">
                Don&apos;t wait hours for a breakdown truck. Our mobile fitting team provides immediate roadside assistance — available right now, anywhere in the UK.
              </p>

              {/* Trust signals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-x-6 gap-y-2 mt-6"
              >
                {[
                  { text: 'No hidden fees', icon: 'check_circle' },
                  { text: 'Upfront pricing', icon: 'check_circle' },
                  { text: 'Arrive in 15–30 min', icon: 'timer' }
                ].map((item, idx) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5"
                  >
                    <motion.span
                      animate={iconAnimations.pulse}
                      className="material-symbols-outlined text-red-500 text-[16px]"
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-red-700 text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Action block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center sm:items-start lg:items-end gap-4 shrink-0 w-full lg:w-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="tel:+447928922369"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-red-500 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-red-600 transition-colors shadow-lg group"
                >
                  <motion.span
                    animate={iconAnimations.bounce}
                    className="material-symbols-outlined text-[22px]"
                  >
                    call
                  </motion.span>
                  <span>Speak to Our Team</span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/contact"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-yellow-400 text-red-700 border-2 border-red-200 px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-yellow-300 transition-colors group"
                >
                  <span>Book Online</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="material-symbols-outlined text-[18px]"
                  >
                    arrow_forward
                  </motion.span>
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="text-red-400 text-xs text-center lg:text-right"
              >
                Available 24/7 · 365 days a year
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}