import type { Meta, StoryObj } from "@storybook/react";
import PrintFinishesTags from "./PrintFinishesTags";

const meta: Meta<typeof PrintFinishesTags> = {
  title: "Pages/Print/Finishes/Tags",
  component: PrintFinishesTags,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PrintFinishesTags>;

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
