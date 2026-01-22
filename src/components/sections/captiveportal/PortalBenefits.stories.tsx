import type { Meta, StoryObj } from "@storybook/react";
import PortalBenefits from "./PortalBenefits";

const meta: Meta<typeof PortalBenefits> = {
  title: "Pages/Connect/CaptivePortal/Benefits",
  component: PortalBenefits,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: "text" },
    benefits: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof PortalBenefits>;

/** Lista prednosti hotspot rješenja. */
export const Default: Story = {
  args: {
    title: "Prednosti Saraya Hotspot Rješenja",
    benefits: [
      "Potpuna prilagodba vašem brendu",
      "Skalabilnost — od jedne do stotine lokacija",
      "Integracija s loyalty programima",
      "Detaljni izvještaji o ponašanju korisnika",
    ],
  },
};
