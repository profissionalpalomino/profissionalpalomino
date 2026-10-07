import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Detecta tema atual da classe html ou localStorage
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Padrão dark
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (typeof (window as unknown as { trackEvent: (type: string, name?: string) => void }).trackEvent === "function") {
      (window as unknown as { trackEvent: (type: string, name?: string) => void }).trackEvent("click", `theme_to_${nextTheme}`);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      data-track={`toggle_theme_${theme}`}
      aria-label={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
      title={theme === "dark" ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
      className={`relative inline-flex items-center justify-center p-2 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 ${
        theme === "dark"
          ? "border-white/15 bg-white/[0.05] text-amber-300 hover:bg-white/10 hover:border-amber-400/40 hover:text-amber-200"
          : "border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900"
      } ${className || ""}`}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 hover:-rotate-12" />
      )}
      <span className="sr-only">Alternar tema</span>
    </button>
  );
}

export default ThemeToggle;
