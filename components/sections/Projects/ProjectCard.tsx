"use client"

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";
import type { Project } from "./Project.data";

interface ProjectCardProps {
    project: Project;
    index: number;
    isEvenLayout: boolean;
}

export default function ProjectCard({ project, index, isEvenLayout }: ProjectCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariant: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
            },
        }
    }

    const imageVariant: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: index * 0.1 + 0.1,
            }
        },
        hover: {
            scale: 1.07,
            transition: { duration: 0.3 },
        },
    }
    const contentVariant: Variants = {
        hidden: { opacity: 0, x: isEvenLayout ? -20 : 0 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.1 + 0.15,
            }
        },
    }

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1 + 0.2,
            },
        },
    };

    const tagVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1 + 0.25 + i * 0.05,
            },
        }),
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="group"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image Section */}
                <motion.div
                    variants={imageVariant}
                    whileHover="hover"
                    className={`overflow-hidden ${isEvenLayout ? 'md:order-2' : 'md:order-1'
                        }`}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-full aspect-video relative overflow-hidden "
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    variants={contentVariant}
                    className={`flex flex-col gap-6 ${isEvenLayout ? 'md:order-1' : 'md:order-2'}`}
                >
                    {/* Badge */}
                    {project.featured && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.1 + 0.1 }}
                            className="w-fit"
                        >
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary">
                                Featured Project
                            </span>
                        </motion.div>
                    )}

                    {/* Title */}
                    <motion.h3
                        variants={titleVariants}
                        className={`text-2xl lg:text-3xl font-bold leading-tight ${isEvenLayout ? 'text-accent' : 'text-primary'}
                        `}>
                        {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                        variants={titleVariants}
                        className="text-base lg:text-lg text-gray-300 leading-relaxed"
                    >
                        {project.description}
                    </motion.p>

                    {/* Details List */}
                    <motion.ul className="space-y-3 text-gray-400">
                        {project.details.map((detail, i) => (
                            <motion.li
                                variants={tagVariants}
                                key={i}
                                className="flex items-start gap-3"
                            >
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                                    transition={{
                                        delay: index * 0.1 + 0.3 + i * 0.05,
                                        type: 'spring',
                                    }}
                                    className="shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center mt-1"
                                >
                                    <span className="text-slate-900 text-xs font-bold">
                                        ✓
                                    </span>
                                </motion.span>
                                <span className="text-sm lg:text-base">{detail}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Technologies */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        className="flex flex-wrap gap-2 pt-4"
                    >
                        {project.technologies.map((tech, i) => (
                            <motion.span
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                key={tech}
                                className="px-3 py-1 text-xs lg:text-sm font-medium hover:text-primary bg-white/5 rounded-lg border border-blue-200 hover:border-primary transition-colors cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Link */}
                    <div className="flex items-center justify-between">
                        {project.links && (
                            project.links.map((link, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    href={link.url}
                                    target={link.target ? link.target : "_self"}
                                    className="flex items-center gap-2 text-primary font-semibold  w-fit mt-4"
                                >
                                    {link.title}
                                    <motion.svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="currentColor"
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 4 }}
                                    >
                                        <path
                                            d="M4 10H16M16 10L11 5M16 10L11 15"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </motion.svg>
                                </motion.a>
                            ))

                        )}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}