import type { Meta, StoryObj } from "@storybook/react";
import IntegrationsVisual from "./IntegrationsVisual";

const meta: Meta<typeof IntegrationsVisual> = {
  title: "Pages/Technology/Integrations/Visual",
  component: IntegrationsVisual,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IntegrationsVisual>;

export default meta;
type Story = StoryObj<typeof IntegrationsVisual>;

export const Default: Story = {
  args: {
    logoSrc: "/images/shortLogo.png",
  },
};
