import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'
import { LanguageProvider } from '../src/lib/i18n/LanguageContext'
import React from 'react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a0a0f' },
        { name: 'light', value: '#ffffff' },
      ],
    },
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
    layout: 'fullscreen',
    a11y: {
      test: 'todo'
    }
  },
  decorators: [
    (Story) => (
      <LanguageProvider>
        <div style={{ backgroundColor: '#0a0a0f', minHeight: '100vh' }}>
          <Story />
        </div>
      </LanguageProvider>
    ),
  ],
};

export default preview;
