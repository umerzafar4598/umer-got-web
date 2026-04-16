"use client";

import { useState } from "react";
import Carousel from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "./Project.data";
import type { Project } from "./Project.data";
import SectionWrapper from "@/components/layout/SectionWrapper";

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
        <section id="projects" className="w-full py-24 relative">
            {/* Heading */}
            <SectionWrapper>
                <div
                    data-aos='fade-up'
                    className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
                        Featured <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Projects</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-xl text-white/70">
                        Real-world applications built with the PERN stack, showcasing my skills in full-stack development.
                    </p>
                </div>

                {/* Carousel */}
                <div className="w-full">
                    <Carousel slides={slides} />
                </div>

                {/* Modal */}
                <ProjectModal
                    project={activeProject}
                    onClose={() => setActiveProject(null)}
                />
            </SectionWrapper>
        </section>
    );
}