"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface GameTech {
  icon: LucideIcon;
  name: string;
  description: string;
  features: string[];
}

interface GameTechCardsProps {
  technologies: GameTech[];
}

export default function GameTechCards({ technologies }: GameTechCardsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-primary-500/10 via-pink-500/5 to-accent-green/10 border border-primary-500/20 hover:border-primary-500/40 transition-all group"
        >
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/30 to-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <tech.icon className="text-primary-400" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">{tech.name}</h3>
              <p className="text-foreground-muted mb-4">{tech.description}</p>
              <div className="flex flex-wrap gap-2">
                {tech.features.map((feature) => (
                  <span key={feature} className="px-3 py-1 rounded-full text-xs bg-primary-500/20 text-primary-400 border border-primary-500/20">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
