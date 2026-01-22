import type { Meta, StoryObj } from "@storybook/react";
import TechTagsList from "./TechTagsList";

const meta: Meta<typeof TechTagsList> = {
  title: "Pages/WebSolutions/TechTags/List",
  component: TechTagsList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TechTagsList>;

export default meta;
type Story = StoryObj<typeof TechTagsList>;

export const Default: Story = {
  args: {
    technologies: [
      "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Tailwind CSS"
    ],
  },
};
