import type { Block } from 'payload'

export const VintageImage: Block = {
  slug: 'vintageImage',
  interfaceName: 'VintageImage',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'rotate',
      type: 'number',
      required: false,
      min: -10,
      max: 10,
    },
    {
      name: 'isolated',
      type: 'number',
      required: false,
      min: -10,
      max: 10,
    },
    {
      name: 'imageNote',
      type: 'text',
      required: false
    }

  ],
}
