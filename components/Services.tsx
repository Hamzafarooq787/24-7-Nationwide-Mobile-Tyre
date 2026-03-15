"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Mobile Tyre Fitting',
    description: 'Professional fitting at your doorstep or workplace. Save time and avoid the garage.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile-Tyre-Fitting-2-opt-5H5ca6Bpzn3ULZTfhlgwQIioxuxCgZ.webp',
    imageAlt: 'Technician in hi-vis vest fitting a tyre',
    icon: 'tire_repair',
  },
  {
    title: 'Tyre Replacement',
    description: "Full range of premium and budget brands. We'll find the perfect match for your vehicle.",
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile-Tyre-Replacement-opt-jPKvJKqwPQu0D8uQJ9T42yxfUZH4f9.webp',
    imageAlt: 'Mobile tyre technician carrying a tyre',
    icon: 'swap_driving_apps_wheel',
  },
  {
    title: 'Flat Tyre Repair',
    description: "On-site puncture repairs following British Standard BSAU159. Don't let a flat stop you.",
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flat-Tyres-Service-opt-uPERNCoakuntNtlkzrb8e4VVNHlNHN.webp',
    imageAlt: 'Technician repairing a flat tyre',
    icon: 'repair',
  },
  {
    title: 'Locking Wheel Nut Removal',
    description: "Lost your key? We use specialist tools to remove locking nuts without damaging alloys.",
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking-Wheel-Nut-Removal-opt-XPtcL3h7KCJZluUkO909wxsZDsPa33.webp',
    imageAlt: 'Gloved hands using an impact wrench',
    icon: 'lock',
  },
  {
    title: 'Wheel Balancing',
    description: 'Ensure a smooth ride and prevent uneven tyre wear with precision balancing on-site.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wheel-Balancing-opt-ezVcF4lZMh3KknwfuwcAXyWI8dURxv.webp',
    imageAlt: 'Technician using a digital wheel balancing machine',
    icon: 'balance',
  },
  {
    title: 'Emergency Tyre Assistance',
    description: "Stuck on the motorway at 3 AM? We're on our way. Fastest emergency response in the UK.",
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency-Tyre-Assistance-opt-k2Ja8o1zdyoA87rTYgjxLmyzzHam24.webp',
    imageAlt: 'Technician working on a tyre at night',
    icon: 'emergency',
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Alternating directions: even cards left se, odd right se
  const itemVariants = (index: number) => ({
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -50 : 50,  // even: left se, odd: right se
      y: 20 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  });

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services">
      {/* Header Animation - Slide from Left + Fade */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
          Our Mobile <span className="text-secondary">Tyre Services</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We provide comprehensive tyre solutions wherever you are.
        </p>
      </motion.div>

      {/* Grid with Staggered Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            custom={index}
            variants={itemVariants(index)}
            whileHover={{ 
              y: -8,
              boxShadow: "0 25px 30px -12px rgba(0,0,0,0.15)",
              transition: { duration: 0.2 }
            }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100"
          >
            {/* Image Container */}
            <div className="h-56 overflow-hidden relative">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Icon Overlay with Animation */}
              <motion.div 
                className="absolute bottom-4 right-4 bg-secondary/90 p-2 rounded-full shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="material-symbols-outlined text-primary text-2xl">
                  {service.icon}
                </span>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                {/* Icon for mobile (hidden on desktop) */}
                <span className="material-symbols-outlined text-secondary text-2xl md:hidden">
                  {service.icon}
                </span>
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              {/* Learn More Link with Hover Arrow */}
              <Link 
                href="#" 
                className="text-secondary font-semibold inline-flex items-center gap-1 group/link"
              >
                <span>Learn more</span>
                <motion.span 
                  className="material-symbols-outlined text-lg"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  arrow_forward
                </motion.span>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}