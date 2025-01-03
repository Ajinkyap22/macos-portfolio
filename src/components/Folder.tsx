"use client";

import React, { useContext } from "react";

import Image from "next/image";

import clsx from "clsx";

import DraggableFolder from "@/components/DnD/DraggableFolder";

import FolderIcon from "@/icons/folder.svg";

import { FolderType, FinderContext } from "@/providers/FinderProvider";

type Props = {
  name: FolderType;
  top: number;
  left: number;
  variant: "desktop" | "finder";
  windowId?: string;
};

const Folder = ({ name, top, left, variant, windowId }: Props) => {
  const { openWindow, changeSection } = useContext(FinderContext);

  const handleOpen = () => {
    if (variant === "desktop") {
      openWindow("Desktop", name, "Finder");
    } else {
      changeSection(windowId!, "Desktop", name);
    }
  };

  return (
    <DraggableFolder
      id={name}
      variant={variant}
      position={{ x: left || 0, y: top }}
      className="group absolute flex w-20 flex-col items-center outline-none data-[dragging='true']:pointer-events-none data-[variant='desktop']:gap-y-1 data-[variant='finder']:gap-y-0.5"
      handleOpen={handleOpen}
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
          "break-word rounded px-1 text-center text-regular group-focus:bg-focused",
          variant === "desktop" && "bg-black/20 py-0.5 font-bold text-white",
          variant === "finder" &&
            "tracking-tight text-textPrimary group-focus:font-semibold group-focus:text-white",
        )}
      >
        {name}
      </p>
    </DraggableFolder>
  );
};

export default Folder;
