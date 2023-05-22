export default {
    name: 'products',
    title: 'Products',
    type:'document',
    fields: [
    {
        name:'productName',
        title: 'Product Name',
        type:'string',
        validation:Rule => Rule.required()
    },
    {
        name:'slug',
        title:'Slug',
        type:'slug',
        options:{
            source:'productName',
            maxLength:90,
        },
        validation:Rule => Rule.required()
    },
    {
        name:'productPrice',
        title:'Product Price',
        type:'number',
    },
    {
        name:'productDesc',
        title:'Product Description',
        type:'string'

    },
    {
        name:'productImage',
        title:'Product Image',
        type:'image',
        options:{
            hotspot:true,
        }
    },
]
}