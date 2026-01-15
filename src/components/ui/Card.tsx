"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "purple" | "green" | "pink" | "none";
}

export default function Card({
  children,
  className,
  hover = true,
  glow = "none",
}: CardProps) {
  const glowStyles = {
    purple: "hover:shadow-primary-500/20",
    green: "hover:shadow-accent-pink/20",
    pink: "hover:shadow-pink-500/20",
    none: "",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-2xl bg-background-card border border-primary-500/10 p-6",
        "transition-all duration-300",
        hover && "hover:border-primary-500/30 hover:shadow-xl",
        glowStyles[glow],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
