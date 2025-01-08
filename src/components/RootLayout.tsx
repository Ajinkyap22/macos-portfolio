"use client";

import React, { useContext } from "react";

import Dock from "@/components/Dock";
import Launchpad from "@/components/Launchpad";
import Menubar from "@/components/Menubar";

import { LaunchpadContext } from "@/providers/LaunchpadProvider";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  const { showLaunchpad, toggleLaunchpad } = useContext(LaunchpadContext);

  return (
    <div className="flex h-full flex-col">
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
