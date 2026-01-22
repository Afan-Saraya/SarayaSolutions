import type { Meta, StoryObj } from "@storybook/react";
import TechTagsHeader from "./TechTagsHeader";

const meta: Meta<typeof TechTagsHeader> = {
  title: "Pages/WebSolutions/TechTags/Header",
  component: TechTagsHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TechTagsHeader>;

export default meta;
type Story = StoryObj<typeof TechTagsHeader>;

export const Bosnian: Story = {
  args: {
    title: "Tehnologije koje",
    titleGradient: "koristimo",
  },
};

export const English: Story = {
  args: {
    title: "Technologies we",
    titleGradient: "use",
  },
};
