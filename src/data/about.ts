// src/data/about.ts
// Edit this file to add/remove tags and cards without touching any component code.

export interface Card {
    /** Text displayed on hover. Use \n for line breaks. */
    title: string;
    /** Rotation in degrees — positive tilts right, negative tilts left. */
    tilt: number;
    /** Optional: path to an image in /public, e.g. "/images/about/elden-ring.jpg" */
    image?: string;

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
            { title: 'Kingdom Come\nDeliverance II', tilt: -14 },
            { title: 'Red Dead\nRedemption 2', tilt: 6 },
            { title: 'Elden Ring', tilt: -5 },
            { title: 'Hollow Knight', tilt: 9 },
            { title: 'Disco Elysium', tilt: -3 },
        ],
    },
    {
        id: 'music',
        icon: 'headphones',
        label: 'Music',
        description: 'What I keep coming back to.',
        cardSize: { w: 240, h: 240 },
        cards: [
            { title: 'Burial', tilt: 7 },
            { title: 'Boards of Canada', tilt: -9 },
            { title: 'Four Tet', tilt: 4 },
            { title: 'Grouper', tilt: -6 },
        ],
    },
    {
        id: 'pixel-art',
        icon: 'gradient',
        label: 'Pixel Art',
        description: 'Pixels, one at a time.',
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
        description: 'Making things look good.',
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
        description: 'Shots I keep coming back to.',
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
    //     description: "Films I'd watch again tomorrow.",
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
        description: "Things I'd eat every single day.",
        cards: [
            { title: 'Pizzzzzzzaaaa', tilt: -4 },
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