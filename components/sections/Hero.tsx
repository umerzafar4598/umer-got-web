'use client'

import { useEffect, useState } from 'react'
import { TypeAnimation } from "react-type-animation"
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";


const Hero = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const scrollToContact = () => {
        const element = document.querySelector('#contact')
        if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            })
        }
    }

    const scrollToProjects = () => {
        const element = document.querySelector('#projects')
        if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 grid-pattern opacity-30"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    {/* Animated greeting */}
                    <div
                        className={`transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <p className="text-primary font-mono text-lg mb-4">Hi, my name is</p>
                    </div>

                    <div
                        className={`transform transition-all duration-1000 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
                            <span className="glow-text">Umer Zafar</span>
                        </h1>
                    </div>

                    {/* Title */}
                    <div
                        className={`transform transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 mb-6">
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'PERN Stack Specialist',
                                    2000,
                                    'Next.js + Typescript Dev',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h2>
                    </div>

                    {/* Tagline */}
                    <div
                        className={`transform transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
                            I build <span className="text-primary font-semibold">scalable full-stack solutions</span> with the{' '}
                            <span className="text-accent font-semibold">PERN stack</span>
                        </p>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
                            Specializing in PostgreSQL, Express.js, React.js, and Node.js to create efficient,
                            modern web applications that solve real-world problems
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div
                        className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transform transition-all duration-1000 delay-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <button onClick={scrollToProjects} className="btn-primary w-full sm:w-auto">
                            View My Work
                        </button>
                        <button onClick={scrollToContact} className="btn-outline w-full sm:w-auto">
                            Get In Touch
                        </button>
                    </div>

                    {/* Social Links */}
                    <div
                        className={`flex gap-6 justify-center items-center transform transition-all duration-1000 delay-900 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
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
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <FaArrowDown className="text-primary" size={32} />
                </div>
            </div>
        </section>
    )
}

export default Hero