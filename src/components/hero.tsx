import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Autoplay } from 'swiper/modules';
import About from './about';

const Hero = () => {
    const buttonVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.5, ease: "easeOut" },
        },
    };
    return (
        <>
            <div className='relative z-0'>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div
                            id="home"
                            className="h-[100vh] bg-no-repeat bg-cover bg-center flex items-center"
                            style={{
                                backgroundImage: 'url("/img/background.png")',
                            }}
                        >
                            <motion.div
                                className="container mx-auto px-4 text-center text-white"
                                initial="hidden"
                                animate="visible"
                            >
                                <h2 className="text-2xl mb-4 text-yellow-500">Help you to</h2>
                                <motion.h1
                                    className="text-6xl font-bold mb-6"
                                    variants={{
                                        hidden: { opacity: 0, x: 100 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 1.2, ease: "easeOut" },
                                        },
                                    }}
                                >
                                    BUILD YOUR DREAM
                                </motion.h1>
                                <motion.p
                                    className="text-xl mb-8 max-w-3xl mx-auto"
                                    variants={{
                                        hidden: { opacity: 0, x: 100 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 1, delay: 0.2, ease: "easeOut" },
                                        },
                                    }}
                                >
                                    A successful project requires exceptional planning, innovative designs, and quality craftsmanship to achieve excellence and become a leader in the global construction industry.
                                </motion.p>
                                <motion.div
                                    className="flex justify-center gap-4 mb-8"
                                    variants={buttonVariants}
                                >
                                    <NavLink to='/contact' className='px-8 py-3 font-semibold bg-yellow-500 text-black hover:bg-yellow-600 flex items-center gap-2 transition-colors'>
                                        CONTACT US <ArrowRight size={20} />
                                    </NavLink>
                                </motion.div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            id="home"
                            className="relative h-[100vh] bg-no-repeat bg-cover bg-center flex items-center"
                            style={{
                                backgroundImage: 'url("/img/background2.png")',
                            }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <motion.div
                                className="relative container mx-auto px-4 text-center text-white"
                                initial="hidden"
                                animate="visible"
                            >
                                <h2 className="text-2xl mb-4 text-yellow-500">Help you to</h2>
                                <motion.h1
                                    className="text-6xl font-bold mb-6"
                                    variants={{
                                        hidden: { opacity: 0, x: 100 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 1.2, ease: "easeOut" },
                                        },
                                    }}
                                >
                                    CUSTOMIZE INTERIOR
                                </motion.h1>
                                <motion.p
                                    className="text-xl mb-8 max-w-3xl mx-auto"
                                    variants={{
                                        hidden: { opacity: 0, x: 100 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 1, delay: 0.2, ease: "easeOut" },
                                        },
                                    }}
                                >
                                    Transform your space with 100% customized interiors that bring your dream home to lifecrafted to reflect your unique style!
                                </motion.p>
                                <motion.div
                                    className="flex justify-center gap-4 mb-8"
                                    variants={buttonVariants}
                                >
                                    <NavLink to='/interior' className='px-8 py-3 font-semibold bg-yellow-500 text-black hover:bg-yellow-600 flex items-center gap-2 transition-colors'>
                                        VISIT NOW <ArrowRight size={20} />
                                    </NavLink>
                                </motion.div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            id="home"
                            className="relative h-[100vh] bg-no-repeat bg-cover bg-center flex items-center"
                            style={{
                                backgroundImage: 'url("/img/background3.png")',
                            }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <motion.div
                                className="relative container mx-auto px-4 text-center text-white"
                                initial="hidden"
                                animate="visible"
                            >
                                <h2 className="text-2xl mb-4 text-yellow-500">Transform Your Space with</h2>
                                <motion.h1
                                    className="text-6xl font-bold mb-6"
                                    variants={{
                                        hidden: { opacity: 0, x: 100 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 1.2, ease: "easeOut" },
                                        },
                                    }}
                                >
                                    Customized Windows, Steel Railings, and Furniture!
                                </motion.h1>
                                <motion.p
                                    className="text-xl mb-8 max-w-3xl mx-auto"
                                    variants={{
                                        hidden: { opacity: 0, x: 100 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 1, delay: 0.2, ease: "easeOut" },
                                        },
                                    }}
                                >
                                    Enhance your home with custom windows, steel railings, and furniture, crafted to reflect your unique style and functionality.
                                </motion.p>
                                <motion.div
                                    className="flex justify-center gap-4 mb-8"
                                    variants={buttonVariants}
                                >
                                    <NavLink to='/material' className='px-8 py-3 font-semibold bg-yellow-500 text-black hover:bg-yellow-600 flex items-center gap-2 transition-colors'>
                                        VISIT NOW <ArrowRight size={20} />
                                    </NavLink>
                                </motion.div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <About />
        </>
    )
}

export default Hero