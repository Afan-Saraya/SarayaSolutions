"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export interface PartnerItem {
  name: string;
  logo: string;
}

export interface PartnersLogosProps {
  /** Array of partner logos */
  partners?: PartnerItem[];
  /** Footer text */
  footerText?: string;
  /** Enable auto scroll */
  autoScroll?: boolean;
  /** Scroll speed (ms per pixel) */
  scrollSpeed?: number;
}

const defaultPartners: PartnerItem[] = [
  { name: "Coca-Cola", logo: "/images/coca-cola.png" },
  { name: "Bosna Bank International", logo: "/images/bosna bank international.png" },
  { name: "Mercator", logo: "/images/mercator.png" },
  { name: "Orbico", logo: "/images/orbico.png" },
  { name: "Sarajevo Osiguranje", logo: "/images/sarajevo-osiguranje.png" },
  { name: "BH Telecom", logo: "/images/bh telecom.png" },
  { name: "McCann", logo: "/images/mc cann.png" },
  { name: "Woman Comm", logo: "/images/woman comm.png" },
];

export default function PartnersLogos({
  partners = defaultPartners,
  footerText = "I mnogi drugi partneri širom regije",
  autoScroll = true,
  scrollSpeed = 30,
}: PartnersLogosProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners];

  // Auto scroll to the right
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isDragging || !autoScroll) return;

    const scroll = () => {
      if (container && !isDragging) {
        container.scrollLeft += 1;
        // Reset to start for infinite loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, scrollSpeed);
    return () => clearInterval(interval);
  }, [isDragging, autoScroll, scrollSpeed]);

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
    <>
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
          {duplicatedPartners.map((partner, index) => (
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

      {/* Footer text */}
      <div className="container mx-auto px-4 relative z-10">
        <p className="text-center text-foreground-muted/60 text-xs md:text-sm mt-8 md:mt-12">
          {footerText}
        </p>
      </div>
    </>
  );
}
