import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CTAContent, { CTAContentProps } from "./CTAContent";

type CTAOverviewProps = CTAContentProps & {
  showBackgroundEffects?: boolean;
};

const CTAOverview = ({
  titleStart,
  titleGradient,
  description,
  buttonText,
  buttonLink,
  showIcon,
  showBackgroundEffects = true,
}: CTAOverviewProps) => (
  <section className="py-12 md:py-24 relative overflow-hidden">
    {/* Background Effects */}
    {showBackgroundEffects && (
      <>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-background" />
        <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </>
    )}

    <div className="container mx-auto px-4 relative z-10">
      <CTAContent
        titleStart={titleStart}
        titleGradient={titleGradient}
        description={description}
        buttonText={buttonText}
        buttonLink={buttonLink}
        showIcon={showIcon}
      />
    </div>
  </section>
);

const meta: Meta<typeof CTAOverview> = {
  title: "Sections/CTA/Overview",
  component: CTAOverview,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    // Content
    titleStart: { control: "text", table: { category: "Content" } },
    titleGradient: { control: "text", table: { category: "Content" } },
    description: { control: "text", table: { category: "Content" } },
    buttonText: { control: "text", table: { category: "Content" } },
    buttonLink: { control: "text", table: { category: "Content" } },
    showIcon: { control: "boolean", table: { category: "Content" } },
    // Background
    showBackgroundEffects: { control: "boolean", table: { category: "Background" } },
  },
};

export default meta;
type Story = StoryObj<typeof CTAOverview>;

/** Kompletna CTA sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Content
    titleStart: "Spremni za",
    titleGradient: "digitalnu transformaciju?",
    description: "Razgovarajmo o tome kako Saraya Solutions može pomoći vašem poslovanju da postigne tehnološke ciljeve.",
    buttonText: "Započnite projekt",
    buttonLink: "/contact",
    showIcon: true,
    // Background
    showBackgroundEffects: true,
  },
};
