"use client";

import {
  Moon,
  Sun,
  Desktop,
  Check,
  IconProps,
  CircleNotch,
} from "@phosphor-icons/react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { HeaderButtonsProps } from "./HeaderButtons";
import { useTheme } from "next-themes";
import { useIsTouchSupported } from "@/app/utils/touchUtils";

interface ThemeSwitcherProps extends HeaderButtonsProps {
  isActive: string | null;
  setIsActive: Dispatch<SetStateAction<string | null>>;
}

export default function ThemeSwitcher({
  isActive,
  setIsActive,
  lightLabel,
  darkLabel,
  systemLabel,
}: ThemeSwitcherProps) {
  const [showOptions, setShowOptions] = useState<null | boolean>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const themeOptionsRef = useRef<HTMLDivElement | null>(null);
  const isTouchSupported = useIsTouchSupported()

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (theme) setIsActive(theme);
  }, [setIsActive, theme]);

  useEffect(() => {
    function handleClickOutsideShowOptions(e: MouseEvent) {
      if (isTouchSupported) return setShowOptions(false)

      if (
        themeOptionsRef.current &&
        !themeOptionsRef.current?.contains(e.target as Node)
      )
        setShowOptions(false);
    }

    function onScroll() {
      setShowOptions(false);
    }

    if (showOptions) {
      window.addEventListener("scroll", onScroll);
    }

    setTimeout(() => {
      if (showOptions) {
        window.addEventListener("click", handleClickOutsideShowOptions);
      }
    }, 100);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", handleClickOutsideShowOptions);
    };
  }, [isTouchSupported, showOptions]);

  if (!mounted) {
    return (
      <div
        className="text-primary rounded-full border border-slate-200 dark:border-muted h-7 w-7 grid place-items-center cursor-pointer hover:bg-primary/10 animate-reveal"
        style={{
          animationDelay: "600ms",
        }}
        onClick={handleShowOptions}
      >
        <CircleNotch size={20} className="animate-spin" />
      </div>
    );
  }

  function changeOption(selectedOption: string) {
    setTheme(selectedOption);
  }

  function handleShowOptions() {
    setShowOptions((prevState) => !prevState);
  }

  return (
    <>
      <div
        className="text-primary rounded-full border border-slate-200 dark:border-muted h-7 w-7 grid place-items-center cursor-pointer hover:bg-primary/10"
        onClick={handleShowOptions}
      >
        {theme === "light" && <Sun size={20} />}
        {theme === "dark" && <Moon size={20} />}
        {theme === "system" && <Desktop size={20} />}
      </div>

      {showOptions !== null && (
        <div
          ref={themeOptionsRef}
          className={`absolute top-12 right-0 z-50 bg-background/60 backdrop-blur-lg shadow-lg overflow-hidden ${
            showOptions ? "flex animate-fadeIn" : "animate-fadeOut pointer-events-none"
          } flex-col border border-slate-200 dark:border-slate-500 rounded-lg`}
        >
          <ThemeButton
            name={lightLabel}
            icon={Sun}
            changeOption={() => {
              changeOption("light");
              setIsActive("light");
            }}
            isActive={isActive === "light"}
          />
          <ThemeButton
            name={darkLabel}
            icon={Moon}
            changeOption={() => {
              changeOption("dark");
              setIsActive("dark");
            }}
            isActive={isActive === "dark"}
          />
          <ThemeButton
            name={systemLabel}
            icon={Desktop}
            changeOption={() => {
              changeOption("system");
              setIsActive("system");
            }}
            isActive={isActive === "system"}
          />
        </div>
      )}
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
