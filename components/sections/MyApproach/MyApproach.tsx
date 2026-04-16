"use client";

import { useState } from "react";

import { Phase, phases } from "./PhaseData";
import PhaseCard from "./PhaseCard";
import PhaseModal from "./PhaseModal";


export default function MyApproach() {
    const [activePhase, setActivePhase] = useState<Phase | null>(null);

    return (
        <section className="py-24 px-4 bg-[#080808]">
            <div className="max-w-5xl mx-auto">
                {/* Section header */}
                <div data-aos='fade-up' className="mb-10 space-y-2.5">
                    <p className="tracking-[4px] font-sans uppercase">
                        — My Approach
                    </p>
                    <h2 className="sm:text-6xl text-4xl tracking-tighter leading-none mb-6">
                        How I {''}
                        <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent tracking-wide">
                            Think.
                        </span>
                    </h2>
                    <p className="text-lg leading-relaxed">
                        Three layers of a full-stack app — my mental models for building frontend, backend, and database the right way.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {phases.map((phase) => (
                        <PhaseCard
                            key={phase.id}
                            phase={phase}
                            onClick={() => setActivePhase(phase)}
                        />
                    ))}
                </div>

                {/* Hover hint */}
                <p className="mt-5 text-center text-xs text-white/20 font-mono tracking-widest uppercase">
                    Hover to reveal · Click to explore
                </p>
            </div>

            {/* Modal */}
            {activePhase && (
                <PhaseModal
                    phase={activePhase}
                    onClose={() => setActivePhase(null)}
                />
            )}
        </section>
    );
}