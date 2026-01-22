import type { Meta, StoryObj } from "@storybook/react";
import ClientsGrid from "./ClientsGrid";

const meta: Meta<typeof ClientsGrid> = {
  title: "Pages/References/Clients/Grid",
  component: ClientsGrid,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ClientsGrid>;

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
