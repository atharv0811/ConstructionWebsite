import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto px-6">
                {/* Animated Heading Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#ffc13b] mb-4">
                        Get in Touch with Us
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
                        Here to Help, Ready to Listen, Committed to You
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Animated Contact Details */}
                    <motion.div
                        className="mx-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-2xl font-bold">Continental Constructions</h1>
                        <div className="flex flex-col md:flex-row my-5 gap-5">
                            <div className="space-y-5">
                                <h3 className="text-2xl font-bold text-gray-600">Address</h3>
                                <p className="text-gray-500 text-lg">
                                    Aathvdi bazar in front of Police Station,<br />
                                    First floor, Shop no. 2, Murtjapur, <br />
                                    Dist - Akola
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-2xl font-bold text-gray-600">Phone</h1>
                                <p className="text-gray-500 text-lg">+91-7517657553</p>
                                <p className="text-gray-500 text-lg">+91-8788396578</p>
                                <h1 className="text-2xl font-bold text-gray-600">Email</h1>
                                <p className="text-gray-500 text-lg">builderscontinental7@gmail.com</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Animated Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15174.36816847619!2d72.99548895990337!3d18.04412682767421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84b4b002b96c1%3A0x87024786ae488032!2sR.%20N.%20Raut%20Highschool%20And%20Jr.%20College!5e0!3m2!1sen!2sin!4v1732530050687!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg shadow-md"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
