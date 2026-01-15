"use client";

import { Monitor, Wifi, ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

export interface ProductItem {
  title: string;
  description: string;
  icon: "monitor" | "wifi";
  color: "purple" | "green";
  href: string;
  features: string[];
}

export interface FeaturesProductsProps {
  /** Array of main products */
  products?: ProductItem[];
  /** Learn more button text */
  learnMoreText?: string;
}

const iconMap: Record<string, LucideIcon> = {
  monitor: Monitor,
  wifi: Wifi,
};

const defaultProducts: ProductItem[] = [
  {
    title: "Saraya Display",
    description: "Interaktivni displeji s AI avatarima, 4K rezolucijom i naprednim funkcijama za marketing i komunikaciju.",
    icon: "monitor",
    color: "purple",
    href: "/products/display",
    features: ["AI Avatar", "4K Ultra HD", "Touch Screen", "Outdoor/Indoor"],
  },
  {
    title: "Saraya Connect",
    description: "Pametni Wi-Fi hotspot sustav s captive portalom, analitikom korisnika i marketing automatizacijom.",
    icon: "wifi",
    color: "green",
    href: "/products/saraya-connect",
    features: ["Besplatan Wi-Fi", "Captive Portal", "Analitika", "Marketing"],
  },
];

export default function FeaturesProducts({
  products = defaultProducts,
  learnMoreText = "Saznajte više",
}: FeaturesProductsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16">
      {products.map((product) => {
        const IconComponent = iconMap[product.icon] || Monitor;
        return (
          <Link href={product.href} key={product.title}>
            <div
              className={`p-5 md:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer h-full hover:-translate-y-1 hover:scale-[1.02] ${
                product.color === "purple"
                  ? "bg-gradient-to-br from-primary-500/20 to-primary-600/10 border-primary-500/30 hover:shadow-primary-500/20 hover:shadow-xl"
                  : "bg-gradient-to-br from-accent-green/20 to-emerald-600/10 border-accent-green/30 hover:shadow-accent-green/20 hover:shadow-xl"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0 ${
                  product.color === "purple" ? "bg-primary-500/20" : "bg-accent-green/20"
                }`}>
                  <IconComponent className={product.color === "purple" ? "text-primary-400" : "text-accent-green"} size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-foreground-muted text-xs md:text-sm mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span 
                        key={feature}
                        className={`px-2 py-1 rounded-full text-[10px] md:text-xs ${
                          product.color === "purple" 
                            ? "bg-primary-500/10 text-primary-400" 
                            : "bg-accent-green/10 text-accent-green"
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`flex items-center mt-4 text-sm font-medium ${
                product.color === "purple" ? "text-primary-400" : "text-accent-green"
              }`}>
                {learnMoreText}
                <ArrowRight className="ml-2" size={16} />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
