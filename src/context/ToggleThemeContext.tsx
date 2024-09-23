import { createContext, ReactNode, useState, useMemo, useEffect } from 'react';

type ThemeContextProps = {
  toggleTheme: () => void;
  darkMode: boolean;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextProps>({
  toggleTheme: () => {},
  darkMode: false,
});

export default function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  // Retrieve initial theme from localStorage or prefers-color-scheme
  const getInitialTheme = () => {
    // const savedTheme = localStorage.getItem('darkMode');
    // if (savedTheme !== null) {
    //   return JSON.parse(savedTheme);
    // }
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // return prefersDark;
    return false
  };

  const [darkMode, setDarkMode] = useState<boolean>(getInitialTheme);

  // Toggle the theme and save the preference in localStorage
  const toggleTheme = useMemo(() => {
    return () => {
      setDarkMode((prevMode) => {
        const newMode = !prevMode;
        // localStorage.setItem('darkMode', JSON.stringify(newMode));
        return newMode;
      });
    };
  }, []);

  // Apply or remove the 'dark' class from the body based on the darkMode state
  useEffect(() => {
    const className = 'dark';
    const bodyClass = document.body.classList;

    if (darkMode) {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  }, [darkMode]);

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => ({ toggleTheme, darkMode }), [toggleTheme, darkMode]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}