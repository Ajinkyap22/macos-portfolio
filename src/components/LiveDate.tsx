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
    <span className="text-regular pl-2 pr-3 font-semibold text-white">
      {date}
    </span>
  );
};

export default LiveDate;
