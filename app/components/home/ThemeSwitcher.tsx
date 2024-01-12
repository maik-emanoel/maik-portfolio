"use client";

import { Moon, Sun, Desktop, Check, IconProps } from "@phosphor-icons/react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Options, Theme } from "./HeaderButtons";

interface ThemeSwitcherProps {
  selectedOption: Options | null;
  setSelectedOption: Dispatch<SetStateAction<Options | null>>;
  theme: Theme | null;
  setTheme: Dispatch<SetStateAction<Theme | null>>;
  isActive: Options | null;
  setIsActive: Dispatch<SetStateAction<Options | null>>;
}

export default function ThemeSwitcher({
  selectedOption,
  setSelectedOption,
  theme,
  setTheme,
  isActive,
  setIsActive,
}: ThemeSwitcherProps) {
  const [showOptions, setShowOptions] = useState(false);
  let newTheme = useRef<Theme | null>(null);

  useEffect(() => {
    function onScroll() {
      setShowOptions(false);
    }
  
    if (showOptions) {
      window.addEventListener("scroll", onScroll);
    }
  
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [showOptions]);

  useEffect(() => {
    const savedThemeOpt = localStorage.getItem("themeOption") as Options;
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedActive = savedTheme;

    setSelectedOption(savedThemeOpt || "dark");
    setTheme(savedTheme || "dark");
    setIsActive(savedActive || "dark");
  }, [setIsActive, setSelectedOption, setTheme]);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

    const systemThemeChangeHandler = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setTheme("dark");
        newTheme.current = "dark";
        localStorage.setItem("theme", newTheme.current);
      } else {
        setTheme("light");
        newTheme.current = "light";
        localStorage.setItem("theme", newTheme.current);
      }
    };

    if (selectedOption === "system") {
      systemTheme.addEventListener("change", systemThemeChangeHandler);
      return () => {
        systemTheme.removeEventListener("change", systemThemeChangeHandler);
      };
    } else {
      return systemTheme.removeEventListener(
        "change",
        systemThemeChangeHandler
      );
    }
  }, [selectedOption, setTheme]);

  useEffect(() => {
    const html = document.querySelector("html");

    if (theme === "dark") {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  }, [theme]);

  function changeOption(selectedOption: Options) {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (selectedOption === "system") {
      setTheme(systemTheme.matches ? "dark" : "light");
      newTheme.current = systemTheme.matches ? "dark" : "light";
    } else if (selectedOption === "light") {
      setTheme("light");
      newTheme.current = "light";
    } else {
      setTheme("dark");
      newTheme.current = "dark";
    }

    setSelectedOption(selectedOption);
    localStorage.setItem("themeOption", selectedOption);
    localStorage.setItem("theme", newTheme.current);
  }

  return (
    <>
      <div
        className="text-primary rounded-full border border-slate-200 dark:border-muted h-7 w-7 grid place-items-center cursor-pointer hover:bg-primary/10"
        onClick={() => setShowOptions((prevState) => !prevState)}
      >
        {selectedOption === "light" && <Sun size={20} />}
        {selectedOption === "dark" && <Moon size={20} />}
        {selectedOption === "system" && <Desktop size={20} />}
      </div>

      <div
        className={`absolute top-12 right-0 z-50 bg-background/60 backdrop-blur-lg shadow-lg overflow-hidden ${
          showOptions ? "flex" : "hidden"
        } flex-col border border-slate-200 dark:border-slate-500 rounded-lg`}
      >
        <ThemeButton
          name="Light"
          icon={Sun}
          changeOption={() => {
            changeOption("light");
            setIsActive("light");
          }}
          isActive={isActive === "light"}
        />
        <ThemeButton
          name="Dark"
          icon={Moon}
          changeOption={() => {
            changeOption("dark");
            setIsActive("dark");
          }}
          isActive={isActive === "dark"}
        />
        <ThemeButton
          name="System"
          icon={Desktop}
          changeOption={() => {
            changeOption("system");
            setIsActive("system");
          }}
          isActive={isActive === "system"}
        />
      </div>
    </>
  );
}

interface ThemeButtonProps {
  name: string;
  icon: React.ElementType<IconProps>;
  changeOption: () => void;
  isActive: boolean;
}

function ThemeButton({
  name,
  icon: Icon,
  changeOption,
  isActive,
}: ThemeButtonProps) {
  return (
    <div
      onClick={changeOption}
      data-isactive={isActive}
      className="relative flex items-center justify-start gap-2 p-3 pr-10 cursor-pointer overflow-hidden select-none hover:bg-primary/10 data-[isactive=true]:text-blue-secondary"
    >
      <Icon size={20} />
      <span className="text-sm">{name}</span>
      {isActive && <Check size={14} className="absolute right-3" />}
    </div>
  );
}
