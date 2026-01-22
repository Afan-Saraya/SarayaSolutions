"use client";

interface TechTagsListProps {
  technologies: string[];
}

export default function TechTagsList({ technologies }: TechTagsListProps) {
  return (
    <div data-gsap="tags" className="flex flex-wrap justify-center gap-3">
      {technologies.map((tech) => (
        <div
          key={tech}
          data-gsap="tag"
          className="px-4 py-2 rounded-full bg-background-card border border-primary-500/20 text-white text-sm font-medium hover:border-primary-500/50 hover:bg-primary-500/10 transition-all cursor-default"
        >
          {tech}
        </div>
      ))}
    </div>
  );
}
