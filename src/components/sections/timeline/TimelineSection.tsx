"use client";

import TimelineHeader from "./TimelineHeader";
import TimelineSteps from "./TimelineSteps";

interface TimelineStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

interface TimelineSectionProps {
  title: string;
  titleGradient: string;
  steps: TimelineStep[];
}

export default function TimelineSection({
  title,
  titleGradient,
  steps,
}: TimelineSectionProps) {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div data-gsap="parallax" className="absolute top-0 left-0 w-64 md:w-[400px] h-64 md:h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <TimelineHeader 
          title={title}
          titleGradient={titleGradient}
        />
        <TimelineSteps steps={steps} />
      </div>
    </section>
  );
}
