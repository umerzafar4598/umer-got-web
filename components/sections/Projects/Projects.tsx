
import ProjectCard from "./ProjectCard";
import { defaultProjects } from "./Project.data";


export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
                    Featured <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Projects</span>
                </h2>

                <p className="max-w-2xl mx-auto text-xl text-white/70">
                    Real-world applications built with the PERN stack, showcasing my skills in full-stack development.
                </p>
            </div>
            <div className="space-y-8">
                {defaultProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        isEvenLayout={index % 2 === 0}
                    />
                ))}
            </div>
        </section>
    );
}