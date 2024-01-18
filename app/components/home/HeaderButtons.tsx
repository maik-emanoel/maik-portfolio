"use client";

import ThemeSwitcher from "./ThemeSwitcher";
import Time from "./Time";
import { useState } from "react";
import ButtonsOnScroll from "../ButtonsOnScroll";
import LangButton from "./LangButton";

export interface HeaderButtonsProps {
  lightLabel: string;
  darkLabel: string;
  systemLabel: string;
}

export default function HeaderButtons(props: HeaderButtonsProps) {
  const { lightLabel, darkLabel, systemLabel } = props;
  const [isActive, setIsActive] = useState<string | null>(null);

  return (
    <>
      <div className="flex items-center gap-2 relative">
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

      <ButtonsOnScroll
        isActive={isActive}
        setIsActive={setIsActive}
        lightLabel={lightLabel}
        darkLabel={darkLabel}
        systemLabel={systemLabel}
      />
    </>
  );
}
