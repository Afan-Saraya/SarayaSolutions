"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
  delay?: number;
}

export default function StatCard({
  value,
  label,
  className,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "glass rounded-xl p-4 min-w-[120px]",
        "animate-float",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-2xl font-bold text-gradient">{value}</div>
      <div className="text-sm text-foreground-muted">{label}</div>
    </motion.div>
  );
}
