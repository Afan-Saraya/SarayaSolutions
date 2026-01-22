import type { Meta, StoryObj } from "@storybook/react";
import PrintFinishesSection from "./PrintFinishesSection";

const meta: Meta<typeof PrintFinishesSection> = {
  title: "Pages/Print/Finishes/Overview",
  component: PrintFinishesSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PrintFinishesSection>;

export const Bosnian: Story = {
  args: {
    language: "bs",
  },
};

export const English: Story = {
  args: {
    language: "en",
  },
};
