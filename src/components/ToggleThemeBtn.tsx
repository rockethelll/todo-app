import { useContext } from "react";
import { ThemeContext } from "../context/ToggleThemeContext";

const ToggleThemeBtn = () => {
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  if (!ThemeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider')
  }

  return (
    <button onClick={toggleTheme}>TOGGLE {darkMode ? 'LIGHT' : 'DARK' } </button>
  )
};

export default ToggleThemeBtn;