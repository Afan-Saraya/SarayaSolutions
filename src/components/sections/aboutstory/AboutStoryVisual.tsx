import React from "react";
import { Monitor, Wifi, Globe, Gamepad2 } from "lucide-react";

interface AboutStoryVisualProps {
  language?: string;
}

const getServices = (language: string) => [
  { title: "Saraya Display", description: language === "bs" ? "Interaktivni displeji s AI avatarima" : "Interactive displays with AI avatars", icon: Monitor },
  { title: "Saraya Connect", description: language === "bs" ? "Wi-Fi hotspot rješenja" : "Wi-Fi hotspot solutions", icon: Wifi },
  { title: language === "bs" ? "Web Rješenja" : "Web Solutions", description: language === "bs" ? "Moderne web aplikacije" : "Modern web applications", icon: Globe },
  { title: language === "bs" ? "Igre" : "Games", description: language === "bs" ? "Interaktivne igre i gamifikacija" : "Interactive games and gamification", icon: Gamepad2 },
];

export default function AboutStoryVisual({ language = "bs" }: AboutStoryVisualProps) {
  const services = getServices(language);

  return (
    <div data-gsap="content-right" className="relative">
      <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500/20 to-pink-500/20 border border-primary-500/20 p-8 flex items-center justify-center">
        <div data-gsap="cards-grid" className="grid grid-cols-2 gap-4 w-full max-w-sm">
          {services.map((service) => (
            <div
              key={service.title}
              data-gsap="card"
              className="p-4 rounded-xl bg-background-card/80 backdrop-blur-sm border border-white/10 text-center"
            >
              <service.icon className="text-primary-400 mx-auto mb-2" size={24} />
              <div className="text-white text-sm font-medium">{service.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
