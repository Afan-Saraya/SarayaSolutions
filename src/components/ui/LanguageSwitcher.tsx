"use client";

import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn("flex items-center gap-1 p-1 rounded-full bg-background-card border border-primary-500/20", className)}>
      <button
        onClick={() => setLanguage("bs")}
        className={cn(
          "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
          language === "bs"
            ? "bg-gradient-to-r from-primary-500 to-pink-500 text-white shadow-lg shadow-primary-500/25"
            : "text-foreground-muted hover:text-white"
        )}
      >
        BS
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
          language === "en"
            ? "bg-gradient-to-r from-primary-500 to-pink-500 text-white shadow-lg shadow-primary-500/25"
            : "text-foreground-muted hover:text-white"
        )}
      >
        EN
      </button>
    </div>
  );
}
