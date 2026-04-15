"use client";

import { PinContainer } from "@/components/ui/3d-pin";
import { Project } from "./Project.data";

interface Props {
    project: Project;
    onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
    return (
        <PinContainer title="View Details" containerClassName="mt-6">
            <div
                onClick={onClick}
                className="w-65 cursor-pointer rounded-2xl p-4 bg-black/40 backdrop-blur border border-white/10 hover:border-white/20 transition"
            >
                <h3 className="text-lg font-bold text-white">{project.title}</h3>

                <p className="text-sm text-neutral-400 mt-2">
                    {project.description}
                </p>

                <div className="mt-4 text-xs text-neutral-500">
                    {project.techStack.join(" • ")}
                </div>
            </div>
        </PinContainer>
    );
}