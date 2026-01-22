import type { Meta, StoryObj } from "@storybook/react";
import ClientsGrid from "./ClientsGrid";

const meta = {
  title: "Sections/References/ClientsGrid",
  component: ClientsGrid,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ClientsGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    clients: [
      "Aria Mall",
      "BBI Banka",
      "NLB Banka",
      "BH Telecom",
      "eComm",
      "Central Park",
      "Sarajevo City",
      "Tech Hub",
    ],
  },
};

export const FewClients: Story = {
  args: {
    clients: ["Aria Mall", "BBI Banka", "NLB Banka", "BH Telecom"],
  },
};
