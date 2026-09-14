"use client";

import { useState } from "next";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#0A0A0A]/70 backdrop-blur-xl border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="block" onClick={closeMenu}>
              <img src="/logo.png" alt="VIRX Logo" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/#producto" className="text-white/70 hover:text-[#00A9CC] transition-colors text-xs font-bold tracking-widest uppercase">Producto</Link>
            <Link href="/#como-funciona" className="text-white/70 hover:text-[#00A9CC] transition-colors text-xs font-bold tracking-widest uppercase">Cómo Funciona</Link>
            <Link href="/#nosotros" className="text-white/70 hover:text-[#00A9CC] transition-colors text-xs font-bold tracking-widest uppercase">Nosotros</Link>
            <Link href="/blog" className="text-white/70 hover:text-[#00A9CC] transition-colors text-xs font-bold tracking-widest uppercase">Blog</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/#contacto" className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all hover:border-[#00A9CC] hover:text-[#00A9CC]">
              CONOCÉ VIRX
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-[#00A9CC] focus:outline-none transition-colors"
              aria-label="Alternar menú"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden w-full bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              <Link href="/#producto" onClick={closeMenu} className="text-white/90 hover:text-[#00A9CC] transition-colors text-sm font-bold tracking-widest uppercase">Producto</Link>
              <Link href="/#como-funciona" onClick={closeMenu} className="text-white/90 hover:text-[#00A9CC] transition-colors text-sm font-bold tracking-widest uppercase">Cómo Funciona</Link>
              <Link href="/#nosotros" onClick={closeMenu} className="text-white/90 hover:text-[#00A9CC] transition-colors text-sm font-bold tracking-widest uppercase">Nosotros</Link>
              <Link href="/blog" onClick={closeMenu} className="text-white/90 hover:text-[#00A9CC] transition-colors text-sm font-bold tracking-widest uppercase">Blog</Link>
              <div className="pt-6 border-t border-white/10 w-3/4 flex justify-center">
                <Link href="/#contacto" onClick={closeMenu} className="inline-block bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all hover:border-[#00A9CC] hover:text-[#00A9CC]">
                  CONOCÉ VIRX
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
