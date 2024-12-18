import React from "react";

import Image from "next/image";

import FullscreenToggle from "@/components/FullscreenToggle";
import LiveDate from "@/components/LiveDate";
import Wallpapers from "@/components/Wallpapers";

import AppleLight from "@/icons/apple-light.svg";
import Options from "@/icons/menu-options.svg";
import SearchIcon from "@/icons/search.svg";
import Wifi from "@/icons/wifi.svg";

const Menubar = () => {
  return (
    <div className="px-4.5 flex items-center justify-between bg-black/40 py-1">
      <div className="gap-x-4.5 flex items-center">
        <Image src={AppleLight} alt="Apple" className="h-4.5 w-4.5" />

        <span className="text-regular font-bold text-white">Finder</span>

        {/* social links */}
        <a
          href="https://github.com/Ajinkyap22"
          target="_blank"
          rel="noopener noreferrer"
          className="text-regular cursor-pointer font-semibold text-white"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ajinkya-palaskar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-regular cursor-pointer font-semibold text-white"
        >
          LinkedIn
        </a>

        <a
          href="https://ajinkyap.hashnode.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-regular cursor-pointer font-semibold text-white"
        >
          Blog
        </a>

        <a
          href="https://www.youtube.com/@victor_productions"
          target="_blank"
          rel="noopener noreferrer"
          className="text-regular cursor-pointer font-semibold text-white"
        >
          YouTube
        </a>
      </div>

      <div className="gap-x-4.5 flex items-center">
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
