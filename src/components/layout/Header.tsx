"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
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

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-[100vw]",
          isScrolled ? "glass py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 max-w-full">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center relative z-50">
              <Image
                src="/images/logoSaraya.png"
                alt="Saraya Solutions"
                width={180}
                height={40}
                className="h-8 sm:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-foreground-muted hover:text-white transition-colors duration-200"
              >
                {t.nav.home}
              </Link>

              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className="flex items-center gap-1 text-foreground-muted hover:text-white transition-colors duration-200">
                  {t.nav.products}
                  <ChevronDown 
                    size={16} 
                    className={cn(
                      "transition-transform duration-200",
                      isProductsOpen && "rotate-180"
                    )} 
                  />
                </button>

                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 py-2 rounded-xl glass border border-primary-500/20"
                    >
                      <Link
                        href="/products/saraya-connect"
                        className="block px-4 py-2 text-foreground-muted hover:text-white hover:bg-primary-500/10 transition-colors"
                      >
                        {t.products.sarayaConnect}
                      </Link>
                      <Link
                        href="/products/display"
                        className="block px-4 py-2 text-foreground-muted hover:text-white hover:bg-primary-500/10 transition-colors"
                      >
                        {t.products.display}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-foreground-muted hover:text-white transition-colors duration-200">
                  {t.nav.services}
                  <ChevronDown 
                    size={16} 
                    className={cn(
                      "transition-transform duration-200",
                      isServicesOpen && "rotate-180"
                    )} 
                  />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 py-2 rounded-xl glass border border-primary-500/20"
                    >
                      <Link
                        href="/services/web-solutions"
                        className="block px-4 py-2 text-foreground-muted hover:text-white hover:bg-primary-500/10 transition-colors"
                      >
                        {t.services.webSolutions}
                      </Link>
                      <Link
                        href="/services/applications"
                        className="block px-4 py-2 text-foreground-muted hover:text-white hover:bg-primary-500/10 transition-colors"
                      >
                        {t.services.applications}
                      </Link>
                      <Link
                        href="/services/games"
                        className="block px-4 py-2 text-foreground-muted hover:text-white hover:bg-primary-500/10 transition-colors"
                      >
                        {t.services.games}
                      </Link>
                      <Link
                        href="/services/print"
                        className="block px-4 py-2 text-foreground-muted hover:text-white hover:bg-primary-500/10 transition-colors"
                      >
                        {t.services.print}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/technology"
                className="text-foreground-muted hover:text-white transition-colors duration-200"
              >
                {t.nav.technology}
              </Link>
              <Link
                href="/references"
                className="text-foreground-muted hover:text-white transition-colors duration-200"
              >
                {t.nav.references}
              </Link>
              <Link
                href="/about"
                className="text-foreground-muted hover:text-white transition-colors duration-200"
              >
                {t.nav.about}
              </Link>
            </div>

            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-background-dark border-r border-primary-500/20 z-50 lg:hidden overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-primary-500/10">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="/images/logoSaraya.png"
                    alt="Saraya Solutions"
                    width={150}
                    height={35}
                    className="h-8 w-auto"
                  />
                </Link>
              </div>

              {/* Menu Content */}
              <div className="p-6">
                {/* Language Switcher for Mobile */}
                <div className="mb-6">
                  <LanguageSwitcher className="w-full justify-center" />
                </div>

                {/* Main Links */}
                <div className="space-y-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href="/"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-primary-500/10 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Sparkles size={18} className="text-primary-400" />
                      {t.nav.home}
                    </Link>
                  </motion.div>

                  {/* Products Accordion */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-white hover:bg-primary-500/10 transition-colors"
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
                          className="overflow-hidden"
                        >
                          <div className="ml-4 pl-4 border-l border-primary-500/20 space-y-1 py-2">
                            <Link
                              href="/products/saraya-connect"
                              className="block px-4 py-2 rounded-lg text-foreground-muted hover:text-white hover:bg-primary-500/10 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {t.products.sarayaConnect}
                            </Link>
                            <Link
                              href="/products/display"
                              className="block px-4 py-2 rounded-lg text-foreground-muted hover:text-white hover:bg-primary-500/10 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {t.products.display}
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Services Accordion */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-white hover:bg-primary-500/10 transition-colors"
                    >
                      <span>{t.nav.services}</span>
                      <ChevronRight
                        size={18}
                        className={cn(
                          "text-primary-400 transition-transform duration-200",
                          mobileServicesOpen && "rotate-90"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 pl-4 border-l border-primary-500/20 space-y-1 py-2">
                            <Link
                              href="/services/web-solutions"
                              className="block px-4 py-2 rounded-lg text-foreground-muted hover:text-white hover:bg-primary-500/10 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {t.services.webSolutions}
                            </Link>
                            <Link
                              href="/services/applications"
                              className="block px-4 py-2 rounded-lg text-foreground-muted hover:text-white hover:bg-primary-500/10 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {t.services.applications}
                            </Link>
                            <Link
                              href="/services/games"
                              className="block px-4 py-2 rounded-lg text-foreground-muted hover:text-white hover:bg-primary-500/10 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {t.services.games}
                            </Link>
                            <Link
                              href="/services/print"
                              className="block px-4 py-2 rounded-lg text-foreground-muted hover:text-white hover:bg-primary-500/10 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {t.services.print}
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Other Links */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <Link
                      href="/technology"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-primary-500/10 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t.nav.technology}
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="/references"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-primary-500/10 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t.nav.references}
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <Link
                      href="/about"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-primary-500/10 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t.nav.about}
                    </Link>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="primary" size="lg" className="w-full">
                      {t.nav.contactUs}
                    </Button>
                  </Link>
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 p-4 rounded-xl bg-gradient-to-br from-primary-500/10 to-pink-500/10 border border-primary-500/20"
                >
                  <p className="text-sm text-foreground-muted">
                    {t.common.madeInBiH}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
