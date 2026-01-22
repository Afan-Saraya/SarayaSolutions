import type { Meta, StoryObj } from "@storybook/react";
import ClientsHeader from "./ClientsHeader";

const meta: Meta<typeof ClientsHeader> = {
  title: "Pages/References/Clients/Header",
  component: ClientsHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ClientsHeader>;

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
