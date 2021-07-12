import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import useDarkTheme from "../../hooks/useDarkTheme";

function ThemeToggle() {
  const [theme, setTheme] = useDarkTheme();
  return (
    <>
      <div>
        {theme === "light" && (
          <span className="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            🌙
          </span>
        )}
        {theme === "dark" && (
          <span className="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            🌘
          </span>
        )}
      </div>
    </>
  );
}

export default ThemeToggle;
