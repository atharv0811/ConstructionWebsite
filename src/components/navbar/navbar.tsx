import { useState } from "react";
import { NavLink } from "react-router-dom";
import QuoteModal from "./quote-modal";
import DesktopNav from "./desktop-nav";
import { MobileMenuButton, MobileNavLink } from "./mobile-nav";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <nav className="w-full sticky bg-[#25200e] shadow-lg top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center">
                            <NavLink to="/">
                                <img src="/img/logo.png" alt="logo" className="h-28" />
                            </NavLink>
                        </div>
                        <DesktopNav setIsModalOpen={setIsModalOpen} />
                        <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                </div>
                <div
                    className={`md:hidden overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? "max-h-[42vh] border-t" : "max-h-0"}`}
                    style={{ height: isOpen ? "calc(100vh - 80px)" : "0" }} // Adjust to viewport height
                >
                    <div className="px-2 py-3">
                        <div className="space-y-1 transform transition-all duration-300 ease-in-out">
                            <MobileNavLink href="/" setIsOpen={setIsOpen}>
                                HOME
                            </MobileNavLink>
                            <MobileNavLink href="/projects" setIsOpen={setIsOpen}>
                                PROJECTS
                            </MobileNavLink>
                            <MobileNavLink href="/interior" setIsOpen={setIsOpen}>
                                INTERIOR
                            </MobileNavLink>
                            <MobileNavLink href="/designs" setIsOpen={setIsOpen}>
                                DESIGNS
                            </MobileNavLink>
                            <MobileNavLink href="/contact" setIsOpen={setIsOpen}>
                                CONTACT
                            </MobileNavLink>
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

export default Navbar;