import type { Meta, StoryObj } from '@storybook/react';
import ContactInfoCards from './ContactInfoCards';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

// Wrapper component for overview
const ContactOverview = () => (
  <div className="bg-background py-12">
    <div className="container mx-auto px-4 space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Info Cards</h2>
        <ContactInfoCards />
      </div>
      
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-white mb-6">Contact Form</h2>
          <ContactForm />
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-6">Map</h2>
          <ContactMap />
        </div>
      </div>
    </div>
  </div>
);

const meta = {
  title: 'Sections/Contact/Overview',
  component: ContactOverview,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllComponents: Story = {
  name: 'All Contact Components',
};

export const InfoCardsOnly: Story = {
  name: 'Info Cards Only',
  render: () => (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4">
        <ContactInfoCards />
      </div>
    </div>
  ),
};

export const FormAndMap: Story = {
  name: 'Form and Map Layout',
  render: () => (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  ),
};
