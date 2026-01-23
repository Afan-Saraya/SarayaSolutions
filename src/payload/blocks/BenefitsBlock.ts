import { Block } from 'payload/types';

export const BenefitsBlock: Block = {
  slug: 'benefits',
  labels: {
    singular: 'Benefits Section',
    plural: 'Benefits Sections',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      required: true,
    },
    {
      name: 'titleHighlight',
      type: 'text',
      label: 'Title Highlight (Gradient)',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefits',
      minRows: 1,
      maxRows: 8,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Zap', value: 'zap' },
            { label: 'Shield', value: 'shield' },
            { label: 'Users', value: 'users' },
            { label: 'TrendingUp', value: 'trending-up' },
            { label: 'Target', value: 'target' },
            { label: 'BarChart', value: 'bar-chart' },
            { label: 'Globe', value: 'globe' },
            { label: 'Lock', value: 'lock' },
          ],
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
};
