import { Block } from 'payload/types';

export const ProductsBlock: Block = {
  slug: 'products',
  labels: {
    singular: 'Products Section',
    plural: 'Products Sections',
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
      name: 'products',
      type: 'array',
      label: 'Products',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Wifi', value: 'wifi' },
            { label: 'Monitor', value: 'monitor' },
            { label: 'Smartphone', value: 'smartphone' },
            { label: 'Radio', value: 'radio' },
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
        {
          name: 'link',
          type: 'text',
          label: 'Link URL',
          required: true,
        },
        {
          name: 'color',
          type: 'select',
          label: 'Color Theme',
          options: [
            { label: 'Purple', value: 'purple' },
            { label: 'Green', value: 'green' },
            { label: 'Cyan', value: 'cyan' },
            { label: 'Pink', value: 'pink' },
          ],
          defaultValue: 'purple',
        },
      ],
    },
  ],
};
