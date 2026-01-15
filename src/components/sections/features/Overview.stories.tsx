import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FeaturesHeader, { FeaturesHeaderProps } from "./FeaturesHeader";
import FeaturesProducts, { FeaturesProductsProps, ProductItem } from "./FeaturesProducts";
import FeaturesServices, { FeaturesServicesProps, ServiceItem } from "./FeaturesServices";

type FeaturesOverviewProps = FeaturesHeaderProps & FeaturesProductsProps & FeaturesServicesProps;

const FeaturesOverview = ({
  // Header props
  badge,
  title,
  description,
  // Products props
  products,
  learnMoreText,
  // Services props
  label,
  services,
}: FeaturesOverviewProps) => (
  <section className="py-16 md:py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background to-background-dark" />

    <div className="container mx-auto px-4 relative z-10">
      <FeaturesHeader
        badge={badge}
        title={title}
        description={description}
      />

      <FeaturesProducts
        products={products}
        learnMoreText={learnMoreText}
      />

      <FeaturesServices
        label={label}
        services={services}
      />
    </div>
  </section>
);

const meta: Meta<typeof FeaturesOverview> = {
  title: "Sections/Features/Overview",
  component: FeaturesOverview,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    // Header
    badge: { control: "text", table: { category: "Header" } },
    title: { control: "text", table: { category: "Header" } },
    description: { control: "text", table: { category: "Header" } },
    // Products
    products: { control: "object", table: { category: "Products" } },
    learnMoreText: { control: "text", table: { category: "Products" } },
    // Services
    label: { control: "text", table: { category: "Services" } },
    services: { control: "object", table: { category: "Services" } },
  },
};

export default meta;
type Story = StoryObj<typeof FeaturesOverview>;

const defaultProducts: ProductItem[] = [
  {
    title: "Saraya Display",
    description: "Interaktivni displeji s AI avatarima, 4K rezolucijom i naprednim funkcijama za marketing i komunikaciju.",
    icon: "monitor",
    color: "purple",
    href: "/products/display",
    features: ["AI Avatar", "4K Ultra HD", "Touch Screen", "Outdoor/Indoor"],
  },
  {
    title: "Saraya Connect",
    description: "Pametni Wi-Fi hotspot sustav s captive portalom, analitikom korisnika i marketing automatizacijom.",
    icon: "wifi",
    color: "green",
    href: "/products/saraya-connect",
    features: ["Besplatan Wi-Fi", "Captive Portal", "Analitika", "Marketing"],
  },
];

const defaultServices: ServiceItem[] = [
  { title: "Web rješenja", icon: "globe", href: "/services/web-solutions", color: "purple" },
  { title: "Aplikacije", icon: "bot", href: "/services/applications", color: "cyan" },
  { title: "Igre", icon: "gamepad", href: "/services/games", color: "pink" },
  { title: "Print", icon: "printer", href: "/services/print", color: "green" },
];

/** Kompletna Features (Proizvodi i usluge) sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Header
    badge: "Naša ponuda",
    title: 'Proizvodi i <span class="text-gradient">usluge</span>',
    description: "Kompletna tehnološka rješenja za vaše poslovanje - od hardvera do softvera",
    // Products
    products: defaultProducts,
    learnMoreText: "Saznajte više",
    // Services
    label: "Također nudimo",
    services: defaultServices,
  },
};
