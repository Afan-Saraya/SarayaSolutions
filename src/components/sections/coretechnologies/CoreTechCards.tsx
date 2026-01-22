"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import TechIllustration from "@/components/ui/TechIllustration";

interface Technology {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  applications: string[];
  color: "purple" | "green" | "blue" | "cyan";
}

interface CoreTechCardsProps {
  technologies: Technology[];
}

export default function CoreTechCards({ technologies }: CoreTechCardsProps) {
  const [ar, vr, chatbot, avatar] = technologies;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* AR - Large card spanning 7 columns */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:col-span-7 rounded-2xl border backdrop-blur-sm overflow-hidden bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-primary-500/20 group hover:border-primary-500/40 transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="relative h-48 md:h-auto md:w-2/5 flex items-center justify-center bg-primary-500/5 overflow-hidden">
            <TechIllustration type="ar" className="w-full h-full scale-110 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary-500/10" />
          </div>
          <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                <ar.icon className="text-primary-400" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{ar.title}</h3>
                <p className="text-foreground-subtle text-xs">{ar.subtitle}</p>
              </div>
            </div>
            <p className="text-foreground-muted text-sm mb-4 line-clamp-3">{ar.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {ar.applications.slice(0, 3).map((app) => (
                <span key={app} className="px-2 py-0.5 rounded-full text-xs bg-primary-500/20 text-primary-400">
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* VR - Tall card spanning 5 columns */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="md:col-span-5 md:row-span-2 rounded-2xl border backdrop-blur-sm overflow-hidden bg-gradient-to-br from-accent-green/10 to-emerald-600/5 border-accent-green/20 group hover:border-accent-green/40 transition-all duration-300"
      >
        <div className="relative h-56 md:h-64 flex items-center justify-center bg-accent-green/5 overflow-hidden">
          <TechIllustration type="vr" className="w-full h-full scale-110 group-hover:scale-125 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark/80" />
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent-green/20 flex items-center justify-center">
              <vr.icon className="text-accent-green" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{vr.title}</h3>
              <p className="text-foreground-subtle text-xs">{vr.subtitle}</p>
            </div>
          </div>
          <p className="text-foreground-muted text-sm mb-4">{vr.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {vr.applications.map((app) => (
              <span key={app} className="px-2 py-0.5 rounded-full text-xs bg-accent-green/20 text-accent-green">
                {app}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* AI Chatbot - Medium card spanning 7 columns */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="md:col-span-7 rounded-2xl border backdrop-blur-sm overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 group hover:border-blue-500/40 transition-all duration-300"
      >
        <div className="flex flex-col-reverse md:flex-row h-full">
          <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <chatbot.icon className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{chatbot.title}</h3>
                <p className="text-foreground-subtle text-xs">{chatbot.subtitle}</p>
              </div>
            </div>
            <p className="text-foreground-muted text-sm mb-4 line-clamp-3">{chatbot.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {chatbot.applications.slice(0, 3).map((app) => (
                <span key={app} className="px-2 py-0.5 rounded-full text-xs bg-blue-500/20 text-blue-400">
                  {app}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-48 md:h-auto md:w-2/5 flex items-center justify-center bg-blue-500/5 overflow-hidden">
            <TechIllustration type="chatbot" className="w-full h-full scale-110 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-500/10" />
          </div>
        </div>
      </motion.div>

      {/* AI Avatar - Full width card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="md:col-span-12 rounded-2xl border backdrop-blur-sm overflow-hidden bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 group hover:border-cyan-500/40 transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative h-48 md:h-56 w-full md:w-1/3 flex items-center justify-center bg-cyan-500/5 overflow-hidden">
            <TechIllustration type="avatar" className="w-full h-full scale-110 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cyan-500/10" />
          </div>
          <div className="p-6 md:p-10 md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <avatar.icon className="text-cyan-400" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{avatar.title}</h3>
                <p className="text-foreground-subtle text-sm">{avatar.subtitle}</p>
              </div>
              <span className="ml-auto px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/30 text-cyan-300 border border-cyan-500/30">
                99+ jezika
              </span>
            </div>
            <p className="text-foreground-muted mb-5">{avatar.description}</p>
            <div className="flex flex-wrap gap-2">
              {avatar.applications.map((app) => (
                <span key={app} className="px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-400 border border-cyan-500/20">
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
