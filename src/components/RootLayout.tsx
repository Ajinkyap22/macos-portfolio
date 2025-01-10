"use client";

import React, { useContext } from "react";

import Image from "next/image";

import Dock from "@/components/Dock";
import Launchpad from "@/components/Launchpad";
import Menubar from "@/components/Menubar";

import { LaunchpadContext } from "@/providers/LaunchpadProvider";
import { WallpaperContext } from "@/providers/WallpaperProvider";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  const { showLaunchpad, toggleLaunchpad } = useContext(LaunchpadContext);
  const { wallpaperPath } = useContext(WallpaperContext);

  return (
    <div className="flex h-full flex-col">
      <Image
        src={wallpaperPath}
        layout="fill"
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

      <Dock />
    </div>
  );
};

export default RootLayout;
