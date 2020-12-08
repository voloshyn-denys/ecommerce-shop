import bcrypt from "bcryptjs";

export const users = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('2468', 8),
        adminMode: true,
        cartProducts: []
    },
    {
        name: 'Denys Voloshyn',
        email: 'denys.voloshyn@gmail.com',
        password: bcrypt.hashSync('8642', 8),
        adminMode: false,
        cartProducts: []
    }
]
export const products = [
    {
        name: 'Shirts Nike 1',
        photos: [
            '/images/1-1.jpg',
            '/images/1-2.jpg'
        ],
        category: 'Shirts',
        brand: 'Nike',
        price: 100,
        quantity: 14,
        rating: {
            stars: 4,
            reviews: 18
        },
        description: 'some text'
    },
    {
        name: 'Shirts Nike 2',
        photos: [
            '/images/2-1.jpg', 
            '/images/2-2.jpg', 
            '/images/2-3.jpg'
        ],
        category: 'Shirts',
        brand: 'Nike',
        price: 110,
        quantity: 7,
        rating: {
            stars: 4.5,
            reviews: 198
        },
        description: 'some text'
    },
    {
        name: 'Shirts Nike 3',
        photos: [
            '/images/3-1.jpg', 
            '/images/3-2.jpg', 
            '/images/3-3.jpg'
        ],
        category: 'Shirts',
        brand: 'Nike',
        price: 120,
        quantity: 1,
        rating: {
            stars: 5,
            reviews: 47
        },
        description: 'some text'
    },
    {
        name: 'Shirts Nike 4',
        photos: [
            '/images/4-1.jpg', 
            '/images/4-2.jpg', 
            '/images/4-3.jpg'
        ],
        category: 'Shirts',
        brand: 'Nike',
        price: 40,
        quantity: 3,
        rating: {
            stars: 5,
            reviews: 1
        },
        description: 'some text 4'
    }
];