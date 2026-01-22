"use client";

import { motion } from "framer-motion";
import { Wifi, Monitor, Bot, Glasses } from "lucide-react";

interface IntegrationsVisualProps {
  logoSrc?: string;
}

export default function IntegrationsVisual({ logoSrc = "/images/shortLogo.png" }: IntegrationsVisualProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="aspect-square rounded-2xl bg-background-card border border-primary-500/20 p-8 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Central hub - Saraya Logo */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-green/20 border-2 border-primary-500/30 flex items-center justify-center z-10 shadow-xl shadow-primary-500/20">
            <img 
              src={logoSrc}
              alt="Saraya" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </div>
          
          {/* Orbiting icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
              <Wifi className="text-primary-400" size={20} />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent-green/20 flex items-center justify-center">
              <Monitor className="text-accent-green" size={20} />
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <Bot className="text-cyan-400" size={20} />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Glasses className="text-blue-400" size={20} />
            </div>
          </motion.div>

          {/* Connection lines */}
          <div className="absolute inset-12 rounded-full border border-dashed border-primary-500/20" />
          <div className="absolute inset-4 rounded-full border border-dashed border-accent-green/20" />
        </div>
      </div>
    </motion.div>
  );
}
