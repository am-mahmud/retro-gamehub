import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved;
        
       
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        return 'light';
    });

    useEffect(() => {
        const root = document.documentElement;
        
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleChange = (e) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };
        
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleDarkMode = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const setLightMode = () => {
        setTheme('light');
    };

    const setDarkMode = () => {
        setTheme('dark');
    };

    const value = {
        theme,
        isDarkMode: theme === 'dark',
        toggleDarkMode,
        setLightMode,
        setDarkMode,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};



// import { createContext, useState, useEffect } from 'react';

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState(() => {
//         const saved = localStorage.getItem('theme');
//         console.log('Initial theme from localStorage:', saved); // DEBUG
//         return saved || 'light'; 
//     });

//     useEffect(() => {
//         const root = document.documentElement;
        
//         console.log('Theme changed to:', theme); 
//         console.log('Root element:', root); // DEBUG
        
//         if (theme === 'dark') {
//             root.classList.add('dark');
//             console.log('Added dark class. Classes:', root.className); 
//         } else {
//             root.classList.remove('dark');
//             console.log('Removed dark class. Classes:', root.className); 
//         }
        
//         localStorage.setItem('theme', theme);
//     }, [theme]);

//     const toggleDarkMode = () => {
//         console.log('Toggle clicked!'); 
//         setTheme(prev => {
//             const newTheme = prev === 'light' ? 'dark' : 'light';
//             console.log('Switching from', prev, 'to', newTheme); 
//             return newTheme;
//         });
//     };

//     const value = {
//         theme,
//         isDarkMode: theme === 'dark',
//         toggleDarkMode,
//     };

//     return (
//         <ThemeContext.Provider value={value}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };