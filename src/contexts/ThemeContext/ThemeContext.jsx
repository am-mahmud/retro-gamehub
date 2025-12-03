import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved || 'light'; 
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