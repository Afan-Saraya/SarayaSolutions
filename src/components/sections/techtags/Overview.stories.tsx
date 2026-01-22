import type { Meta, StoryObj } from "@storybook/react";
import TechTagsSection from "./TechTagsSection";

const meta: Meta<typeof TechTagsSection> = {
  title: "Pages/WebSolutions/TechTags/Overview",
  component: TechTagsSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TechTagsSection>;

export default meta;
type Story = StoryObj<typeof TechTagsSection>;

export const Bosnian: Story = {
  args: {
    title: "Tehnologije koje",
    titleGradient: "koristimo",
    technologies: [
      "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Tailwind CSS"
    ],
  },
};

export const English: Story = {
  args: {
    title: "Technologies we",
    titleGradient: "use",
    technologies: [
      "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Tailwind CSS"
    ],
  },
};
