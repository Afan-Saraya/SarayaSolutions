"use client";

import { Quote, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  rating: number;
}

interface TestimonialsCardsProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCards({ testimonials }: TestimonialsCardsProps) {
  return (
    <div data-gsap="cards-grid" className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          data-gsap="card"
          className="p-6 md:p-8 rounded-2xl bg-background-card border border-primary-500/20 relative"
        >
          <Quote className="absolute top-4 right-4 text-primary-500/20" size={32} />
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
            ))}
          </div>
          <p className="text-foreground-muted text-sm md:text-base mb-4 italic">&quot;{testimonial.quote}&quot;</p>
          <div>
            <p className="text-white font-medium">{testimonial.author}</p>
            <p className="text-foreground-muted text-sm">{testimonial.company}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
