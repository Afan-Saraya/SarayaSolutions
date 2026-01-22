"use client";

import { LucideIcon } from "lucide-react";
import PrintCategoriesHeader from "./PrintCategoriesHeader";
import PrintCategoriesCards from "./PrintCategoriesCards";

interface ProductCategory {
  title: string;
  icon: LucideIcon;
  products: string[];
  color: "purple" | "green" | "cyan" | "pink";
}

interface PrintCategoriesSectionProps {
  title: string;
  titleGradient: string;
  categories: ProductCategory[];
}

export default function PrintCategoriesSection({
  title,
  titleGradient,
  categories,
}: PrintCategoriesSectionProps) {
  return (
    <section className="py-12 md:py-24 bg-background-dark">
      <div className="container mx-auto px-4">
        <PrintCategoriesHeader 
          title={title}
          titleGradient={titleGradient}
        />
        <PrintCategoriesCards categories={categories} />
      </div>
    </section>
  );
}
