"use client";

import { useState } from "react";
import Carousel from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "./Project.data";
import type { Project } from "./Project.data";

export default function Projects() {
    const [activeProject, setActiveProject] = useState<Project | null>(null);

    const slides = projects.map((project) => ({
        title: project.title,
        src: project.image,
        content: (
            <ProjectCard
                project={project}
                onClick={() => setActiveProject(project)}
            />
        ),
    }));

    return (
        <section id='projects' className="py-24 px-6 relative">
            {/* Heading */}
            <div
                data-aos='fade-up'
                className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
                    Featured <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Projects</span>
                </h2>

                <p className="max-w-2xl mx-auto text-xl text-white/70">
                    Hover over the cards to see the 3D pin animation. Click to view full project details.
                </p>
            </div>

            {/* Carousel */}
            <div className="flex justify-center">
                <Carousel slides={slides} />
            </div>

            {/* Modal */}
            <ProjectModal
                project={activeProject}
                onClose={() => setActiveProject(null)}
            />
        </section>
    );
}