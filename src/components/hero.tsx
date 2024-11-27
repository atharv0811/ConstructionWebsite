import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import About from "./about";

const Hero = () => {
    const buttonVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, delay: 0.5, ease: "easeOut" },
        },
    };

    return (
        <>
            <div
                id="home"
                className="relative h-[100vh] bg-no-repeat bg-cover bg-center flex items-center"
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
                        {/* <HeroButton variant="primary" href="/services">
                            OUR SERVICES
                        </HeroButton> */}
                        <HeroButton variant="primary" href="/contact">
                            CONTACT US
                        </HeroButton>
                    </motion.div>
                </motion.div>
            </div>
            <About />
        </>
    );
};

interface HeroButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    href: string;
}

function HeroButton({ children, variant = "primary", href }: HeroButtonProps) {
    const baseStyles =
        "px-8 py-3 font-semibold flex items-center gap-2 transition-colors";
    const variants = {
        primary: "bg-yellow-500 text-black hover:bg-yellow-600",
        secondary: "border-2 border-white text-white hover:bg-white hover:text-black",
    };

    const isInternalLink = href.startsWith("/");

    return isInternalLink ? (
        <NavLink
            to={href}
            className={`${baseStyles} ${variants[variant]}`}
        >
            {children} <ArrowRight size={20} />
        </NavLink>
    ) : (
        <a
            href={href}
            className={`${baseStyles} ${variants[variant]}`}
        >
            {children} <ArrowRight size={20} />
        </a>
    );
}

export default Hero;
