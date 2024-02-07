/* eslint-disable prettier/prettier */
import type { CollectionConfig } from 'payload/types'
export const Denememedias:CollectionConfig= {
    slug: 'denememedias',
    labels: {
        singular: 'Denememedia',
        plural: 'Denememedia',
    },
    access: {
        read: () =>true,
    },
    upload: true ,

    fields: [
        {
            name: 'alt',
            label: 'Alt',
            type: 'text',
            required: true,
    },
    ],
}
