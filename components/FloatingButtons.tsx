'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FloatingButtons() {
  // Animation variants for icons
  const iconAnimations = {
    bounce: {
      y: [0, -8, 0, -4, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.3, 0.6, 0.8, 1]
      }
    },
    vibrate: {
      rotate: [0, 8, -8, 4, -4, 0],
      x: [0, 3, -3, 2, -2, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "linear"
      }
    },
    pulse: {
      scale: [1, 1.15, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float: {
      y: [0, -5, 0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    shake: {
      rotate: [0, 10, -10, 10, -10, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Button entrance animation
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5 // Thoda delay after page load
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-5 z-50 flex flex-col gap-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* WhatsApp Button */}
      <motion.div
        variants={buttonVariants}
        whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          href="https://wa.me/447928922369"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden group"
          style={{ backgroundColor: '#25D366' }}
        >
          {/* Ripple effect on hover */}
          <motion.span
            className="absolute inset-0 bg-white/30 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* WhatsApp Icon with animation */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="28"
            height="28"
            fill="white"
            aria-hidden="true"
            animate={iconAnimations.float}
            whileHover={{ rotate: [0, -5, 5, -5, 5, 0], transition: { duration: 0.5 } }}
          >
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.43-2.007A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.763-1.847l-.484-.287-5.008 1.193 1.215-4.873-.316-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.874c-.398-.199-2.355-1.162-2.72-1.295-.365-.133-.631-.199-.897.199-.266.398-1.03 1.295-1.263 1.561-.232.266-.465.299-.863.1-.398-.199-1.682-.62-3.204-1.977-1.184-1.057-1.983-2.363-2.215-2.761-.232-.398-.025-.613.175-.811.179-.178.398-.465.597-.697.199-.233.266-.399.398-.665.133-.266.066-.499-.033-.698-.1-.199-.897-2.163-1.229-2.96-.324-.778-.653-.673-.897-.685l-.764-.013c-.266 0-.698.1-.1063.499-.365.398-1.396 1.363-1.396 3.326s1.429 3.858 1.628 4.124c.199.266 2.812 4.295 6.813 6.022.953.411 1.696.657 2.276.841.956.304 1.826.261 2.514.158.767-.114 2.355-.963 2.688-1.894.333-.931.333-1.729.232-1.894-.1-.166-.365-.266-.764-.465z" />
          </motion.svg>
        </Link>
      </motion.div>

      {/* Call Button */}
      <motion.div
        variants={buttonVariants}
        whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          href="tel:+447928922369"
          aria-label="Call us"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden group"
          style={{ backgroundColor: '#DC2626' }} // Red
        >
          {/* Ripple effect on hover */}
          <motion.span
            className="absolute inset-0 bg-white/30 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Call Icon with vibration animation */}
          <motion.span
            className="material-symbols-outlined text-white text-[26px] relative z-10"
            animate={iconAnimations.vibrate}
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.4 } }}
          >
            call
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}