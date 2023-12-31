"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface HeaderButtonsProps extends React.HTMLProps<HTMLDivElement> {}

export default function HeaderButtons({ className }: HeaderButtonsProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // 1000 = 1 second

    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();
  const minutes = time.getMinutes();

  return (
    <div
      className={twMerge("flex items-center gap-2", className)}
    >
      <div className="text-xs text-slate-300 flex items-center gap-1">
        <span className="block rounded-full w-1 h-1 bg-emerald-500"></span>
        {hour}h{minutes.toString().padStart(2, "0")}
      </div>
      <span className="h-6 w-[1px] bg-slate-500"></span>
      <div>
        <Image
          src="/brazil-flag.png"
          alt="Bandeira do Brasil"
          width={64}
          height={64}
          className="h-7 w-7"
        />
      </div>
      <div className="text-slate-100 rounded-full border border-slate-400 h-7 w-7 grid place-items-center">
        <Moon size={20} />
      </div>
    </div>
  );
}
