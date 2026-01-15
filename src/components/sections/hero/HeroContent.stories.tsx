import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HeroContent from "./HeroContent";

const meta: Meta<typeof HeroContent> = {
  title: "Sections/Hero/Content",
  component: HeroContent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: 'Naslov - koristi <span class="text-gradient">tekst</span> za gradient',
    },
    description: {
      control: "text",
      description: "Opis ispod naslova",
    },
    primaryButtonText: {
      control: "text",
      description: "Tekst primarnog dugmeta",
    },
    primaryButtonLink: {
      control: "text",
      description: "Link primarnog dugmeta",
    },
    secondaryButtonText: {
      control: "text",
      description: "Tekst sekundarnog dugmeta",
    },
    secondaryButtonLink: {
      control: "text",
      description: "Link sekundarnog dugmeta",
    },
  },
  decorators: [
    (Story) => (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background - same as Hero section */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 p-10" style={{ maxWidth: "600px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HeroContent>;

/** Zadani prikaz sa stvarnim sadržajem stranice. */
export const Default: Story = {
  args: {
    title: 'Inovativna tehnološka rješenja za <span class="text-gradient">moderno poslovanje</span>',
    description: "Saraya Solutions razvija napredne digitalne proizvode - od interaktivnih displeja s AI avatarima do pametnih Wi-Fi hotspot sustava. Transformirajte način na koji komunicirate s korisnicima.",
    primaryButtonText: "Kontaktirajte nas",
    primaryButtonLink: "/contact",
    secondaryButtonText: "O nama",
    secondaryButtonLink: "/about",
  },
};
