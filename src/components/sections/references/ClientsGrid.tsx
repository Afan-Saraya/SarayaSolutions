import { Users } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { useLanguage } from "@/lib/i18n";

interface ClientsGridProps {
  clients: string[];
}

export default function ClientsGrid({ clients }: ClientsGridProps) {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-24 bg-background-dark relative overflow-hidden">
      <div
        data-gsap="parallax"
        className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
      />
      <div
        data-gsap="parallax"
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div data-gsap="section-header" className="text-center mb-10 md:mb-16">
          <Badge variant="accent" className="mb-4">
            <Users size={16} className="mr-2" />
            {t.common.ourPartners}
          </Badge>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.references.clientsTitle}{" "}
            <span className="text-gradient">{t.references.clientsTitleHighlight}</span>
          </h2>
          <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.references.clientsDescription}
          </p>
        </div>
        <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <div
              key={client}
              data-gsap="card"
              className={`group p-6 md:p-8 rounded-2xl border cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
                index % 4 === 0
                  ? "bg-gradient-to-br from-primary-500/10 to-background-card border-primary-500/20 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20"
                  : index % 4 === 1
                  ? "bg-gradient-to-br from-accent-green/10 to-background-card border-accent-green/20 hover:border-accent-green/50 hover:shadow-xl hover:shadow-accent-green/20"
                  : index % 4 === 2
                  ? "bg-gradient-to-br from-cyan-500/10 to-background-card border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20"
                  : "bg-gradient-to-br from-pink-500/10 to-background-card border-pink-500/20 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/20"
              }`}
            >
              <div className="flex items-center justify-center h-full">
                <span
                  className={`text-sm md:text-lg font-bold text-center transition-all group-hover:scale-110 ${
                    index % 4 === 0
                      ? "text-foreground-subtle group-hover:text-primary-400"
                      : index % 4 === 1
                      ? "text-foreground-subtle group-hover:text-accent-green"
                      : index % 4 === 2
                      ? "text-foreground-subtle group-hover:text-cyan-400"
                      : "text-foreground-subtle group-hover:text-pink-400"
                  }`}
                >
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
