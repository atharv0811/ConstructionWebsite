import { NavLink } from "react-router-dom";

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

// Mobile Navigation Links
interface MobileNavLinkProps {
    href: string;
    children: React.ReactNode;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, setIsOpen }) => {
    return (
        <NavLink
            to={href}
            onClick={() => setIsOpen(false)} // Close the menu when clicked
            className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out ${isActive ? "text-yellow-500" : "text-gray-200 hover:bg-gray-50 hover:text-gray-800"
                }`
            }
        >
            {children}
        </NavLink>
    );
};

export { MobileMenuButton, MobileNavLink }