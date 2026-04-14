

const Projects = () => {
    return (
        <section
            id='projects'
            className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <div
                    className='text-center mb-16'
                >
                    <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Real-world applications built with the PERN stack, showcasing my skills in full-stack development
                    </p>
                </div>
                {/* List of Featured Projects */}

            </div>
        </section>
    )
}

export default Projects
