import { useContext } from 'react';
import { ThemeContext } from '../context/ToggleThemeContext';

const ToggleThemeBtn = () => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  if (!ThemeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? (
        <img src='/images/icon-sun.svg' alt='Sun logo for dark mode' />
      ) : (
        <img src='/images/icon-moon.svg' alt='Moon logo for light mode' />
      )}
    </button>
  );
};

export default ToggleThemeBtn;
