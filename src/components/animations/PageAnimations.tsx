"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function PageAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const initAnimations = () => {
      const ctx = gsap.context(() => {
        // Hero section - initial load animation
        const heroTimeline = gsap.timeline({ delay: 0.1 });
        
        heroTimeline.fromTo(
          "[data-gsap='hero-badge']",
          { opacity: 0, y: -20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
        );

        heroTimeline.fromTo(
          "[data-gsap='hero-title']",
          { opacity: 0, y: 50, clipPath: "inset(100% 0% 0% 0%)" },
          { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "power3.out" },
          "-=0.3"
        );

        heroTimeline.fromTo(
          "[data-gsap='hero-subtitle']",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        );

        heroTimeline.fromTo(
          "[data-gsap='hero-desc']",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );

        heroTimeline.fromTo(
          "[data-gsap='hero-buttons'] > *",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
          "-=0.2"
        );

        heroTimeline.fromTo(
          "[data-gsap='hero-info']",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.2"
        );

        // Benefits bar
        gsap.fromTo(
          "[data-gsap='benefits-item']",
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "[data-gsap='benefits-bar']",
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );

        // Section headers
        gsap.utils.toArray("[data-gsap='section-header']").forEach((el: any) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Cards with stagger
        gsap.utils.toArray("[data-gsap='cards-grid']").forEach((grid: any) => {
          const cards = grid.querySelectorAll("[data-gsap='card']");
          gsap.fromTo(
            cards,
            { opacity: 0, y: 40, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: grid,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Feature cards with different animation
        gsap.utils.toArray("[data-gsap='feature-card']").forEach((el: any, i: number) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Stats
        gsap.utils.toArray("[data-gsap='stats-grid']").forEach((grid: any) => {
          const stats = grid.querySelectorAll("[data-gsap='stat']");
          gsap.fromTo(
            stats,
            { opacity: 0, scale: 0.8, y: 20 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: grid,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // List items
        gsap.utils.toArray("[data-gsap='list']").forEach((list: any) => {
          const items = list.querySelectorAll("[data-gsap='list-item']");
          gsap.fromTo(
            items,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
              stagger: 0.06,
              ease: "power2.out",
              scrollTrigger: {
                trigger: list,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Content blocks (left/right animations)
        gsap.utils.toArray("[data-gsap='content-left']").forEach((el: any) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        gsap.utils.toArray("[data-gsap='content-right']").forEach((el: any) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: 40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // CTA sections
        gsap.utils.toArray("[data-gsap='cta']").forEach((el: any) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Tags/badges
        gsap.utils.toArray("[data-gsap='tags']").forEach((container: any) => {
          const tags = container.querySelectorAll("[data-gsap='tag']");
          gsap.fromTo(
            tags,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.3,
              stagger: 0.03,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: container,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Map cards
        gsap.utils.toArray("[data-gsap='map-card']").forEach((el: any, i: number) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: i * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Form elements
        gsap.utils.toArray("[data-gsap='form']").forEach((form: any) => {
          gsap.fromTo(
            form,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: form,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Parallax backgrounds
        gsap.utils.toArray("[data-gsap='parallax']").forEach((el: any) => {
          gsap.to(el, {
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });

        // Fade in elements
        gsap.utils.toArray("[data-gsap='fade-in']").forEach((el: any) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        ScrollTrigger.refresh();
      });

      return ctx;
    };

    const timeout = setTimeout(() => {
      const ctx = initAnimations();
      return () => ctx.revert();
    }, 50);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
