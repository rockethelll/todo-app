import { useContext } from 'react';

import { ThemeContext } from '../context/ToggleThemeContext';
import ToggleThemeBtn from './ToggleThemeBtn';

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`h-[200px] md:h-[250px] w-full bg-primary bg-no-repeat bg-cover absolute top-0 left-0 px-6 ${
        isDarkMode
          ? 'bg-[url("/images/bg-mobile-dark.jpg")] sm:bg-[url("/images/bg-desktop-dark.jpg")]'
          : 'bg-[url("/images/bg-mobile-light.jpg")] sm:bg-[url("/images/bg-desktop-light.jpg")]'
      }`}
    >
      <div className='flex justify-between pt-12 text-white'>
        <h1 className='tracking-[0.5rem] '>TODO</h1>
        <ToggleThemeBtn />
      </div>
    </div>
  );
};

export default Header;
// {
//   'react-hooks': reactHooks,
//   'react-refresh': reactRefresh,
// },
