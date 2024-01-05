"use client";

import { useState, useEffect } from "react";
import HeaderButtons from "./home/HeaderButtons";

export default function ButtonsOnScroll() {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollValue(window.scrollY);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isScrollDown = scrollValue > 60;

  return (
    <>
      <HeaderButtons
        className={`fixed ${
          isScrollDown ? "top-4 translate-y-0" : "top-0 -translate-y-full opacity-30"
        } right-[24px] border border-slate-500 py-2 px-3 rounded-full bg-slate-900/5 backdrop-blur-lg z-50 transition-transform duration-300`}
      />
    </>
  );
}
