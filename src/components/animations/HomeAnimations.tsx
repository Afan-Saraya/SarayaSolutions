"use client";

import { useEffect } from "react";

export default function HomeAnimations() {
  useEffect(() => {
    // Add animation classes to sections on mount
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      const el = section as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      
      // Trigger animation after a small delay
      setTimeout(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                target.style.opacity = '1';
                target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1, rootMargin: '-50px' }
        );
        
        observer.observe(section);
      }, index * 50);
    });
  }, []);

  return null;
}
