'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  },
  spin: {
    rotate: [0, 360],
    transition: { duration: 3, repeat: Infinity, ease: "linear" }
  }
};

export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });

  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 });

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const coverageRef = useRef(null);
  const coverageInView = useInView(coverageRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <Header />
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-yellow-50">
        <main className="flex-1">
          {/* Hero Section */}
          <section
            ref={heroRef}
            className="relative bg-gradient-to-br from-red-600 to-red-700 py-14 sm:py-20 px-4 sm:px-6 md:px-20 text-white overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={heroInView ? { opacity: 0.1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 pointer-events-none bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile-Tyre-Replacement-opt-jPKvJKqwPQu0D8uQJ9T42yxfUZH4f9.webp')",
              }}
            />
            <div className="max-w-5xl mx-auto relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tight text-pretty"
              >
                Expert Tyre Services{' '}
                <span className="text-yellow-300 underline decoration-yellow-300/30">
                  Delivered To You
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-red-100 max-w-2xl"
              >
                Available 24 hours a day, 7 days a week. Whether you're at home, work, or stranded on the
                roadside, we bring the garage to your location.
              </motion.p>
            </div>

            {/* Floating icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {['tire_repair', 'directions_car', 'build', 'emergency'].map((icon, i) => (
                <motion.div
                  key={i}
                  className="absolute text-white/10"
                  style={{ left: `${20 + i * 20}%`, top: `${10 + i * 15}%`, fontSize: 40 + i * 10 }}
                  animate={iconAnimations.float}
                  transition={{ duration: 4 + i, repeat: Infinity, delay: i }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 'inherit' }}>
                    {icon}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Main Content & Sidebar */}
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col lg:flex-row gap-12">
            {/* Services List */}
            <div ref={servicesRef} className="flex-1 space-y-12">
              {/* Mobile Tyre Fitting - Large Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-red-100 flex flex-col md:flex-row group"
              >
                <div
                  className="md:w-1/3 h-64 md:h-auto bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile-Tyre-Fitting-2-opt-5H5ca6Bpzn3ULZTfhlgwQIioxuxCgZ.webp')",
                  }}
                  role="img"
                  aria-label="Technician in hi-vis vest fitting a tyre on a motorway hard shoulder"
                />
                <div className="p-8 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <motion.span
                        animate={iconAnimations.pulse}
                        className="material-symbols-outlined text-red-500"
                      >
                        home_repair_service
                      </motion.span>
                      <span className="text-red-500 font-bold uppercase tracking-wider text-xs">
                        Primary Service
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-red-700 mb-4">Mobile Tyre Fitting</h3>
                    <p className="text-red-400 mb-6 leading-relaxed">
                      Skip the queue at the garage. Our fully equipped vans carry state-of-the-art fitting and
                      balancing technology directly to your driveway or workplace. We handle all vehicle types,
                      including cars, vans, and 4x4s.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-all flex items-center justify-center gap-2 text-sm group/link"
                    >
                      Request This Service
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="material-symbols-outlined text-[18px]"
                      >
                        arrow_forward
                      </motion.span>
                    </Link>
                    <span className="text-red-300 text-sm font-medium italic flex items-center gap-1">
                      <motion.span animate={iconAnimations.bounce} className="material-symbols-outlined text-base">
                        schedule
                      </motion.span>
                      Available 24/7
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Tyre Replacement - Large Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-red-100 flex flex-col md:flex-row-reverse group"
              >
                <div
                  className="md:w-1/3 h-64 md:h-auto bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile-Tyre-Replacement-opt-jPKvJKqwPQu0D8uQJ9T42yxfUZH4f9.webp')",
                  }}
                  role="img"
                  aria-label="Mobile tyre technician carrying a tyre beside a van at sunrise"
                />
                <div className="p-8 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <motion.span
                        animate={iconAnimations.spin}
                        className="material-symbols-outlined text-red-500"
                      >
                        change_circle
                      </motion.span>
                      <span className="text-red-500 font-bold uppercase tracking-wider text-xs">
                        Replacement
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-red-700 mb-4">Tyre Replacement</h3>
                    <p className="text-red-400 mb-6 leading-relaxed">
                      We stock a massive inventory of premium, mid-range, and budget tyres. From Michelin and
                      Continental to high-quality economy brands, we have the right tyre for your vehicle and
                      budget available for immediate installation.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 items-start">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-all flex items-center justify-center gap-2 text-sm group/link"
                    >
                      Request This Service
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="material-symbols-outlined text-[18px]"
                      >
                        arrow_forward
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Grid of smaller service cards */}
              <motion.div
                ref={gridRef}
                variants={containerVariants}
                initial="hidden"
                animate={gridInView ? "visible" : "hidden"}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* Flat Tyre Repair */}
                <motion.div variants={itemVariants} className="bg-white rounded-xl overflow-hidden shadow-md border-2 border-red-100 group">
                  <div className="h-40 overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flat-Tyres-Service-opt-uPERNCoakuntNtlkzrb8e4VVNHlNHN.webp"
                      alt="Technician repairing a flat tyre on a road"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <motion.span
                        animate={iconAnimations.vibrate}
                        className="material-symbols-outlined text-red-500"
                      >
                        repair
                      </motion.span>
                      <h4 className="text-xl font-bold text-red-700">Flat Tyre Repair</h4>
                    </div>
                    <p className="text-red-400 mb-6 text-sm">
                      Puncture? If it's safe to do so, we'll repair your tyre to British Standard (BSAU159) on-site, saving you the cost of a new tyre.
                    </p>
                    <Link
                      href="/contact"
                      className="w-full py-2.5 bg-red-100 text-red-700 font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all text-sm flex items-center justify-center gap-2 group/link"
                    >
                      Request Repair
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="material-symbols-outlined text-[16px]"
                      >
                        arrow_forward
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>

                {/* Locking Wheel Nut Removal */}
                <motion.div variants={itemVariants} className="bg-white rounded-xl overflow-hidden shadow-md border-2 border-red-100 group">
                  <div className="h-40 overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking-Wheel-Nut-Removal-opt-XPtcL3h7KCJZluUkO909wxsZDsPa33.webp"
                      alt="Gloved hands using an impact wrench on a silver alloy wheel"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <motion.span
                        animate={iconAnimations.spin}
                        className="material-symbols-outlined text-red-500"
                      >
                        lock
                      </motion.span>
                      <h4 className="text-xl font-bold text-red-700">Locking Wheel Nut Removal</h4>
                    </div>
                    <p className="text-red-400 mb-6 text-sm">
                      Lost your key or stripped the bolt? Our specialists use professional extraction tools to safely remove locking wheel nuts without damaging your alloys.
                    </p>
                    <Link
                      href="/contact"
                      className="w-full py-2.5 bg-red-100 text-red-700 font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all text-sm flex items-center justify-center gap-2 group/link"
                    >
                      Request Removal
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="material-symbols-outlined text-[16px]"
                      >
                        arrow_forward
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>

                {/* Wheel Balancing */}
                <motion.div variants={itemVariants} className="bg-white rounded-xl overflow-hidden shadow-md border-2 border-red-100 group">
                  <div className="h-40 overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wheel-Balancing-opt-ezVcF4lZMh3KknwfuwcAXyWI8dURxv.webp"
                      alt="Technician using a digital wheel balancing machine"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <motion.span
                        animate={iconAnimations.pulse}
                        className="material-symbols-outlined text-red-500"
                      >
                        balance
                      </motion.span>
                      <h4 className="text-xl font-bold text-red-700">Wheel Balancing</h4>
                    </div>
                    <p className="text-red-400 mb-6 text-sm">
                      Stop steering wheel vibrations and uneven tyre wear. We provide digital wheel balancing with every fitting or as a standalone service.
                    </p>
                    <Link
                      href="/contact"
                      className="w-full py-2.5 bg-red-100 text-red-700 font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all text-sm flex items-center justify-center gap-2 group/link"
                    >
                      Request Balancing
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="material-symbols-outlined text-[16px]"
                      >
                        arrow_forward
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>

                {/* Emergency Assistance */}
                <motion.div variants={itemVariants} className="bg-white rounded-xl overflow-hidden shadow-md border-2 border-red-100 group">
                  <div className="h-40 overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency-Tyre-Assistance-opt-k2Ja8o1zdyoA87rTYgjxLmyzzHam24.webp"
                      alt="Technician in hi-vis jacket working on a tyre at night"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <motion.span
                        animate={iconAnimations.bounce}
                        className="material-symbols-outlined text-red-500"
                      >
                        emergency
                      </motion.span>
                      <h4 className="text-xl font-bold text-red-700">Emergency Assistance</h4>
                    </div>
                    <p className="text-red-400 mb-6 text-sm">
                      Stranded on the motorway or stuck in a remote location? We offer rapid response times 24/7 to get you back on the road safely.
                    </p>
                    <Link
                      href="tel:+447856978630"
                      className="w-full py-2.5 bg-yellow-400 text-red-700 font-bold rounded-lg hover:bg-yellow-300 transition-all text-sm flex items-center justify-center gap-2 group"
                    >
                      <motion.span
                        animate={iconAnimations.vibrate}
                        className="material-symbols-outlined text-[18px]"
                      >
                        call
                      </motion.span>
                      Rapid Response
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 flex flex-col gap-8">
              {/* Emergency Hotline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-red-600 rounded-2xl p-8 text-white sticky top-24 shadow-xl border-2 border-yellow-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-300" />
                  </div>
                  <span className="font-bold tracking-widest text-sm uppercase">24/7 Emergency Hotline</span>
                </div>
                <h2 className="text-3xl font-black mb-4">Tyre Emergency?</h2>
                <p className="text-yellow-100 mb-8">
                  Call us now and we'll dispatch a mobile unit to your exact location within minutes. No appointment needed.
                </p>
                <Link
                  href="tel:+447856978630"
                  className="flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-red-700 text-lg font-black py-4 px-5 rounded-xl transition-all w-full group"
                >
                  <motion.span
                    animate={iconAnimations.bounce}
                    className="material-symbols-outlined text-4xl"
                  >
                    call
                  </motion.span>
                  Call for Emergency Help
                </Link>
                <div className="mt-8 space-y-4">
                  {[
                    { text: '30-60 Min Response Time', icon: 'schedule' },
                    { text: 'All Major Cards Accepted', icon: 'credit_card' },
                    { text: 'Fully Insured & Certified', icon: 'verified' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <motion.span
                        animate={iconAnimations.pulse}
                        className="material-symbols-outlined text-yellow-300"
                      >
                        {item.icon}
                      </motion.span>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Review */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-2xl p-6 border-2 border-red-100 shadow-md"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      animate={iconAnimations.pulse}
                      transition={{ delay: i * 0.1 }}
                      className="material-symbols-outlined"
                    >
                      star
                    </motion.span>
                  ))}
                </div>
                <p className="text-red-700 italic mb-4">
                  &quot;Absolutely brilliant service. Had a blowout on the M1 at 3am. HS were there in 40 minutes and got me moving again. Professional and fair pricing.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="size-10 rounded-full bg-red-100 bg-center bg-cover border-2 border-yellow-300"
                    style={{
                      backgroundImage:
                        "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency-Tyre-Assistance-opt-k2Ja8o1zdyoA87rTYgjxLmyzzHam24.webp')",
                    }}
                    role="img"
                    aria-label="Customer James Wilson"
                  />
                  <div>
                    <p className="text-sm font-bold text-red-700">James Wilson</p>
                    <p className="text-xs text-red-400">London, UK</p>
                  </div>
                </div>
              </motion.div>
            </aside>
          </div>

          {/* Coverage Area */}
          <section ref={coverageRef} className="bg-white border-y-2 border-red-100 py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={coverageInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-black text-red-700 mb-6">Our Coverage Area</h2>
                <p className="text-red-400 mb-8 leading-relaxed">
                  We provide 24/7 mobile tyre services across the entire metropolitan area and surrounding suburbs. No matter where you are, if you're within our zone, we can reach you.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['North London', 'South London', 'East London', 'West London'].map((area) => (
                    <motion.div
                      key={area}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2"
                    >
                      <motion.span
                        animate={iconAnimations.float}
                        className="material-symbols-outlined text-red-500 text-sm"
                      >
                        location_on
                      </motion.span>
                      <span className="text-sm font-bold text-red-700">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={coverageInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-300"
              >
                <div
                  className="w-full h-full bg-red-50 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flat-Tyres-Service-opt-uPERNCoakuntNtlkzrb8e4VVNHlNHN.webp')",
                  }}
                  role="img"
                  aria-label="Satellite map view of London service area"
                />
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}