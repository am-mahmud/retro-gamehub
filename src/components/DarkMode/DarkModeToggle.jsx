import React, { use } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import { IoMoon, IoSunny } from "react-icons/io5";
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = use(ThemeContext);

    return (
        <motion.button
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-16 h-8 border-2 border-black dark:border-cyan-400 rounded-full
                     bg-gray-200 dark:bg-gray-700 transition-colors overflow-hidden"
            aria-label="Toggle dark mode"
        >
         
            <motion.div
                animate={{
                    x: isDarkMode ? '100%' : '0%',
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                }}
                className="absolute inset-0 w-1/2 bg-orange-400"
            />

          
            <motion.div
                animate={{
                    x: isDarkMode ? 28 : 2,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                }}
                className="absolute top-1 w-6 h-6 rounded-full bg-white border-2 border-black dark:border-cyan-400 
                         flex items-center justify-center z-10"
            >
                {isDarkMode ? (
                    <IoMoon className="text-xs text-purple-600" />
                ) : (
                    <IoSunny className="text-xs text-yellow-500" />
                )}
            </motion.div>
        </motion.button>
    );
};

export default DarkModeToggle;