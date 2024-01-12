"use client";

import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import Time from "./Time";
import { useState } from "react";
import ButtonsOnScroll from "../ButtonsOnScroll";

export type Theme = "light" | "dark";
export type Options = "light" | "dark" | "system";

export default function HeaderButtons() {
  const [selectedOption, setSelectedOption] = useState<Options | null>(null);
  const [theme, setTheme] = useState<Theme | null>(null);
  const [isActive, setIsActive] = useState<Options | null>(null);

  return (
    <>
      <div className="flex items-center gap-2 relative">
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

      <ButtonsOnScroll
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        theme={theme}
        setTheme={setTheme}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
}
