import React from "react";

import { skillsData } from "@/data/skillsData";

import Image from "next/image";
import Finder from "@/icons/finder.png";
import LaunchPad from "@/icons/launchpad.png";

const Dock = () => {
  return (
    <div className="group fixed bottom-0 flex w-full justify-center">
      <div
        data-show={true} // TODO: use state for this later
        className="bg-dock flex h-[70px] items-center justify-center gap-x-4 rounded-2xl px-3 transition-transform duration-300 group-hover:translate-y-0 data-[show='false']:translate-y-full"
      >
        <div className="relative">
          <Image src={Finder} alt="finder" width={45} height={45} />
        </div>

        <div className="relative">
          <Image src={LaunchPad} alt="launchpad" width={45} height={45} />
        </div>

        {skillsData.map((skill) => (
          <div key={skill.id} className="relative">
            <Image src={skill.icon} alt={skill.name} width={45} height={45} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dock;
