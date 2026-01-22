import type { Meta, StoryObj } from "@storybook/react";
import AvatarContent, { AvatarFeature } from "./AvatarContent";

const meta: Meta<typeof AvatarContent> = {
  title: "Pages/Display/AIAvatar/Content",
  component: AvatarContent,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[600px] p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    badge: { control: "text" },
    title: { control: "text" },
    titleGradient: { control: "text" },
    description: { control: "text" },
    features: { control: "object" },
    buttonText: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarContent>;

const defaultFeatures: AvatarFeature[] = [
  { text: "Komunicira na 99+ jezika" },
  { text: "Realistični 3D/2D avatari" },
  { text: "Personalizirano korisničko iskustvo" },
];

export const Default: Story = {
  args: {
    badge: "AI Tehnologija",
    title: "AI Avatar display:",
    titleGradient: "revolucija u interakciji",
    description:
      "Saraya AI Avatar Display predstavlja najnoviju tehnologiju u digitalnoj interakciji s naprednom AI i realističnim avatarima.",
    features: defaultFeatures,
    buttonText: "Saznajte više",
  },
};
