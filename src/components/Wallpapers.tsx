"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

import { wallpapersData } from "@/data/wallpapersData";

import Tick from "@/icons/tick.svg";
import Wallpaper from "@/icons/wallpaper.svg";

const Wallpapers = () => {
  const [selectedWallpaper, setSelectedWallpaper] = useState(
    localStorage.getItem("wallpaper") || "",
  );

  useEffect(() => {
    const savedWallpaper = localStorage.getItem("wallpaper");

    if (savedWallpaper) {
      document.body.style.backgroundImage = `url(${savedWallpaper})`;
      setSelectedWallpaper("");
    }
  }, []);

  const handleWallpaperClick = (path: string) => {
    document.body.style.backgroundImage = `url(${path})`;
    document.body.classList.remove("initial-bg");

    localStorage.setItem("wallpaper", path);
    setSelectedWallpaper(path);
  };

  return (
    <Popover className="relative flex items-center">
      <PopoverButton className="rounded px-2 py-1 text-sm hover:bg-selected focus:outline-none">
        <Image
          src={Wallpaper}
          alt="Wallpapers"
          className="h-4.5 w-4.5 p-[1px]"
        />
      </PopoverButton>

      <PopoverPanel
        transition
        anchor="bottom"
        className="z-50 !max-h-[75%] rounded-md bg-popover text-sm shadow-all-around transition duration-200 ease-in-out [--anchor-gap:8px] [--anchor-padding:40px] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
      >
        <div className="grid flex-1 grid-cols-3 overflow-auto">
          {wallpapersData.map((wallpaper) => (
            <button
              key={wallpaper.id}
              onClick={() => handleWallpaperClick(wallpaper.path)}
              className="relative"
            >
              <Image
                src={wallpaper.path}
                alt={`Wallpaper ${wallpaper.id}`}
                width={192}
                height={108}
                className="aspect-square"
              />

              {selectedWallpaper === wallpaper.path && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <Image src={Tick} alt="selected" className="h-6 w-6" />
                </div>
              )}
            </button>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default Wallpapers;
