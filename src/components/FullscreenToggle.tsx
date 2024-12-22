"use client";

import React, { useContext } from "react";

import Image from "next/image";

import { FullscreenContext } from "@/providers/FullscreenProvider";

import FullscreenExit from "@/icons/fullscreen-exit.svg";
import Fullscreen from "@/icons/fullscreen.svg";

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
      className="hover:bg-selected rounded px-2 py-1"
    >
      <Image
        src={isFullscreen ? FullscreenExit : Fullscreen}
        alt="Fullscreen"
        className="h-4.5 w-4.5 p-[1px]"
      />
    </button>
  );
};

export default FullscreenToggle;
