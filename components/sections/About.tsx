'use client'

import { useEffect, useRef, useState } from 'react'
import { IoCodeSlash, IoRocketOutline } from "react-icons/io5";
import { FiTarget } from "react-icons/fi";

const About = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Story */}
                    <div
                        className={`transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                            }`}
                    >
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Hey there! I&apos;m <span className="text-primary font-semibold">Umer Zafar</span>,
                                a passionate full-stack developer who discovered the world of web development
                                and dove deep into the <span className="text-accent font-semibold">PERN stack</span>.
                            </p>
                            <p>
                                Over the past <span className="text-primary font-semibold">6 months</span>, I&apos;ve
                                been on an intensive journey mastering PostgreSQL, Express.js, React.js, and Node.js.
                                What started as curiosity has evolved into a genuine passion for building scalable,
                                efficient web applications that solve real-world problems.
                            </p>
                            <p>
                                I&apos;m a <span className="text-primary font-semibold">self-taught developer </span> who
                                believes in learning by doing. Every project I build teaches me something new, and
                                I&apos;m constantly pushing myself to write cleaner code, design better architectures,
                                and create more intuitive user experiences.
                            </p>
                            <p>
                                Currently, I&apos;m actively seeking opportunities to bring my skills to a{' '}
                                <span className="text-accent font-semibold">professional team </span> where I can
                                contribute, grow, and build amazing products. Whether it&apos;s a full-time role,
                                freelance projects, or open-source collaboration, I&apos;m excited to connect with
                                fellow developers and create something impactful together.
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                                <div className="text-3xl font-bold text-primary">6+</div>
                                <div className="text-sm text-gray-400 mt-1">Months</div>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                                <div className="text-3xl font-bold text-accent">2</div>
                                <div className="text-sm text-gray-400 mt-1">Projects</div>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                                <div className="text-3xl font-bold text-primary">100%</div>
                                <div className="text-sm text-gray-400 mt-1">Dedicated</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Values */}
                    <div
                        className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                            }`}
                    >
                        <div className="space-y-6">
                            {/* Value Card 1 */}
                            <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-primary transition-all duration-300 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <IoCodeSlash className="text-primary" size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Clean Code Advocate</h3>
                                        <p className="text-gray-400">
                                            I write readable, maintainable code that follows best practices and industry
                                            standards. Quality over quantity, always.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Value Card 2 */}
                            <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-accent transition-all duration-300 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent/10 rounded-lg">
                                        <IoRocketOutline className="text-accent" size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Fast Learner</h3>
                                        <p className="text-gray-400">
                                            Technology evolves rapidly, and so do I. I&apos;m constantly learning new tools,
                                            frameworks, and techniques to stay ahead of the curve.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Value Card 3 */}
                            <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-primary transition-all duration-300 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <FiTarget className="text-primary" size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Problem Solver</h3>
                                        <p className="text-gray-400">
                                            Every bug is a puzzle, every feature is a challenge. I thrive on finding
                                            elegant solutions to complex problems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div
                    className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">Education & Certifications</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                            <div className="text-primary font-semibold mb-2">Higher Secondary School Certificate (HSSC)</div>
                            <div className="text-white font-medium">Federal Abdali College Chamanabad</div>
                            <div className="text-gray-400 text-sm mt-1">July 2020 - July 2022</div>
                            <div className="text-gray-500 text-sm">Rawalpindi, Pakistan</div>
                        </div>
                        <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                            <div className="text-accent font-semibold mb-2">The Complete Web Development Bootcamp</div>
                            <div className="text-white font-medium">Angela Yu - Udemy</div>
                            <div className="text-gray-400 text-sm mt-1">Self-Paced Online Course</div>
                            <div className="text-gray-500 text-sm">Completed with Excellence</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About