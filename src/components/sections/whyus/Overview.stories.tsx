import type { Meta, StoryObj } from "@storybook/react";
import WhyUsSection from "./WhyUsSection";
import { Shield, Smartphone, Search, BarChart3, Clock, Heart } from "lucide-react";

const meta: Meta<typeof WhyUsSection> = {
  title: "Pages/WebSolutions/WhyUs/Overview",
  component: WhyUsSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WhyUsSection>;

export default meta;
type Story = StoryObj<typeof WhyUsSection>;

export const Bosnian: Story = {
  args: {
    title: "Zašto",
    titleGradient: "Saraya",
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
    title: "Why",
    titleGradient: "Saraya",
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
