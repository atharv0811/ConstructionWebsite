import { motion } from "framer-motion";

const CoreValues = () => {
    const coreValues = [
        {
            title: "QUALITY",
            icon: "/svg/quality.svg",
            points: [
                "Best in class materials and fixtures, for a premium finish.",
                "A balance between utility and aesthetics.",
                "Methodically selected and trained workforce.",
            ],
        },
        {
            title: "LATEST DESIGNS",
            icon: "/svg/design.svg",
            points: [
                "Innovative architectural concepts blending functionality with aesthetics.",
                "Sustainable and eco-friendly designs for a greener tomorrow.",
                "Customized layouts tailored to client preferences and modern trends.",
            ],
        },
        {
            title: "TIMELY DELIVERY",
            icon: "/svg/time.svg",
            points: [
                "Projects planned factoring contingency for potential delays.",
                "Milestone checkpoints for meticulous quality checks.",
                "Guaranteed satisfaction with unparalleled service.",
            ],
        },
        {
            title: "SUPPORT",
            icon: "/svg/support.svg",
            points: [
                "Even after handover, we are open for your special requests.",
                "Customer interactions help us keep improving.",
                "Well-trained staff achieve best support services.",
            ],
        },
    ];

    return (
        <div className="py-16">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#ffc13b] mb-4">
                        Our Core Values
                    </h2>
                    <p className="text-xl max-w-2xl mx-auto">
                        Built on Quality, Secured with Trust, Delivered on Time
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-xl p-8 text-center border"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={value.icon}
                                alt={value.title}
                                className="w-16 h-16 mx-auto mb-4"
                            />
                            <h3 className="text-lg font-bold mb-6">{value.title}</h3>
                            <ol className="text-sm text-gray-700 space-y-3 text-left">
                                {value.points.map((point, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                        {idx + 1}. {point}
                                    </li>
                                ))}
                            </ol>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoreValues;

