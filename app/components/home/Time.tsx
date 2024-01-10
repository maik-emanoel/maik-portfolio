'use client'

import { useState, useEffect } from "react";

export default function Time() {
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
    <div className="text-xs text-terciary flex items-center gap-1">
      <span className="block rounded-full w-1 h-1 bg-emerald-500"></span>
      {hour}h{minutes.toString().padStart(2, "0")}
    </div>
  );
}
