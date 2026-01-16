"use client";

import AdvertisingFormatCard from "./AdvertisingFormatCard";

export interface FormatItem {
  icon: "monitor" | "layout";
  title: string;
  description: string;
}

export interface AdvertisingFormatsProps {
  title: string;
  formats: FormatItem[];
}

export default function AdvertisingFormats({ title, formats }: AdvertisingFormatsProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="space-y-3">
        {formats.map((format, index) => (
          <AdvertisingFormatCard
            key={index}
            icon={format.icon}
            title={format.title}
            description={format.description}
          />
        ))}
      </div>
    </div>
  );
}
