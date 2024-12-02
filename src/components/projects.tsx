import { motion } from "framer-motion";
import { projects } from '../data/projects'

const Projects = () => {
    return (
        <motion.section
            id="projects"
            className="py-16 bg-gray-50"
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading Animation */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#ffc13b] mb-4">Featured Projects</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Showcasing our finest work and commitment to excellence
                    </p>
                </motion.div>

                {/* Project Cards Animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative overflow-hidden rounded-lg shadow-lg"
                            initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                            transition={{
                                duration: 1,
                                delay: index * 0.2,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                <span className="text-yellow-500 text-sm font-semibold mb-2">
                                    {project.location}
                                </span>
                                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-200 text-sm">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;

