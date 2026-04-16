import SectionWrapper from "@/components/layout/SectionWrapper";

import { IoCloudDownloadOutline } from "react-icons/io5";
import { contactInfo, socialLinks } from "./Contact.data";
import ContactForm from "./ContactForm";

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

const Contact = () => {
    return (
        <section
            id="contact"
            aria-label="Contact Section"
            className="w-full py-20 relative overflow-hidden"
        >
            <SectionWrapper>
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
                        Get In{" "}
                        <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent tracking-wide">
                            Touch
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        I&apos;m currently looking for new opportunities. Whether you have a
                        question or just want to say hi, I&apos;ll try my best to get back to
                        you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column - Contact Info & Social */}
                    <div className="space-y-8">
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((info) => {
                                    const styles =
                                        colorClasses[info.color] || colorClasses.primary;

                                    return (
                                        <div
                                            key={info.label}
                                            className={`flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 ${styles.border} transition-all duration-300`}
                                        >
                                            <div className={`p-3 ${styles.bg} rounded-lg`}>
                                                <div className={`${styles.text}`}>
                                                    {info.icon}
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <div className="text-gray-400 text-sm mb-1">
                                                    {info.label}
                                                </div>

                                                {info.link ? (
                                                    <a
                                                        href={info.link}
                                                        className="text-white font-medium hover:text-primary transition-colors"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <div className="text-white font-medium">
                                                        {info.value}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Connect With Me
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => {
                                    const styles =
                                        colorClasses[social.color] || colorClasses.primary;

                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex-1 flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 ${styles.border} transition-all duration-300 group`}
                                        >
                                            <div
                                                className={`${styles.text} group-hover:scale-110 transition-transform`}
                                            >
                                                {social.icon}
                                            </div>
                                            <span className="text-white font-medium">
                                                {social.name}
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Download Resume */}
                        <div className="bg-linear-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/30">
                            <h3 className="text-xl font-bold text-white mb-3">
                                Download My Resume
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Get a detailed overview of my skills, experience, and projects
                            </p>

                            <a
                                href="/umer-zafar-resume.pdf"
                                download
                                className="btn-primary inline-flex items-center gap-2 hover:-translate-y-1.5 transition-all duration-300"
                            >
                                <IoCloudDownloadOutline size={20} />
                                Download Resume
                            </a>
                        </div>

                        {/* Availability */}
                        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                                <h3 className="text-xl font-bold text-white">
                                    Available for Work
                                </h3>
                            </div>
                            <p className="text-gray-400 text-sm">
                                I&apos;m actively seeking full-time opportunities, freelance
                                projects, and collaborations. Let&apos;s build something amazing
                                together!
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
};

export default Contact;