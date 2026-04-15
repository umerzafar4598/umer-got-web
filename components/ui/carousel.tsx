"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useId } from "react";
import { PinContainer } from "./3d-pin";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  technologies: string[];
}

const Slide = ({ project, index, current }: {
  project: Project;
  index: number;
  current: number;
}) => {
  const isActive = current === index;

  return (
    <div className="w-[65vmin] h-[65vmin] flex-shrink-0 mx-[5vmin]">
      <PinContainer
        title={project.title}
        href={`/projects/${project.slug}`}
      >
        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 group-hover:border-[var(--accent)]/60 shadow-2xl bg-zinc-950">

          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: isActive ? 1 : 0.8,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />

          <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
            <h3 className="text-4xl font-bold tracking-tighter text-white mb-4">
              {project.title}
            </h3>
            <p className="text-white/90 text-[17px] leading-relaxed line-clamp-3 mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies?.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="text-[var(--accent)] font-medium flex items-center gap-2">
              View Project Details <span>→</span>
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

const CarouselControl = ({ onClick, direction }: {
  onClick: () => void;
  direction: "prev" | "next";
}) => (
  <button
    onClick={onClick}
    className="w-14 h-14 flex items-center justify-center bg-zinc-900 border border-white/20 hover:border-[var(--accent)] rounded-2xl transition-all hover:-translate-y-1 active:scale-95"
  >
    <IconArrowNarrowRight className={`w-7 h-7 text-white ${direction === "prev" ? "rotate-180" : ""}`} />
  </button>
);

export default function Carousel({ projects }: { projects: Project[] }) {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % projects.length);

  return (
    <div className="relative w-[75vmin] h-[75vmin] mx-auto overflow-hidden">
      <div
        className="flex h-full transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {projects.map((project, index) => (
          <Slide
            key={project.id}
            project={project}
            index={index}
            current={current}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-6 z-50">
        <CarouselControl onClick={handlePrev} direction="prev" />
        <CarouselControl onClick={handleNext} direction="next" />
      </div>
    </div>
  );
}