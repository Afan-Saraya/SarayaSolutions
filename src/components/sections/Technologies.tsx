"use client";

import { Glasses, Headset, MessageSquare, User, ArrowRight } from "lucide-react";
import { technologies } from "@/lib/constants";

const iconMap = {
  Glasses: Glasses,
  Headset: Headset,
  MessageSquare: MessageSquare,
  User: User,
};

const colorMap = {
  purple: "from-primary-500/20 to-primary-600/20 border-primary-500/30",
  green: "from-pink-500/20 to-pink-600/20 border-pink-500/30",
  blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
  cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30",
};

const glowMap = {
  purple: "group-hover:shadow-primary-500/20",
  green: "group-hover:shadow-pink-500/20",
  blue: "group-hover:shadow-blue-500/20",
  cyan: "group-hover:shadow-cyan-500/20",
};

export default function Technologies() {
  return (
    <section className="py-24 bg-background-dark relative overflow-hidden">
      {/* Background effects */}
      <div data-gsap="parallax" className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px]" />
      <div data-gsap="parallax" className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">
            Tehnologije
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Tehnologije koje pokreću{" "}
            <span className="text-gradient">Vaš uspjeh</span>
          </h2>
        </div>

        <div data-gsap="tech-grid" className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech) => {
            const Icon = iconMap[tech.icon as keyof typeof iconMap];
            const colorClass = colorMap[tech.color as keyof typeof colorMap];
            const glowClass = glowMap[tech.color as keyof typeof glowMap];
            
            return (
              <div
                key={tech.id}
                data-gsap="tech-card"
                className={`group p-8 rounded-2xl bg-gradient-to-br ${colorClass} border backdrop-blur-sm hover:shadow-xl ${glowClass} transition-all duration-300 cursor-pointer hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-background-card/50 flex items-center justify-center">
                    <Icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{tech.title}</h3>
                    <p className="text-foreground-subtle text-sm">{tech.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-foreground-muted leading-relaxed mb-6">
                  {tech.description}
                </p>

                <div className="flex items-center text-primary-400 font-medium group-hover:text-white transition-colors">
                  <span>Saznajte više</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
