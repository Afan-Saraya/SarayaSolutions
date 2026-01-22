import type { Meta, StoryObj } from "@storybook/react";
import AvatarContent, { AvatarContentProps, AvatarFeature } from "./AvatarContent";
import AvatarVisual, { AvatarVisualProps } from "./AvatarVisual";

type AIAvatarOverviewProps = AvatarContentProps & AvatarVisualProps;

const AIAvatarOverview = ({
  // Content props
  badge,
  title,
  titleGradient,
  description,
  features,
  buttonText,
  // Visual props
  iframeSrc,
  badgeText,
}: AIAvatarOverviewProps) => (
  <section className="py-12 md:py-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-48 md:w-[400px] h-48 md:h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <AvatarContent
            badge={badge}
            title={title}
            titleGradient={titleGradient}
            description={description}
            features={features}
            buttonText={buttonText}
          />
        </div>
        <div className="order-1 lg:order-2">
          <AvatarVisual iframeSrc={iframeSrc} badgeText={badgeText} />
        </div>
      </div>
    </div>
  </section>
);

const meta: Meta<typeof AIAvatarOverview> = {
  title: "Pages/Display/AIAvatar/Overview",
  component: AIAvatarOverview,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
    docs: {
      story: {
        inline: false,
        iframeHeight: 900,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Content
    badge: { control: "text", table: { category: "Content" } },
    title: { control: "text", table: { category: "Content" } },
    titleGradient: { control: "text", table: { category: "Content" } },
    description: { control: "text", table: { category: "Content" } },
    features: { control: "object", table: { category: "Content" } },
    buttonText: { control: "text", table: { category: "Content" } },
    // Visual
    iframeSrc: { control: "text", table: { category: "Visual" } },
    badgeText: { control: "text", table: { category: "Visual" } },
  },
};

export default meta;
type Story = StoryObj<typeof AIAvatarOverview>;

const defaultFeatures: AvatarFeature[] = [
  { text: "Komunicira na 99+ jezika" },
  { text: "Realistični 3D/2D avatari" },
  { text: "Personalizirano korisničko iskustvo" },
];

/** Kompletna AI Avatar Display sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Content
    badge: "AI Tehnologija",
    title: "AI Avatar display:",
    titleGradient: "revolucija u interakciji",
    description:
      "Saraya AI Avatar Display predstavlja najnoviju tehnologiju u digitalnoj interakciji s naprednom AI i realističnim avatarima.",
    features: defaultFeatures,
    buttonText: "Saznajte više",
    // Visual
    iframeSrc: "https://app.vectary.com/p/4AZGvsuAiwoiyvnpG6dlU3",
    badgeText: "99+ jezika",
  },
};
