"use client";

import React, { useContext } from "react";

import Image from "next/image";
import type { StaticImageData } from "next/image";

import clsx from "clsx";

import MinimizedWindow from "@/components/MinimizedWindow";
import Tooltip from "@/components/ui/Tooltip";

import Finder from "@/icons/finder.png";
import LaunchPad from "@/icons/launchpad.png";
import Mail from "@/icons/mail.png";

import { isSafari } from "@/utils/isSafari";

import { skillsData } from "@/data/skillsData";

import { FinderContext } from "@/providers/FinderProvider";
import { LaunchpadContext } from "@/providers/LaunchpadProvider";

const Dock = () => {
  const { openWindow, isAnyWindowMaximized, windows } =
    useContext(FinderContext);
  const { toggleLaunchpad } = useContext(LaunchpadContext);

  const minimizedWindows = windows.filter(
    (window) => window.status === "minimized",
  );

  const handleFinderClick = () => {
    openWindow("Desktop", "Desktop", "Finder");
  };

  const handleContactClick = () => {
    openWindow("Desktop", "Desktop", "Mail");
  };

  return (
    <div
      data-clickable={!isAnyWindowMaximized}
      className="group fixed left-0 top-0 z-10 flex h-full items-center data-[clickable='true']:z-20 sm:bottom-0 sm:left-auto sm:top-auto sm:z-50 sm:h-auto sm:w-full sm:items-stretch sm:justify-center"
    >
      <div
        className={clsx(
          "flex max-h-[90%] flex-col items-center justify-center gap-2 rounded-xl bg-dock p-2 transition-transform duration-300 group-hover:translate-y-0 sm:w-auto sm:max-w-[90%] sm:flex-row sm:rounded-2xl lg:h-[70px] lg:gap-4 lg:p-3",
          isAnyWindowMaximized &&
            "-translate-x-full bg-dock-dark sm:translate-x-0 sm:translate-y-full",
        )}
      >
        <Skill
          name="Finder"
          icon={Finder}
          onClick={handleFinderClick}
          open={!!windows.length}
        />

        <Skill
          name="Skills Launchpad"
          icon={LaunchPad}
          onClick={toggleLaunchpad}
        />

        {skillsData.map((skill) => (
          <Skill key={skill.id} name={skill.name} icon={skill.icon} />
        ))}

        <div className="w-full border-t border-black sm:h-full sm:w-0 sm:border-l" />

        <Skill onClick={handleContactClick} name="Contact Me" icon={Mail} />

        {!isSafari() &&
          minimizedWindows.map((window) => (
            <MinimizedWindow key={window.id} window={window} />
          ))}
      </div>
    </div>
  );
};

const Skill = ({
  name,
  icon,
  open = false,
  onClick,
}: {
  name: string;
  icon: string | StaticImageData;
  open?: boolean;
  onClick?: () => void;
}) => {
  return (
    <>
      <div
        data-open={open}
        className="data-[open='true']:open relative min-h-0 min-w-0"
        data-tooltip-id={name}
        onClick={onClick}
      >
        <Image
          src={icon}
          alt={name}
          width={45}
          height={45}
          className="[zoom:0.6] sm:[zoom:1]"
        />
      </div>

      <Tooltip id={name} content={name} place="top" offset={20} />
    </>
  );
};

export default Dock;
