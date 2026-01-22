import { LucideIcon, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface ReferenceCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  solution: string;
  highlights: string[];
  icon: LucideIcon;
  color: "purple" | "green" | "cyan";
}

export default function ReferenceCard({
  title,
  subtitle,
  description,
  solution,
  highlights,
  icon: Icon,
  color,
}: ReferenceCardProps) {
  const { language } = useLanguage();

  return (
    <div
      data-gsap="card"
      className={`group p-6 md:p-10 lg:p-12 rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
        color === "purple"
          ? "bg-gradient-to-br from-primary-500/15 via-primary-500/5 to-background-card border-primary-500/30 hover:border-primary-500/60 hover:shadow-2xl hover:shadow-primary-500/20"
          : color === "green"
          ? "bg-gradient-to-br from-accent-green/15 via-accent-green/5 to-background-card border-accent-green/30 hover:border-accent-green/60 hover:shadow-2xl hover:shadow-accent-green/20"
          : "bg-gradient-to-br from-cyan-500/15 via-cyan-500/5 to-background-card border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20"
      }`}
    >
      <div className="grid lg:grid-cols-[1fr,1.3fr] gap-6 md:gap-10 items-start">
        <div>
          <div
            className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5 md:mb-6 border transition-transform group-hover:scale-110 group-hover:rotate-3 ${
              color === "purple"
                ? "bg-primary-500/20 border-primary-500/30"
                : color === "green"
                ? "bg-accent-green/20 border-accent-green/30"
                : "bg-cyan-500/20 border-cyan-500/30"
            }`}
          >
            <Icon
              className={
                color === "purple"
                  ? "text-primary-400"
                  : color === "green"
                  ? "text-accent-green"
                  : "text-cyan-400"
              }
              size={28}
            />
          </div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 group-hover:text-gradient transition-all">
            {title}
          </h2>
          <p
            className={`text-sm md:text-base font-semibold mb-4 md:mb-6 ${
              color === "purple"
                ? "text-primary-400"
                : color === "green"
                ? "text-accent-green"
                : "text-cyan-400"
            }`}
          >
            {subtitle}
          </p>
          <p className="text-foreground-muted text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {highlights.map((h) => (
              <span
                key={h}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold border transition-all hover:scale-105 ${
                  color === "purple"
                    ? "bg-primary-500/20 text-primary-300 border-primary-500/30 hover:bg-primary-500/30"
                    : color === "green"
                    ? "bg-accent-green/20 text-accent-green border-accent-green/30 hover:bg-accent-green/30"
                    : "bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30"
                }`}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
        <div
          className={`p-6 md:p-8 rounded-2xl border transition-all group-hover:scale-[1.02] ${
            color === "purple"
              ? "bg-gradient-to-br from-primary-500/10 to-background-elevated/50 border-primary-500/20"
              : color === "green"
              ? "bg-gradient-to-br from-accent-green/10 to-background-elevated/50 border-accent-green/20"
              : "bg-gradient-to-br from-cyan-500/10 to-background-elevated/50 border-cyan-500/20"
          }`}
        >
          <h3 className="text-base md:text-xl font-bold text-white mb-3 md:mb-5 flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                color === "purple"
                  ? "bg-primary-500/20"
                  : color === "green"
                  ? "bg-accent-green/20"
                  : "bg-cyan-500/20"
              }`}
            >
              <Sparkles
                size={20}
                className={
                  color === "purple"
                    ? "text-primary-400"
                    : color === "green"
                    ? "text-accent-green"
                    : "text-cyan-400"
                }
              />
            </div>
            {language === "bs" ? "Saraya Rješenje" : "Saraya Solution"}
          </h3>
          <p className="text-foreground-muted text-sm md:text-lg leading-relaxed">
            {solution}
          </p>
        </div>
      </div>
    </div>
  );
}
