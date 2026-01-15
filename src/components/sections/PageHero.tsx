"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Badge from "../ui/Badge";

interface PageHeroProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  highlight?: string;
  description: string;
  align?: "left" | "center";
}

export default function PageHero({
  badge,
  badgeIcon: BadgeIcon,
  title,
  highlight,
  description,
  align = "left",
}: PageHeroProps) {
  return (
    <section className="relative pt-20 pb-8 md:pt-32 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-primary-500/20 rounded-full blur-[100px] md:blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-pink-500/15 rounded-full blur-[80px] md:blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {badge && (
              <Badge variant="primary" className="mb-3 md:mb-6">
                {BadgeIcon && <BadgeIcon size={14} className="mr-2" />}
                {badge}
              </Badge>
            )}

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6">
              {title}{" "}
              {highlight && <span className="text-gradient">{highlight}</span>}
            </h1>

            <p className={`text-sm md:text-lg lg:text-xl text-foreground-muted leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-3xl"}`}>
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
