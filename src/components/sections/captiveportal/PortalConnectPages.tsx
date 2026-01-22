"use client";

export interface ConnectPageItem {
  title: string;
  subtitle: string;
  color: "purple" | "green" | "cyan";
}

export interface PortalConnectPagesProps {
  title?: string;
  description?: string;
  pages?: ConnectPageItem[];
}

const colorMap = {
  purple: {
    bg: "bg-primary-500/10",
    border: "border-primary-500/20",
    dot: "bg-primary-400",
  },
  green: {
    bg: "bg-accent-green/10",
    border: "border-accent-green/20",
    dot: "bg-accent-green",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    dot: "bg-cyan-400",
  },
};

const defaultPages: ConnectPageItem[] = [
  {
    title: "Rewards Center",
    subtitle: "Loyalty program",
    color: "purple",
  },
  {
    title: "Pametno Odabrano",
    subtitle: "AI preporuke",
    color: "green",
  },
  {
    title: "Explore Sarajevo",
    subtitle: "Vodič kroz grad",
    color: "cyan",
  },
];

export default function PortalConnectPages({
  title = "Saraya Connect Stranice",
  description = "Na našoj javnoj mreži, korisnici imaju pristup ekskluzivnim stranicama:",
  pages = defaultPages,
}: PortalConnectPagesProps) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-background-card border border-white/10">
      <h3 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-foreground-muted text-sm mb-4">{description}</p>
      <div className="space-y-3">
        {pages.map((page, index) => {
          const colors = colorMap[page.color];
          return (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-xl ${colors.bg} border ${colors.border}`}
            >
              <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
              <span className="text-white font-medium text-sm">{page.title}</span>
              <span className="text-foreground-muted text-xs">— {page.subtitle}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
