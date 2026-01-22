import type { Meta, StoryObj } from '@storybook/react';
import ContactInfoCards from './ContactInfoCards';

const meta = {
  title: 'Sections/Contact/InfoCards',
  component: ContactInfoCards,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactInfoCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Contact Info Cards',
};
