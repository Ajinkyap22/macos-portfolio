"use client";

import React, { useState, useEffect } from "react";

const LiveDate = () => {
  const [date, setDate] = useState(
    new Date().toLocaleString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(
        new Date().toLocaleString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="shrink-0 text-regular font-semibold text-white sm:pl-2 sm:pr-3">
      {date}
    </span>
  );
};

export default LiveDate;
