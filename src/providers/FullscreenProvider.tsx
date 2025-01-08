"use client";

import React, { createContext, useState, useEffect } from "react";

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
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  // if fullscreen is exited by pressing the escape key
  useEffect(() => {
    const handleExitFullscreen = () => {
      setIsFullscreen(!!document?.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleExitFullscreen);
    document.addEventListener("webkitfullscreenchange", handleExitFullscreen);
    document.addEventListener("mozfullscreenchange", handleExitFullscreen);
    document.addEventListener("MSFullscreenChange", handleExitFullscreen);

    return () => {
      document.removeEventListener("fullscreenchange", handleExitFullscreen);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleExitFullscreen,
      );
      document.removeEventListener("mozfullscreenchange", handleExitFullscreen);
      document.removeEventListener("MSFullscreenChange", handleExitFullscreen);
    };
  }, []);

  return (
    <FullscreenContext.Provider
      value={{ isFullscreen, enterFullscreen, exitFullscreen }}
    >
      {children}
    </FullscreenContext.Provider>
  );
};

export default FullscreenProvider;
