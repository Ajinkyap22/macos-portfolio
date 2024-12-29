"use client";

import React, { useContext } from "react";

import Image from "next/image";

import { FinderContext, FolderType } from "@/providers/FinderProvider";

import TextEdit from "@/icons/text-edit.svg";

type Props = {
  name: FolderType;
  top: number;
  left: number;
};

const TextFile = ({ name, top, left }: Props) => {
  const { openWindow } = useContext(FinderContext);

  const handleOpen = () => {
    openWindow("Desktop", name, "TextEditor");
  };

  return (
    <button
      style={{
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="group absolute flex w-20 flex-col items-center gap-y-0.5 outline-none"
      onDoubleClick={handleOpen}
    >
      <Image
        src={TextEdit}
        alt="TextEdit"
        className="h-[66px] w-[66px] rounded-md border-2 border-transparent p-0.5 group-hover:bg-sidebar group-focus:bg-sidebar"
      />

      <p className="group-focus:bg-focused rounded px-1 text-center text-regular tracking-tight text-textPrimary group-focus:font-semibold group-focus:text-white">
        {name}.txt
      </p>
    </button>
  );
};

export default TextFile;
