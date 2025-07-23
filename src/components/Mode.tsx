import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Mode() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Load initial mode from localStorage
    const savedMode = localStorage.getItem("theme");
    const isLightMode = savedMode === "light";
    setIsLight(isLightMode);
    document.body.classList.toggle("dark", !isLightMode);
  }, []);

  const handleMode = () => {
    const newMode = !isLight;
    setIsLight(newMode);
    const body = document.body;

    if (newMode) {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={handleMode}
      className="text-primary hover:text-hover transition-colors duration-300 w-8 h-8"
      aria-label="Toggle theme"
    >
      {isLight ? <Moon /> : <Sun />}
    </button>
  );
}
