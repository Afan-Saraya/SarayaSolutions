import type { Meta, StoryObj } from "@storybook/react";
import BenefitCards, { BenefitItem } from "./BenefitCards";

const meta: Meta<typeof BenefitCards> = {
  title: "Pages/Display/WhyDisplay/Cards",
  component: BenefitCards,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="container mx-auto px-4 py-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    benefits: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof BenefitCards>;

const defaultBenefits: BenefitItem[] = [
  {
    icon: "sparkles",
    title: "Angažman koji konvertira",
    description:
      "Interaktivni sadržaji koji privlače pažnju i podstiču akciju — od informiranja do kupovine.",
  },
  {
    icon: "zap",
    title: "Fleksibilnost bez granica",
    description:
      "Mijenjajte sadržaj u realnom vremenu, prilagođavajte kampanje i reagirajte na trendove trenutno.",
  },
  {
    icon: "shield",
    title: "Kvaliteta koja traje",
    description:
      "Industrijski grade komponente dizajnirane za 24/7 rad u zahtjevnim uvjetima.",
  },
];

export const Default: Story = {
  args: {
    benefits: defaultBenefits,
  },
};
