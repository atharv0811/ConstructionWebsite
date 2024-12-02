import { motion } from "framer-motion";
import { maps } from '../data/designs'
import { useState } from "react";
import { X } from "lucide-react";

const MapDesigns = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (img: string) => {
        setSelectedImage(img);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    return (
        <motion.section
            id="projects"
            className="py-16 bg-gray-100"
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#ffc13b] mb-4">Latest Designs [Maps]</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Showcasing our maps made for our projects
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {maps.map((map, index) => (
                        <motion.div
                            key={index}
                            className="group relative overflow-hidden rounded-lg shadow-lg border border-gray-400"
                            initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            onClick={() => openModal(map.img)}
                        >
                            <img
                                src={map.img}
                                alt={map.title}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-screen overflow-y-auto p-4"
                        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">Image Preview</h2>
                            <button
                                className="text-white bg-[#ffc13b] hover:bg-[#cb9a2f] focus:ring-2 focus:ring-[#cb9a2f] focus:outline-none p-2 rounded-full"
                                onClick={closeModal}
                            >
                                <X />
                            </button>
                        </div>
                        <img
                            src={selectedImage}
                            alt="Selected Design"
                            className="w-full h-auto rounded-lg mb-4"
                        />
                    </div>
                </div>
            )}
        </motion.section>
    )
}

export default MapDesigns