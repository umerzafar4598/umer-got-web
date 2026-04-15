"use client";

import React from "react";
import Carousel from "@/components/ui/carousel";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    slug: string;
    technologies: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Elysium Dashboard",
        description: "Modern analytics dashboard with real-time data visualization",
        image: "https://picsum.photos/id/1015/800/600",
        slug: "elysium-dashboard",
        technologies: ["Next.js", "TypeScript", "Recharts", "Tailwind"],
    },
    {
        id: 2,
        title: "Nova AI Platform",
        description: "AI-powered content creation tool with beautiful UI",
        image: "https://picsum.photos/id/201/800/600",
        slug: "nova-ai",
        technologies: ["Next.js", "OpenAI", "Framer Motion", "Prisma"],
    },
    {
        id: 3,
        title: "Velora E-commerce",
        description: "High-performance fashion store with smooth animations",
        image: "https://picsum.photos/id/106/800/600",
        slug: "velora-store",
        technologies: ["Next.js", "Stripe", "Sanity", "Tailwind"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm font-medium tracking-widest text-white/70">PORTFOLIO</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        Featured{" "}
                        <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-xl text-white/70">
                        Hover to experience the 3D pin animation. Click any card to view full project details.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Carousel projects={projects} />
                </div>
            </div>
        </section>
    );
}