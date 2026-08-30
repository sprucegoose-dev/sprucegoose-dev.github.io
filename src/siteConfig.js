import Homepage from './components/Homepage';
import ShortFiction from './components/ShortFiction';

export const ROUTES = [
    {
        path: '/',
        label: 'Homepage',
        page: Homepage,
        header: {
            title: 'Building useful things',
            emphasis: 'with a little mischief.',
            summary: 'Full-stack engineer, board game designer, creator of digital game adaptations, and fiction writer based in the UK.',
            actions: [
                { label: 'See selected work', href: '#projects' },
                { label: 'Start a conversation', href: '#contact' },
            ],
        },
    },
    {
        path: '/short-fiction',
        label: 'Short Fiction',
        page: ShortFiction,
        header: {
            title: 'Stories with a little',
            emphasis: 'magic in the margins.',
            summary: 'Short fiction, poetry, and odd little worlds.',
        },
    },
];

export const MENU_ITEMS = [
    { label: 'Homepage', target: '/' },
    { label: 'In A Nutshell', target: '#in-a-nutshell' },
    { label: 'Languages & Frameworks', target: '#languages-and-frameworks' },
    { label: 'Education', target: '#education' },
    { label: 'Recent Projects', target: '#projects' },
    { label: 'Employment History', target: '#employment' },
    { label: 'Contact', target: '#contact' },
    { label: 'Short Fiction', target: '/short-fiction' },
];
