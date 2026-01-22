"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";

interface DisplayTech {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface DisplayTechCardsProps {
  technologies: DisplayTech[];
}

export default function DisplayTechCards({ technologies }: DisplayTechCardsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {technologies.map((tech, index) => (
        <Card key={tech.title} glow="purple">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
              <tech.icon className="text-primary-400" size={28} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
            <p className="text-foreground-muted text-sm">{tech.description}</p>
          </motion.div>
        </Card>
      ))}
    </div>
  );
}
