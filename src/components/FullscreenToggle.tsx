"use client";

import React, { useContext } from "react";

import Image from "next/image";

import FullscreenExit from "@/icons/fullscreen-exit.svg";
import Fullscreen from "@/icons/fullscreen.svg";

import { FullscreenContext } from "@/providers/FullscreenProvider";

const FullscreenToggle = () => {
  const { isFullscreen, enterFullscreen, exitFullscreen } =
    useContext(FullscreenContext);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  return (
    <button
      onClick={toggleFullscreen}
      data-umami-event="Toggled Fullscreen"
      className="shrink-0 rounded hover:bg-selected sm:px-2 sm:py-1"
    >
      <Image
        src={isFullscreen ? FullscreenExit : Fullscreen}
        alt="Fullscreen"
        className="h-4 w-4 p-[1px] sm:h-4.5 sm:w-4.5"
      />
    </button>
  );
};

export default FullscreenToggle;
