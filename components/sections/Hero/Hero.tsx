'use client'
import { TypeAnimation } from "react-type-animation"
import type { Variants } from "motion/react";
import { motion, stagger } from 'motion/react'
import { Spotlight } from "@/components/ui/spotlight";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";


const MotionArrow = motion.create(FaArrowDown)

const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            delayChildren: stagger(0.15),
        }
    }
}
const items: Variants = {
    hidden: {
        opacity: 0,
        y: 40

    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeOut',
            duration: 0.25
        }
    }
}

const Hero = () => {
    return (
        <section id='hero' className="min-h-screen bg-foreground overflow-hidden pt-20">
            <Spotlight
                className="-top-40 left-0 md:-top-70 md:left-60"
                fill="cyan"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={container}
                    initial='hidden'
                    animate='visible'
                    className="text-center">
                    {/* Animated Greeting */}
                    <motion.div
                        variants={items}
                    >
                        <p className="text-primary font-mono text-lg mb-4">Hi, my name is</p>
                    </motion.div>
                    <motion.div
                        variants={items}
                    >
                        <h1 className="animate__animated animate__zoomInDown animate__slow text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
                            <span className="glow-text">Umer Zafar</span>
                        </h1>
                    </motion.div>
                    {/* Title */}
                    <motion.div
                        variants={items}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 mb-6">
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'Nextjs + Typescript Dev',
                                    2000,
                                    'PERN Stack Specialist',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h2>
                    </motion.div>

                    {/* Tagline */}
                    <motion.div
                        variants={items}
                    >
                        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
                            I build <span className="text-primary font-semibold">scalable full-stack solutions</span> with the{' '}
                            <span className="text-accent font-semibold">PERN stack</span>
                        </p>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
                            Specializing in PostgreSQL, Express.js, React.js, and Node.js to create efficient,
                            modern web applications that solve real-world problems
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={items}
                        className='flex flex-col sm:flex-row gap-5 justify-center items-center mb-12'
                    >
                        <motion.a
                            whileHover={{ scale: 0.9, y: -2 }}
                            whileTap={{ scale: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 7 }}
                            href="#projects"
                            className="btn-primary w-full sm:w-auto"
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 0.9, y: -2 }}
                            whileTap={{ scale: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 7 }}
                            href="#contact"
                            className="btn-outline w-full sm:w-auto"
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={items}
                        className='flex gap-6 justify-center items-center'
                    >
                        <a
                            href="https://github.com/umerzafar4598"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors duration-200 transform hover:scale-110"
                            aria-label="GitHub"
                        >
                            <LuGithub size={28} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/umer-zafar-575371392/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors duration-200 transform hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <LuLinkedin size={28} />
                        </a>
                        <a
                            href="mailto:umerzafar4598@gmail.com"
                            className="text-gray-400 hover:text-primary transition-colors duration-200 transform hover:scale-110"
                            aria-label="Email"
                        >
                            <GoMail size={28} />
                        </a>
                        <a
                            href="tel:+923401506317"
                            className="text-gray-400 hover:text-primary transition-colors duration-200 transform hover:scale-110"
                            aria-label="Phone"
                        >
                            <FiPhone size={28} />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <MotionArrow
                        size={25}
                        className="text-primary"
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero