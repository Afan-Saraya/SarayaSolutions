"use client";

export interface InteractiveVideoProps {
  videoSrc?: string;
  title?: string;
}

export default function InteractiveVideo({
  videoSrc = "https://www.youtube.com/embed/RxvVPDaV8u8",
  title = "Saraya Display",
}: InteractiveVideoProps) {
  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden border border-primary-500/20 shadow-2xl shadow-primary-500/10">
      <iframe
        src={videoSrc}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
