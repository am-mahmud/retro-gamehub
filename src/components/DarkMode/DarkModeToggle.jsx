// import React, { use } from 'react';
// import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';

// const DarkModeToggle = () => {
//     const { isDarkMode, toggleDarkMode } = use(ThemeContext);

//     return (
//         <button
//             onClick={toggleDarkMode}
//             className="px-2 py-1.5 sm:px-4 sm:py-2 
//                      border-2 border-black dark:border-cyan-400 
//                      bg-white dark:bg-gray-800 
//                      font-bold space-mono text-xs sm:text-sm uppercase tracking-wider
//                      hover:bg-orange-400 dark:hover:bg-[#00D9FF]
//                      hover:text-white dark:hover:text-black
//                      transition-all dark:text-white whitespace-nowrap"
//             aria-label="Toggle dark mode"
//         >
//             {isDarkMode ? 'LIGHT' : 'DARK'}
//         </button>
//     );
// };

// export default DarkModeToggle;


import React, { use } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = use(ThemeContext);

    // Add this to debug
    console.log('Current theme:', isDarkMode ? 'DARK' : 'LIGHT');

    return (
        <button
            onClick={() => {
                console.log('Toggle clicked!'); // Debug
                toggleDarkMode();
            }}
            className="px-2 py-1.5 sm:px-4 sm:py-2 
                     border-2 border-black dark:border-cyan-400 
                     bg-white dark:bg-gray-800 
                     font-bold space-mono text-xs sm:text-sm uppercase tracking-wider
                     hover:bg-orange-400 dark:hover:bg-[#00D9FF]
                     hover:text-white dark:hover:text-black
                     transition-all dark:text-white whitespace-nowrap"
            aria-label="Toggle dark mode"
        >
            {isDarkMode ? 'LIGHT' : 'DARK'}
        </button>
    );
};

export default DarkModeToggle;