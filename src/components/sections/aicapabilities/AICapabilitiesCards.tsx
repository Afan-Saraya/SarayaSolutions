"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AICapability {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AICapabilitiesCardsProps {
  capabilities: AICapability[];
}

export default function AICapabilitiesCards({ capabilities }: AICapabilitiesCardsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {capabilities.map((cap, index) => (
        <motion.div
          key={cap.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-primary-500/10 border border-cyan-500/20 flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
            <cap.icon className="text-cyan-400" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">{cap.title}</h3>
            <p className="text-foreground-muted text-sm">{cap.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
