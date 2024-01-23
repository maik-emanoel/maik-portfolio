"use client";

import { ArrowUp } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { MagicTabSelect } from "react-magic-motion";

interface FloatingNavbarProps {
  pillTabs: {
    name: string,
    path: string
  }[]
}

export default function FloatingNavbar(props: FloatingNavbarProps) {
  const { pillTabs } = props

  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollTop + clientHeight + 70 >= scrollHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  const tabsComponents = pillTabs.map((tab, i) => {
    return (
      <a
        key={tab.name}
        onMouseEnter={() => setHoveredIndex(i)}
        href={tab.path}
        className="relative rounded-full sm:text-sm sm:px-2 sm:py-2 xs:text-xs"
        style={{
          padding: "0.65rem 0.75rem",
        }}
      >
        {hoveredIndex === i && (
          <MagicTabSelect
            id="pillTabs"
            transition={{ type: "spring", bounce: 0.35 }}
          >
            <span className="rounded-full absolute inset-0 z-10 mix-blend-difference bg-primary" />
          </MagicTabSelect>
        )}
        {tab.name}
      </a>
    );
  });

  return (
    <div
      data-isbottom={isBottom}
      className="w-fit mx-auto flex items-center gap-3 fixed left-1/2 -translate-x-1/2 bottom-8 border border-zinc-300 px-4 py-2 rounded-full backdrop-blur-md bg-background dark:bg-slate-800/25 z-50 sm:gap-1 data-[isbottom=true]:p-0 data-[isbottom=true]:hover:bg-primary group data-[isbottom=true]:transition-colors data-[isbottom=true]:duration-200 md:bottom-6 sm:data-[isbottom=true]:bottom-12 animate-reveal"
      style={{
        boxShadow: "#00000040 0px 3px 8px",
        animationDelay: '2750ms',
      }}
    >
      {!isBottom ? (
        tabsComponents
      ) : (
        <a href="#home" className="p-3 group-hover:text-white dark:group-hover:text-black">
          <ArrowUp size={20} />
        </a>
      )}
    </div>
  );
}
