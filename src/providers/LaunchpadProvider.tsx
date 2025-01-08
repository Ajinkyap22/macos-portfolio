"use client";

import React, { createContext, useState } from "react";

interface LaunchpadContextType {
  showLaunchpad: boolean;
  toggleLaunchpad: () => void;
}

export const LaunchpadContext = createContext<LaunchpadContextType>({
  showLaunchpad: false,
  toggleLaunchpad: () => {},
});

type Props = {
  children: React.ReactNode;
};

const LaunchpadProvider = ({ children }: Props) => {
  const [showLaunchpad, setShowLaunchpad] = useState(false);

  const toggleLaunchpad = () => {
    setShowLaunchpad(!showLaunchpad);
  };

  return (
    <LaunchpadContext.Provider value={{ showLaunchpad, toggleLaunchpad }}>
      {children}
    </LaunchpadContext.Provider>
  );
};

export default LaunchpadProvider;
