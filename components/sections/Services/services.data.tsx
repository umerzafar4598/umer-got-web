
import React from 'react';
import {
    Code2,
    Server,
    Database,
    Globe,
    Zap,
    Users,
    ShoppingCart,
    Settings,
} from 'lucide-react';

export interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    highlights: string[];
}

export const services: Service[] = [
    {
        icon: <Code2 className="w-10 h-10 text-blue-500" />,
        title: 'Full-Stack Web Development',
        description:
            'End-to-end web applications built with modern technologies. From pixel-perfect UIs to robust backends.',
        highlights: [
            'Next.js & React',
            'TypeScript',
            'Node.js / Express / NestJS',
            'REST & GraphQL APIs',
        ],
    },
    {
        icon: <Globe className="w-10 h-10 text-emerald-500" />,
        title: 'Frontend Excellence',
        description:
            'Beautiful, responsive, and accessible user interfaces that deliver exceptional user experiences.',
        highlights: [
            'Tailwind CSS & Motion',
            'Component Architecture',
            'Performance Optimization',
            'Mobile-First Design',
        ],
    },
    {
        icon: <Server className="w-10 h-10 text-purple-500" />,
        title: 'Backend & API Development',
        description:
            'Scalable server-side solutions with clean architecture, authentication, and business logic.',
        highlights: [
            'Database Design',
            'Authentication & Authorization',
            'Microservices Ready',
            'Third-party Integrations',
        ],
    },
    {
        icon: <Database className="w-10 h-10 text-amber-500" />,
        title: 'Database & Data Solutions',
        description:
            'Efficient data modeling, storage, and management solutions that scale with your business.',
        highlights: [
            'PostgreSQL & MongoDB',
            'Prisma & TypeORM',
            'Data Migration',
            'Caching Strategies',
        ],
    },
    {
        icon: <ShoppingCart className="w-10 h-10 text-rose-500" />,
        title: 'E-commerce Solutions',
        description:
            'High-converting online stores with payment integration, inventory management, and admin dashboards.',
        highlights: [
            'Stripe & PayPal Integration',
            'Order Management',
            'Product Catalogs',
            'Analytics Dashboard',
        ],
    },
    {
        icon: <Zap className="w-10 h-10 text-cyan-500" />,
        title: 'Performance & SEO',
        description:
            'Lightning-fast websites with excellent Core Web Vitals, SEO optimization, and accessibility.',
        highlights: [
            'Core Web Vitals Optimization',
            'Server-Side Rendering',
            'SEO Best Practices',
            'Lighthouse Scores 95+',
        ],
    },
    {
        icon: <Users className="w-10 h-10 text-indigo-500" />,
        title: 'UI/UX & Design Systems',
        description:
            'User-centered design systems and interfaces that drive engagement and conversions.',
        highlights: [
            'Figma to Code',
            'Design Systems',
            'User Testing',
            'Interactive Prototypes',
        ],
    },
    {
        icon: <Settings className="w-10 h-10 text-slate-400" />,
        title: 'Maintenance & Consulting',
        description:
            'Ongoing support, technical consulting, and modernization of existing applications.',
        highlights: [
            'Code Audits',
            'Tech Stack Upgrades',
            'Performance Tuning',
            'Long-term Support',
        ],
    },
];