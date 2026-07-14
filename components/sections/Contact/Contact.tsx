"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { contactInfo, socialLinks } from "./Contact.data";
import ContactForm from "./ContactForm";
import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";
import { useRef } from "react";

const colorClasses: Record<
    string,
    { border: string; bg: string; text: string }
> = {
    primary: {
        border: "hover:border-primary",
        bg: "bg-primary/10",
        text: "text-primary",
    },
    accent: {
        border: "hover:border-accent",
        bg: "bg-accent/10",
        text: "text-accent",
    },
};

// Animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const titleVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const hoverCardVariants: Variants = {
    initial: { y: 0 },
    hover: {
        y: -8,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

const Contact = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section
            ref={sectionRef}
            id="contact"
            aria-label="Contact Section"
            className="w-full py-20 relative overflow-hidden"
        >
            <SectionWrapper>
                {/* Section Title */}
                <motion.div
                    className="text-center mb-16"
                    variants={titleVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
                        Get In{" "}
                        <motion.span
                            className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent tracking-wide"
                            initial={{ backgroundPosition: "0%" }}
                            whileInView={{ backgroundPosition: "100%" }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        >
                            Touch
                        </motion.span>
                    </h2>
                    <motion.div
                        className="w-20 h-1 bg-primary mx-auto mb-4"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        I&apos;m currently looking for new opportunities. Whether you have a
                        question or just want to say hi, I&apos;ll try my best to get back to
                        you!
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column - Contact Info & Social */}
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {/* Contact Information */}
                        <div>
                            <motion.h3
                                className="text-2xl font-bold text-white mb-6"
                                variants={itemVariants}
                            >
                                Contact Information
                            </motion.h3>
                            <motion.div className="space-y-4" variants={containerVariants}>
                                {contactInfo.map((info) => {
                                    const styles =
                                        colorClasses[info.color] || colorClasses.primary;

                                    return (
                                        <motion.div
                                            key={info.label}
                                            variants={itemVariants}
                                            whileHover={{ x: 8 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.div
                                                className={`flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 ${styles.border} transition-all duration-300`}
                                                whileHover={{
                                                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                                                }}
                                            >
                                                <motion.div
                                                    className={`p-3 ${styles.bg} rounded-lg`}
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className={`${styles.text}`}>
                                                        {info.icon}
                                                    </div>
                                                </motion.div>

                                                <div className="flex-1">
                                                    <div className="text-gray-400 text-sm mb-1">
                                                        {info.label}
                                                    </div>

                                                    {info.link ? (
                                                        <motion.a
                                                            href={info.link}
                                                            className="text-white font-medium hover:text-primary transition-colors"
                                                            whileHover={{ x: 4 }}
                                                        >
                                                            {info.value}
                                                        </motion.a>
                                                    ) : (
                                                        <div className="text-white font-medium">
                                                            {info.value}
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <motion.h3
                                className="text-2xl font-bold text-white mb-6"
                                variants={itemVariants}
                            >
                                Connect With Me
                            </motion.h3>
                            <motion.div
                                className="flex gap-4"
                                variants={containerVariants}
                            >
                                {socialLinks.map((social) => {
                                    const styles =
                                        colorClasses[social.color] || colorClasses.primary;

                                    return (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex-1 flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 ${styles.border} transition-all duration-300 group`}
                                            variants={hoverCardVariants}
                                            initial="initial"
                                            whileHover="hover"
                                        >
                                            <motion.div
                                                className={`${styles.text}`}
                                                whileHover={{ scale: 1.3, rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {social.icon}
                                            </motion.div>
                                            <span className="text-white font-medium">
                                                {social.name}
                                            </span>
                                        </motion.a>
                                    );
                                })}
                            </motion.div>
                        </div>

                        {/* Download Resume */}
                        <motion.div
                            className="bg-linear-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/30"
                            variants={itemVariants}
                            whileHover={{
                                boxShadow: "0 10px 30px rgba(var(--primary-rgb), 0.3)",
                                scale: 1.02,
                            }}
                        >
                            <h3 className="text-xl font-bold text-white mb-3">
                                Download My Resume
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Get a detailed overview of my skills, experience, and projects
                            </p>

                            <motion.a
                                href="/umer_zafar_resume.pdf"
                                download
                                className="btn-primary inline-flex items-center gap-2 hover:-translate-y-1.5 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <motion.span
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <IoCloudDownloadOutline size={20} />
                                </motion.span>
                                Download Resume
                            </motion.a>
                        </motion.div>

                        {/* Availability */}
                        <motion.div
                            className="bg-white/5 rounded-lg p-6 border border-white/10"
                            variants={itemVariants}
                            whileHover={{
                                backgroundColor: "rgba(255, 255, 255, 0.08)",
                            }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <motion.div
                                    className="w-3 h-3 bg-primary rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [1, 0.5, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                ></motion.div>
                                <h3 className="text-xl font-bold text-white">
                                    Available for Work
                                </h3>
                            </div>
                            <p className="text-gray-400 text-sm">
                                I&apos;m actively seeking full-time opportunities, freelance
                                projects, and collaborations. Let&apos;s build something amazing
                                together!
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </SectionWrapper>
        </section>
    );
};

export default Contact;