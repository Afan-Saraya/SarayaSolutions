import type { Meta, StoryObj } from "@storybook/react";
import WhyUsCards from "./WhyUsCards";
import { Shield, Smartphone, Search, BarChart3, Clock, Heart } from "lucide-react";

const meta: Meta<typeof WhyUsCards> = {
  title: "Pages/WebSolutions/WhyUs/Cards",
  component: WhyUsCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WhyUsCards>;

export default meta;
type Story = StoryObj<typeof WhyUsCards>;

export const Bosnian: Story = {
  args: {
    items: [
      { icon: Shield, text: "Sigurnost" },
      { icon: Smartphone, text: "Mobile-first" },
      { icon: Search, text: "SEO" },
      { icon: BarChart3, text: "Analitika" },
      { icon: Clock, text: "Brza isporuka" },
      { icon: Heart, text: "Podrška" },
    ],
  },
};

export const English: Story = {
  args: {
    items: [
      { icon: Shield, text: "Security" },
      { icon: Smartphone, text: "Mobile-first" },
      { icon: Search, text: "SEO" },
      { icon: BarChart3, text: "Analytics" },
      { icon: Clock, text: "Fast delivery" },
      { icon: Heart, text: "Support" },
    ],
  },
};
