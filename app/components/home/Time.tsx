"use client";

import { useMessages } from "next-intl";
import { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  }, [isOnline]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // 1000 = 1 second

    return () => clearInterval(interval);
  }, []);

  const options = {
    timeZone: "America/Sao_Paulo", // Brazil time zone
    hour12: false
  };

  const formattedTime = time.toLocaleTimeString("pt-BR", options)

  const hour = formattedTime.split(":")[0];
  const minutes = formattedTime.split(":")[1];
  
  return (
    <div
      className="text-xs text-terciary flex items-center gap-1 cursor-default animate-reveal"
      style={{
        animationDelay: "150ms",
      }}
      title="Brazil time zone"
    >
      <span
        className={`block rounded-full w-1 h-1 ${
          isOnline ? "bg-emerald-500" : "bg-red-500"
        }`}
      ></span>
      <span suppressHydrationWarning>
        {hour}h{minutes}
      </span>
    </div>
  );
}
