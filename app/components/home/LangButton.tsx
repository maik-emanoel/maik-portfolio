"use client";

import Image from "next/image";
import { useState } from "react";

export default function LangButton() {
  const [showLangOptions, setShowLangOptions] = useState(false);

  return (
    <>
      <div onClick={() => setShowLangOptions((prevState) => !prevState)} className="cursor-pointer">
        <Image
          src="/eua-flag.png"
          alt="USA's flag"
          width={64}
          height={64}
          className="h-7 w-7"
        />
      </div>

      <div
        className={`absolute top-12 right-0 z-50 bg-background/60 backdrop-blur-lg shadow-lg overflow-hidden ${
          showLangOptions ? "flex animate-fadeIn" : "animate-fadeOut"
        } flex-col border border-slate-200 dark:border-slate-500 rounded-lg`}
      >
        <div className="relative flex items-center justify-start gap-2 p-3 pr-10 cursor-pointer overflow-hidden select-none hover:bg-primary/10 data-[isactive=true]:text-blue-secondary">
          <Image
            src="/eua-flag.png"
            alt="USA's flag"
            width={64}
            height={64}
            className="h-5 w-5"
          />
          <span className="text-sm">English</span>
        </div>
        <div className="relative flex items-center justify-start gap-2 p-3 pr-10 cursor-pointer overflow-hidden select-none hover:bg-primary/10 data-[isactive=true]:text-blue-secondary">
          <Image
            src="/brazil-flag.png"
            alt="Brazil's flag"
            width={64}
            height={64}
            className="h-5 w-5"
          />
          <span className="text-sm whitespace-nowrap">Português</span>
        </div>
      </div>
    </>
  );
}
