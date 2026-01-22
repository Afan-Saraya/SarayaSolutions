"use client";

interface TimelineStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

interface TimelineStepsProps {
  steps: TimelineStep[];
}

export default function TimelineSteps({ steps }: TimelineStepsProps) {
  return (
    <div data-gsap="cards-grid" className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-primary-500 to-pink-500" />
      
      {steps.map((item, index) => (
        <div
          key={item.step}
          data-gsap="card"
          className={`relative flex items-center gap-4 md:gap-8 mb-6 md:mb-8 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* Content */}
          <div className={`flex-1 p-4 md:p-6 rounded-2xl bg-background-card border border-primary-500/20 ${
            index % 2 === 0 ? 'md:text-right' : 'md:text-left'
          }`}>
            <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
              <span className="text-cyan-400 font-bold">{item.step}</span>
              <span className="text-white font-bold">{item.title}</span>
            </div>
            <p className="text-foreground-muted text-sm mb-2">{item.description}</p>
            <span className="text-xs text-primary-400">{item.duration}</span>
          </div>
          
          {/* Timeline dot */}
          <div className="hidden md:flex w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-primary-500 flex-shrink-0 z-10" />
          
          {/* Spacer for alternating layout */}
          <div className="hidden md:block flex-1" />
        </div>
      ))}
    </div>
  );
}
