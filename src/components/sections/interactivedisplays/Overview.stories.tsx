import type { Meta, StoryObj } from "@storybook/react";
import InteractiveVideo, { InteractiveVideoProps } from "./InteractiveVideo";
import InteractiveContent, { InteractiveContentProps, InteractiveFeature } from "./InteractiveContent";

type InteractiveDisplaysOverviewProps = InteractiveVideoProps & InteractiveContentProps;

const InteractiveDisplaysOverview = ({
  // Video props
  videoSrc,
  title,
  // Content props
  badge,
  title: contentTitle,
  titleGradient,
  description,
  features,
  buttonText,
}: InteractiveDisplaysOverviewProps) => (
  <section className="py-12 md:py-24 bg-background-dark">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <InteractiveVideo videoSrc={videoSrc} title={title} />
        </div>
        <div className="order-1 lg:order-2">
          <InteractiveContent
            badge={badge}
            title={contentTitle}
            titleGradient={titleGradient}
            description={description}
            features={features}
            buttonText={buttonText}
          />
        </div>
      </div>
    </div>
  </section>
);

const meta: Meta<typeof InteractiveDisplaysOverview> = {
  title: "Pages/Display/InteractiveDisplays/Overview",
  component: InteractiveDisplaysOverview,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Video
    videoSrc: { control: "text", table: { category: "Video" } },
    title: { control: "text", table: { category: "Video" } },
    // Content
    badge: { control: "text", table: { category: "Content" } },
    titleGradient: { control: "text", table: { category: "Content" } },
    description: { control: "text", table: { category: "Content" } },
    features: { control: "object", table: { category: "Content" } },
    buttonText: { control: "text", table: { category: "Content" } },
  },
};

export default meta;
type Story = StoryObj<typeof InteractiveDisplaysOverview>;

const defaultFeatures: InteractiveFeature[] = [
  { icon: "gamepad", text: "Interaktivne igre i kvizovi" },
  { icon: "users", text: "Gestikulacija i motion tracking" },
  { icon: "bot", text: "AI avatari koji razgovaraju" },
];

/** Kompletna Interactive Displays sekcija sa svim kontrolama - ažurirano sa novom stranicom. */
export const Default: Story = {
  args: {
    // Video
    videoSrc: "https://www.youtube.com/embed/RxvVPDaV8u8",
    title: "Saraya Display",
    // Content
    badge: "Interaktivnost",
    title: "Više od",
    titleGradient: "običnog ekrana",
    description:
      "Saraya Display omogućava interakciju putem touch ekrana, gestikulacije, glasa i AI avatara. Kreirajte nezaboravna iskustva kroz igre, kvizove i personalizirane sadržaje.",
    features: defaultFeatures,
    buttonText: "Saznajte više",
  },
};

/** English verzija. */
export const English: Story = {
  args: {
    // Video
    videoSrc: "https://www.youtube.com/embed/RxvVPDaV8u8",
    title: "Saraya Display",
    // Content
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
