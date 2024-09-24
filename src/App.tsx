import ToggleThemeBtn from './components/ToggleThemeBtn';
import { useContext } from 'react';
import { ThemeContext } from './context/ToggleThemeContext';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className='relative w-full h-screen px-6 py-12 bg-primary'>
      <div
        className={`h-[200px] md:h-[250px] w-full bg-primary bg-no-repeat bg-cover absolute top-0 left-0 pt-12 px-6 ${
          isDarkMode
            ? 'bg-[url("/images/bg-mobile-dark.jpg")] sm:bg-[url("/images/bg-desktop-dark.jpg")]'
            : 'bg-[url("/images/bg-mobile-light.jpg")] sm:bg-[url("/images/bg-desktop-light.jpg")]'
        }`}
      >
        <div className='flex justify-between text-white'>
          <h1 className='tracking-[0.5rem] '>TODO</h1>
        <ToggleThemeBtn />
        </div>
      </div>
    </div>
  );
}

export default App;
