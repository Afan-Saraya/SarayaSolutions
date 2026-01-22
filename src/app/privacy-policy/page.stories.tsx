import type { Meta, StoryObj } from '@storybook/react';
import PrivacyPolicyPage from './page';

const meta = {
  title: 'Pages/PrivacyPolicy',
  component: PrivacyPolicyPage,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PrivacyPolicyPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Privacy Policy Page',
};

export const BosnianLanguage: Story = {
  name: 'Bosnian Language',
  parameters: {
    docs: {
      description: {
        story: 'Privacy policy page displayed in Bosnian language with all legal sections.',
      },
    },
  },
};

export const EnglishLanguage: Story = {
  name: 'English Language',
  parameters: {
    docs: {
      description: {
        story: 'Privacy policy page displayed in English language with all legal sections.',
      },
    },
  },
};
