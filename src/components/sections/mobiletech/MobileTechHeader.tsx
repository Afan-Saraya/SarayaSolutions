"use client";

import { motion } from "framer-motion";

interface MobileTechHeaderProps {
  title: string;
  titleGradient: string;
  description: string;
}

export default function MobileTechHeader({
  title,
  titleGradient,
  description,
}: MobileTechHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title} <span className="text-gradient">{titleGradient}</span>
      </h2>
      <p className="text-foreground-muted max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
}
