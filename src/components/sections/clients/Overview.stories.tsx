import type { Meta, StoryObj } from "@storybook/react";
import ClientsSection from "./ClientsSection";

const meta: Meta<typeof ClientsSection> = {
  title: "Pages/References/Clients/Overview",
  component: ClientsSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ClientsSection>;

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
