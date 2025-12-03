import React, { use } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = use(ThemeContext);

    return (
        <button
            onClick={toggleDarkMode}
            className="px-4 py-2 border-2 border-black dark:border-cyan-400 
                     bg-white dark:bg-gray-800 
                     font-bold space-mono text-sm uppercase
                     hover:translate-x-0.5 hover:translate-y-0.5 
                     hover:shadow-[3px_3px_0px_black] dark:hover:shadow-[3px_3px_0px_#00D9FF]
                     transition-all dark:text-white"
            aria-label="Toggle dark mode"
        >
            {isDarkMode ? 'Light' : 'Dark'}
        </button>
    );
};

export default DarkModeToggle;