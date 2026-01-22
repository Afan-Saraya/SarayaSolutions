import type { Meta, StoryObj } from "@storybook/react";
import AvatarVisual from "./AvatarVisual";

const meta: Meta<typeof AvatarVisual> = {
  title: "Pages/Display/AIAvatar/Visual",
  component: AvatarVisual,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[500px] p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    iframeSrc: { control: "text" },
    badgeText: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarVisual>;

export const Default: Story = {
  args: {
    iframeSrc: "https://app.vectary.com/p/4AZGvsuAiwoiyvnpG6dlU3",
    badgeText: "99+ jezika",
  },
};
