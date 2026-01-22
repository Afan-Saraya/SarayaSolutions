"use client";

import { Globe, ExternalLink } from "lucide-react";

interface PortfolioProject {
  title: string;
  category: string;
  url: string;
  description: string;
  stats: string;
}

interface PortfolioCardsProps {
  projects: PortfolioProject[];
  viewProjectText?: string;
}

export default function PortfolioCards({ 
  projects,
  viewProjectText = "View project"
}: PortfolioCardsProps) {
  return (
    <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          data-gsap="card"
          className="group relative rounded-2xl bg-background-card border border-primary-500/20 overflow-hidden hover:border-primary-500/40 transition-all"
        >
          {/* Project Preview */}
          <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-pink-500/10 flex items-center justify-center relative overflow-hidden">
            <Globe className="text-primary-400/30" size={48} />
            <div className="absolute inset-0 bg-gradient-to-t from-background-card to-transparent" />
          </div>
          
          {/* Project Info */}
          <div className="p-4 md:p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs px-2 py-1 rounded-full bg-primary-500/20 text-primary-400">{project.category}</span>
              <span className="text-xs text-accent-green font-medium">{project.stats}</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
            <p className="text-foreground-muted text-sm mb-4">{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary-400 text-sm hover:text-primary-300 transition-colors">
              {viewProjectText} <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
