import type { Meta, StoryObj } from "@storybook/react";
import ScreenSizesHeader, { ScreenSizesHeaderProps } from "./ScreenSizesHeader";
import SizeCards, { SizeCardsProps, SizeItem } from "./SizeCards";

type ScreenSizesOverviewProps = ScreenSizesHeaderProps & SizeCardsProps;

const ScreenSizesOverview = ({
  badgeText,
  title,
  titleGradient,
  description,
  sizes,
}: ScreenSizesOverviewProps) => (
  <section className="py-12 md:py-24">
    <div className="container mx-auto px-4">
      <ScreenSizesHeader
        badgeText={badgeText}
        title={title}
        titleGradient={titleGradient}
        description={description}
      />
      <SizeCards sizes={sizes} />
    </div>
  </section>
);

const meta: Meta<typeof ScreenSizesOverview> = {
  title: "Pages/Display/ScreenSizes/Overview",
  component: ScreenSizesOverview,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScreenSizesOverview>;

export default meta;
type Story = StoryObj<typeof ScreenSizesOverview>;

const defaultSizes: SizeItem[] = [
  { size: '32"-43"', ideal: "Male trgovine, kafići", color: "purple" },
  { size: '50"-55"', ideal: "Restorani, kancelarije", color: "green" },
  { size: '65"-75"', ideal: "Tržni centri, hoteli", color: "blue" },
  { size: '85"-98"', ideal: "Velike površine, eventi", color: "cyan" },
];

export const Default: Story = {
  args: {
    badgeText: "Veličine",
    title: "Odaberite",
    titleGradient: "savršenu veličinu",
    description: "Od kompaktnih 32\" do impresivnih 98\" ekrana - imamo rješenje za svaki prostor.",
    sizes: defaultSizes,
  },
};

export const English: Story = {
  args: {
    badgeText: "Sizes",
    title: "Choose",
    titleGradient: "perfect size",
    description: "From compact 32\" to impressive 98\" screens - we have a solution for every space.",
    sizes: [
      { size: '32"-43"', ideal: "Small stores, cafes", color: "purple" },
      { size: '50"-55"', ideal: "Restaurants, offices", color: "green" },
      { size: '65"-75"', ideal: "Shopping centers, hotels", color: "blue" },
      { size: '85"-98"', ideal: "Large spaces, events", color: "cyan" },
    ],
  },
};
