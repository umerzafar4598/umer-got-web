'use client';

import { motion, stagger } from 'motion/react';
import type { Variants } from "motion/react";
import { services } from './services.data';

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            when: "beforeChildren",
            delayChildren: stagger(0.12)
        },
    },
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
        },
    },
};

export default function MyServices() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-zinc-950 py-24 text-white"
        >
            {/* Background Glow Effects */}
            <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6 md:px-8">
                {/* Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                        <span className="text-sm uppercase tracking-widest text-zinc-400">
                            What I Offer
                        </span>
                    </div>

                    <h2 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Modern Web{' '}
                        <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            Services
                        </span>
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-zinc-400 sm:text-xl">
                        As a passionate Full-Stack Developer, I bring robust architecture,
                        clean code, and delightful user experiences to every project.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                            }}
                            className="group relative flex flex-col overflow-hidden rounded-3xl border border-primary bg-zinc-900/50 p-8 backdrop-blur-sm"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-linear-to-bl from-primary via-black to-primary/50" />
                            </div>

                            {/* Icon */}
                            <motion.div
                                whileHover={{
                                    rotate: 8,
                                    scale: 1.1,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                }}
                                className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900"
                            >
                                {service.icon}
                            </motion.div>

                            {/* Content */}
                            <h3 className="relative mb-4 text-2xl font-semibold tracking-tight">
                                {service.title}
                            </h3>

                            <p className="relative mb-6 flex-1 leading-relaxed text-zinc-400">
                                {service.description}
                            </p>

                            {/* Highlights */}
                            <div className="relative space-y-3">
                                {service.highlights.map((highlight, i) => (
                                    <div
                                        key={highlight}
                                        className="flex items-center gap-3 text-sm text-zinc-400"
                                    >
                                        <motion.div
                                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                                            animate={{
                                                scale: [1, 2, 1],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                            }}
                                        />

                                        <span>{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
