/* eslint-disable prettier/prettier */
import type { CollectionConfig } from 'payload/types'
const Customers: CollectionConfig={
    slug:'customers',
    auth:true,
    admin: {
        useAsTitle: 'email',
    },
    fields:  [
        {
        name: "full_name",
        type: "text",
        label:"Full Name",
        required:true,
    },
{
      name: "birthname",
      type: 'date',
      label:"Birtday",
      required: true,
    },

  ],
}
export default Customers
