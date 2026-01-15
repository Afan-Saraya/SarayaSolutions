"use client";

import { siteConfig } from "@/lib/constants";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t, language } = useLanguage();
  
  return (
    <footer className="bg-background-dark border-t border-primary-500/10">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center mb-3 md:mb-4">
              <Image
                src="/images/logoSaraya.png"
                alt="Saraya Solutions"
                width={140}
                height={32}
                className="h-8 md:h-10 w-auto"
              />
            </Link>
            <p className="text-foreground-muted text-xs md:text-base max-w-md">
              {t.footer.description}
            </p>
            <div className="flex gap-3 md:gap-4 mt-4 md:mt-6">
              <a
                href="#"
                className="text-foreground-muted hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-foreground-muted hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-foreground-muted hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-foreground-muted hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm md:text-base font-semibold mb-3 md:mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-1.5 md:space-y-2">
              <li>
                <Link href="/" className="text-foreground-muted text-xs md:text-base hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/products/saraya-connect" className="text-foreground-muted text-xs md:text-base hover:text-white transition-colors">
                  {t.products.sarayaConnect}
                </Link>
              </li>
              <li>
                <Link href="/products/display" className="text-foreground-muted text-xs md:text-base hover:text-white transition-colors">
                  {t.products.display}
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-foreground-muted text-xs md:text-base hover:text-white transition-colors">
                  {t.nav.technology}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm md:text-base font-semibold mb-3 md:mb-4">{language === "bs" ? "Kompanija" : "Company"}</h4>
            <ul className="space-y-1.5 md:space-y-2">
              <li>
                <Link href="/about" className="text-foreground-muted text-xs md:text-base hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/references" className="text-foreground-muted text-xs md:text-base hover:text-white transition-colors">
                  {t.nav.references}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground-muted text-xs md:text-base hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground-muted text-xs md:text-base hover:text-white transition-colors">
                  {t.footer.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-500/10 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-foreground-subtle">
          <p className="text-xs md:text-base">
            © {new Date().getFullYear()} {siteConfig.name}. {t.footer.allRightsReserved}.
          </p>
        </div>
      </div>
    </footer>
  );
}
