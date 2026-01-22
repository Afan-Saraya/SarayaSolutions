import type { Meta, StoryObj } from "@storybook/react";
import WhyChooseVisual from "./WhyChooseVisual";

const meta: Meta<typeof WhyChooseVisual> = {
  title: "Pages/Connect/WhyChoose/Visual",
  component: WhyChooseVisual,
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
          <div className="max-w-lg ml-auto">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
  argTypes: {
    logoSrc: { control: "text" },
    logoAlt: { control: "text" },
    stats: { control: "object" },
    showLogo: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof WhyChooseVisual>;

/** Desna strana sekcije - logo i statistike. */
export const Default: Story = {
  args: {
    logoSrc: "/images/logoSaraya.png",
    logoAlt: "Saraya Solutions",
    stats: [
      { value: "10+", label: "Godina iskustva", icon: "award" },
      { value: "90+", label: "Završenih projekata", icon: "rocket" },
      { value: "52+", label: "Zadovoljnih klijenata", icon: "users" },
      { value: "3", label: "Wi-Fi zone u Sarajevu", icon: "mappin" },
    ],
    showLogo: true,
  },
};
