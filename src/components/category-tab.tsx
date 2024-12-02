import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CategoryTabProps {
    category: string;
    isSelected: boolean;
    onClick: () => void;
}

export const CategoryTab: React.FC<CategoryTabProps> = ({
    category,
    isSelected,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                'relative px-3 md:px-6 py-1 md:py-3 text-xs md:text-sm font-medium transition-colors duration-200',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400',
                isSelected ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
            )}
        >
            {isSelected && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-yellow-500 rounded-lg shadow-lg"
                    initial={false}
                    transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                />
            )}
            <span className="relative z-10">
                {category.replace("-", " ").toUpperCase()}
            </span>
        </button>
    );
};