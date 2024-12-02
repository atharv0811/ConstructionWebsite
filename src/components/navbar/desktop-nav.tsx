import { NavLink } from "react-router-dom";

interface DesktopNavProps {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ setIsModalOpen }) => {
    return (
        <div className="hidden md:flex items-center space-x-8 relative">
            <Nav href="/">HOME</Nav>
            <Nav href="/projects">PROJECTS</Nav>
            <Nav href="/interior">INTERIOR</Nav>
            <Nav href="/designs">DESIGNS</Nav>
            <Nav href="/contact">CONTACT</Nav>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-500 text-black px-6 py-7 font-semibold hover:bg-yellow-600 transition-colors"
            >
                GET A QUOTE
            </button>
        </div>
    );
};

const Nav = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                `flex items-center space-x-1 font-medium transition-colors ${isActive ? "text-yellow-500" : "text-gray-200 hover:text-yellow-500"}`
            }
        >
            <span>{children}</span>
        </NavLink>
    );
};

export default DesktopNav