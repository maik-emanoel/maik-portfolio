"use client";

import { ArrowUp } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef, useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import { useIsTouchSupported } from "../utils/touchUtils";

interface FloatingNavbarProps {
  pillTabs: {
    name: string;
    path: string;
  }[];
}

export default function FloatingNavbar(props: FloatingNavbarProps) {
  const { pillTabs } = props;

  const isTouchSupported = useIsTouchSupported();
  const [isBottom, setIsBottom] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>("home");
  const sections = useRef<NodeListOf<HTMLElement> | []>([]);

  function handleActiveSection() {
    sections.current = document.querySelectorAll<HTMLElement>("[data-section]");
    let newActiveSection: string | null = null;

    sections.current.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

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
    const tabPathWithoutHash = tab.path.replace("#", "");

    return (
      <a
        key={tab.name}
        href={tab.path}
        data-istouchsupported={isTouchSupported}
        className={`relative rounded-full px-4 py-[10px] sm:text-sm sm:px-2 sm:py-2 xs:text-xs ${
          activeSection === tabPathWithoutHash ? "" : "data-[istouchsupported=false]:hover:bg-primary/5"
        } transition-colors duration-700`}
      >
        {activeSection === tabPathWithoutHash && (
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
      className="w-fit mx-auto flex items-center gap-2 fixed left-1/2 -translate-x-1/2 bottom-8 border border-zinc-300 p-2 rounded-full backdrop-blur-md bg-background dark:bg-slate-800/25 z-50 sm:gap-1 data-[isbottom=true]:p-0 data-[isbottom=true]:hover:bg-primary group data-[isbottom=true]:transition-colors data-[isbottom=true]:duration-200 md:bottom-6 sm:data-[isbottom=true]:bottom-12 reveal-floatingNavbar"
      style={{
        boxShadow: "#00000040 0px 3px 8px",
      }}
    >
      {!isBottom ? (
        tabsComponents
      ) : (
        <a
          href="#home"
          className="p-3 group-hover:text-white dark:group-hover:text-black"
        >
          <ArrowUp size={20} />
        </a>
      )}
    </div>
  );
}
