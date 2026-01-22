import type { Meta, StoryObj } from "@storybook/react";
import InteractiveVideo from "./InteractiveVideo";

const meta: Meta<typeof InteractiveVideo> = {
  title: "Pages/Display/InteractiveDisplays/Video",
  component: InteractiveVideo,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[800px] p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    videoSrc: { control: "text" },
    title: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof InteractiveVideo>;

export const Default: Story = {
  args: {
    videoSrc: "https://www.youtube.com/embed/RxvVPDaV8u8",
    title: "Saraya Display",
  },
};
