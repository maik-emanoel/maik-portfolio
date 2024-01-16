"use client";

import ThemeSwitcher from "./ThemeSwitcher";
import Time from "./Time";
import { useState } from "react";
import ButtonsOnScroll from "../ButtonsOnScroll";
import LangButton from "./LangButton";

export type Theme = "light" | "dark";
export type Options = "light" | "dark" | "system";

export interface HeaderButtonsProps {
  lightLabel: string,
  darkLabel: string,
  systemLabel: string
}

export default function HeaderButtons(props: HeaderButtonsProps) {
  const {lightLabel, darkLabel, systemLabel} = props

  const [selectedOption, setSelectedOption] = useState<Options | null>(null);
  const [theme, setTheme] = useState<Theme | null>(null);
  const [isActive, setIsActive] = useState<Options | null>(null);

  return (
    <>
      <div className="flex items-center gap-2 relative">
        <Time />
        <span className="h-6 w-[1px] bg-slate-200 dark:bg-slate-500"></span>
        <LangButton />
        <ThemeSwitcher
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          theme={theme}
          setTheme={setTheme}
          isActive={isActive}
          setIsActive={setIsActive}
          lightLabel={lightLabel}
          darkLabel={darkLabel}
          systemLabel={systemLabel}
        />
      </div>

      <ButtonsOnScroll
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        theme={theme}
        setTheme={setTheme}
        isActive={isActive}
        setIsActive={setIsActive}
        lightLabel={lightLabel}
        darkLabel={darkLabel}
        systemLabel={systemLabel}
      />
    </>
  );
}
