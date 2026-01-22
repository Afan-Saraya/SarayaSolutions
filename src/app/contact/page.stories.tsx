import type { Meta, StoryObj } from '@storybook/react';
import ContactPage from './page';

const meta = {
  title: 'Pages/Contact',
  component: ContactPage,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Contact Page',
};

export const BosnianLanguage: Story = {
  name: 'Bosnian Language',
  parameters: {
    docs: {
      description: {
        story: 'Contact page displayed in Bosnian language with contact form, info cards, and map.',
      },
    },
  },
};

export const EnglishLanguage: Story = {
  name: 'English Language',
  parameters: {
    docs: {
      description: {
        story: 'Contact page displayed in English language with contact form, info cards, and map.',
      },
    },
  },
};
