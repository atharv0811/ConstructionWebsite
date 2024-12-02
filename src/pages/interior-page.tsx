import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from '../data/interior-projects'
import { CategoryTab } from "../components/category-tab";

type Category = "living-room" | "bedroom" | "kitchen" | "dining";

type Project = {
    id: number;
    title: string;
    image: string;
};

const InteriorPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>("living-room");

    return (
        <section className="py-5 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Tabs for Categories */}
                <div className="flex justify-center mb-6 gap-5">
                    {Object.keys(projects).map((category) => (
                        <CategoryTab
                            key={category}
                            category={category}
                            isSelected={selectedCategory === category}
                            onClick={() => setSelectedCategory(category as Category)}
                        />
                    ))}
                </div>

                {/* Project Cards */}
                <motion.div
                    key={selectedCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects[selectedCategory].map((project: Project) => (
                        <motion.div
                            key={project.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default InteriorPage;
