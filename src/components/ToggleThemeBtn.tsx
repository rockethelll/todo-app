import { useContext } from 'react';

import { ThemeContext } from '../context/ToggleThemeContext';

const ToggleThemeBtn = () => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  if (!ThemeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  return (
    <button onClick={toggleTheme} data-testid='toggle-theme' className='w-5 sm:w-10'>
      {isDarkMode ? (
        <img
          src='/images/icon-sun.svg'
          alt='Sun logo for dark mode'
          className='hover:animate-circle'
        />
      ) : (
        <img
          src='/images/icon-moon.svg'
          alt='Moon logo for light mode'
          className='hover:animate-circle'
        />
      )}
    </button>
  );
};

export default ToggleThemeBtn;
