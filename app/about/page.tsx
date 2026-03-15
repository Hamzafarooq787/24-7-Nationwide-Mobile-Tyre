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

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });

  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, amount: 0.1 });

  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.1 });

  const fleetRef = useRef(null);
  const fleetInView = useInView(fleetRef, { once: true, amount: 0.1 });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.1 });

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
        <main className="flex flex-col">
          {/* Hero Section */}
          <section ref={heroRef} className="relative w-full">
            <div className="px-4 sm:px-6 md:px-20 py-8 sm:py-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative min-h-[380px] sm:min-h-[450px] w-full flex flex-col justify-center overflow-hidden rounded-xl bg-gradient-to-br from-red-600 to-red-700"
              >
                {/* Background image with overlay */}
                <div
                  className="absolute inset-0 opacity-20 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-section-Background-Image-opt-dlX7U26YsoxCW7Xv8XHdkPKe8QvoCo.webp")',
                  }}
                />
                <div className="max-w-2xl px-6 sm:px-8 md:px-16 py-10 space-y-5 sm:space-y-6 relative z-10">
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="inline-block px-3 py-1 bg-yellow-400 text-red-700 text-xs font-bold uppercase tracking-widest rounded"
                  >
                    Established Excellence
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={heroInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight text-pretty"
                  >
                    UK's Leading Nationwide <br />
                    <span className="text-yellow-300">Mobile Tyre Service</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={heroInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-red-100 text-base sm:text-lg md:text-xl font-medium max-w-lg"
                  >
                    Fast, reliable roadside tyre assistance whenever and wherever you need it. We keep Britain moving 24/7.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
                  >
                    <Link
                      href="tel:+447856978630"
                      className="bg-yellow-400 hover:bg-yellow-300 text-red-700 font-bold py-3 px-6 sm:px-8 rounded-lg transition-all flex items-center justify-center gap-2 group"
                    >
                      <motion.span
                        animate={iconAnimations.bounce}
                        className="material-symbols-outlined"
                      >
                        call
                      </motion.span>
                      Emergency Call Out
                    </Link>
                    <Link
                      href="/contact"
                      className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 sm:px-8 rounded-lg border border-white/30 backdrop-blur-sm transition-all flex items-center justify-center"
                    >
                      View Coverage
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Our Story */}
          <section ref={storyRef} className="px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-red-500 font-bold">
                <span className="h-px w-8 bg-red-500" />
                OUR STORY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-700 leading-tight">
                Driven by Safety, Defined by Reliability
              </h2>
              <p className="text-red-400 text-lg leading-relaxed">
                Founded with a mission to minimize downtime for drivers across the UK, HS 24/7 Mobile Tyres has grown into a premier nationwide provider. We understand that a flat tyre is more than an inconvenience — it's a disruption to your day and a potential safety risk.
              </p>
              <p className="text-red-400 text-lg leading-relaxed">
                Our journey began with a single van and a commitment to excellence. Today, we operate a massive fleet of modern, fully-equipped service vehicles, staffed by expert technicians who treat every roadside call with the urgency it deserves.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-lg shadow-md border border-red-100"
                >
                  <h4 className="text-4xl font-black text-red-500">15k+</h4>
                  <p className="text-sm font-semibold text-red-400 uppercase tracking-wide">
                    Tyres Fitted Monthly
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-lg shadow-md border border-red-100"
                >
                  <h4 className="text-4xl font-black text-red-500">30m</h4>
                  <p className="text-sm font-semibold text-red-400 uppercase tracking-wide">
                    Average Response
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-red-200 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency-Tyre-Assistance-opt-k2Ja8o1zdyoA87rTYgjxLmyzzHam24.webp"
                alt="HS 24/7 Mobile Tyres technician in hi-vis uniform working roadside"
                width={600}
                height={500}
                className="relative rounded-xl shadow-2xl w-full h-[500px] object-cover border-4 border-white"
                unoptimized
              />
            </motion.div>
          </section>

          {/* Values */}
          <section ref={valuesRef} className="bg-red-600 py-20 px-6 md:px-20">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-yellow-300 text-sm font-bold tracking-[0.2em] uppercase"
              >
                The HS Standard
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white"
              >
                Our Core Values
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={valuesInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-yellow-100"
              >
                We don't just change tyres; we provide peace of mind through a commitment to three foundational pillars.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={valuesInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: 'shield_with_heart',
                  title: 'Safety First',
                  desc: 'Your safety is our absolute priority. We adhere to rigorous safety standards during every fitting to ensure your vehicle is road-ready and secure.',
                },
                {
                  icon: 'verified',
                  title: 'Unmatched Reliability',
                  desc: "When we say we'll be there, we mean it. Our nationwide network ensures we reach you quickly, no matter where you are stranded.",
                },
                {
                  icon: 'speed',
                  title: 'Maximum Efficiency',
                  desc: 'We minimize downtime by using state-of-the-art tools and a streamlined dispatch system, getting you back on the road in record time.',
                },
              ].map(({ icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white/5 border border-white/10 p-10 rounded-xl hover:bg-white/10 transition-all group"
                >
                  <motion.div
                    animate={iconAnimations[index === 0 ? 'pulse' : index === 1 ? 'bounce' : 'float']}
                    className="size-14 bg-yellow-400 rounded-lg flex items-center justify-center text-red-600 mb-6"
                  >
                    <span className="material-symbols-outlined text-3xl font-bold">{icon}</span>
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
                  <p className="text-yellow-100 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Fleet & Coverage */}
          <section ref={fleetRef} className="px-6 md:px-20 py-20 bg-yellow-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={fleetInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl border-4 border-red-200 group"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile-Tyre-Replacement-opt-jPKvJKqwPQu0D8uQJ9T42yxfUZH4f9.webp"
                  alt="Mobile tyre service van with nationwide UK coverage"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/50 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={fleetInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-lg text-red-700 border border-yellow-300 text-center"
                >
                  <motion.span
                    animate={iconAnimations.pulse}
                    className="material-symbols-outlined text-red-500 text-3xl mb-1 block"
                  >
                    location_on
                  </motion.span>
                  <h4 className="text-xl font-bold">100% UK Coverage</h4>
                  <p className="text-sm opacity-80">From London to Edinburgh, we're there.</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={fleetInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 lg:order-2 space-y-6"
              >
                <div className="inline-flex items-center gap-2 text-red-500 font-bold">
                  <span className="h-px w-8 bg-red-500" />
                  NATIONWIDE REACH
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-red-700 leading-tight">
                  Modern Fleet, Expert Hands
                </h2>
                <p className="text-red-400 text-lg leading-relaxed">
                  Our fleet of mobile service vans are essentially "garages on wheels." Each vehicle is equipped with the latest electronic balancing and mounting machinery, capable of handling everything from standard cars to high-performance and run-flat tyres.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    { text: 'Fully Insured & Qualified Technicians', icon: 'verified' },
                    { text: 'GPS Tracked Rapid Response Units', icon: 'gps_fixed' },
                    { text: 'Latest Diagnostic & Fitting Equipment', icon: 'build' },
                  ].map(({ text, icon }) => (
                    <motion.li
                      key={text}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-red-700"
                    >
                      <motion.span
                        animate={iconAnimations.pulse}
                        className="material-symbols-outlined text-red-500"
                      >
                        {icon}
                      </motion.span>
                      {text}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          {/* CTA */}
          <section ref={ctaRef} className="px-6 md:px-20 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-yellow-400 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
            >
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-red-700 text-3xl md:text-4xl font-black">
                  Need Urgent Assistance?
                </h2>
                <p className="text-red-600/80 text-lg font-medium">
                  Our dispatchers are standing by 24 hours a day, 7 days a week.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="tel:+447856978630"
                  className="bg-red-600 text-white text-base font-bold py-3.5 px-7 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2 group"
                >
                  <motion.span
                    animate={iconAnimations.vibrate}
                    className="material-symbols-outlined text-[20px]"
                  >
                    call
                  </motion.span>
                  Call Us Anytime
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-red-700 text-base font-bold py-3.5 px-7 rounded-xl hover:bg-red-50 transition-colors flex items-center justify-center gap-2 group"
                >
                  <motion.span
                    animate={iconAnimations.bounce}
                    className="material-symbols-outlined text-[20px]"
                  >
                    calendar_month
                  </motion.span>
                  Book Online
                </Link>
              </div>
            </motion.div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}