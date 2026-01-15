"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../../ui/Button";
import Link from "next/link";

export interface CTAContentProps {
  /** Title (first part) */
  titleStart?: string;
  /** Title (gradient part) */
  titleGradient?: string;
  /** Description text */
  description?: string;
  /** Button text */
  buttonText?: string;
  /** Button link */
  buttonLink?: string;
  /** Show sparkles icon */
  showIcon?: boolean;
}

export default function CTAContent({
  titleStart = "Spremni za",
  titleGradient = "digitalnu transformaciju?",
  description = "Razgovarajmo o tome kako Saraya Solutions može pomoći vašem poslovanju da postigne tehnološke ciljeve.",
  buttonText = "Započnite projekt",
  buttonLink = "/contact",
  showIcon = true,
}: CTAContentProps) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {showIcon && (
        <div className="inline-block mb-4 md:mb-6">
          <Sparkles className="text-primary-400" size={32} />
        </div>
      )}

      <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-6">
        {titleStart}{" "}
        <span className="text-gradient">{titleGradient}</span>
      </h2>

      <p className="text-xs md:text-lg text-foreground-muted mb-6 md:mb-8">
        {description}
      </p>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        <Link href={buttonLink}>
          <Button variant="primary" size="lg">
            {buttonText}
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
