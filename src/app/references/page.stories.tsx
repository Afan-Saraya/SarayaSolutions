import type { Meta, StoryObj } from '@storybook/react';
import ReferencesPage from './page';

const meta = {
  title: 'Pages/References',
  component: ReferencesPage,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReferencesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'References Page',
};

export const BosnianLanguage: Story = {
  name: 'Bosnian Language',
  parameters: {
    docs: {
      description: {
        story: 'References page displayed in Bosnian language with all project showcases.',
      },
    },
  },
};

export const EnglishLanguage: Story = {
  name: 'English Language',
  parameters: {
    docs: {
      description: {
        story: 'References page displayed in English language with all project showcases.',
      },
    },
  },
};
