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
        <button className="rounded px-2 py-1 hover:bg-selected">
          <Image src={AppleLight} alt="Apple" className="h-4.5 w-4.5" />
        </button>

        <span className="rounded px-2 py-1 text-regular font-bold text-white hover:bg-selected">
          Finder
        </span>

        {/* social links */}
        <a
          href="https://github.com/Ajinkyap22"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded px-2 py-1 text-regular font-semibold text-white hover:bg-selected"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ajinkya-palaskar"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded px-2 py-1 text-regular font-semibold text-white hover:bg-selected"
        >
          LinkedIn
        </a>

        <a
          href="https://ajinkyap.hashnode.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded px-2 py-1 text-regular font-semibold text-white hover:bg-selected"
        >
          Blog
        </a>

        <a
          href="https://www.youtube.com/@victor_productions"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded px-2 py-1 text-regular font-semibold text-white hover:bg-selected"
        >
          YouTube
        </a>
      </div>

      <div className="flex items-center gap-x-0.5">
        {/* wifi */}
        <button className="rounded px-2 py-1 hover:bg-selected">
          <Image src={Wifi} alt="Wifi" className="h-4.5 w-4.5" />
        </button>

        {/* search */}
        <button className="rounded px-2 py-1 hover:bg-selected">
          <Image src={SearchIcon} alt="Search" className="h-4.5 w-4.5 p-0.5" />
        </button>

        {/* options */}
        <button className="rounded px-2 py-1 hover:bg-selected">
          <Image src={Options} alt="Options" className="h-4.5 w-4.5 p-0.5" />
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
