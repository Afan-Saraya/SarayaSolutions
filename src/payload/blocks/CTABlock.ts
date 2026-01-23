import { Block } from 'payload/types';

export const CTABlock: Block = {
  slug: 'cta',
  labels: {
    singular: 'CTA Section',
    plural: 'CTA Sections',
  },
  fields: [
    {
      name: 'icon',
      type: 'select',
      label: 'Icon',
      options: [
        { label: 'Sparkles', value: 'sparkles' },
        { label: 'Zap', value: 'zap' },
        { label: 'Rocket', value: 'rocket' },
        { label: 'Star', value: 'star' },
      ],
      defaultValue: 'sparkles',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title (First Part)',
      required: true,
    },
    {
      name: 'titleHighlight',
      type: 'text',
      label: 'Title Highlight (Gradient)',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'primaryButton',
      type: 'group',
      label: 'Primary Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'secondaryButton',
      type: 'group',
      label: 'Secondary Button',
      fields: [
        {
          name: 'text',
          type: 'text',
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
    },
  ],
};
