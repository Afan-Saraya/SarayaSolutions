import type { Meta, StoryObj } from "@storybook/react";
import TestimonialsCards from "./TestimonialsCards";

const meta: Meta<typeof TestimonialsCards> = {
  title: "Pages/WebSolutions/Testimonials/Cards",
  component: TestimonialsCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TestimonialsCards>;

export default meta;
type Story = StoryObj<typeof TestimonialsCards>;

export const Bosnian: Story = {
  args: {
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
