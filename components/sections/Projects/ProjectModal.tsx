"use client";

import { Project } from "./Project.data";
import { motion, AnimatePresence } from "motion/react";

import { IoIosCode } from "react-icons/io";
import { FiGithub } from "react-icons/fi";

interface Props {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="fixed inset-0 z-999 flex items-center justify-center bg-black/70 backdrop-blur"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Modal Box */}
                    <motion.div
                        initial={{ y: 40, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0a0a] p-6"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/50 hover:text-white text-lg"
                        >
                            ✕
                        </button>
                        <div>
                            <div className="project-card group">
                                {/* 🎥 VIDEO SECTION */}
                                {project.video && (
                                    <div className="w-full">
                                        <div className="p-px rounded-xl pb-3">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8 }}
                                                className="rounded-xl overflow-hidden bg-black">
                                                <video
                                                    src={project.video}
                                                    controls
                                                    className="w-full h-55 md:h-100 object-cover"
                                                    poster={project.image}
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                )}

                                <div className="grid md:grid-cols-3 gap-8 p-8">
                                    {/* Left Column - Project Info */}
                                    <div className="md:col-span-2 space-y-6">
                                        {/* Title and Icon */}
                                        <div className="flex items-start gap-4">
                                            <div className={`p-4 bg-${project.color}/10 rounded-lg`}>
                                                {project.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-400 text-lg leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Problem & Solution */}
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-lg font-semibold text-primary mb-2">Problem Statement</h4>
                                                <p className="text-gray-400 leading-relaxed">{project.problem}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-accent mb-2">Solution</h4>
                                                <p className="text-gray-400 leading-relaxed">{project.solution}</p>
                                            </div>
                                        </div>

                                        {/* Key Features */}
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                                            <ul className="grid md:grid-cols-2 gap-2">
                                                {project.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                                                        <span className="text-primary mt-1">▹</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tech Stack */}
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech, idx) => (
                                                    <span key={idx} className="skill-tag">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column - Challenges & Links */}
                                    <div className="space-y-6">
                                        {/* Challenges Overcome */}
                                        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                                <IoIosCode size={20} className="text-primary" />
                                                Challenges Overcome
                                            </h4>
                                            <ul className="space-y-3">
                                                {project.challenges.map((challenge, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                                                        <span className="text-accent mt-1">•</span>
                                                        <span>{challenge}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Project Links */}
                                        <div className="space-y-3">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary text-white py-3 px-4 rounded-lg transition-all duration-300 group/btn"
                                            >
                                                <FiGithub size={20} className="group-hover/btn:text-primary transition-colors" />
                                                <span className="font-medium">View Source Code</span>
                                            </a>
                                        </div>

                                        {/* Role */}
                                        <div className="bg-linear-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
                                            <h4 className="text-sm font-semibold text-primary mb-2">My Role</h4>
                                            <p className="text-white font-medium">Full Stack Developer</p>
                                            <p className="text-gray-400 text-sm mt-2">
                                                Sole developer responsible for architecture, design, implementation, and deployment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

