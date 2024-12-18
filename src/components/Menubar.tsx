import React from "react";

import Image from "next/image";

import FullscreenToggle from "@/components/FullscreenToggle";
import LiveDate from "@/components/LiveDate";
import Wallpapers from "@/components/Wallpapers";

import AppleLight from "@/icons/apple-light.svg";
import Github from "@/icons/github.svg";
import LinkedIn from "@/icons/linkedin.svg";
import Options from "@/icons/menu-options.svg";
import SearchIcon from "@/icons/search.svg";
import Wifi from "@/icons/wifi.svg";
import YouTube from "@/icons/youtube.svg";

const Menubar = () => {
  return (
    <div className="px-4.5 flex items-center justify-between bg-black/40 py-1">
      <div className="gap-x-4.5 flex items-center">
        <Image src={AppleLight} alt="Apple" className="h-4.5 w-4.5" />

        <span className="text-regular font-bold text-white">Finder</span>

        <span className="text-regular font-semibold text-white">About</span>
        <span className="text-regular font-semibold text-white">Projects</span>
        <span className="text-regular font-semibold text-white">
          Experience
        </span>
        <span className="text-regular font-semibold text-white">Education</span>
      </div>

      <div className="gap-x-4.5 flex items-center">
        {/* social icons */}
        <a
          href="https://github.com/Ajinkyap22"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Image src={Github} alt="Github" className="h-4.5 w-4.5" />
        </a>

        <a
          href="https://www.linkedin.com/in/ajinkya-palaskar"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Image src={LinkedIn} alt="LinkedIn" className="h-4.5 w-4.5" />
        </a>

        <a
          href="https://www.youtube.com/@victor_productions"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Image src={YouTube} alt="YouTube" className="h-4.5 w-4.5" />
        </a>

        {/* wifi */}
        <Image src={Wifi} alt="Wifi" className="h-4.5 w-4.5" />

        {/* search */}
        <Image src={SearchIcon} alt="Search" />

        {/* options */}
        <Image src={Options} alt="Options" />

        <Wallpapers />

        {/* fullscreen toggle */}
        <FullscreenToggle />

        {/* date */}
        <LiveDate />
      </div>
    </div>
  );
};

export default Menubar;
