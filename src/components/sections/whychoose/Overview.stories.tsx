import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import WhyChooseContent, { WhyChooseContentProps } from "./WhyChooseContent";
import WhyChooseVisual, { WhyChooseVisualProps, StatItem } from "./WhyChooseVisual";

type WhyChooseOverviewProps = WhyChooseContentProps & WhyChooseVisualProps;

const WhyChooseOverview = ({
  // Content props
  location,
  badgeText,
  showBadge,
  titleStart,
  titleGradient,
  description,
  highlights,
  linkText,
  linkHref,
  // Visual props
  logoSrc,
  logoAlt,
  stats,
  showLogo,
}: WhyChooseOverviewProps) => (
  <section className="py-16 md:py-24 relative overflow-hidden bg-background-dark">
    {/* Background glow */}
    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px] -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-green/10 rounded-full blur-[120px]" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left - Content */}
        <div>
          <WhyChooseContent
            location={location}
            badgeText={badgeText}
            showBadge={showBadge}
            titleStart={titleStart}
            titleGradient={titleGradient}
            description={description}
            highlights={highlights}
            linkText={linkText}
            linkHref={linkHref}
          />
        </div>

        {/* Right - Visual */}
        <div>
          <WhyChooseVisual
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            stats={stats}
            showLogo={showLogo}
          />
        </div>
      </div>
    </div>
  </section>
);

const meta: Meta<typeof WhyChooseOverview> = {
  title: "Sections/WhyChoose/Overview",
  component: WhyChooseOverview,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    // Content
    location: { control: "text", table: { category: "Content" } },
    badgeText: { control: "text", table: { category: "Content" } },
    showBadge: { control: "boolean", table: { category: "Content" } },
    titleStart: { control: "text", table: { category: "Content" } },
    titleGradient: { control: "text", table: { category: "Content" } },
    description: { control: "text", table: { category: "Content" } },
    highlights: { control: "object", table: { category: "Content" } },
    linkText: { control: "text", table: { category: "Content" } },
    linkHref: { control: "text", table: { category: "Content" } },
    // Visual
    logoSrc: { control: "text", table: { category: "Visual" } },
    logoAlt: { control: "text", table: { category: "Visual" } },
    stats: { control: "object", table: { category: "Visual" } },
    showLogo: { control: "boolean", table: { category: "Visual" } },
  },
};

export default meta;
type Story = StoryObj<typeof WhyChooseOverview>;

const defaultStats: StatItem[] = [
  { value: "10+", label: "Godina iskustva", icon: "award" },
  { value: "90+", label: "Završenih projekata", icon: "rocket" },
  { value: "52+", label: "Zadovoljnih klijenata", icon: "users" },
  { value: "3", label: "Wi-Fi zone u Sarajevu", icon: "mappin" },
];

/** Kompletna "Zašto odabrati Saraya Solutions" sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Content
    location: "Sarajevo, BiH",
    badgeText: "Domaći proizvod iz BiH",
    showBadge: true,
    titleStart: "Zašto odabrati",
    titleGradient: "Saraya Solutions?",
    description: "Saraya Solutions je bosanskohercegovačka tehnološka kompanija koja razvija inovativna digitalna rješenja. Naši proizvodi su rezultat godina istraživanja i razvoja, prilagođeni potrebama modernog poslovanja.",
    highlights: [
      "Vlastita Wi-Fi mreža u centru Sarajeva",
      "AI avatari koji govore 99+ jezika",
      "4K interaktivni displeji",
      "Captive portal s marketing automatizacijom",
      "Podrška i održavanje 24/7",
    ],
    linkText: "Saznajte više o nama",
    linkHref: "/about",
    // Visual
    logoSrc: "/images/logoSaraya.png",
    logoAlt: "Saraya Solutions",
    stats: defaultStats,
    showLogo: true,
  },
};
