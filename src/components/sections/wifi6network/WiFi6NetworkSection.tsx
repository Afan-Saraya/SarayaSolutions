"use client";

import WiFi6NetworkHeader from "./WiFi6NetworkHeader";
import WiFi6NetworkCards from "./WiFi6NetworkCards";

export default function WiFi6NetworkSection() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-dark to-background" />
      <div
        data-gsap="parallax"
        className="absolute top-1/4 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl"
      />
      <div
        data-gsap="parallax"
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <WiFi6NetworkHeader />
        <WiFi6NetworkCards />
      </div>
    </section>
  );
}
