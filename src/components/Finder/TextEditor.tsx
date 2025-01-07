import React, { useContext, useMemo } from "react";

import Image from "next/image";

import Draggable from "@/components/DnD/DraggableFinder";
import ActionButtons from "@/components/Finder/ActionButtons";

import Document from "@/icons/document.png";

import { aboutData } from "@/data/aboutData";
import { educationData } from "@/data/educationData";
import { experienceData } from "@/data/experienceData";

import { FolderType, FinderContext } from "@/providers/FinderProvider";

type Props = {
  folder: FolderType;
  status: "minimized" | "maximized" | "normal";
  offset: number;
  windowId: string;
  position: { x: number; y: number };
  zIndex: number;
  scaledDown?: boolean;
};

const TextEditor = ({
  folder,
  status,
  offset,
  windowId,
  position,
  zIndex,
  scaledDown,
}: Props) => {
  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    openWindow,
    focusWindow,
  } = useContext(FinderContext);

  const handleClose = () => {
    closeWindow(windowId);
  };

  const handleMinimize = () => {
    minimizeWindow(windowId);
  };

  const handleMaximize = () => {
    maximizeWindow(windowId);
  };

  const handleChangeStatus = () => {
    if (!scaledDown) return;

    openWindow("Desktop", folder, "TextEditor");
  };

  const handleFocus = () => {
    focusWindow(windowId);
  };

  const content = useMemo(() => {
    switch (folder) {
      case "About":
        return aboutData;

      case "Education":
        return educationData;

      case "Experience":
        return experienceData;

      default:
        return "";
    }
  }, [folder]);

  return (
    <Draggable
      offset={offset}
      status={status}
      windowId={windowId}
      position={position}
      scaledDown={scaledDown}
      zIndex={zIndex}
      className="data-[scaled-down='true']:scaled-down flex flex-col bg-white transition-all duration-300 ease-linear data-[status='normal']:rounded-lg data-[status='normal']:shadow-all-around data-[dragging='true']:transition-none"
      handleChangeStatus={handleChangeStatus}
      handleFocus={handleFocus}
    >
      {/* toolbar */}
      <div className="flex items-center rounded-t-lg border-b bg-toolbar p-1.5">
        <ActionButtons
          status={status}
          handleClose={handleClose}
          handleMinimize={handleMinimize}
          handleMaximize={handleMaximize}
        />

        <div className="absolute flex w-full items-center justify-center gap-x-1">
          <Image src={Document} alt="Document" className="h-4 w-4" />

          <h1 className="text-regular font-bold tracking-wide text-textPrimary">
            {folder}.txt
          </h1>
        </div>
      </div>

      {/* editor */}
      <div className="flex-1 overflow-y-auto px-1.5 font-menlo data-[status='normal']:rounded-r-lg">
        {content.split("\n").map((line, i) => (
          <p
            contentEditable={true}
            key={i}
            data-bold={line.startsWith("•")}
            className="py-1 text-mini text-black outline-none data-[bold='true']:font-bold"
            suppressContentEditableWarning
          >
            {line}
          </p>
        ))}
      </div>
    </Draggable>
  );
};

export default TextEditor;
