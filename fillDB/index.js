import { connectToMongo } from "@/server/connectToMongo";

const { createCustomerService } = require("@/server/BL/services/customer.service");
const { createOrderService } = require("@/server/BL/services/order.service");
const { createProductService } = require("@/server/BL/services/product.service");


const carpetsJson = [
    {
        name: 'Faux Fur Area Rug',
        slug: 'faux-fur-area-rug',
        size: "3' x 5'",
        color: 'White',
        price: 70,
        discount: 0,
        inStock: 35,
        category: "carpet",
        description: 'Soft and plush faux fur area rug',
        images: ["https://www.carpetim.co.il/wp-content/uploads/2020/03/%D7%91%D7%9E%D7%91%D7%95-2153-300x300.jpg.webp",
            'https://www.carpetim.co.il/wp-content/uploads/2020/03/%D7%93%D7%92%D7%9D-%D7%A1%D7%A0%D7%98%D7%99%D7%99%D7%92%D7%95-300x300.jpg.webp',
            'https://www.carpetim.co.il/wp-content/uploads/2020/03/WhatsApp-Image-2023-04-30-at-22.08.41-300x300.jpeg.webp'
        ],
        __v: 0
    },
    {
        name: 'Vintage Oriental Carpet',
        slug: 'vintage-oriental-carpet',
        size: "8' x 10'",
        color: 'Blue',
        price: 280,
        discount: 0,
        inStock: 35,
        category: "carpet",

        description: 'Elegant vintage oriental carpet with intricate patterns',
        images: ['https://www.carpetim.co.il/wp-content/uploads/2020/02/%D7%90%D7%95%D7%98%D7%A0%D7%98%D7%99%D7%A7-1911-300x300.jpg.webp',
            'https://www.carpetim.co.il/wp-content/uploads/2020/01/%D7%90%D7%95%D7%98%D7%A0%D7%98%D7%99%D7%A7-1911-150x150.jpg.webp',
            'https://www.carpetim.co.il/wp-content/uploads/2020/02/1911_optimized-600x600.jpg.webp'],
        __v: 0
    },
    {
        name: 'Soft Shaggy Rug',
        slug: 'soft-shaggy-rug',
        size: "5' x 7'",
        color: 'Black',
        price: 120,
        discount: 0,
        inStock: 35,
        category: "carpet",

        description: 'Luxurious shaggy rug for a cozy feel',
        images: ['https://www.carpetim.co.il/wp-content/uploads/2021/02/2210-300x300.jpg',
            'https://www.carpetim.co.il/wp-content/uploads/2021/02/WhatsApp-Image-2022-07-14-at-15.59.18-1-300x300.jpeg.webp',
            'https://www.carpetim.co.il/wp-content/uploads/2021/02/WhatsApp-Image-2022-09-18-at-13.53.48-Copy-300x300.jpeg.webp'
        ],
        __v: 0
    },
    {
        name: 'Moroccan Diamond Rug',
        slug: 'moroccan-diamond-rug',
        size: "5' x 8'",
        color: 'Ping&LightBlue',
        price: 110,
        discount: 0,
        inStock: 35,
        category: "carpet",

        description: 'Moroccan-inspired diamond pattern rug',
        images: ['https://www.carpetim.co.il/wp-content/uploads/2020/02/%D7%90%D7%95%D7%98%D7%A0%D7%98%D7%99%D7%A7-990-300x300.jpg.webp',
            'https://www.carpetim.co.il/wp-content/uploads/2020/02/92579631_10157318439648727_5132630281160753152_o-300x300.jpg.webp',
            'https://www.carpetim.co.il/wp-content/uploads/2020/02/whatsapp-image-2022-06-13-at-10_optimized.29.59-300x300.jpeg.webp'
        ],
        __v: 0
    },
    {
        name: 'Modern Geometric Rug',
        slug: 'modern-geometric-rug',
        size: "6' x 9'",
        color: 'Gray&Beige',
        price: 150,
        discount: 0,
        inStock: 35,
        category: "carpet",

        description: 'Contemporary geometric rug for a stylish look',
        images:
            ['https://www.carpetim.co.il/wp-content/uploads/2020/03/%D7%A4%D7%99%D7%A8%D7%99%D7%9C%D7%98%D7%99-2025-300x300.jpg.webp',
                'https://www.carpetim.co.il/wp-content/uploads/2020/03/whatsapp-image-2023-06-15-at-10_optimized.59.35-300x300.jpeg.webp',
                'https://www.carpetim.co.il/wp-content/uploads/2020/03/whatsapp-image-2023-06-15-at-10_optimized.59.35-300x300.jpeg.webp'
            ],
        __v: 0
    },
    {
        name: 'Striped Flatweave Rug',
        slug: 'striped-flatweave-rug',
        size: "9' x 12'",
        color: 'Fire',
        price: 200,
        discount: 0,
        inStock: 35,
        category: "carpet",

        description: 'Classic striped flatweave rug for a timeless look',
        images: ['https://www.carpetim.co.il/wp-content/uploads/2020/02/%D7%90%D7%95%D7%98%D7%A0%D7%98%D7%99%D7%A7-1922-300x300.jpg.webp',
            'https://www.carpetim.co.il/wp-content/uploads/2020/02/%D7%A1%D7%95%D7%9C-1-300x300.jpeg.webp',
            'https://www.carpetim.co.il/wp-content/uploads/2020/02/%D7%A1%D7%95%D7%9C-2-300x300.jpeg.webp'
        ],
        __v: 0
    },
    {
        name: 'Bohemian Tassel Rug',
        slug: 'bohemian-tassel-rug',
        size: "4' x 6'",
        color: 'Multi-color',
        price: 90,
        discount: 0,
        inStock: 35,
        category: "carpet",

        description: 'Bohemian style rug with tassel details',
        images: ['https://www.carpetim.co.il/wp-content/uploads/2022/07/2-1858-2-300x300.jpg',
            'https://www.carpetim.co.il/wp-content/uploads/2022/07/%D7%A8%D7%99%D7%A3-1-600x600.jpeg.webp',
            'https://www.carpetim.co.il/wp-content/uploads/2022/07/%D7%A8%D7%99%D7%A3-2-600x600.jpeg.webp'
        ],
        __v: 0
    },

]

const customersJson = [
    {
        name: 'דוד לוי',
        email: 'david.levi2@example.com',
        phone: '0543215678',
        address: {
            street: 'הרצל',
            houseNumber: 23,
            city: 'תל אביב',
            state: 'המרכז',
            zipCode: '6789012'
        },

    },
    {
        name: 'רחל כהן',
        email: 'rachel.cohen2@example.com',
        phone: '0546789012',
        address: {
            street: 'יהודה הלוי',
            houseNumber: 45,
            city: 'ירושלים',
            state: 'ירושלים',
            zipCode: '9876543'
        },

    },
    {
        name: 'יוסף משה',
        email: 'yosef.moshe2@example.com',
        phone: '0523456789',
        address: {
            street: 'הגפן',
            houseNumber: 67,
            city: 'חיפה',
            state: 'צפון',
            zipCode: '3456789'
        },

    },
    {
        name: 'מרים אברהם',
        email: 'miriam.avraham2@example.com',
        phone: '0598765432',
        address: {
            street: 'התמר',
            houseNumber: 89,
            city: 'באר שבע',
            state: 'דרום',
            zipCode: '8765432'
        },

    },
    {
        name: 'יעקב שלמה',
        email: 'yaakov.shlomo2@example.com',
        phone: '0524681357',
        address: {
            street: 'הזית',
            houseNumber: 12,
            city: 'נתניה',
            state: 'שרון',
            zipCode: '4287659'
        },

    },
    {
        name: 'שרה אסתר',
        email: 'sarah.esther2@example.com',
        phone: '0533217654',
        address: {
            street: 'הרימון',
            houseNumber: 34,
            city: 'עפולה',
            state: 'צפון',
            zipCode: '1835729'
        },

    },
    {
        name: 'יצחק רבקה',
        email: 'yitzchak.rivka2@example.com',
        phone: '0547829135',
        address: {
            street: 'האלון',
            houseNumber: 56,
            city: 'רחובות',
            state: 'שפלה',
            zipCode: '7546312'
        },

    },
    {
        name: 'בנימין לאה',
        email: 'binyamin.leah2@example.com',
        phone: '0594627138',
        address: {
            street: 'הרקפת',
            houseNumber: 78,
            city: 'רמת גן',
            state: 'מרכז',
            zipCode: '5237418'
        },

    },
    {
        name: 'אהרן שרה',
        email: 'aharon.sarah2@example.com',
        phone: '0528319576',
        address: {
            street: 'הדקל',
            houseNumber: 90,
            city: 'הרצליה',
            state: 'המרכז',
            zipCode: '4629517'
        },

    },
    {
        name: 'משה רחל',
        email: 'moshe.rachel2@example.com',
        phone: '0546281359',
        address: {
            street: 'התפוז',
            houseNumber: 24,
            city: 'חולון',
            state: 'המרכז',
            zipCode: '5813742'
        },

    }
];

const orders = [{
    customerId: "6671f2f563ab2d6a3521aab7",
    products: [{
        productId: "6671f2b463ab2d6a3521aa98",
        quantity: 2
    },
    {
        productId: "6671f2b463ab2d6a3521aa9a",
        quantity: 3
    },
    {
        productId: "6671f2b463ab2d6a3521aa99",
        quantity: 1
    }
    ],
    total: 9999,
    shippingAddress: {
        street: "afesfsdfsd",
        houseNumber: 1,
        city: "aefeafsd",
        state: "fasdfsdfsdf",
        zipCode: 4444,
    },
    Notes: "live it next door",
},
]

export const fillDataBase = async () => {
    await connectToMongo()
    console.log("👍👍👍👍👍👍👍👍👍👍");
    await createProductService(carpetsJson.map((h, i) => ({ ...h })))
    await createCustomerService(customersJson.map((c, i) => ({ ...c })))
    // await createOrderService(orders.map((c, i) => ({ ...c })))
    await createOrderService(orders[0])
}
