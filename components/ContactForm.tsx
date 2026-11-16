'use client';

import { useState, FormEvent, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const WHATSAPP_NUMBER = '447856978630';

// Animation variants for icons
const iconAnimations = {
  bounce: {
    y: [0, -8, 0, -4, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }
  },
  vibrate: {
    rotate: [0, 5, -5, 5, -5, 0],
    x: [0, 2, -2, 2, -2, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "linear"
    }
  },
  pulse: {
    scale: [1, 1.1, 1],
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
  }
};

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Emergency Tyre Replacement');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const text = [
      `*New Enquiry from HS 24/7 Mobile Tyres Website*`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Service:* ${service}`,
      `*Message:* ${message}`,
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="rounded-xl bg-white p-5 sm:p-8 shadow-lg border border-red-100 h-full"
    >
      {/* Header with animated icon */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-2">
          <motion.span
            animate={iconAnimations.float}
            className="material-symbols-outlined text-red-500 text-2xl"
          >
            chat
          </motion.span>
          <h2 className="text-lg sm:text-xl font-bold text-red-700">Send an Enquiry</h2>
        </div>
        <p className="text-sm text-red-400 leading-relaxed">
          For immediate roadside help,{' '}
          <Link
            href="tel:+447856978630"
            className="text-red-500 font-bold hover:text-red-600 transition-colors inline-flex items-center gap-1 group"
          >
            <motion.span
              animate={iconAnimations.vibrate}
              className="material-symbols-outlined text-[18px]"
            >
              call
            </motion.span>
            call us directly
          </Link>
          . Otherwise fill in the form and we'll respond via WhatsApp.
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col gap-1.5"
        >
          <label className="text-xs font-semibold text-red-600 uppercase tracking-wide" htmlFor="name">
            Full Name
          </label>
          <input
            required
            className="rounded-lg border border-red-200 bg-red-50/50 px-3 py-2.5 text-sm text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
            id="name"
            name="name"
            placeholder="John Smith"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </motion.div>

        {/* Phone Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-col gap-1.5"
        >
          <label className="text-xs font-semibold text-red-600 uppercase tracking-wide" htmlFor="phone">
            Phone Number
          </label>
          <input
            required
            className="rounded-lg border border-red-200 bg-red-50/50 px-3 py-2.5 text-sm text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
            id="phone"
            name="phone"
            placeholder="+44 7xxx xxxxxx"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </motion.div>

        {/* Service Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col gap-1.5 sm:col-span-2"
        >
          <label className="text-xs font-semibold text-red-600 uppercase tracking-wide" htmlFor="service">
            Service Needed
          </label>
          <select
            className="rounded-lg border border-red-200 bg-red-50/50 px-3 py-2.5 text-sm text-red-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option>Emergency Tyre Replacement</option>
            <option>Home / Work Fitting (Scheduled)</option>
            <option>Tyre Repair / Puncture</option>
            <option>Fleet Services</option>
            <option>Quote Request</option>
          </select>
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex flex-col gap-1.5 sm:col-span-2"
        >
          <label className="text-xs font-semibold text-red-600 uppercase tracking-wide" htmlFor="message">
            Message
          </label>
          <textarea
            required
            className="rounded-lg border border-red-200 bg-red-50/50 px-3 py-2.5 text-sm text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all resize-none"
            id="message"
            name="message"
            placeholder="How can we help you today?"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="sm:col-span-2"
        >
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-bold text-white hover:bg-[#1ebe5d] transition-all shadow-md group"
          >
            {/* WhatsApp icon with animation */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
              animate={iconAnimations.pulse}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </motion.svg>
            Send via WhatsApp
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
}