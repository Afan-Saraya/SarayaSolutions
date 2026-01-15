"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function HomeAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Wait for DOM to be ready
    const initAnimations = () => {
      const ctx = gsap.context(() => {
        // Hero section animations
        const heroTimeline = gsap.timeline({ delay: 0.2 });
        
        // Badge animation
        heroTimeline.fromTo(
          "[data-gsap='hero-badge']",
          { opacity: 0, y: -20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
        );

        // Title animation with split effect
        heroTimeline.fromTo(
          "[data-gsap='hero-title']",
          { opacity: 0, y: 60, clipPath: "inset(100% 0% 0% 0%)" },
          { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "power3.out" },
          "-=0.3"
        );

        // Description
        heroTimeline.fromTo(
          "[data-gsap='hero-desc']",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );

        // Product links stagger
        heroTimeline.fromTo(
          "[data-gsap='hero-products'] > *",
          { opacity: 0, x: -20, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)" },
          "-=0.3"
        );

        // Buttons
        heroTimeline.fromTo(
          "[data-gsap='hero-buttons'] > *",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.2"
        );

        // Video container
        heroTimeline.fromTo(
          "[data-gsap='hero-video']",
          { opacity: 0, scale: 0.9, rotateY: -10 },
          { opacity: 1, scale: 1, rotateY: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );

        // Floating stats
        heroTimeline.fromTo(
          "[data-gsap='hero-stat']",
          { opacity: 0, scale: 0, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "back.out(2)" },
          "-=0.4"
        );

        // Benefits bar - slide in from left
        gsap.fromTo(
          "[data-gsap='benefits'] > *",
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "[data-gsap='benefits']",
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );

        // Features section header
        gsap.fromTo(
          "[data-gsap='features-header']",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-gsap='features-header']",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Main product cards - scale and fade
        gsap.fromTo(
          "[data-gsap='product-card']",
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-gsap='products-grid']",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        // Service cards - stagger from bottom
        gsap.fromTo(
          "[data-gsap='service-card']",
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: "[data-gsap='services-grid']",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Company section - slide from left
        gsap.fromTo(
          "[data-gsap='company-info']",
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-gsap='company-section']",
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );

        // Highlights list - stagger
        gsap.fromTo(
          "[data-gsap='highlight-item']",
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "[data-gsap='highlights-list']",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Logo reveal
        gsap.fromTo(
          "[data-gsap='company-logo']",
          { opacity: 0, scale: 0.8, filter: "blur(10px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-gsap='company-logo']",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Stats cards - pop in
        gsap.fromTo(
          "[data-gsap='stat-card']",
          { opacity: 0, scale: 0.8, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: "[data-gsap='stats-grid']",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Technologies section
        gsap.fromTo(
          "[data-gsap='tech-card']",
          { opacity: 0, y: 50, rotateX: -10 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-gsap='tech-grid']",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        // CTA section
        gsap.fromTo(
          "[data-gsap='cta-content']",
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-gsap='cta-section']",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        // Parallax effect for background blurs
        gsap.utils.toArray("[data-gsap='parallax']").forEach((el: any) => {
          gsap.to(el, {
            y: -100,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });

        // Refresh ScrollTrigger
        ScrollTrigger.refresh();
      });

      return ctx;
    };

    // Small delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      const ctx = initAnimations();
      
      // Cleanup
      return () => {
        ctx.revert();
      };
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
