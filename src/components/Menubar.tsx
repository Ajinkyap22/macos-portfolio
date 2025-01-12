import React, { useContext } from "react";

import dynamic from "next/dynamic";
import Image from "next/image";

import clsx from "clsx";

import FullscreenToggle from "@/components/FullscreenToggle";

import Github from "@/icons/github.svg";
import HashNode from "@/icons/hashnode.svg";
import LinkedIn from "@/icons/linkedin.svg";
import Options from "@/icons/menu-options.svg";
import SearchIcon from "@/icons/search.svg";
import Wifi from "@/icons/wifi.svg";
import YouTube from "@/icons/youtube.svg";

import { FinderContext } from "@/providers/FinderProvider";

const Wallpapers = dynamic(() => import("@/components/Wallpapers"), {
  ssr: false,
});
const LiveDate = dynamic(() => import("@/components/LiveDate"), {
  ssr: false,
});
const MacMenu = dynamic(() => import("@/components/MacMenu"));

const Menubar = () => {
  const { isAnyWindowMaximized } = useContext(FinderContext);

  return (
    <div
      className={clsx(
        "z-30 flex items-center justify-between bg-black/40 px-2.5 py-0.5 sm:z-auto",
        isAnyWindowMaximized && "z-auto",
      )}
    >
      <div className="flex items-center gap-x-2 sm:gap-x-1.5">
        <MacMenu />

        <span className="rounded px-1 text-regular font-bold text-white hover:bg-selected sm:px-2 sm:py-1">
          Finder
        </span>

        {/* social links */}
        <a
          href="https://github.com/Ajinkyap22"
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 cursor-pointer items-center rounded text-regular font-semibold text-white hover:bg-selected sm:px-2 sm:py-1"
        >
          <Image src={Github} alt="GitHub" className="h-4 w-4 sm:hidden" />

          <span className="hidden sm:inline">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ajinkya-palaskar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 cursor-pointer items-center rounded text-regular font-semibold text-white hover:bg-selected sm:px-2 sm:py-1"
        >
          <Image src={LinkedIn} alt="LinkedIn" className="h-4 w-4 sm:hidden" />

          <span className="hidden sm:inline">LinkedIn</span>
        </a>

        <a
          href="https://ajinkyap.hashnode.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 cursor-pointer items-center rounded text-regular font-semibold text-white hover:bg-selected sm:px-2 sm:py-1"
        >
          <Image src={HashNode} alt="Blog" className="h-4 w-4 sm:hidden" />

          <span className="hidden sm:inline">Blog</span>
        </a>

        <a
          href="https://www.youtube.com/@victor_productions"
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 cursor-pointer items-center rounded text-regular font-semibold text-white hover:bg-selected sm:px-2 sm:py-1"
        >
          <Image src={YouTube} alt="YouTube" className="h-4 w-4 sm:hidden" />

          <span className="hidden sm:inline">YouTube</span>
        </a>
      </div>

      <div className="flex items-center gap-x-2 sm:gap-x-0.5">
        {/* wifi */}
        <button className="hidden rounded px-2 py-1 hover:bg-selected sm:flex">
          <Image src={Wifi} alt="Wifi" className="h-4.5 w-4.5" />
        </button>

        {/* search */}
        <button className="hidden rounded px-2 py-1 hover:bg-selected sm:flex">
          <Image src={SearchIcon} alt="Search" className="h-4.5 w-4.5 p-0.5" />
        </button>

        {/* options */}
        <button className="hidden rounded px-2 py-1 hover:bg-selected sm:flex">
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
