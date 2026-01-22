import type { Meta, StoryObj } from "@storybook/react";
import PrintFinishesHeader from "./PrintFinishesHeader";

const meta: Meta<typeof PrintFinishesHeader> = {
  title: "Pages/Print/Finishes/Header",
  component: PrintFinishesHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PrintFinishesHeader>;

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
