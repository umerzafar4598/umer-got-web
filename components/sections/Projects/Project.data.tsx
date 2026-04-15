import ims from '@/assets/projects-image/IMS-banner.png'
import todo from '@/assets/projects-image/Todo-banner.png'
import assembly from '@/assets/projects-image/assembly.jpg'
import { FiDatabase } from "react-icons/fi";
import { LuCircleCheckBig } from "react-icons/lu";
import { RiGamepadLine } from "react-icons/ri";

export interface Project {
    id: number;
    title: string;
    description: string;
    problem: string;
    solution: string;
    techStack: string[];
    features: string[];
    challenges: string[];
    github?: string;
    demo?: string | null;
    icon: React.JSX.Element;
    color: 'accent' | 'primary'

    image: string;
    video: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'HMC Inventory Management System',
        description: 'A complete Point of Sale (POS) system designed for a Pakistani mobile shop, featuring inventory tracking, sales management, customer records, and comprehensive business analytics.',
        problem: 'Local mobile shops often struggle with manual inventory tracking, leading to stock discrepancies, lost sales data, and inefficient business operations.',
        solution: 'Developed a full-featured POS system with real-time inventory management, automated sales tracking, and detailed analytics to streamline shop operations.',
        techStack: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'Session Auth', 'RESTful API'],
        features: [
            'Real-time inventory management and stock tracking',
            'Sales transaction recording and history',
            'Customer database management',
            'Product categorization and search',
            'Business analytics and reporting',
            'Low stock alerts',
        ],
        challenges: [
            'Designing a complex database schema for inventory and sales',
            'Handling concurrent transactions efficiently',
            'Creating an intuitive UI for non-technical shop owners',
        ],
        github: 'https://github.com/umerzafar4598/hmc_inventory_mangement',
        demo: null,
        icon: <FiDatabase className="text-accent" size={32} />,
        color: 'primary',

        image: ims.src,
        video: 'videos/inventory.mp4',
    },
    {
        id: 2,
        title: 'Full Stack Todo App',
        description: 'A comprehensive task management application with user authentication, allowing users to create, update, delete, and manage their personal todos with a clean and intuitive interface.',
        problem: 'Many todo apps lack proper user authentication and data isolation, making it difficult for multiple users to manage their tasks securely on the same platform.',
        solution: 'Built a full-stack solution with separate user authentication, ensuring each user has their own secure workspace with complete CRUD operations for task management.',
        techStack: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'Session Auth', 'RESTful API'],
        features: [
            'User registration and login with session-based authentication',
            'Complete CRUD operations for todos',
            'User-specific data isolation',
            'Responsive design for all devices',
            'Real-time updates',
        ],
        challenges: [
            'Implementing secure session-based authentication',
            'Ensuring proper data isolation between users',
            'Managing state across components efficiently',
        ],
        github: 'https://github.com/umerzafar4598/Full-Stack-Todo-App',
        demo: null,
        icon: <LuCircleCheckBig className="text-primary" size={32} />,
        color: 'accent',

        image: todo.src,
        video: 'videos/todo.mp4',

    },
    {
        id: 3,
        title: 'Assembly Endgame',
        description: 'I code this game during my journey of learning React. This project gives me confidence to write React code smoothly and help to understand the core the concept of ReacJS.',
        problem: "Whenever people learn new tools and techs, they forgot to practice what they have learnt on practical project, that is why they don't get better.",
        solution: "I prefer to my practice my skills on real project. Getting my hands dirty on practical application enhance my skills and let me know about my vulnerabilities.",
        techStack: ['React.js', 'Tailwindcss', 'clsx'],
        features: [
            'Word Guess game under 30 seconds',
            'Every wrong guessed eliminates a language from programming world',
            'Instant Status message',
            'Responsive design for all devices',
            'Real-time updates',
        ],
        challenges: [
            'Managing good files/folder structure',
            'Ensuring proper message updates',
            'Managing state across components efficiently',
        ],
        github: 'https://github.com/umerzafar4598/assembly_endgame',
        demo: 'https://assembly-endgame-lyart-iota.vercel.app',
        icon: <RiGamepadLine className="text-primary" size={32} />,
        color: 'primary',

        image: assembly.src,
        video: 'videos/assembly.mp4',
    },
];