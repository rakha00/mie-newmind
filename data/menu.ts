export const MENU_ITEMS = [
    {
        id: 'mie-iblis',
        name: 'Mie Iblis',
        description: 'Mie goreng pedas manis dengan taburan ayam cincang dan pangsit goreng.',
        price: 10000,
        category: 'makanan',
        image: '/images/placeholder.svg',
        isBestSeller: true,
        spiciness: true, // Has level 0-8
    },
    {
        id: 'mie-setan',
        name: 'Mie Setan',
        description: 'Mie goreng pedas asin gurih dengan topping ayam dan pangsit.',
        price: 10000,
        category: 'makanan',
        image: '/images/placeholder.svg',
        isBestSeller: true,
        spiciness: true,
    },
    {
        id: 'es-genderuwo',
        name: 'Es Genderuwo',
        description: 'Es segar dengan sirup frambozen, susu, dan aneka jelly seram tapi enak.',
        price: 8000,
        category: 'minuman',
        image: '/images/placeholder.svg',
        isBestSeller: true,
    }
];

export const CATEGORIES = [
    { id: 'makanan', label: 'Makanan' },
    { id: 'dimsum', label: 'Dimsum' },
    { id: 'minuman', label: 'Minuman' },
];
