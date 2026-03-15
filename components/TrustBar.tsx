"use client";

import { motion } from 'framer-motion';

const trustItems = [
  {
    icon: 'schedule',
    title: '24/7 Emergency',
    subtitle: 'Always available',
  },
  {
    icon: 'bolt',
    title: 'Fast Response',
    subtitle: 'Under 30 mins',
  },
  {
    icon: 'local_shipping',
    title: 'Fully Equipped',
    subtitle: 'Mobile workshops',
  },
  {
    icon: 'verified_user',
    title: 'Expert Staff',
    subtitle: 'Certified technicians',
  },
];

export default function TrustBar() {
  // Container animation for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative -mt-12 z-30 px-4">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {trustItems.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
              transition: { duration: 0.2 }
            }}
            className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-secondary flex flex-col items-center text-center gap-3"
          >
            <span className="material-symbols-outlined text-secondary text-4xl">
              {item.icon}
            </span>
            <div>
              <h3 className="font-bold text-primary">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}