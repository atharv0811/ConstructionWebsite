import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <nav className="bg-[#25200e] shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        <Logo />
                        <DesktopNav setIsModalOpen={setIsModalOpen} />
                        <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                </div>
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] border-t" : "max-h-0"}`}
                >
                    <div className="px-2 py-3">
                        <div className="space-y-1 transform transition-all duration-300 ease-in-out">
                            <MobileNavLink href="/" setIsOpen={setIsOpen}>HOME</MobileNavLink>
                            <MobileNavLink href="/projects" setIsOpen={setIsOpen}>PROJECTS</MobileNavLink>
                            <MobileNavLink href="/contact" setIsOpen={setIsOpen}>CONTACT</MobileNavLink>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full bg-yellow-500 text-black font-semibold text-lg py-3 rounded-full shadow-md hover:bg-yellow-600 transition-all duration-300"
                            >
                                GET A QUOTE
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Modal */}
            {isModalOpen && <QuoteModal setIsModalOpen={setIsModalOpen} />}
        </>
    );
};

const Logo: React.FC = () => {
    return (
        <div className="flex items-center">
            <NavLink to="/">
                <img src="/img/logo.png" alt="logo" className="h-28" />
            </NavLink>
        </div>
    );
};

interface DesktopNavProps {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ setIsModalOpen }) => {
    return (
        <div className="hidden md:flex items-center space-x-8">
            <Nav href="/">HOME</Nav>
            <Nav href="/projects">PROJECTS</Nav>
            <Nav href="/contact">CONTACT</Nav>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-500 text-black px-6 py-4 lg:py-7 font-semibold hover:bg-yellow-600 transition-colors"
            >
                GET A QUOTE
            </button>
        </div>
    );
};

interface NavProps {
    href: string;
    children: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({ href, children }) => {
    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                `flex items-center space-x-1 font-medium transition-colors ${isActive ? "text-yellow-500" : "text-gray-200 hover:text-yellow-500"}`}
        >
            <span>{children}</span>
        </NavLink>
    );
};

interface MobileMenuButtonProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, setIsOpen }) => {
    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-yellow-500 hover:text-yellow-300 transition-colors focus:outline-none"
        >
            <svg
                className="h-6 w-6 transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0)" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
            </svg>
        </button>
    );
};

interface MobileNavLinkProps {
    href: string;
    children: React.ReactNode;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, setIsOpen }) => {
    return (
        <NavLink
            to={href}
            onClick={() => setIsOpen(false)}  // Close the menu when clicked
            className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out ${isActive
                    ? "text-yellow-500"
                    : "text-gray-200 hover:bg-gray-50 hover:text-gray-800"
                }`
            }
        >
            {children}
        </NavLink>
    );
};

interface QuoteModalProps {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ setIsModalOpen }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div
                className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-out scale-100"
                style={{ animation: "fadeIn 0.3s ease-in-out" }}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <h2 className="text-xl font-bold mb-4">Get a Quote</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full h-24 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Navbar;
