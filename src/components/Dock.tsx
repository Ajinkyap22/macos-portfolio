"use client";

import React, { useContext } from "react";

import Image from "next/image";
import type { StaticImageData } from "next/image";

import Tooltip from "@/components/ui/Tooltip";

import { skillsData } from "@/data/skillsData";
import { FinderContext } from "@/providers/FinderProvider";

import Finder from "@/icons/finder.png";
import LaunchPad from "@/icons/launchpad.png";

const Dock = () => {
  const { openWindow, isAnyWindowMaximized, windows } =
    useContext(FinderContext);

  const handleFinderClick = () => {
    openWindow("Desktop", "Desktop");
  };

  return (
    <div className="group fixed bottom-0 z-10 flex w-full justify-center">
      <div
        data-show={!isAnyWindowMaximized}
        className="flex h-[70px] items-center justify-center gap-x-4 rounded-2xl bg-dock px-3 transition-transform duration-300 group-hover:translate-y-0 data-[show='false']:translate-y-full data-[show='false']:bg-dock-dark"
      >
        <Skill
          name="Finder"
          icon={Finder}
          onClick={handleFinderClick}
          open={!!windows.length}
        />

        <Skill name="Launchpad" icon={LaunchPad} />

        {skillsData.map((skill) => (
          <Skill key={skill.id} name={skill.name} icon={skill.icon} />
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
        className="data-[open='true']:open relative"
        data-tooltip-id={name}
        onClick={onClick}
      >
        <Image src={icon} alt={name} width={45} height={45} />
      </div>

      <Tooltip id={name} content={name} place="top" offset={20} />
    </>
  );
};

export default Dock;
