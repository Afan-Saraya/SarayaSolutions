"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WebTech {
  icon: LucideIcon;
  name: string;
  description: string;
  color: "blue" | "cyan" | "green" | "purple" | "pink" | "orange";
}

interface WebTechCardsProps {
  technologies: WebTech[];
}

export default function WebTechCards({ technologies }: WebTechCardsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`p-6 rounded-2xl border backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 ${
            tech.color === "blue" ? "bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40"
            : tech.color === "cyan" ? "bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-500/40"
            : tech.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-emerald-600/5 border-accent-green/20 hover:border-accent-green/40"
            : tech.color === "purple" ? "bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-primary-500/20 hover:border-primary-500/40"
            : tech.color === "pink" ? "bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/20 hover:border-pink-500/40"
            : "bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20 hover:border-orange-500/40"
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
            tech.color === "blue" ? "bg-blue-500/20"
            : tech.color === "cyan" ? "bg-cyan-500/20"
            : tech.color === "green" ? "bg-accent-green/20"
            : tech.color === "purple" ? "bg-primary-500/20"
            : tech.color === "pink" ? "bg-pink-500/20"
            : "bg-orange-500/20"
          }`}>
            <tech.icon className={`${
              tech.color === "blue" ? "text-blue-400"
              : tech.color === "cyan" ? "text-cyan-400"
              : tech.color === "green" ? "text-accent-green"
              : tech.color === "purple" ? "text-primary-400"
              : tech.color === "pink" ? "text-pink-400"
              : "text-orange-400"
            }`} size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
          <p className="text-foreground-muted text-sm">{tech.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
