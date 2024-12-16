"use client";

import React, { useState, useEffect } from "react";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  useClose,
} from "@headlessui/react";
import Button from "@/components/ui/Button";

import Image from "next/image";
import Tick from "@/icons/tick.svg";
import Wallpaper from "@/icons/wallpaper.svg";

import { wallpapersData } from "@/data/wallpapersData";

const Wallpapers = () => {
  return (
    <Popover className="relative flex items-center">
      <PopoverButton className="text-sm focus:outline-none">
        <Image src={Wallpaper} alt="Wallpapers" className="h-4.5 w-4.5" />
      </PopoverButton>

      <PopoverContent />
    </Popover>
  );
};

// prefetch images

const PopoverContent = () => {
  const [currentWallpaper, seCurrentWallpaper] = useState(
    document.body.style.backgroundImage,
  );
  const [selectedWallpaper, setSelectedWallpaper] = useState(
    localStorage.getItem("wallpaper") || "",
  );

  const [popoverElement, setPopoverElement] = useState<HTMLElement | null>();

  const close = useClose();

  useEffect(() => {
    const savedWallpaper = localStorage.getItem("wallpaper");

    if (!popoverElement && savedWallpaper) {
      document.body.style.backgroundImage = `url(${savedWallpaper})`;
      setSelectedWallpaper("");
    }
  }, [popoverElement, currentWallpaper]);

  const handleWallpaperClick = (path: string) => {
    document.body.style.backgroundImage = `url(${path})`;
    document.body.classList.remove("initial-bg");

    setSelectedWallpaper(path);
  };

  const handleSave = () => {
    localStorage.setItem("wallpaper", selectedWallpaper);
    seCurrentWallpaper(selectedWallpaper);
    setSelectedWallpaper("");
    close();
  };

  const handleCancel = () => {
    document.body.style.backgroundImage = currentWallpaper;
    setSelectedWallpaper("");
    close();
  };

  return (
    <PopoverPanel
      transition
      anchor="bottom"
      className="shadow-all-around !max-h-[75%] rounded-md bg-popover text-sm transition duration-200 ease-in-out data-[closed]:-translate-y-1 data-[closed]:opacity-0"
      ref={setPopoverElement}
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

      <div className="sticky bottom-0 z-10 flex items-center justify-end gap-x-3 border-t bg-popover p-2 shadow-md">
        {/* cancel */}
        <Button onClick={handleCancel} variant="secondary">
          Cancel
        </Button>

        {/* save */}
        <Button
          disabled={
            !selectedWallpaper || selectedWallpaper === currentWallpaper
          }
          onClick={handleSave}
          variant="primary"
        >
          Save
        </Button>
      </div>
    </PopoverPanel>
  );
};

export default Wallpapers;
