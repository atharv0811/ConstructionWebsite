import { motion } from "framer-motion";
import {
    ArrowRight,
    Building2,
    Calendar,
    Smile,
    UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
    {
        id: 1,
        icon: <Building2 className="size-14 text-[#ffc13b]" />,
        value: "15+",
        description: "Successfully Project Finished.",
    },
    {
        id: 2,
        icon: <Calendar className="size-14 text-[#ffc13b]" />,
        value: "2+",
        description: "Years of experience with proud.",
    },
    {
        id: 3,
        icon: <Smile className="size-14 text-[#ffc13b]" />,
        value: "100+",
        description: "Happy Customers.",
    },
    {
        id: 4,
        icon: <UserRound className="size-14 text-[#ffc13b]" />,
        value: "50+",
        description: "Colleagues & counting more daily.",
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: 90 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3,
            duration: 1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

const About = () => {
    return (
        <div id="about" className="relative -mt-20">
            <motion.div
                className="flex flex-col xl:flex-row mx-5 md:mx-10 lg:mx-20 mb-10 shadow-lg h-auto xl:h-[25rem]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {/* Left Section */}
                <motion.div
                    className="bg-[#ffc13b] w-full xl:w-[40%] bg-no-repeat bg-right-bottom flex flex-col items-start p-5"
                    style={{ backgroundImage: "url('/img/trophy.png')" }}
                    variants={itemVariants}
                >
                    <div className="mt-5 mx-5 md:ms-10">
                        <p className="font-bold mb-3">Our proud</p>
                        <h1 className="font-bold text-3xl mb-8">
                            2 years of undefeated success
                        </h1>
                        <p className="mb-10">
                            We have a long and proud history giving emphasis to environment
                            social and economic outcomes to deliver places that respond.
                        </p>
                        <button className="bg-[#343a40] py-[16px] px-[35px] text-white text-[16px] font-bold">
                            <Link to={'/contact'} className="flex items-center">
                                Work with us <ArrowRight className="ml-2" />
                            </Link>
                        </button>
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    className="bg-white w-full xl:w-[60%] flex items-center"
                    variants={itemVariants}
                >
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-14 px-5 bg-white mx-8 py-10"
                        variants={containerVariants}
                    >
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.id}
                                className="flex space-x-8"
                                variants={itemVariants}
                            >
                                {stat.icon}
                                <div className="space-y-3">
                                    <span className="text-4xl font-extrabold">
                                        {stat.value}
                                    </span>
                                    <p>{stat.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
