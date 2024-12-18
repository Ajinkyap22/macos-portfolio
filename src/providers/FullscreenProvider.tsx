"use client";

import React, { createContext, useState } from "react";

type FullscreenContextType = {
  isFullscreen: boolean;
  enterFullscreen: () => void;
  exitFullscreen: () => void;
};

type Props = {
  children: React.ReactNode;
};

export const FullscreenContext = createContext<FullscreenContextType>({
  isFullscreen: false,
  enterFullscreen: () => {},
  exitFullscreen: () => {},
});

const FullscreenProvider = ({ children }: Props) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enterFullscreen = () => {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (
      (
        element as HTMLElement & {
          webkitRequestFullscreen?: () => Promise<void>;
        }
      ).webkitRequestFullscreen
    ) {
      // For Safari
      (
        element as HTMLElement & {
          webkitRequestFullscreen?: () => Promise<void>;
        }
      ).webkitRequestFullscreen!();
    } else if (
      (element as HTMLElement & { mozRequestFullScreen?: () => Promise<void> })
        .mozRequestFullScreen
    ) {
      // For Firefox
      (element as HTMLElement & { mozRequestFullScreen?: () => Promise<void> })
        .mozRequestFullScreen!();
    } else if (
      (element as HTMLElement & { msRequestFullscreen?: () => Promise<void> })
        .msRequestFullscreen
    ) {
      // For IE/Edge
      (element as HTMLElement & { msRequestFullscreen?: () => Promise<void> })
        .msRequestFullscreen!();
    }

    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <FullscreenContext.Provider
      value={{ isFullscreen, enterFullscreen, exitFullscreen }}
    >
      {children}
    </FullscreenContext.Provider>
  );
};

export default FullscreenProvider;
