"use client";

import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import AdvertisingBenefitItem from "./AdvertisingBenefitItem";

export interface AdvertisingBenefitsProps {
  title: string;
  benefits: string[];
  buttonText: string;
  buttonHref?: string;
}

export default function AdvertisingBenefits({
  title,
  benefits,
  buttonText,
  buttonHref = "/contact",
}: AdvertisingBenefitsProps) {
  return (
    <div className="p-6 rounded-2xl bg-background-card border border-primary-500/20">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="space-y-3 mb-6">
        {benefits.map((benefit, index) => (
          <AdvertisingBenefitItem key={index} text={benefit} />
        ))}
      </div>
      <Button variant="primary" className="w-full">
        {buttonText}
        <ArrowRight className="ml-2" size={16} />
      </Button>
    </div>
  );
}
