"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import ThemeSwitcher from "./home/ThemeSwitcher";
import Time from "./home/Time";
import { HeaderButtonsProps } from "./home/HeaderButtons";
import LangButton from "./home/LangButton";

interface ButtonsOnScrollProps extends HeaderButtonsProps {
  isActive: string | null;
  setIsActive: Dispatch<SetStateAction<string | null>>;
}

export default function ButtonsOnScroll({
  isActive,
  setIsActive,
  lightLabel,
  darkLabel,
  systemLabel
}: ButtonsOnScrollProps) {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollValue(window.scrollY);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isScrollDown = scrollValue > 70;

  return (
    <div
      className={`flex items-center gap-2 fixed ${
        isScrollDown
          ? "top-4 translate-y-0"
          : "top-0 -translate-y-full opacity-30 overflow-hidden"
      } right-[24px] border border-slate-200 dark:border-slate-500 py-2 px-3 rounded-full bg-background/80 z-50 transition-transform duration-300 shadow`}
    >
      <Time />
      <span className="h-6 w-[1px] bg-slate-200 dark:bg-slate-500"></span>
      <LangButton />
      <ThemeSwitcher
        isActive={isActive}
        setIsActive={setIsActive}
        lightLabel={lightLabel}
        darkLabel={darkLabel}
        systemLabel={systemLabel}
      />
    </div>
  );
}
