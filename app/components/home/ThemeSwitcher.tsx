"use client";

import { Moon, Sun, Desktop } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export default function ThemeSwitcher() {
  const [showOptions, setShowOptions] = useState(false);
  const [theme, setTheme] = useState<Theme | null | string>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    setTheme(savedTheme || systemTheme);

    const html = document.querySelector("html");

    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      !("theme" in localStorage)
    ) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  }, [theme]);

  function changeTheme(selectedTheme: Theme) {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  }

  return (
    <>
      <div
        className="text-slate-100 rounded-full border border-slate-400 h-7 w-7 grid place-items-center"
        onClick={() => setShowOptions((prevState) => !prevState)}
      >
        {theme === "light" && <Sun size={20} />}
        {theme === "dark" && <Moon size={20} />}
        {theme === "system" && <Desktop size={20} />}
      </div>

      <div
        className={`absolute flex gap-2 ${
          showOptions ? "block" : "hidden"
        } top-10`}
      >
        <span onClick={() => changeTheme("light")}>Light</span>
        <span onClick={() => changeTheme("dark")}>Dark</span>
        <span onClick={() => changeTheme("system")}>System preference</span>
      </div>
    </>
  );
}
