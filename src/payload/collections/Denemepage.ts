/* eslint-disable prettier/prettier */
import type { CollectionConfig } from 'payload/types'


export const Denemepages: CollectionConfig={
    slug: 'denemepages',
    labels:{
        singular: 'Page',
        plural: 'Denemepages',
    },
    access: {
        read: () =>true,
    },
    fields:[
        {
            name:'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            label: 'Slug',
            type:'text',
            required: true,
        },
        {
            name:'layout',
            label:"Layout",
            type: 'blocks',
            blocks: [
             
                
            ],

        },
        
    ],
}
