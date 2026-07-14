import type { StaticImageData } from "next/image"
import todo from "@/assets/projects-image/Todo-banner.png"
import hmc from "@/assets/projects-image/IMS-banner.png"
import assembly from "@/assets/projects-image/assembly_endgame.png"
import commingSoon from "@/assets/projects-image/comming_soon.png"


export interface projectLinks {
    title: string;
    url: string;
    target?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    details: string[];
    image: StaticImageData;
    technologies: string[];
    links?: projectLinks[];
    featured?: boolean;
}

export const defaultProjects: Project[] = [
    {
        id: '1',
        title: 'HMC Inventory Management System',
        description:
            'A complete Point of Sale (POS) system designed for a Pakistani mobile shop, featuring inventory tracking, sales management, customer records, and comprehensive business analytics.',
        details: [
            'Real-time inventory management and stock tracking',
            'Sales transaction recording and history',
            'Product categorization and search',
            'Business analytics and reporting',
            'Low stock alerts',
        ],
        technologies: [
            'ReactJS',
            'ExpressJS',
            'PostgreSQL',
            'Session Auth',
            'REST API',
            'Tailwind CSS',
            'Tanstack Query',
            'Redux Toolkit',
        ],
        image: hmc,
        featured: true,
        links: [
            {
                title: 'Source Code',
                url: 'https://github.com/umerzafar4598/hmc_inventory_mangement',
                target: '_blank',
            }
        ]
    },
    {
        id: '2',
        title: 'Full Stack Todo App',
        description:
            'A comprehensive task management application with user authentication, allowing users to create, update, delete, and manage their personal todos with a clean and intuitive interface.',
        details: [
            'User registration and login with session-based authentication',
            'Complete CRUD operations for todos',
            'User-specific data isolation',
            'Responsive design for all devices',
            'Real-time optimistic updates',
        ],
        technologies: [
            'Next.js',
            'TypeScript',
            'PostgreSQL',
            'Drizzle ORM',
            'Better-Auth',
            'Tailwind CSS',
            'Redux Toolkit',
            'Zod',
        ],
        image: todo,
        links: [
            {
                title: 'Source Code',
                url: 'https://github.com/umerzafar4598/nextjs-todo-list-app',
                target: '_blank',
            },
            {
                title: 'Live Demo',
                url: 'https://full-stack-todo-app-seven-flax.vercel.app',
                target: '_blank',
            }
        ]
    },
    {
        id: '3',
        title: 'Assembly Fun Endgame',
        description:
            'Assembly Endgame, guess the word in 8 attempt to keep the programming world safe from assembly',
        details: [
            'Word Guess game under 30 seconds.',
            'Every wrong guessed eliminates a language from programming world.',
            'Instant Status message.',
            'Responsive design for all devices',
            'Real-time updates',
        ],
        technologies: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'clsx',
        ],
        image: assembly,
        links: [
            {
                title: 'Source Code',
                url: 'https://github.com/umerzafar4598/assembly_endgame',
                target: '_blank',
            },
            {
                title: 'Live Demo',
                url: 'https://assembly-endgame-lyart-iota.vercel.app/',
                target: '_blank',
            }
        ]
    },
    {
        id: '4',
        title: 'Your Project Could Be Next',
        description:
            "The next project featured here could be yours. Let's build something fast, modern, and impactful together.",
        details: [
            'Full Stack Web Applications',
            'E-commerce Platform',
            'Admin Dashboards & CMS',
            'Performance Optimization',
            'Modern UI/UX with Smooth Animations',
        ],
        technologies: [
            'NextJS',
            'NodeJS',
            'Tailwind CSS',
            'PostgreSQL',
            'Drizzle ORM',
        ],
        image: commingSoon,
        links: [
            { title: "Let's discuss your project.", url: '#contact' }
        ]
    },
];