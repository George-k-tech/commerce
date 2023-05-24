export default {
    name: 'banners',
    title: 'Banners',
    type: 'document',
    fields: [
        {
            name: 'productName',
            title: 'Product Name',
            type: 'string',
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        },
        {
            name: 'productDesc',
            title: 'Product Description',
            type: 'string',
        },
        {
            name: 'productDiscount',
            title: 'Product Discount',
            type: 'string',
        },
        {
            name: 'saleTime',
            title: 'SaleTime',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
  };