"use client";

import React from "react";

import Image from "next/image";
import type { StaticImageData } from "next/image";

import Tooltip from "@/components/ui/Tooltip";

import { skillsData } from "@/data/skillsData";

import Finder from "@/icons/finder.png";
import LaunchPad from "@/icons/launchpad.png";

const Dock = () => {
  return (
    <div className="group fixed bottom-0 flex w-full justify-center">
      <div
        data-show={true} // TODO: use state for this later
        className="bg-dock flex h-[70px] items-center justify-center gap-x-4 rounded-2xl px-3 transition-transform duration-300 group-hover:translate-y-0 data-[show='false']:translate-y-full"
      >
        <Skill name="Finder" icon={Finder} />

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
}: {
  name: string;
  icon: string | StaticImageData;
}) => {
  return (
    <>
      <div className="relative" data-tooltip-id={name}>
        <Image src={icon} alt={name} width={45} height={45} />
      </div>

      <Tooltip id={name} content={name} place="top" offset={20} />
    </>
  );
};

export default Dock;
