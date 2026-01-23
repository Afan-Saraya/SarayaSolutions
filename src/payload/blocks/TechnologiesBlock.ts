import { Block } from 'payload/types';

export const TechnologiesBlock: Block = {
  slug: 'technologies',
  labels: {
    singular: 'Technologies Section',
    plural: 'Technologies Sections',
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
      name: 'technologies',
      type: 'array',
      label: 'Technologies',
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Wifi', value: 'wifi' },
            { label: 'Smartphone', value: 'smartphone' },
            { label: 'Monitor', value: 'monitor' },
            { label: 'Cloud', value: 'cloud' },
            { label: 'Database', value: 'database' },
            { label: 'Server', value: 'server' },
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
