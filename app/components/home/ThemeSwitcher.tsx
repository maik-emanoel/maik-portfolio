  "use client";

  import { Moon, Sun, Desktop } from "@phosphor-icons/react/dist/ssr";
  import { useEffect, useRef, useState } from "react";

  type Theme = "light" | "dark";
  type Options = "light" | "dark" | "system";

  export default function ThemeSwitcher() {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Options | null>(null);
    const [theme, setTheme] = useState<Theme | null>(null);

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    let newTheme = useRef<Theme | null>(null)

    useEffect(() => {
      const savedThemeOpt = localStorage.getItem('themeOption') as Options
      const savedTheme = localStorage.getItem('theme') as Theme

      setSelectedOption(savedThemeOpt || 'dark')
      setTheme(savedTheme || 'dark')
    }, [])

    useEffect(() => {
      const systemThemeChangeHandler = (event: MediaQueryListEvent) => {
        if (event.matches) {
          setTheme("dark");
          newTheme.current = 'dark'
          localStorage.setItem('theme', newTheme.current)
        } else {
          setTheme("light");
          newTheme.current = 'light'
          localStorage.setItem('theme', newTheme.current)
        }
      };

      if (selectedOption === "system") {
        systemTheme.addEventListener("change", systemThemeChangeHandler);
        return () => {
          systemTheme.removeEventListener("change", systemThemeChangeHandler);
        };
      } else {
        return systemTheme.removeEventListener("change", systemThemeChangeHandler);
      }
    }, [selectedOption, systemTheme]);

    useEffect(() => {
      const html = document.querySelector("html");

      if (theme === "dark") {
        html?.classList.add("dark");
      } else {
        html?.classList.remove("dark");
      }
    }, [selectedOption, theme]);

    function changeOption(selectedOption: Options) {
      if (selectedOption === "system") {
        setTheme(systemTheme.matches ? "dark" : "light");
        newTheme.current = systemTheme.matches ? "dark" : "light"
      } else if (selectedOption === "light") {
        setTheme("light");
        newTheme.current = 'light'
      } else {
        setTheme("dark");
        newTheme.current = 'dark'
      }

      setSelectedOption(selectedOption);
      localStorage.setItem('themeOption', selectedOption)
      localStorage.setItem('theme', newTheme.current)
    }

    return (
      <>
        <div
          className="text-primary rounded-full border border-muted h-7 w-7 grid place-items-center"
          onClick={() => setShowOptions((prevState) => !prevState)}
        >
          {selectedOption === "light" && <Sun size={20} />}
          {selectedOption === "dark" && <Moon size={20} />}
          {selectedOption === "system" && <Desktop size={20} />}
        </div>

        <div
          className={`absolute flex gap-2 ${
            showOptions ? "block" : "hidden"
          } top-10`}
        >
          <span onClick={() => changeOption("light")}>Light</span>
          <span onClick={() => changeOption("dark")}>Dark</span>
          <span onClick={() => changeOption("system")}>System preference</span>
        </div>
      </>
    );
  }
