"use client";

import { Check } from "lucide-react";

export interface AdvertisingBenefitItemProps {
  text: string;
}

export default function AdvertisingBenefitItem({ text }: AdvertisingBenefitItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
        <Check className="text-primary-400" size={12} />
      </div>
      <span className="text-foreground-muted text-sm">{text}</span>
    </div>
  );
}
