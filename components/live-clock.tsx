'use client';

import React, { useState, useEffect } from 'react';


function getJakartaTime(): string {
  const now = new Date();

  const timeFormatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return timeFormatter.format(now);
}

export function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      setTime(getJakartaTime());
    };
    const initialTimer = window.setTimeout(update, 0);
    const intervalId = window.setInterval(update, 1000);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      aria-label="Current time in Jakarta, Indonesia (Asia/Jakarta timezone)"
      className="flex items-center justify-center text-center select-none"
    >
      <div className="font-mono-tech text-xs font-medium tracking-[0.14em] text-[#F0EFEA] sm:text-sm">
        <span className="tabular-nums">
          {time ?? '--:--:--'}
        </span>
      </div>
    </div>
  );
}
