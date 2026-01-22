"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MobileTech {
  icon: LucideIcon;
  name: string;
  description: string;
  color: "blue" | "cyan" | "purple";
}

interface MobileTechCardsProps {
  technologies: MobileTech[];
}

export default function MobileTechCards({ technologies }: MobileTechCardsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`p-6 rounded-2xl border backdrop-blur-sm text-center hover:scale-[1.02] transition-all duration-300 ${
            tech.color === "blue" ? "bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40"
            : tech.color === "cyan" ? "bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-500/40"
            : "bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-primary-500/20 hover:border-primary-500/40"
          }`}
        >
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
            tech.color === "blue" ? "bg-blue-500/20"
            : tech.color === "cyan" ? "bg-cyan-500/20"
            : "bg-primary-500/20"
          }`}>
            <tech.icon className={`${
              tech.color === "blue" ? "text-blue-400"
              : tech.color === "cyan" ? "text-cyan-400"
              : "text-primary-400"
            }`} size={28} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
          <p className="text-foreground-muted text-sm">{tech.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
