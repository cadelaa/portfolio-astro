// src/data/about.ts
// Edit this file to add/remove tags and cards without touching any component code.

// about.ts
export interface Card {
    title: string;
    tilt: number;
    image?: string;
    stats?: string[];
}

export interface Tag {
    id: string;
    /** Material Symbols icon name. Leave empty string for no icon. */
    icon: string;
    label: string;
    /** Short sentence shown in the center box when this tag is active. */
    description: string;
    cardSize?: { w: number; h: number };
    cards: Card[];
}

export const tags: Tag[] = [
    {
        id: 'music',
        icon: 'headphones',
        label: 'Music',
        description: 'I have listened to over 1.2 million minutes of music on Spotify alone',
        cardSize: { w: 240, h: 240 },
        cards: [
            { title: "Eden - isohel", tilt: 7, image: "/images/about/music/isohel.jpg", stats: ['Favourite song', 'Aa'] },
            { title: "The Stranglers - Golden Brown", tilt: -9, image: "/images/about/music/golden-brown.jpg", stats: ['Aa', 'Aa'] },
            { title: "Françoise Hardy - Le temps de l'amour", tilt: 4, image: "/images/about/music/le-temps-de-l'amour.jpg", stats: ['Aa', 'Aa'] },
            { title: "Tame Impala - Let it happen", tilt: -6, image: "/images/about/music/let-it-happen.jpg", stats: ['Aa', 'Aa'] },
            { title: "Arctic Monkeys - No. 1 Party Anthem", tilt: 4, image: "/images/about/music/no1-party-anthem.jpg", stats: ['Aa', 'Aa'] },
            { title: "Mr.Kitty - After Dark", tilt: -6, image: "/images/about/music/after-dark.jpg", stats: ['Aa', 'Aa'] },
            { title: "Ghost - Mary On A Cross", tilt: -6, image: "/images/about/music/mary-on-a-cross.jpg", stats: ['Aa', 'Aa'] },
            { title: "yung kai - blue", tilt: -6, image: "/images/about/music/blue.jpg", stats: ['Aa', 'Aa'] },
            { title: "Iliona - Si tu m'aimes demain", tilt: 4, image: "/images/about/music/si-tu-m\'aimes-demain.jpg", stats: ['Aa', 'Aa'] },
            { title: "VIDEOCLUB - Amour plastique", tilt: -6, image: "/images/about/music/amour-plastique.jpg", stats: ['Aa', 'Aa'] },
            { title: "Molchat Doma - Судно (Борис Рыжий)", tilt: -6, image: "/images/about/music/Судно-(Борис-Рыжий).jpg", stats: ['Aa', 'Aa'] },
        ],
    },
    {
        id: 'games',
        icon: 'stadia_controller',
        label: 'Games',
        description: 'My favourite Games, so far.',
        cards: [
            {
                title: 'Kingdom Come\nDeliverance II',
                tilt: -14,
                stats: [
                    '294.7 hours',
                    '3 playthrough',
                    'Completed',
                ],
                image: '/images/about/games/kingdom-come-2.jpg',
            },
            {
                title: 'Stardew Valley',
                tilt: 7,
                stats: [
                    '231.5 hours',
                    '1 playthrough',
                    'Unfinished',
                ],
                image: '/images/about/games/stardew-valley.jpg',
            },
            {
                title: 'Factorio',
                tilt: -15,
                stats: [
                    '98 hours',
                    '5 playthroughs',
                    'Unfinished',
                ],
                image: '/images/about/games/factorio.jpg',
            },
            {
                title: 'Valheim',
                tilt: 16,
                stats: [
                    '88.4 hours',
                    '1 playthrough',
                    'Unfinished',
                ],
                image: '/images/about/games/valheim.png',
            },
            {
                title: 'Red Dead\nRedemption 2',
                tilt: -4,
                image: '/images/about/games/red-dead-2.jpg',
                stats: [
                    '60.8 hours',
                    '1 playthrough',
                    'Completed',
                ]
            },
            {
                title: 'Elden Ring',
                tilt: 5,
                image: '/images/about/games/elden-ring.jpg',
                stats: [
                    '84.6 hours',
                    '1 playthrough',
                    'Completed',
                ]
            },
            {
                title: 'Hollow Knight',
                tilt: -9,
                image: '/images/about/games/hollow-knight.jpg',
                stats: [
                    '34.2 hours',
                    '1 playthrough',
                    'Unfinished',
                ]
            },
            {
                title: 'Hollow Knight Silksong',
                tilt: 9,
                image: '/images/about/games/hollow-knight-silksong.jpg',
                stats: [
                    '57.3 hours',
                    '1 playthrough',
                    'Unfinished',
                ]
            },
            {
                title: 'Project Zomboid',
                tilt: -3,
                image: '/images/about/games/project-zomboid.jpg',
                stats: [
                    '537.4 hours',
                    'This is how you died',
                ]
            },
            {
                title: 'Helldivers 2',
                tilt: 6,
                image: '/images/about/games/helldivers-2.jpg',
                stats: [
                    '507.6 hours',
                    'Spreading managed democracy',
                ]
            },
        ],
    },
    {
        id: 'pixel-art',
        icon: 'gradient',
        label: 'Pixel Art',
        description: 'I spent about two weeks creating some pixel art everyday',
        cards: [
            { title: 'Mitchell Zeller', tilt: -6, image: '/images/about/pixel-art/mitchell-zeller.png' },
            { title: 'First Sword', tilt: 4, image: '/images/about/pixel-art/first-sword.png' },
            { title: 'Zombie Guy', tilt: -2, image: '/images/about/pixel-art/zombie-guy.png' },
            { title: 'Tree', tilt: 4, image: '/images/about/pixel-art/tree.png' },
            { title: 'Second Sword', tilt: -2, image: '/images/about/pixel-art/second-sword.png' },
            { title: 'food', tilt: -2, image: '/images/about/pixel-art/food.png' },
            { title: 'Slime', tilt: -2, image: '/images/about/pixel-art/slime.png' },
        ],
    },
    {
        id: 'graphic-design',
        icon: 'design_services',
        label: 'Graphic Design',
        description: 'In my free time, I like to make posters and album covers for fun.',
        cards: [
            { title: 'Oscar Piastri Race Winner #1', tilt: 5, image: '/images/about/graphic-design/oscar-piastri.png' },
            { title: 'Charles Leclerc Race Winner #1', tilt: -7, image: '/images/about/graphic-design/charles-leclerc.png' },
            { title: 'Charles Leclerc Race Winner #2', tilt: 3, image: '/images/about/graphic-design/charles-leclerc-2.png' },
            { title: 'Oscar Piastri Race Winner #2', tilt: -7, image: '/images/about/graphic-design/oscar-piastri-2.png' },
            { title: 'Oscar Piastri Race Winner #3', tilt: 3, image: '/images/about/graphic-design/oscar-piastri-3.png' },
        ],
    },
    {
        id: 'photography',
        icon: 'photo_camera',
        label: 'Photography',
        description: 'Of the 50,000+ photos Ive taken, heres a few cool ones.',
        cards: [
            { title: 'Clouds I', tilt: -8, image: '/images/about/photography/clouds-I.jpg', stats: ['f/1.4', '1/1600', 'ISO-100', '85mm'] },
            { title: 'Melbourne Streets 1', tilt: 5, image: '/images/about/photography/melbourne-streets-1.jpg', stats: ['f/1.4', '1/2000', 'ISO-100', '85mm'] },
            { title: 'Melbourne Streets 2', tilt: 3, image: '/images/about/photography/melbourne-streets-2.jpg', stats: ['f/1.4', '1/1000', 'ISO-100', '85mm'] },
            { title: 'Melbourne Streets 3', tilt: -13, image: '/images/about/photography/melbourne-streets-3.jpg', stats: ['f/1.4', '1/1600', 'ISO-80', '85mm'] },
            { title: 'Melbourne Streets 4', tilt: -7, image: '/images/about/photography/melbourne-streets-4.jpg', stats: ['f/1.4', '1/4000', 'ISO-100', '85mm'] },
            { title: 'Melbourne', tilt: 15, image: '/images/about/photography/melbourne.jpg', stats: ['f/1.4', '1/250', 'ISO-100', '85mm'] },
            // { title: 'Brisbane', tilt: -6 },
            // { title: 'Brisbane Streets 1', tilt: -9 },
            // { title: 'Brisbane Streets 2', tilt: -9 },
            { title: 'Kangaroo', tilt: -9, image: '/images/about/photography/kangaroo.jpg', stats: ['f/1.4', '1/6400', 'ISO-100', '85mm'] },
            { title: 'Clouds II', tilt: -9, image: '/images/about/photography/clouds-II.jpg', stats: ['f/2.8', '1/8000', 'ISO-100', '200mm'] },
        ],
    },
    // {
    //     id: 'movies',
    //     icon: 'movie',
    //     label: 'Movies',
    //     description: "My favourite movies, and TV shows, so far.",
    //     cards: [
    //         { title: 'Stalker', tilt: -7 },
    //         { title: 'Mulholland Drive', tilt: 5 },
    //         { title: 'There Will Be Blood', tilt: -3 },
    //         { title: 'The Lighthouse', tilt: 8 },
    //     ],
    // },
    {
        id: 'food',
        icon: 'fastfood',
        label: 'Fooood',
        description: "The sustenance keeping me alive.",
        cards: [
            {
                title: 'Burger',
                tilt: 7,
                image: '/images/about/food/burger.jpg',
                stats: ['Brioche Bun', '2x Peppered Beef Patties', 'Lettuce', 'Bacon', '2x Slices of Cheese', 'Garlic Aioli']
            },
            {
                title: 'Poached Eggs',
                tilt: -9,
                image: '/images/about/food/poached-eggs.jpg',
                stats: ['Wholegrain toast', '4 Eggs', 'Spinach', 'Pepper', 'Bacon', 'Hollandaise Sauce']
            },
            {
                title: 'Teriyaki Beef Bowls',
                tilt: 5,
                image: '/images/about/food/teriyaki-beef-bowls.jpg',
                stats: ['Beef Mince', 'Teriyaki Sauce', 'Rice', 'Garlic', 'Sesame Seeds', 'Teriyaki Sauce', 'Grated Carrot / Zucchini']
            },
            {
                title: 'Cherry Smoothie',
                tilt: 14,
                image: '/images/about/food/cherry-smoothie.jpg',
                stats: ['Frozen Cherries', 'Milk', 'Honey', 'Greek Yogurt', 'Vanilla Protein Powder', 'Ice Cubes', 'Oats']
            },
            {
                title: 'Pizzzzzzzaaaa',
                tilt: -4,
                image: '/images/about/food/pizza.jpg',
                stats: ['Bread Dough Base', 'Mozzarella Cheese', 'Pepperoni', 'Beef Mince', 'Bacon', 'Spinach', 'BBQ Sauce', 'Garlic Aioli']
            },
        ],
    },
    // {
    //     id: 'health',
    //     icon: 'directions_run',
    //     label: 'Health',
    //     description: 'How I try to stay sane.',
    //     cards: [
    //         { title: 'Running', tilt: 6 },
    //         { title: 'Lifting', tilt: -5 },
    //         { title: 'Walking', tilt: 3 },
    //         { title: 'Sleep', tilt: -8 },
    //     ],
    // },
    // {
    //     id: 'other',
    //     icon: '',
    //     label: 'Other',
    //     description: "Everything else I'm into.",
    //     cards: [
    //         { title: 'Urbanism', tilt: 5 },
    //         { title: 'Notebooks', tilt: 3 },
    //     ],
    // },
];