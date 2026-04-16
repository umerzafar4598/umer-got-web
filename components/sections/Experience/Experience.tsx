'use client'
import SectionWrapper from "@/components/layout/SectionWrapper";
import { useState } from "react";

const experiences = [
    {
        id: 1,
        index: "01",
        role: "Full Stack Developer",
        tag: "Learning Phase",
        status: "completed",
        company: "Udemy Course",
        course: "The Complete Web Development Bootcamp",
        instructor: "by Angela Yu",
        start: "01 Mar 2025",
        end: "21 Sep 2025",
        points: [
            "Modern HTML, CSS & JavaScript mastery through project-based learning — built real-world interfaces from scratch.",
            "Deep-dived into Node.js, Express.js, session-based authentication, middlewares, RESTful API design, and hands-on Postman practice.",
            "Acquired in-depth SQL knowledge with PostgreSQL — designed complex relational schemas and wrote production-grade queries.",
        ],
    },
    {
        id: 2,
        index: "02",
        role: "Open Source Contributor",
        tag: "Active",
        status: "active",
        company: "Real-World Projects",
        course: null,
        instructor: null,
        start: "Oct 2025",
        end: "Present",
        points: [
            "Navigating open-source codebases to get hands-on experience with real-life projects and industry standards.",
            "Actively seeking opportunities to apply and sharpen PERN stack (PostgreSQL · Express · React · Node.js) skills on live products.",
        ],
    },
];

export default function Experience() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section
            id="experience"
            className="w-full py-20">
            <SectionWrapper>
                <div data-aos='fade-up' className="mb-10">
                    <p className="tracking-[4px] font-sans uppercase">
                        — Experience
                    </p>
                    <h2 className="sm:text-6xl text-4xl tracking-tighter leading-none mb-6">
                        My {''}
                        <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent tracking-wide">
                            Journey.
                        </span>
                    </h2>
                    <p className="text-lg leading-relaxed">
                        From structured learning to open-source contributions — building
                        depth, one commit at a time.
                    </p>
                </div>

                <div className="space-y-10">
                    {experiences.map((exp) => (
                        <div
                            data-aos='fade-up'
                            key={exp.id}
                            onClick={() => setOpen(open === exp.id ? null : exp.id)}
                            className={`relative rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden border-primary`}
                        >
                            {/* Top accent line when open */}
                            {open === exp.id && (
                                <div className="glow-line absolute top-0 left-0 right-0 h-px" />
                            )}

                            <div className="p-7">
                                {/* Top row */}
                                <div className="flex items-start justify-between gap-4 flex-wrap">
                                    <div className="flex items-center gap-3">
                                        <span className="tracking-widest">
                                            {exp.index}
                                        </span>
                                        {exp.status === "active" ? (
                                            <span className="flex text-sm items-center gap-1.5 uppercase tracking-[2px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink inline-block" />
                                                {exp.tag}
                                            </span>
                                        ) : (
                                            <span className="text-sm ring-0 ring-accent uppercase tracking-[2px] bg-slate-500/10 border border-slate-700 px-3 py-1 rounded-full">
                                                ✓ {exp.tag}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span>
                                            {exp.start}
                                        </span>
                                        <span>→</span>
                                        <span
                                            className={` ${exp.status === "active"
                                                ? "text-emerald-400"
                                                : "text-white"
                                                }`}
                                        >
                                            {exp.end}
                                        </span>
                                    </div>
                                </div>

                                {/* Role */}
                                <div className="mt-5">
                                    <h3 className="text-2xl font-bold text-white tracking-tight">
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                                        <span className="text-sm text-indigo-400 font-medium">
                                            {exp.company}
                                        </span>
                                        {exp.course && (
                                            <>
                                                <span className="text-slate-600">·</span>
                                                <span className="text-sm text-slate-400">
                                                    {exp.course}
                                                </span>
                                            </>
                                        )}
                                        {exp.instructor && (
                                            <span className="mono text-xs text-slate-600">
                                                {exp.instructor}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Expandable points */}
                                {open === exp.id && (
                                    <div className="mt-6 pt-6 border-t border-white/6 space-y-4">
                                        {exp.points.map((pt, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                                <p className=" leading-relaxed text-slate-400 group-hover/point:text-slate-300 transition-colors duration-200">
                                                    {pt}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Toggle hint */}
                                <div className="mt-5 flex items-center gap-2">
                                    <div className="flex-1 h-px bg-white/4" />
                                    <span className="text-[10px] tracking-widest uppercase flex items-center gap-1.5">
                                        {open === exp.id ? (
                                            <>collapse <span className="text-sm">↑</span></>
                                        ) : (
                                            <>details <span className="text-sm">↓</span></>
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
}