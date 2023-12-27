"use client";

import { useState } from "react";
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
            <span
              className="rounded-full absolute inset-0 z-10 mix-blend-difference bg-slate-100"
            />
          </MagicTabSelect>
        )}
        {tab.name}
      </a>
    );
  });

  return (
    <div className="flex items-center gap-3 fixed bottom-8 left-1/2 -translate-x-1/2 border border-zinc-300 px-4 py-2 rounded-full backdrop-blur-md bg-slate-800/25 z-50" 
    style={{
      boxShadow: '#00000040 0px 3px 8px'
    }}>
      {tabsComponents}
    </div>
  );
}
