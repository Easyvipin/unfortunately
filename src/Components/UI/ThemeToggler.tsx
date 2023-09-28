// ThemeToggler.tsx
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggler: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full ${
          theme === "light" ? "bg-indigo-600" : "bg-gray-200"
        }`}
      >
        {theme === "light" ? (
          <FaSun className="text-white" />
        ) : (
          <FaSun className="text-gray-800" />
        )}
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full ${
          theme === "dark" ? "bg-indigo-600" : "bg-gray-200"
        }`}
      >
        {theme === "dark" ? (
          <FaMoon className="text-white" />
        ) : (
          <FaMoon className="text-gray-800" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggler;
