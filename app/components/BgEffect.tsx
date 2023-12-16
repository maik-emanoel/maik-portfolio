"use client";

import { useEffect, useState } from "react";

const elementSize = 600;

export default function BgEffect() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <span
      className="w-[600px] h-[600px] absolute left-0 top-0 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-0"
      style={{
        transform: `translate(${position.x - elementSize / 2}px, ${position.y - elementSize / 2}px)`,
      }}
    ></span>
  );
}
