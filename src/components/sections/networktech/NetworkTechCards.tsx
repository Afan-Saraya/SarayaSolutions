"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface NetworkTech {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface NetworkTechCardsProps {
  technologies: NetworkTech[];
}

export default function NetworkTechCards({ technologies }: NetworkTechCardsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="p-6 rounded-2xl bg-background-card border border-accent-green/10 text-center hover:border-accent-green/30 transition-all"
        >
          <div className="w-14 h-14 rounded-xl bg-accent-green/20 flex items-center justify-center mx-auto mb-4">
            <tech.icon className="text-accent-green" size={28} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
          <p className="text-foreground-muted text-sm">{tech.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
