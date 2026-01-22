import type { Meta, StoryObj } from '@storybook/react';
import ContactMap from './ContactMap';

const meta = {
  title: 'Sections/Contact/Map',
  component: ContactMap,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Contact Map',
};
