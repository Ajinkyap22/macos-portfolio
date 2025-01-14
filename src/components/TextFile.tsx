"use client";

import React, { useContext, useState } from "react";

import Image from "next/image";

import { type DragEndEvent } from "@dnd-kit/core";

import DndContext from "@/components/DnD/DndContext";
import DraggableFile from "@/components/DnD/DraggableFile";

import TextEdit from "@/icons/text-edit.svg";

import { FinderContext, FolderType } from "@/providers/FinderProvider";

type Props = {
  name: FolderType;
  top: number;
  left: number;
};

const TextFile = ({ name, top, left }: Props) => {
  const [position, setPosition] = useState({ x: left, y: top });

  const { openWindow } = useContext(FinderContext);

  const handleOpen = () => {
    openWindow("Desktop", name, "TextEditor");
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;

    if (!active?.id) return;

    const data = active.data.current as {
      position: { x: number; y: number };
    };

    const position = data.position;

    const newPosition = {
      x: position.x + (delta?.x || 0),
      y: position.y + (delta?.y || 0),
    };

    setPosition(newPosition);
  };

  return (
    <DndContext handleDragEnd={handleDragEnd}>
      <DraggableFile
        id={name}
        position={position}
        className="group absolute flex flex-col items-center gap-y-0.5 outline-none data-[dragging='true']:pointer-events-none sm:w-20"
        handleOpen={handleOpen}
      >
        <Image
          src={TextEdit}
          alt="TextEdit"
          className="zoom-70 sm:zoom-100 rounded-md border-2 border-transparent p-0.5 group-hover:bg-sidebar group-focus:bg-sidebar sm:h-[66px] sm:w-[66px]"
        />

        <p className="rounded px-1 text-center text-mini tracking-tight text-textPrimary group-focus:bg-focused group-focus:font-semibold group-focus:text-white sm:text-regular">
          {name}.txt
        </p>
      </DraggableFile>
    </DndContext>
  );
};

export default TextFile;
