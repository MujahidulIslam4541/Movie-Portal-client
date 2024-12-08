import { useEffect, useState } from "react";


const ThemeContoler = () => {

        const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
      
        const handleThemeToggle = () => {
          const newTheme = theme === "light" ? "dark" : "light";
          setTheme(newTheme);
          localStorage.setItem("theme", newTheme);
          document.documentElement.setAttribute("data-theme", newTheme);
        };
      

        useEffect(() => {
          document.documentElement.setAttribute("data-theme", theme);
        }, [theme]);
    return (
        <button
        className="btn btn-ghost"
        onClick={handleThemeToggle}
      >
        {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    );
};

export default ThemeContoler;