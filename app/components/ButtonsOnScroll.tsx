"use client";

import Image from "next/image";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import ThemeSwitcher from "./home/ThemeSwitcher";
import Time from "./home/Time";
import { Options, Theme } from "./home/HeaderButtons";

interface ButtonsOnScrollProps {
  selectedOption: Options | null;
  setSelectedOption: Dispatch<SetStateAction<Options | null>>;
  theme: Theme | null;
  setTheme: Dispatch<SetStateAction<Theme | null>>;
  isActive: Options | null;
  setIsActive: Dispatch<SetStateAction<Options | null>>;
}

export default function ButtonsOnScroll({
  selectedOption,
  setSelectedOption,
  theme,
  setTheme,
  isActive,
  setIsActive,
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
      <div>
        <Image
          src="/eua-flag.png"
          alt="EUA's flag"
          width={64}
          height={64}
          className="h-7 w-7"
        />
      </div>
      <ThemeSwitcher
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        theme={theme}
        setTheme={setTheme}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
}
