"use client";

import React, { useContext } from "react";

import Image from "next/image";

import clsx from "clsx";

import FolderIcon from "@/icons/folder.svg";

import { FolderType, FinderContext } from "@/providers/FinderProvider";

type Props = {
  name: FolderType;
  top: number;
  right?: number;
  left?: number;
  variant: "desktop" | "finder";
  windowId?: string;
};

const Folder = ({ name, top, right, left, variant, windowId }: Props) => {
  const { openWindow, changeSection } = useContext(FinderContext);

  const handleOpen = () => {
    if (variant === "desktop") {
      openWindow("Desktop", name, "Finder");
    } else {
      changeSection(windowId!, "Desktop", name);
    }
  };

  return (
    <button
      style={{
        top: `${top}px`,
        right: `${right}px`,
        left: `${left}px`,
      }}
      data-variant={variant}
      className="group absolute flex w-20 flex-col items-center outline-none data-[variant='desktop']:gap-y-1 data-[variant='finder']:gap-y-0.5"
      onDoubleClick={handleOpen}
    >
      <Image
        src={FolderIcon}
        alt="Folder"
        data-variant={variant}
        className={clsx(
          "h-[66px] w-[66px] rounded-md border-2 border-transparent p-0.5",
          {
            "group-hover:border-dock group-focus:border-dock":
              variant === "desktop",
            "group-hover:bg-sidebar group-focus:bg-sidebar":
              variant === "finder",
          },
        )}
      />

      <p
        className={clsx(
          "break-word group-focus:bg-focused rounded px-1 text-center text-regular",
          variant === "desktop" && "bg-black/20 py-0.5 font-bold text-white",
          variant === "finder" &&
            "tracking-tight text-textPrimary group-focus:font-semibold group-focus:text-white",
        )}
      >
        {name}
      </p>
    </button>
  );
};

export default Folder;
