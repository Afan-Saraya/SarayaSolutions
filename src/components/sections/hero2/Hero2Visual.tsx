"use client";

import DeviceMockup from "../../ui/DeviceMockup";

export interface Hero2VisualProps {
  /** URL for the iframe inside the device mockup */
  iframeUrl?: string;
}

export default function Hero2Visual({
  iframeUrl = "https://hs.sarayasolutions.com/",
}: Hero2VisualProps) {
  return (
    <div className="flex justify-center lg:justify-start">
      <DeviceMockup iframeUrl={iframeUrl} />
    </div>
  );
}
