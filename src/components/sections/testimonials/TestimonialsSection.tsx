"use client";

import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsCards from "./TestimonialsCards";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  rating: number;
}

interface TestimonialsSectionProps {
  title: string;
  titleGradient: string;
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  title,
  titleGradient,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="py-12 md:py-24 bg-background-dark">
      <div className="container mx-auto px-4">
        <TestimonialsHeader 
          title={title}
          titleGradient={titleGradient}
        />
        <TestimonialsCards testimonials={testimonials} />
      </div>
    </section>
  );
}
