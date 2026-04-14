// 'use client'
import { motion, stagger } from 'motion/react'
import type { Variants } from "motion/react";
import { FiDatabase, FiGithub } from 'react-icons/fi'
import { LuCircleCheckBig, LuExternalLink } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";

const projects = [
    {
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
        icon: <FiDatabase className="text-primary" size={32} />,
        color: 'accent',
    },
    {
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
        icon: <LuCircleCheckBig className="text-accent" size={32} />,
        color: 'primary',
    },
]




const Projects = () => {
    return (
        <section
            id='projects'
            className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <div
                    className='text-center mb-16'
                >
                    <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Real-world applications built with the PERN stack, showcasing my skills in full-stack development
                    </p>
                </div>
                {/* List of Featured Projects */}

            </div>
        </section>
    )
}

export default Projects



