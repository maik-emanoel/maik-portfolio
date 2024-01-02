"use client";

import { ArrowUp } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { MagicTabSelect } from "react-magic-motion";

const pillTabs = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Contact",
    path: "#contact ",
  },
];

export default function FloatingNavbar() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      console.log(scrollTop, clientHeight, scrollHeight);

      if (scrollTop + clientHeight + 50 >= scrollHeight) {
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
        style={{
          position: "relative",
          padding: "0.65rem 0.75rem",
          borderRadius: "999px",
        }}
      >
        {hoveredIndex === i && (
          <MagicTabSelect
            id="pillTabs"
            transition={{ type: "spring", bounce: 0.35 }}
          >
            <span className="rounded-full absolute inset-0 z-10 mix-blend-difference bg-slate-100" />
          </MagicTabSelect>
        )}
        {tab.name}
      </a>
    );
  });

  return (
    <div
      className="w-fit mx-auto flex items-center gap-3 fixed left-1/2 -translate-x-1/2 bottom-8 border border-zinc-300 px-4 py-2 rounded-full backdrop-blur-md bg-slate-800/25 z-50"
      style={{
        boxShadow: "#00000040 0px 3px 8px",
      }}
    >
      {!isBottom ? (
        tabsComponents
      ) : (
        <a href="#home" className="py-2">
          <ArrowUp size={20} />
        </a>
      )}
    </div>
  );
}
