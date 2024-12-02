import { motion } from "framer-motion";
import { Building2, Clock, Hammer, PaintRollerIcon, Users } from "lucide-react";

const services = [
    {
        icon: Building2,
        title: "Commercial Construction",
        description:
            "State-of-the-art commercial buildings, offices, and retail spaces built to your specifications.",
    },
    {
        icon: Hammer,
        title: "Residential Projects",
        description:
            "Custom homes and residential developments that exceed expectations.",
    },
    {
        icon: Users,
        title: "Project Management",
        description:
            "Expert project management ensuring timely completion and budget adherence.",
    },
    {
        icon: Clock,
        title: "Renovations",
        description:
            "Modernize and transform existing structures with our renovation services.",
    },
    {
        icon: PaintRollerIcon,
        title: "Interior",
        description:
            "Revitalize and enhance your space with our expert interior design services.",
    },
];

const Services = () => {
    return (
        <section id="services" className="pb-20 pt-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#ffc13b] mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl max-w-2xl mx-auto">
                        Comprehensive construction solutions tailored to your needs
                    </p>
                </motion.div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, id) => (
                        <motion.div
                            key={id}
                            className="group p-6 bg-white hover:bg-[#ffc13b] hover:transition-colors hover:duration-500 border-[1px] hover:border-yellow-500 shadow-md hover:shadow-lg cursor-pointer rounded-md"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                delay: id * 0.2,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                        >
                            <service.icon className="h-12 w-12 text-[#ffc13b] mb-4 group-hover:text-white group-hover:transition-colors group-hover:duration-500" />
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-500 group-hover:text-gray-700">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
