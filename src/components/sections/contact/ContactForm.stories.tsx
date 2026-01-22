import type { Meta, StoryObj } from '@storybook/react';
import ContactForm from './ContactForm';

const meta = {
  title: 'Sections/Contact/Form',
  component: ContactForm,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Contact Form',
};
