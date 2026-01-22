import type { Meta, StoryObj } from "@storybook/react";
import InteractiveContent, { InteractiveFeature } from "./InteractiveContent";

const meta: Meta<typeof InteractiveContent> = {
  title: "Pages/Display/InteractiveDisplays/Content",
  component: InteractiveContent,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[600px] p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    badge: { control: "text" },
    title: { control: "text" },
    titleGradient: { control: "text" },
    description: { control: "text" },
    features: { control: "object" },
    buttonText: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof InteractiveContent>;

const defaultFeatures: InteractiveFeature[] = [
  { icon: "gamepad", text: "Interaktivne igre i kvizovi" },
  { icon: "users", text: "Gestikulacija i motion tracking" },
  { icon: "bot", text: "AI avatari koji razgovaraju" },
];

export const Default: Story = {
  args: {
    badge: "Interaktivnost",
    title: "Više od",
    titleGradient: "običnog ekrana",
    description:
      "Saraya Display omogućava interakciju putem touch ekrana, gestikulacije, glasa i AI avatara. Kreirajte nezaboravna iskustva kroz igre, kvizove i personalizirane sadržaje.",
    features: defaultFeatures,
    buttonText: "Saznajte više",
  },
};

export const English: Story = {
  args: {
    badge: "Interactivity",
    title: "More than",
    titleGradient: "ordinary screen",
    description:
      "Saraya Display enables interaction through touch screens, gestures, voice and AI avatars. Create unforgettable experiences through games, quizzes and personalized content.",
    features: [
      { icon: "gamepad", text: "Interactive games and quizzes" },
      { icon: "users", text: "Gestures and motion tracking" },
      { icon: "bot", text: "AI avatars that talk" },
    ],
    buttonText: "Learn more",
  },
};
