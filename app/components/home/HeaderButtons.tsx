"use client";

import ThemeSwitcher from "./ThemeSwitcher";
import Time from "./Time";
import ButtonsOnScroll from "../ButtonsOnScroll";
import LangButton from "./LangButton";

export interface HeaderButtonsProps {
  lightLabel: string;
  darkLabel: string;
  systemLabel: string;
}

export default function HeaderButtons(props: HeaderButtonsProps) {
  const { lightLabel, darkLabel, systemLabel } = props;

  return (
    <>
      <div className="flex items-center gap-2 relative">
        <Time />
        <span
          className="h-6 w-[1px] bg-slate-200 dark:bg-slate-500 animate-reveal"
          style={{
            animationDelay: "300ms",
          }}
        ></span>
        <LangButton />
        <ThemeSwitcher
          lightLabel={lightLabel}
          darkLabel={darkLabel}
          systemLabel={systemLabel}
        />
      </div>

      <ButtonsOnScroll
        lightLabel={lightLabel}
        darkLabel={darkLabel}
        systemLabel={systemLabel}
      />
    </>
  );
}
