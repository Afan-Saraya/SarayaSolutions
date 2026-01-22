import type { Meta, StoryObj } from "@storybook/react";
import ServicesHeader from "./ServicesHeader";

const meta: Meta<typeof ServicesHeader> = {
  title: "Pages/Home/Services/ServicesHeader",
  component: ServicesHeader,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Glavni tekst naslova" },
    titleHighlight: { control: "text", description: "Istaknuti dio naslova (gradient)" },
  },
  decorators: [
    (Story) => (
      <div className="bg-background-dark py-16">
        <div className="container mx-auto px-4">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ServicesHeader>;

/** Default header za Services sekciju */
export const Default: Story = {
  args: {
    title: "Šta",
    titleHighlight: "Nudimo",
  },
};
