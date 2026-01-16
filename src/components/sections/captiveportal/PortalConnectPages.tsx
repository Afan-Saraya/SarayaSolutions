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

const colorClasses: Record<string, { dot: string; bg: string }> = {
  purple: { dot: "bg-primary-500", bg: "bg-primary-500/10 hover:bg-primary-500/20" },
  green: { dot: "bg-accent-green", bg: "bg-accent-green/10 hover:bg-accent-green/20" },
  cyan: { dot: "bg-accent-cyan", bg: "bg-accent-cyan/10 hover:bg-accent-cyan/20" },
};

const defaultPages: ConnectPageItem[] = [
  { title: "Rewards Center", subtitle: "Loyalty program", color: "purple" },
  { title: "Pametno Odabrano", subtitle: "AI preporuke", color: "green" },
  { title: "Explore Sarajevo", subtitle: "Vodič kroz grad", color: "cyan" },
];

export default function PortalConnectPages({
  title = "Saraya Connect Stranice",
  description = "Na našoj javnoj mreži, korisnici imaju pristup ekskluzivnim stranicama:",
  pages = defaultPages,
}: PortalConnectPagesProps) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-background-card border border-white/5">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-foreground-muted text-sm mb-6">{description}</p>
      <div className="space-y-3">
        {pages.map((page, index) => {
          const colors = colorClasses[page.color] || colorClasses.purple;
          return (
            <div
              key={index}
              className={`flex items-center gap-3 p-4 rounded-xl ${colors.bg} transition-colors cursor-pointer`}
            >
              <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
              <span className="text-white font-medium">{page.title}</span>
              <span className="text-foreground-muted text-sm">— {page.subtitle}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
