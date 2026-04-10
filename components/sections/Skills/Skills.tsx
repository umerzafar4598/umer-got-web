"use client"

import Marquee from "react-fast-marquee"
// import { motion } from "motion/react"
import Image from "next/image"
// import type { Variants } from "motion/react";
// import { useState } from "react"

import { skillsData } from "@/data/index"
import { skillImage } from "./SkillImage"





export default function SkillsSection() {
    return (
        <section
            id='skills'
            className='py-20 px-4 sm:px-6 lg:px-8 bg-black/30 relative overflow-hidden'
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div
                    className='text-center mb-16 transition-all duration-1000'
                >
                    <h2
                        className="section-title text-4xl md:text-5xl font-bold mb-4"
                    >
                        Technical <span className="text-primary text-shadow-sm text-shadow-green-500">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My expertise in modern web development technologies and tools
                    </p>
                </div>
                {/* Marquee */}
                <div
                    data-aos="zoom-out-up"
                    className="w-full my-7">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill) => (
                            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                                key={skill.name}>
                                <div className="h-full w-full rounded-lg border border-[#273c1f] bg-white/5 shadow-none shadow-gray-50 group-hover:border-primary transition-all duration-500">
                                    <div className="flex -translate-y-px justify-center">
                                        <div className="w-3/4">
                                            <div className="h-px w-full bg-linear-to-r from-transparent primary to-transparent" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                                        <div className="h-8 sm:h-10">
                                            <Image
                                                src={skillImage(skill.name)?.src}
                                                alt={skill.name}
                                                width={0}
                                                height={0}
                                                className="h-full w-auto rounded-lg"
                                            />
                                        </div>
                                        <p className="text-white text-sm sm:text-lg">
                                            {skill.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
                <div
                    className='mt-12'
                >
                    <div className="bg-linear-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/30 p-8 text-center">
                        <h3 className="text-2xl md:text-3xl  mb-4">
                            <span className="text-white">Specialized in </span>
                            <span className="text-primary">PERN</span>
                            <span className="text-white"> Stack</span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4 mt-6">
                            <span className="skill-tag">PostgreSQL</span>
                            <span className="skill-tag">Express.js</span>
                            <span className="skill-tag">React.js</span>
                            <span className="skill-tag">Node.js</span>
                        </div>
                        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                            Building end-to-end full-stack applications with modern JavaScript ecosystem,
                            robust database management, and scalable architecture
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}