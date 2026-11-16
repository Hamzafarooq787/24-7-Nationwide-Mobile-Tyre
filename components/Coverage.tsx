'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const UKMap = dynamic(() => import('./UKMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-red-50 rounded-2xl">
      <div className="flex flex-col items-center gap-3 text-red-400">
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="material-symbols-outlined text-[40px]"
        >
          map
        </motion.span>
        <span className="text-sm font-medium">Loading map…</span>
      </div>
    </div>
  ),
});

const coverageAreas = [
  { area: 'London & Greater London', icon: 'location_city' },
  { area: 'Midlands — Birmingham, Coventry, Leicester', icon: 'factory' },
  { area: 'North West & North East England', icon: 'landscape' },
  { area: 'Scotland & Wales Regional Hubs', icon: 'terrain' },
  { area: 'South Coast & Home Counties', icon: 'beach_access' },
  { area: 'East Anglia & East Midlands', icon: 'grass' },
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

export default function Coverage() {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-yellow-50"
      id="coverage"
    >
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { icon: 'location_city', animation: 'float', left: '5%', top: '15%', size: 40 },
          { icon: 'factory', animation: 'bounce', left: '85%', top: '25%', size: 50 },
          { icon: 'landscape', animation: 'vibrate', left: '75%', top: '80%', size: 35 },
          { icon: 'terrain', animation: 'pulse', left: '20%', top: '70%', size: 30 },
          { icon: 'beach_access', animation: 'spin', left: '40%', top: '85%', size: 25 },
          { icon: 'grass', animation: 'combined', left: '60%', top: '10%', size: 45 },
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
          className="max-w-xl mb-10 sm:mb-14"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-600 font-semibold text-sm mb-4">
            UK-Wide
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-red-700 mb-4">
            Service Coverage
          </h2>
          <p className="text-red-800/60 text-lg leading-relaxed">
            No matter where you are stranded in the UK, HS 24/7 is just a phone call away. Our fleet is
            strategically positioned near major motorways and city centres.
          </p>
        </motion.div>

        {/* Two-col layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left — coverage areas */}
          <div className="w-full lg:w-[40%] flex flex-col gap-4">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {coverageAreas.map(({ area, icon }) => (
                <motion.div
                  key={area}
                  variants={itemVariants}
                  whileHover={{ x: 5, borderColor: '#ef4444' }}
                  className="flex items-center gap-3 bg-white border-2 border-red-100 rounded-xl px-4 py-3.5 hover:border-red-300 transition-all shadow-sm hover:shadow"
                >
                  <motion.span
                    animate={iconAnimations.pulse}
                    className="material-symbols-outlined text-red-500 text-[20px] shrink-0"
                  >
                    {icon}
                  </motion.span>
                  <span className="text-red-700 text-sm font-medium">{area}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Postcode check card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5 }}
              className="mt-2 bg-red-600 rounded-xl p-5 flex items-start gap-4 shadow-lg"
            >
              <motion.div
                animate={iconAnimations.bounce}
                className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center shrink-0"
              >
                <span className="material-symbols-outlined text-red-600 text-[20px]">search</span>
              </motion.div>
              <div>
                <p className="font-bold text-white text-sm">Not sure if we cover you?</p>
                <p className="text-yellow-100 text-xs mt-1 leading-relaxed">
                  Call us with your postcode for instant confirmation. We cover far more than you might expect.
                </p>
                <Link
                  href="tel:+447856978630"
                  className="inline-flex items-center gap-1.5 mt-3 text-yellow-300 text-xs font-bold hover:text-yellow-200 transition-colors"
                >
                  <motion.span
                    animate={iconAnimations.vibrate}
                    className="material-symbols-outlined text-[16px]"
                  >
                    call
                  </motion.span>
                  Check Your Area — Call Us
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right — interactive map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:w-[60%]"
          >
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-red-100 shadow-lg aspect-[4/3]">
              {/* Leaflet map */}
              <UKMap />

              {/* Overlay badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute bottom-4 left-4 z-10 bg-red-700/90 backdrop-blur-sm text-white rounded-xl px-4 py-3 border border-white/20 pointer-events-none"
              >
                <p className="font-black text-sm">Nationwide Coverage</p>
                <p className="text-yellow-200 text-xs mt-0.5">Entire United Kingdom</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-md pointer-events-none"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-red-700 font-bold text-xs">Technicians Active</span>
              </motion.div>
            </div>

            {/* Legend */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="text-red-400 text-xs mt-3 flex items-center gap-1.5"
            >
              <span className="inline-block w-3 h-3 rounded-full bg-red-500 shrink-0 animate-pulse" />
              Circle size indicates number of active technicians. Click a marker for details.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}