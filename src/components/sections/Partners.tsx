"use client";

import { Building2 } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

const partners = [
  { name: "Coca-Cola", logo: "/images/coca-cola.png" },
  { name: "Bosna Bank International", logo: "/images/bosna bank international.png" },
  { name: "Mercator", logo: "/images/mercator.png" },
  { name: "Orbico", logo: "/images/orbico.png" },
  { name: "Sarajevo Osiguranje", logo: "/images/sarajevo-osiguranje.png" },
  { name: "BH Telecom", logo: "/images/bh telecom.png" },
  { name: "McCann", logo: "/images/mc cann.png" },
  { name: "Woman Comm", logo: "/images/woman comm.png" },
  { name: "Coca-Cola", logo: "/images/coca-cola.png" },
  { name: "Bosna Bank International", logo: "/images/bosna bank international.png" },
  { name: "Mercator", logo: "/images/mercator.png" },
  { name: "Orbico", logo: "/images/orbico.png" },
  { name: "Sarajevo Osiguranje", logo: "/images/sarajevo-osiguranje.png" },
  { name: "BH Telecom", logo: "/images/bh telecom.png" },
  { name: "McCann", logo: "/images/mc cann.png" },
  { name: "Woman Comm", logo: "/images/woman comm.png" },
];

export default function Partners() {
  const { language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto scroll to the right
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isDragging) return;

    const scroll = () => {
      if (container && !isDragging) {
        container.scrollLeft += 1;
        // Reset to start for infinite loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-16 md:py-24 bg-background-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div data-gsap="section-header" className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="text-primary-400" size={20} />
            <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">
              {language === "bs" ? "Partneri" : "Partners"}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {language === "bs" ? "Kompanije s kojima" : "Companies we"} <span className="text-gradient">{language === "bs" ? "sarađujemo" : "work with"}</span>
          </h2>
          <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
            {language === "bs" 
              ? "Ponosni smo na saradnju s vodećim kompanijama u regiji"
              : "We are proud of our collaboration with leading companies in the region"
            }
          </p>
        </div>
      </div>

      {/* Scrolling Logo Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background-dark to-transparent z-10 pointer-events-none" />
        
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0"
            >
              <div className="group flex items-center justify-center p-4 md:p-5 rounded-xl bg-background-card/50 border border-white/5 hover:border-primary-500/20 hover:bg-background-card transition-all duration-300 w-[140px] md:w-[180px] h-[80px] md:h-[100px]">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={60}
                  className="w-full h-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <p data-gsap="fade-in" className="text-center text-foreground-muted/60 text-xs md:text-sm mt-8 md:mt-12">
          {language === "bs" ? "I mnogi drugi partneri širom regije" : "And many other partners across the region"}
        </p>
      </div>
    </section>
  );
}
