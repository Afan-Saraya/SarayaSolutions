import type { Meta, StoryObj } from "@storybook/react";
import WhyChooseContent from "./WhyChooseContent";

const meta: Meta<typeof WhyChooseContent> = {
  title: "Pages/Connect/WhyChoose/Content",
  component: WhyChooseContent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[500px] relative overflow-hidden bg-background-dark">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-green/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-xl">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
  argTypes: {
    location: { control: "text" },
    badgeText: { control: "text" },
    showBadge: { control: "boolean" },
    titleStart: { control: "text" },
    titleGradient: { control: "text" },
    description: { control: "text" },
    highlights: { control: "object" },
    linkText: { control: "text" },
    linkHref: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof WhyChooseContent>;

/** Lijeva strana sekcije - naslov, opis, highlights i link. */
export const Default: Story = {
  args: {
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
  },
};
