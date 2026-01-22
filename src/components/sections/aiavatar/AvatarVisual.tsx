"use client";

export interface AvatarVisualProps {
  iframeSrc?: string;
  badgeText?: string;
}

export default function AvatarVisual({
  iframeSrc = "https://app.vectary.com/p/4AZGvsuAiwoiyvnpG6dlU3",
  badgeText = "99+ jezika",
}: AvatarVisualProps) {
  return (
    <div className="relative">
      {/* 3D Model Container */}
      <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-3xl bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] border border-cyan-500/20 overflow-hidden shadow-2xl shadow-cyan-500/20">
        {/* Vectary 3D Model */}
        <iframe
          src={iframeSrc}
          width="100%"
          height="100%"
          className="absolute inset-0"
          style={{ border: "none" }}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          title="AI Avatar 3D Model"
        />

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f0f1a] to-transparent z-10 pointer-events-none" />

        {/* Badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-cyan-500 text-white text-xs font-semibold z-20">
          {badgeText}
        </div>
      </div>
    </div>
  );
}
