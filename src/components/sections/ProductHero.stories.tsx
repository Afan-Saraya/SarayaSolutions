import type { Meta, StoryObj } from "@storybook/react";
import ProductHero from "./ProductHero";
import DeviceMockup from "@/components/ui/DeviceMockup";

const meta: Meta<typeof ProductHero> = {
  title: "Sections/ProductHero",
  component: ProductHero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductHero>;

export const SarayaHotspot: Story = {
  args: {
    logoSrc: "/images/logos/saraya hotspot.png",
    logoAlt: "Saraya Hotspot",
    subtitle: "Vlastito Wi-Fi rješenje za vaš objekat",
    description: "Ponudite gostima besplatan Wi-Fi sa brendiranim captive portalom. Prikupljajte podatke, komunicirajte i gradite lojalnost.",
    features: [
      "Brendirani portal",
      "Prikupljanje podataka",
      "Marketing automatizacija",
      "Real-time analitika",
    ],
    primaryButtonText: "Zatražite demo",
    secondaryButtonText: "Kontaktirajte nas",
    secondaryButtonHref: "/contact",
    customVisual: <DeviceMockup iframeUrl="https://hs.sarayasolutions.com/" />,
    glowColor1: "bg-primary-500/15",
    glowColor2: "bg-accent-green/20",
  },
};

export const SarayaConnect: Story = {
  args: {
    logoSrc: "/images/logos/saraya connect.png",
    logoAlt: "Saraya Connect",
    subtitle: "Besplatni Wi-Fi sa oglašavanjem",
    description: "Ponudite gostima besplatan Wi-Fi dok oglašavate svoj biznis ili zarađujete od oglasa drugih kompanija.",
    features: [
      "Besplatan Wi-Fi",
      "Oglašavanje",
      "Captive portal",
      "Analitika",
    ],
    primaryButtonText: "Zatražite ponudu",
    secondaryButtonText: "Saznajte više",
    iframeSrc: "https://connect.sarayasolutions.com/",
    glowColor1: "bg-accent-green/15",
    glowColor2: "bg-primary-500/20",
  },
};

export const SarayaDisplay: Story = {
  args: {
    logoSrc: "/images/logos/saraya display.png",
    logoAlt: "Saraya Display",
    subtitle: "Interaktivni digitalni displej",
    description: "Moderan način komunikacije sa vašim gostima kroz interaktivne ekrane sa AI avatarima.",
    features: [
      "AI Avatar asistenti",
      "Interaktivni sadržaj",
      "Oglašavanje",
      "Real-time ažuriranje",
    ],
    primaryButtonText: "Zatražite demo",
    secondaryButtonText: "Kontaktirajte nas",
    secondaryButtonHref: "/contact",
    iframeSrc: "https://display.sarayasolutions.com/",
    glowColor1: "bg-cyan-500/15",
    glowColor2: "bg-primary-500/20",
  },
};
