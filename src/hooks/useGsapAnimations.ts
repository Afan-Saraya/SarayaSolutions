"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useGsapAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Refresh ScrollTrigger after page load
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}

// Text reveal animation
export function useTextReveal(selector: string, options?: gsap.TweenVars) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { 
            opacity: 0, 
            y: 50,
            clipPath: "inset(100% 0% 0% 0%)"
          },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            ...options,
          }
        );
      });
    });

    return () => ctx.revert();
  }, [selector, options]);
}

// Stagger animation for lists
export function useStaggerReveal(containerSelector: string, itemSelector: string) {
  useEffect(() => {
    const containers = document.querySelectorAll(containerSelector);
    if (!containers.length) return;

    const ctx = gsap.context(() => {
      containers.forEach((container) => {
        const items = container.querySelectorAll(itemSelector);
        if (!items.length) return;

        gsap.fromTo(
          items,
          { 
            opacity: 0, 
            y: 40,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [containerSelector, itemSelector]);
}

// Parallax effect
export function useParallax(selector: string, speed: number = 0.5) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        gsap.to(el, {
          y: () => window.innerHeight * speed * -1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, [selector, speed]);
}

// Scale on scroll
export function useScaleOnScroll(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [selector]);
}

// Magnetic effect for buttons
export function useMagnetic(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const handlers: Array<{ el: Element; move: (e: MouseEvent) => void; leave: () => void }> = [];

    elements.forEach((el) => {
      const moveHandler = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(el, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const leaveHandler = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      };

      el.addEventListener("mousemove", moveHandler as EventListener);
      el.addEventListener("mouseleave", leaveHandler);
      
      handlers.push({ el, move: moveHandler, leave: leaveHandler });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move as EventListener);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [selector]);
}
