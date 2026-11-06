'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Animation variants for icons
const iconAnimations = {
  bounce: {
    y: [0, -5, 0, -2, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  },
  vibrate: {
    rotate: [0, 3, -3, 2, -2, 0],
    transition: { duration: 1, repeat: Infinity, ease: "linear" }
  },
  pulse: {
    scale: [1, 1.1, 1],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, mounted]);

  const isOpen = mounted && menuOpen;

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b transition-shadow ${
          scrolled ? 'border-red-200 shadow-md' : 'border-red-100'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        data-menu-open={isOpen ? 'true' : 'false'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo with subtle animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HS%20247%20Logo%20%282%29-1IVy6QHhQxtalIYhuLfBJJOiarA2JB.png"
                alt="HS 24/7 Mobile Tyres"
                width={140}
                height={48}
                className="h-10 w-auto object-contain brightness-0 hue-rotate-15"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all rounded-lg ${
                    isActive
                      ? 'text-red-700'
                      : 'text-red-600/60 hover:text-red-700 hover:bg-red-50'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              href="tel:+447928922369"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-black text-sm px-5 py-2.5 rounded-lg transition-colors shadow-md"
            >
              <motion.span
                animate={iconAnimations.bounce}
                className="material-symbols-outlined text-[18px]"
              >
                call
              </motion.span>
              Call Now
            </Link>
          </motion.div>

          {/* Mobile hamburger */}
          <div className="flex items-center md:hidden">
            <motion.button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="w-9 h-9 flex items-center justify-center text-red-700 rounded-lg border border-red-200 hover:bg-red-50 transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    className="material-symbols-outlined text-[22px]"
                  >
                    close
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    className="material-symbols-outlined text-[22px]"
                  >
                    menu
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Backdrop with fade animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile slide-down drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 left-0 right-0 z-50 md:hidden bg-white border-b border-red-100 shadow-xl"
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }, index) => {
                const isActive = pathname === href;
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-red-500 text-white'
                          : 'text-red-700 hover:bg-red-50 active:bg-red-100'
                      }`}
                    >
                      <span>{label}</span>
                      {isActive && (
                        <motion.span
                          initial={{ x: -5, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className="material-symbols-outlined text-white text-[18px]"
                        >
                          chevron_right
                        </motion.span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-4 pb-5 pt-1"
            >
              <Link
                href="tel:+447928922369"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-black text-sm py-3.5 rounded-xl transition-colors shadow-md"
              >
                <motion.span
                  animate={iconAnimations.vibrate}
                  className="material-symbols-outlined text-[20px]"
                >
                  call
                </motion.span>
                Get Emergency Help
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}