"use client";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { IoMdClose } from "react-icons/io";
import { Phase } from "./PhaseData";

const PhaseModal = ({
    phase,
    onClose,
}: {
    phase: Phase;
    onClose: () => void;
}) => {
    return (
        <AnimatePresence>
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            >
                <motion.div
                    key="modal"
                    initial={{ opacity: 0, scale: 0.95, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 24 }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0d0d0d] border border-white/10 rounded-3xl shadow-2xl"
                >
                    {/* Modal header with mini canvas reveal */}
                    <div className="relative h-44 rounded-t-3xl overflow-hidden">
                        <CanvasRevealEffect
                            animationSpeed={phase.animationSpeed}
                            colors={phase.colors}
                            dotSize={phase.dotSize}
                            showGradient
                            containerClassName="bg-black"
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0d0d0d]" />
                        <div className="absolute bottom-5 left-7 flex items-center gap-3">
                            <span className="text-3xl">{phase.icon}</span>
                            <div>
                                <p
                                    className="text-[11px] font-mono tracking-widest uppercase"
                                    style={{ color: `rgb(${phase.colors[0].join(",")})` }}
                                >
                                    {phase.tag}
                                </p>
                                <h2 className="text-3xl font-bold text-white tracking-tight">
                                    {phase.label}
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-transparent text-accent"
                    >
                        <IoMdClose className="w-8 h-8 hover:rotate-90 transition-all duration-300 cursor-pointer" />
                    </button>

                    {/* Modal body */}
                    <div className="px-7 pb-8 pt-2 flex flex-col gap-7">
                        <p className="text-lg text-white/60 leading-relaxed border-l-2 pl-4"
                            style={{ borderColor: `rgba(${phase.colors[0].join(",")}, 0.5)` }}
                        >
                            {phase.teaser}
                        </p>

                        <div className="flex flex-col gap-6">
                            {phase.modalContent.sections.map((section, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="text-sm font-mono font-bold"
                                            style={{ color: `rgb(${phase.colors[0].join(",")})` }}
                                        >
                                            0{i + 1}
                                        </span>
                                        <h4 className="text-base font-semibold text-white/90 tracking-tight">
                                            {section.title}
                                        </h4>
                                    </div>
                                    <p className="text-sm text-white/50 leading-relaxed pl-6">
                                        {section.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PhaseModal