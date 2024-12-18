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
    <div className="flex items-center justify-between bg-black/40 px-2.5 py-0.5">
      <div className="flex items-center gap-x-1.5">
        <button className="hover:bg-selected rounded px-2 py-1">
          <Image src={AppleLight} alt="Apple" className="h-4.5 w-4.5" />
        </button>

        <span className="text-regular hover:bg-selected rounded px-2 py-1 font-bold text-white">
          Finder
        </span>

        {/* social links */}
        <a
          href="https://github.com/Ajinkyap22"
          target="_blank"
          rel="noopener noreferrer"
          className="text-regular hover:bg-selected cursor-pointer rounded px-2 py-1 font-semibold text-white"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ajinkya-palaskar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-regular hover:bg-selected cursor-pointer rounded px-2 py-1 font-semibold text-white"
        >
          LinkedIn
        </a>

        <a
          href="https://ajinkyap.hashnode.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-regular hover:bg-selected cursor-pointer rounded px-2 py-1 font-semibold text-white"
        >
          Blog
        </a>

        <a
          href="https://www.youtube.com/@victor_productions"
          target="_blank"
          rel="noopener noreferrer"
          className="text-regular hover:bg-selected cursor-pointer rounded px-2 py-1 font-semibold text-white"
        >
          YouTube
        </a>
      </div>

      <div className="flex items-center gap-x-0.5">
        {/* wifi */}
        <button className="hover:bg-selected rounded px-2 py-1">
          <Image src={Wifi} alt="Wifi" className="h-4.5 w-4.5" />
        </button>

        {/* search */}
        <button className="hover:bg-selected rounded px-2 py-1">
          <Image src={SearchIcon} alt="Search" className="w-4.5 h-4.5 p-0.5" />
        </button>

        {/* options */}
        <button className="hover:bg-selected rounded px-2 py-1">
          <Image src={Options} alt="Options" className="w-4.5 h-4.5 p-0.5" />
        </button>

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
