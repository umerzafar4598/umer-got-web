"use client";

import { useState } from "react";
import { Phase } from "./PhaseData";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence, motion, } from "motion/react";
import { type Variants } from "motion";

const PhaseCard = ({
    phase,
    onClick,
    variant,
}: {
    phase: Phase;
    onClick: () => void;
    variant: Variants
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            variants={variant}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
            className="relative group border border-white/10 rounded-2xl md:shadow-md md:shadow-primary overflow-hidden cursor-pointer h-85 flex flex-col justify-end"
        >
            {/* Canvas reveal — shown on hover */}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-10"
                    >
                        <CanvasRevealEffect
                            animationSpeed={phase.animationSpeed}
                            colors={phase.colors}
                            dotSize={phase.dotSize}
                            showGradient
                            containerClassName="bg-black"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Dark overlay always present */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/20 z-20" />

            {/* Content */}
            <div className="relative z-30 p-7 flex flex-col gap-3">
                {/* Icon + tag */}
                <div className="flex items-center gap-2">
                    <span className="text-2xl leading-none">{phase.icon}</span>
                    <span
                        className="text-[11px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border"
                        style={{
                            color: `rgb(${phase.colors[0].join(",")})`,
                            borderColor: `rgba(${phase.colors[0].join(",")}, 0.4)`,
                            backgroundColor: `rgba(${phase.colors[0].join(",")}, 0.08)`,
                        }}
                    >
                        {phase.tag}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug tracking-tight">
                    {phase.label} — {phase.headline}
                </h3>

                <p className="text-sm text-white/55 leading-relaxed line-clamp-2">
                    {phase.teaser}
                </p>

                <div className="flex items-center gap-1.5 mt-1">
                    <span
                        className="text-sm font-medium"
                        style={{ color: `rgb(${phase.colors[0].join(",")})` }}
                    >
                        Read more
                    </span>
                    <svg
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                        style={{ color: `rgb(${phase.colors[0].join(",")})` }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
};

export default PhaseCard