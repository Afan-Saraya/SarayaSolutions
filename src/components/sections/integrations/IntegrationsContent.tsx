"use client";

import { motion } from "framer-motion";

interface IntegrationsContentProps {
  title: string;
  titleGradient: string;
  description: string;
  integrations: string[];
}

export default function IntegrationsContent({
  title,
  titleGradient,
  description,
  integrations,
}: IntegrationsContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        {title} <span className="text-gradient">{titleGradient}</span>
      </h2>
      <p className="text-foreground-muted mb-8 leading-relaxed">
        {description}
      </p>
      <div className="grid grid-cols-2 gap-3">
        {integrations.map((integration, index) => (
          <motion.div
            key={integration}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-accent-green" />
            <span className="text-foreground-muted text-sm">{integration}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
