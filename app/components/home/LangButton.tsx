"use client";

import { usePathname, useRouter } from "@/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Check } from "@phosphor-icons/react";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:via-white/60 before:dark:via-white/20 before:to-transparent";

export default function LangButton() {
  const [showLangOptions, setShowLangOptions] = useState<null | boolean>(null);
  const [activeLang, setActiveLang] = useState<null | string>(null);
  const [mounted, setMounted] = useState(false);
  const langOptionsRef = useRef<null | HTMLDivElement>(null);

  const pathname = usePathname();
  const router = useRouter();
  const locationPathname =
    typeof window !== "undefined" && window.location.pathname;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (locationPathname === "/en") {
      setActiveLang("en");
    } else {
      setActiveLang("pt");
    }
  }, [locationPathname, activeLang]);

  useEffect(() => {
    function handleClickOutsideShowLangOptions(e: MouseEvent) {
      if (
        langOptionsRef.current &&
        !langOptionsRef.current?.contains(e.target as Node)
      )
        setShowLangOptions(false);
    }

    function onScroll() {
      setShowLangOptions(false);
    }

    if (showLangOptions) {
      window.addEventListener("scroll", onScroll);
    }

    setTimeout(() => {
      if (showLangOptions) {
        window.addEventListener("click", handleClickOutsideShowLangOptions);
      }
    }, 100);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", handleClickOutsideShowLangOptions);
    };
  }, [showLangOptions]);

  if (!mounted) {
    return (
      <div
        className={`${shimmer} relative h-7 w-7 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden`}
      ></div>
    );
  }

  return (
    <>
      <div
        onClick={() => setShowLangOptions((prevState) => !prevState)}
        className="cursor-pointer"
      >
        <Image
          src={activeLang === "en" ? "/eua-flag.png" : "/brazil-flag.png"}
          alt={activeLang === "en" ? "USA's flag" : "Brazil's flag"}
          width={64}
          height={64}
          className="h-7 w-7"
        />
      </div>

      {showLangOptions !== null && (
        <div
          ref={langOptionsRef}
          className={`absolute top-12 right-0 z-50 bg-background/60 backdrop-blur-lg shadow-lg overflow-hidden ${
            showLangOptions ? "flex animate-fadeIn" : "animate-fadeOut"
          } flex-col border border-slate-200 dark:border-slate-500 rounded-lg`}
        >
          <div
            data-isactive={activeLang === "en"}
            className="relative flex items-center justify-start gap-2 p-3 pr-10 cursor-pointer overflow-hidden select-none hover:bg-primary/10 data-[isactive=true]:text-blue-secondary"
            onClick={() => router.push(pathname, { locale: "en" })}
          >
            <Image
              src="/eua-flag.png"
              alt="USA's flag"
              width={64}
              height={64}
              className="h-5 w-5"
            />
            <span className="text-sm">English</span>
            {activeLang === "en" && (
              <Check size={14} className="absolute right-3" />
            )}
          </div>
          <div
            data-isactive={activeLang === "pt"}
            className="relative flex items-center justify-start gap-2 p-3 pr-14 cursor-pointer overflow-hidden select-none hover:bg-primary/10 data-[isactive=true]:text-blue-secondary"
            onClick={() => router.push(pathname, { locale: "pt" })}
          >
            <Image
              src="/brazil-flag.png"
              alt="Brazil's flag"
              width={64}
              height={64}
              className="h-5 w-5"
            />
            <span className="text-sm whitespace-nowrap">Português</span>
            {activeLang === "pt" && (
              <Check size={14} className="absolute right-3" />
            )}
          </div>
        </div>
      )}
    </>
  );
}
