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
                image: '/images/about/kingdom-come-2.jpg',
            },
            {
                title: 'Stardew Valley',
                tilt: 7,
                stats: [
                    '231.5 hours',
                    '1 playthrough',
                    'Unfinished',
                ],
                image: '/images/about/stardew-valley.jpg',
            },
            {
                title: 'Factorio',
                tilt: -15,
                stats: [
                    '98 hours',
                    '5 playthrough',
                    'Unfinished',
                ],
                image: '/images/about/factorio.jpg',
            },
            {
                title: 'Valheim',
                tilt: 16,
                stats: [
                    '88.4 hours',
                    '1 playthrough',
                    'Unfinished',
                ],
                image: '/images/about/valheim.png',
            },
            {
                title: 'Red Dead\nRedemption 2',
                tilt: -4,
                image: '/images/about/red-dead-2.jpg',
                stats: [
                    '60.8 hours',
                    '1 playthrough',
                    'Completed',
                ]
            },
            {
                title: 'Elden Ring',
                tilt: 5,
                image: '/images/about/elden-ring.jpg',
                stats: [
                    '84.6 hours',
                    '1 playthrough',
                    'Completed',
                ]
            },
            {
                title: 'Hollow Knight',
                tilt: -9,
                image: '/images/about/hollow-knight.jpg',
                stats: [
                    '34.2 hours',
                    '1 playthrough',
                    'Unfinished',
                ]
            },
            {
                title: 'Hollow Knight Silksong',
                tilt: 9,
                image: '/images/about/hollow-knight-silksong.jpg',
                stats: [
                    '57.3 hours',
                    '1 playthrough',
                    'Unfinished',
                ]
            },
            {
                title: 'Project Zomboid',
                tilt: -3,
                image: '/images/about/project-zomboid.jpg',
                stats: [
                    '537.4 hours',
                    '1 playthrough',
                    'This is how you died',
                ]
            },
            {
                title: 'Helldivers 2',
                tilt: 6,
                image: '/images/about/helldivers-2.jpg',
                stats: [
                    '507.6 hours',
                    '1 playthrough',
                    'Spreading managed democracy',
                ]
            },
        ],
    },
    {
        id: 'music',
        icon: 'headphones',
        label: 'Music',
        description: 'I have listened to over 1.2 million minutes of music on Spotify alone',
        cardSize: { w: 240, h: 240 },
        cards: [
            { title: 'Burial', tilt: 7 },
            { title: 'Boards of Canada', tilt: -9 },
            { title: 'Four Tet', tilt: 4 },
            { title: 'Grouper', tilt: -6 },
            { title: 'Four Tet', tilt: 4 },
            { title: 'Grouper', tilt: -6 },
        ],
    },
    {
        id: 'pixel-art',
        icon: 'gradient',
        label: 'Pixel Art',
        description: 'I spent about two weeks creating some pixel art everyday',
        cards: [
            { title: 'Landscapes', tilt: -6 },
            { title: 'Characters', tilt: 4 },
            { title: 'Icons', tilt: -2 },
        ],
    },
    {
        id: 'graphic-design',
        icon: 'design_services',
        label: 'Graphic Design',
        description: 'In my free time, I like to make posters and album covers for fun.',
        cards: [
            { title: 'Posters', tilt: 5 },
            { title: 'Branding', tilt: -7 },
            { title: 'Typography', tilt: 3 },
        ],
    },
    {
        id: 'photography',
        icon: 'photo_camera',
        label: 'Photography',
        description: 'Of the 50,000+ photos Ive taken, these are my favourite.',
        cards: [
            { title: 'Urban', tilt: -8 },
            { title: 'Nature', tilt: 5 },
            { title: 'Architecture', tilt: -3 },
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
        description: "These are some of my favourite foods.",
        cards: [
            { title: 'Pizzzzzzzaaaa', tilt: -4, },
            { title: 'Burger', tilt: 7 },
            { title: 'Poached Eggs', tilt: -9 },
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