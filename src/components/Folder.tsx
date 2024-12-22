import React from "react";

import Image from "next/image";
import { StaticImageData } from "next/image";

import { FolderType } from "@/providers/FinderProvider";

type Props = {
  icon: string | StaticImageData;
  name: FolderType;
  top: number;
  right: number;
};

const Folder = ({ icon, name, top, right }: Props) => {
  return (
    <div
      style={{
        top: `${top}px`,
        right: `${right}px`,
      }}
      className="group absolute flex flex-col items-end gap-y-1"
      tabIndex={0}
    >
      <Image
        src={icon}
        alt="Folder"
        className="h-[66px] w-[66px] rounded-md border-2 border-transparent p-0.5 group-hover:border-dock group-focus:border-dock"
      />

      <span className="self-stretch rounded bg-black/20 px-1 py-0.5 text-center text-regular font-bold text-white group-focus:bg-primary">
        {name}
      </span>
    </div>
  );
};

export default Folder;
