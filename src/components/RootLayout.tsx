"use client";

import React, { useContext } from "react";

import dynamic from "next/dynamic";
import Image from "next/image";

import Dock from "@/components/Dock";
import Menubar from "@/components/Menubar";

import { LaunchpadContext } from "@/providers/LaunchpadProvider";
import { WallpaperContext } from "@/providers/WallpaperProvider";

const Fullscreen = dynamic(() => import("@/components/FullScreen"), {
  ssr: false,
});
const Launchpad = dynamic(() => import('@/components/Launchpad'));

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  const { showLaunchpad, toggleLaunchpad } = useContext(LaunchpadContext);
  const { wallpaperPath } = useContext(WallpaperContext);

  return (
    <div className="relative flex h-full flex-col">
      <Image
        src={wallpaperPath}
        fill
        alt="wallpaper"
        className="-z-10"
        priority
      />

      <Launchpad show={showLaunchpad} handleClose={toggleLaunchpad} />

      {!showLaunchpad && (
        <>
          <Menubar />

          {children}
        </>
      )}

      <Fullscreen />

      <Dock />
    </div>
  );
};

export default RootLayout;
