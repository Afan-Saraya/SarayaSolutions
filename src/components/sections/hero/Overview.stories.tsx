import type { Meta, StoryObj } from "@storybook/react";
import HeroContent, { HeroContentProps } from "./HeroContent";
import HeroVisual, { HeroVisualProps } from "./HeroVisual";
import { Sparkles, Star, Zap } from "lucide-react";

type HeroOverviewProps = HeroContentProps & HeroVisualProps & {
  showDecorations?: boolean;
};

const HeroOverview = ({
  // Content props
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  // Visual props
  videoSrc,
  statYears,
  statYearsLabel,
  statProjects,
  statProjectsLabel,
  statSupport,
  statSupportLabel,
  statTech,
  statTechLabel,
  statDomesticTitle,
  statDomesticSubtitle,
  showStats,
  // Overview props
  showDecorations = true,
}: HeroOverviewProps) => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-hero-gradient" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />

    {/* Decorative Elements */}
    {showDecorations && (
      <>
        <div className="absolute top-20 right-20 text-primary-400/30 hidden md:block">
          <Star size={40} />
        </div>
        <div className="absolute top-40 left-20 text-pink-400/30 hidden md:block">
          <Sparkles size={30} />
        </div>
        <div className="absolute bottom-40 left-1/3 text-primary-400/20 hidden md:block">
          <Zap size={50} />
        </div>
      </>
    )}

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="order-2 lg:order-1">
          <HeroContent
            title={title}
            description={description}
            primaryButtonText={primaryButtonText}
            primaryButtonLink={primaryButtonLink}
            secondaryButtonText={secondaryButtonText}
            secondaryButtonLink={secondaryButtonLink}
          />
        </div>

        {/* Right Column - Visual */}
        <div className="order-1 lg:order-2">
          <HeroVisual
            videoSrc={videoSrc}
            statYears={statYears}
            statYearsLabel={statYearsLabel}
            statProjects={statProjects}
            statProjectsLabel={statProjectsLabel}
            statSupport={statSupport}
            statSupportLabel={statSupportLabel}
            statTech={statTech}
            statTechLabel={statTechLabel}
            statDomesticTitle={statDomesticTitle}
            statDomesticSubtitle={statDomesticSubtitle}
            showStats={showStats}
          />
        </div>
      </div>
    </div>
  </section>
);

const meta: Meta<typeof HeroOverview> = {
  title: "Pages/Home/Hero/Overview",
  component: HeroOverview,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    // Content
    title: { control: "text", table: { category: "Content" } },
    description: { control: "text", table: { category: "Content" } },
    primaryButtonText: { control: "text", table: { category: "Content" } },
    primaryButtonLink: { control: "text", table: { category: "Content" } },
    secondaryButtonText: { control: "text", table: { category: "Content" } },
    secondaryButtonLink: { control: "text", table: { category: "Content" } },
    // Visual
    videoSrc: { control: "text", table: { category: "Visual" } },
    statYears: { control: "text", table: { category: "Visual" } },
    statYearsLabel: { control: "text", table: { category: "Visual" } },
    statProjects: { control: "text", table: { category: "Visual" } },
    statProjectsLabel: { control: "text", table: { category: "Visual" } },
    statSupport: { control: "text", table: { category: "Visual" } },
    statSupportLabel: { control: "text", table: { category: "Visual" } },
    statTech: { control: "text", table: { category: "Visual" } },
    statTechLabel: { control: "text", table: { category: "Visual" } },
    statDomesticTitle: { control: "text", table: { category: "Visual" } },
    statDomesticSubtitle: { control: "text", table: { category: "Visual" } },
    showStats: { control: "boolean", table: { category: "Visual" } },
    // Overview
    showDecorations: { control: "boolean", table: { category: "Overview" } },
  },
};

export default meta;
type Story = StoryObj<typeof HeroOverview>;

/** Kompletna Hero sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Content
    title: 'Inovativna tehnološka rješenja za <span class="text-gradient">moderno poslovanje</span>',
    description: "Saraya Solutions razvija napredne digitalne proizvode - od interaktivnih displeja s AI avatarima do pametnih Wi-Fi hotspot sustava. Transformirajte način na koji komunicirate s korisnicima.",
    primaryButtonText: "Kontaktirajte nas",
    primaryButtonLink: "/contact",
    secondaryButtonText: "O nama",
    secondaryButtonLink: "/about",
    // Visual
    videoSrc: "/images/VRExperience.mp4",
    statYears: "10+",
    statYearsLabel: "Godina iskustva",
    statProjects: "90+",
    statProjectsLabel: "Projekata",
    statSupport: "24/7",
    statSupportLabel: "Podrška",
    statTech: "AI",
    statTechLabel: "Tehnologija",
    statDomesticTitle: "Domaći",
    statDomesticSubtitle: "proizvod",
    showStats: true,
    // Overview
    showDecorations: true,
  },
};
