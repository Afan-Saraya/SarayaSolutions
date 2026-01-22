"use client";

import { LucideIcon } from "lucide-react";

interface ProductCategory {
  title: string;
  icon: LucideIcon;
  products: string[];
  color: "purple" | "green" | "cyan" | "pink";
}

interface PrintCategoriesCardsProps {
  categories: ProductCategory[];
}

export default function PrintCategoriesCards({ categories }: PrintCategoriesCardsProps) {
  return (
    <div data-gsap="cards-grid" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <div
          key={category.title}
          data-gsap="card"
          className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
            category.color === "purple" ? "bg-gradient-to-br from-primary-500/10 to-transparent border-primary-500/20 hover:border-primary-500/40"
            : category.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-transparent border-accent-green/20 hover:border-accent-green/40"
            : category.color === "cyan" ? "bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/20 hover:border-cyan-500/40"
            : "bg-gradient-to-br from-pink-500/10 to-transparent border-pink-500/20 hover:border-pink-500/40"
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
            category.color === "purple" ? "bg-primary-500/20"
            : category.color === "green" ? "bg-accent-green/20"
            : category.color === "cyan" ? "bg-cyan-500/20"
            : "bg-pink-500/20"
          }`}>
            <category.icon className={
              category.color === "purple" ? "text-primary-400"
              : category.color === "green" ? "text-accent-green"
              : category.color === "cyan" ? "text-cyan-400"
              : "text-pink-400"
            } size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-3">{category.title}</h3>
          <ul className="space-y-1">
            {category.products.map((product, idx) => (
              <li key={idx} className="text-foreground-muted text-sm flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-foreground-muted" />
                {product}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
