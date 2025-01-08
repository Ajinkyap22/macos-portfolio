"use client";

import React, { useState, createContext, useEffect } from "react";

interface StartupContextType {
  bootStatus: "booting" | "booted" | "shutdown";
  shutdown: () => void;
  bootUp: () => void;
}

export const StartupContext = createContext<StartupContextType>({
  bootStatus: "booting",
  shutdown: () => {},
  bootUp: () => {},
});

type Props = {
  children: React.ReactNode;
};

const StartUpProvider = ({ children }: Props) => {
  const [bootStatus, setBootStatus] = useState<
    "booting" | "booted" | "shutdown"
  >("booting");

  useEffect(() => {
    setTimeout(() => {
      setBootStatus("booted");
    }, 2500);
  }, []);

  const bootUp = () => {
    setBootStatus("booting");

    setTimeout(() => {
      setBootStatus("booted");
    }, 2500);
  };

  const shutdown = () => {
    setBootStatus("shutdown");
  };

  return (
    <StartupContext.Provider value={{ bootStatus, shutdown, bootUp }}>
      {children}
    </StartupContext.Provider>
  );
};

export default StartUpProvider;
