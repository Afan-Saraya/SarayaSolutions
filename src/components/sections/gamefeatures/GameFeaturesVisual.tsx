"use client";

import { Gamepad2 } from "lucide-react";

export default function GameFeaturesVisual() {
  return (
    <div data-gsap="content-right" className="relative hidden md:block">
      <div className="aspect-square rounded-2xl bg-background-card border border-primary-500/20 p-8 flex items-center justify-center">
        <Gamepad2 className="text-primary-400/30 animate-float" size={120} />
      </div>
    </div>
  );
}
