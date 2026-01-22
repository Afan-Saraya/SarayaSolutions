"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Wifi, Monitor, Globe, Smartphone, Gamepad2, Printer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n";

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navWrapperClasses = isAtTop
    ? "mx-3 md:mx-6 mt-3 md:mt-4"
    : "mx-0 mt-0";

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navWrapperClasses}`}>
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "transition-all duration-500",
            isAtTop 
              ? "rounded-2xl bg-gradient-to-r from-[#0d0d12]/95 via-[#12121a]/98 to-[#0d0d12]/95 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(139,92,246,0.08)]" 
              : "bg-[#0d0d12]/98 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          )}
        >
          <nav className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-[72px]">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group relative z-50">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-primary-500/25 to-pink-500/25 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <Image
                    src="/images/logoSaraya.png"
                    alt="Saraya Solutions"
                    width={160}
                    height={36}
                    className="h-8 sm:h-9 w-auto relative drop-shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center">
                <div className="flex items-center bg-white/[0.04] backdrop-blur-sm rounded-full p-1.5 border border-white/[0.06]">
                  <Link
                    href="/"
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-white/70 hover:text-white hover:bg-white/[0.08]"
                  >
                    {t.nav.home}
                  </Link>

                  {/* Products Dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-white/70 hover:text-white hover:bg-white/[0.08]">
                      {t.nav.products}
                      <ChevronDown 
                        size={14} 
                        className={cn(
                          "transition-transform duration-200",
                          isProductsOpen && "rotate-180"
                        )} 
                      />
                    </button>

                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 py-2 rounded-2xl bg-[#12121a]/98 backdrop-blur-2xl border border-white/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#12121a]/98 border-l border-t border-white/[0.08] rotate-45" />
                          <Link
                            href="/products/saraya-connect"
                            className="flex items-center gap-3 px-4 py-3 mx-2 rounded-xl text-white/70 hover:text-white hover:bg-gradient-to-r hover:from-accent-green/10 hover:to-transparent transition-all duration-200 group"
                          >
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-green/20 to-accent-green/5 flex items-center justify-center border border-accent-green/20 group-hover:border-accent-green/40 transition-colors">
                              <Wifi className="w-4 h-4 text-accent-green" />
                            </div>
                            <span className="text-sm font-medium">{t.products.sarayaConnect}</span>
                          </Link>
                          <Link
                            href="/products/saraya-hotspot"
                            className="flex items-center gap-3 px-4 py-3 mx-2 rounded-xl text-white/70 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-transparent transition-all duration-200 group"
                          >
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                              <Wifi className="w-4 h-4 text-cyan-400" />
                            </div>
                            <span className="text-sm font-medium">{t.products.sarayaHotspot}</span>
                          </Link>
                          <Link
                            href="/products/display"
                            className="flex items-center gap-3 px-4 py-3 mx-2 rounded-xl text-white/70 hover:text-white hover:bg-gradient-to-r hover:from-primary-500/10 hover:to-transparent transition-all duration-200 group"
                          >
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-500/5 flex items-center justify-center border border-primary-500/20 group-hover:border-primary-500/40 transition-colors">
                              <Monitor className="w-4 h-4 text-primary-400" />
                            </div>
                            <span className="text-sm font-medium">{t.products.display}</span>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/technology"
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-white/70 hover:text-white hover:bg-white/[0.08]"
                  >
                    {t.nav.technology}
                  </Link>
                  <Link
                    href="/references"
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-white/70 hover:text-white hover:bg-white/[0.08]"
                  >
                    {t.nav.references}
                  </Link>
                  <Link
                    href="/about"
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-white/70 hover:text-white hover:bg-white/[0.08]"
                  >
                    {t.nav.about}
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-white/70 hover:text-white hover:bg-white/[0.08]"
                  >
                    {t.nav.contact}
                  </Link>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <div className="hidden lg:block">
                  <LanguageSwitcher />
                </div>
                
                <Link 
                  href="/contact"
                  className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-500 via-primary-600 to-pink-500 text-white text-sm font-semibold hover:opacity-90 transition-all duration-300 shadow-[0_4px_20px_rgba(139,92,246,0.35)] hover:shadow-[0_6px_28px_rgba(139,92,246,0.5)] hover:scale-[1.03] active:scale-[0.98]"
                >
                  {t.nav.contactUs}
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/70 hover:bg-white/[0.08] hover:text-white transition-all duration-200"
                  aria-label="Toggle menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </nav>
        </motion.header>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-b from-[#0d0d12] via-[#0f0f16] to-[#0a0a0f] z-50 lg:hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="p-5 flex items-center justify-between border-b border-white/[0.06]">
                <Image
                  src="/images/logoSaraya.png"
                  alt="Saraya Solutions"
                  width={120}
                  height={28}
                  className="h-7 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/60 hover:bg-white/[0.08] hover:text-white transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="p-5">
                <div className="mb-6 p-1.5 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                  <LanguageSwitcher className="w-full justify-center" />
                </div>

                <nav className="space-y-1">
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3.5 rounded-xl text-white font-medium hover:bg-white/[0.04] transition-all duration-200"
                  >
                    {t.nav.home}
                  </Link>

                  {/* Products Accordion */}
                  <div className="rounded-xl overflow-hidden">
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-3.5 text-white font-medium transition-all duration-200",
                        mobileProductsOpen ? "bg-white/[0.04]" : "hover:bg-white/[0.04]"
                      )}
                    >
                      <span>{t.nav.products}</span>
                      <ChevronRight
                        size={18}
                        className={cn(
                          "text-primary-400 transition-transform duration-200",
                          mobileProductsOpen && "rotate-90"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileProductsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-white/[0.02]"
                        >
                          <div className="py-2 space-y-1">
                            <Link
                              href="/products/saraya-connect"
                              className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="w-2 h-2 rounded-full bg-accent-green shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                              {t.products.sarayaConnect}
                            </Link>
                            <Link
                              href="/products/saraya-hotspot"
                              className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                              {t.products.sarayaHotspot}
                            </Link>
                            <Link
                              href="/products/display"
                              className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="w-2 h-2 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                              {t.products.display}
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/technology"
                    className="block px-4 py-3.5 rounded-xl text-white font-medium hover:bg-white/[0.04] transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.technology}
                  </Link>
                  <Link
                    href="/references"
                    className="block px-4 py-3.5 rounded-xl text-white font-medium hover:bg-white/[0.04] transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.references}
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-3.5 rounded-xl text-white font-medium hover:bg-white/[0.04] transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.about}
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 py-3.5 rounded-xl text-white font-medium hover:bg-white/[0.04] transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.contact}
                  </Link>
                </nav>

                <div className="mt-8">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary-500 via-primary-600 to-pink-500 text-white font-semibold shadow-[0_4px_20px_rgba(139,92,246,0.35)] hover:shadow-[0_6px_28px_rgba(139,92,246,0.5)] transition-all duration-300">
                      {t.nav.contactUs}
                    </button>
                  </Link>
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-primary-500/[0.08] via-transparent to-pink-500/[0.08] border border-white/[0.04]">
                  <p className="text-sm text-white/40 text-center">
                    {t.common.madeInBiH}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
