import type { Meta, StoryObj } from "@storybook/react";
import TestimonialsSection from "./TestimonialsSection";

const meta: Meta<typeof TestimonialsSection> = {
  title: "Pages/WebSolutions/Testimonials/Overview",
  component: TestimonialsSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TestimonialsSection>;

export default meta;
type Story = StoryObj<typeof TestimonialsSection>;

export const Bosnian: Story = {
  args: {
    title: "Šta kažu",
    titleGradient: "klijenti",
    testimonials: [
      {
        quote: "Saraya tim je isporučio web stranicu koja je premašila sva naša očekivanja. Profesionalni, brzi i kreativni.",
        author: "Amir H.",
        company: "Pametno Odabrano",
        rating: 5,
      },
      {
        quote: "Naša nova web aplikacija je transformirala način na koji radimo. Preporučujem svima!",
        author: "Selma K.",
        company: "BH Telecom",
        rating: 5,
      },
    ],
  },
};

export const English: Story = {
  args: {
    title: "What our",
    titleGradient: "clients say",
    testimonials: [
      {
        quote: "Saraya team delivered a website that exceeded all our expectations. Professional, fast and creative.",
        author: "Amir H.",
        company: "Pametno Odabrano",
        rating: 5,
      },
      {
        quote: "Our new web application has transformed the way we work. I recommend it to everyone!",
        author: "Selma K.",
        company: "BH Telecom",
        rating: 5,
      },
    ],
  },
};
