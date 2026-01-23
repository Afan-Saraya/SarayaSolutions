import { Block } from 'payload/types';

export const ServicesBlock: Block = {
  slug: 'services',
  labels: {
    singular: 'Services Section',
    plural: 'Services Sections',
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
      name: 'services',
      type: 'array',
      label: 'Services',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Smartphone', value: 'smartphone' },
            { label: 'Gamepad', value: 'gamepad' },
            { label: 'Code', value: 'code' },
            { label: 'Printer', value: 'printer' },
            { label: 'Palette', value: 'palette' },
            { label: 'Megaphone', value: 'megaphone' },
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
            { label: 'Orange', value: 'orange' },
            { label: 'Blue', value: 'blue' },
          ],
          defaultValue: 'purple',
        },
      ],
    },
  ],
};
