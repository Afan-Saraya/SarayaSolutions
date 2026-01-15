import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PortalBenefits from "./PortalBenefits";

const meta: Meta<typeof PortalBenefits> = {
  title: "Sections/CaptivePortal/Benefits",
  component: PortalBenefits,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[300px] relative bg-background">
        <div className="container mx-auto px-4 py-8 relative z-10">
          <Story />
        </div>
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
    title: "Prednosti Saraya Hotspot Rješenja:",
    benefits: [
      "Potpuna prilagodba vašem brendu i poslovanju",
      "Skalabilnost — od jedne do stotine lokacija",
      "Integracija s loyalty programima i CRM sistemima",
      "Detaljni izvještaji o ponašanju korisnika",
      "Personalizirani sadržaji bazirani na lokaciji i vremenu",
    ],
  },
};
