'use client'
import cardData from "./CardData";
import AboutCard from "./AboutCard";
import { motion } from 'motion/react'
import { GlowingEffect } from "@/components/ui/glowing-effect";
import type { Variants } from "motion/react";
import { stagger } from "motion";

const containerCardVariant: Variants = {
    hidden: {},
    show: {
        transition: {
            when: 'beforeChildren',
            delayChildren: stagger(0.25)
        }
    }
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
}


const About = () => {
    return (
        <section
            id="about"
            className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className='text-center mb-16'>
                    <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-primary text-shadow-sm text-shadow-green-500">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Story */}
                    <motion.div
                        variants={containerCardVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className='transition-all duration-1000 delay-200'
                    >
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <motion.p
                                variants={cardVariants}
                            >
                                Hey there! I&apos;m <span className="text-primary font-semibold">Umer Zafar</span>,
                                a passionate full-stack developer who discovered the world of web development
                                and dove deep into the <span className="text-accent font-semibold">PERN stack</span>.
                            </motion.p>
                            <motion.p
                                variants={cardVariants}
                            >
                                Over the past <span className="text-primary font-semibold">6 months</span>, I&apos;ve
                                been on an intensive journey mastering PostgreSQL, Express.js, React.js, and Node.js.
                                What started as curiosity has evolved into a genuine passion for building scalable,
                                efficient web applications that solve real-world problems.
                            </motion.p>
                            <motion.p
                                variants={cardVariants}
                            >
                                I&apos;m a <span className="text-primary font-semibold">self-taught developer </span> who
                                believes in learning by doing. Every project I build teaches me something new, and
                                I&apos;m constantly pushing myself to write cleaner code, design better architectures,
                                and create more intuitive user experiences.
                            </motion.p>
                            <motion.p
                                variants={cardVariants}
                            >
                                Currently, I&apos;m actively seeking opportunities to bring my skills to a{' '}
                                <span className="text-accent font-semibold">professional team </span> where I can
                                contribute, grow, and build amazing products. Whether it&apos;s a full-time role,
                                freelance projects, or open-source collaboration, I&apos;m excited to connect with
                                fellow developers and create something impactful together.
                            </motion.p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="text-center hover:shadow-[0_10px_60px_-15px_rgba(0,255,136)] transition-all duration-300 p-4 bg-white/5 rounded-lg border border-primary">
                                <div className="text-3xl font-bold text-primary">6+</div>
                                <div className="text-sm text-gray-400 mt-1">Months</div>
                            </div>
                            <div className="text-center hover:shadow-[0_10px_60px_-15px_rgba(0,255,255)] transition-all duration-300 p-4 bg-white/5 rounded-lg border border-accent">
                                <div className="text-3xl font-bold text-accent">2</div>
                                <div className="text-sm text-gray-400 mt-1">Projects</div>
                            </div>
                            <div className="text-center hover:shadow-[0_10px_60px_-15px_rgba(0,255,136)] transition-all duration-300 p-4 bg-white/5 rounded-lg border border-primary">
                                <div className="text-3xl font-bold text-primary">100%</div>
                                <div className="text-sm text-gray-400 mt-1">Dedicated</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Values */}
                    <div>
                        <motion.div
                            variants={containerCardVariant}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                            className="space-y-6"
                        >
                            {cardData.map((card) => {
                                return (
                                    <AboutCard key={card.title} data={card} variants={cardVariants} />
                                )
                            }
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Education */}
                <div
                    className='mt-16'
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">Education & Certifications</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div
                            data-aos='zoom-in-up'
                            className="p-6 bg-white/5 rounded-lg border border-white/10"
                        >
                            <GlowingEffect
                                blur={0}
                                borderWidth={3}
                                spread={80}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
                            <div className="text-primary font-semibold mb-2">Higher Secondary School Certificate (HSSC)</div>
                            <div className="text-white font-medium">Federal Abdali College Chamanabad</div>
                            <div className="text-gray-400 text-sm mt-1">July 2020 - July 2022</div>
                            <div className="text-gray-500 text-sm">Rawalpindi, Pakistan</div>
                        </div>
                        <div
                            data-aos='zoom-in-up'
                            className="p-6 bg-white/5 rounded-lg border border-white/10"
                        >
                            <GlowingEffect
                                blur={0}
                                borderWidth={3}
                                spread={80}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
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