import React from "react";

import Draggable from "@/components/DnD/DraggableFinder";
import Content from "@/components/Finder/Content";
import Sidebar from "@/components/Finder/Sidebar";

import { FolderType } from "@/providers/FinderProvider";

type Props = {
  section: string;
  folder: FolderType;
  status: "minimized" | "maximized" | "normal";
  offset: number;
  history: { section: string; folder: FolderType }[];
  currentIndex: number;
  windowId: string;
  position: { x: number; y: number };
  handleBack: () => void;
  handleForward: () => void;
};

const FinderSheet = ({
  section,
  folder,
  status,
  offset,
  history,
  currentIndex,
  windowId,
  position,
  handleBack,
  handleForward,
}: Props) => {
  return (
    <Draggable
      status={status}
      offset={offset}
      windowId={windowId}
      position={position}
      className="z-10 flex cursor-default transition-all duration-300 ease-linear data-[status='normal']:rounded-lg data-[status='normal']:shadow-all-around data-[dragging='true']:transition-none"
    >
      {/* sidebar */}
      <Sidebar
        windowId={windowId}
        section={section}
        folder={folder}
        status={status}
      />

      {/* content area */}
      <Content
        folder={folder}
        status={status}
        history={history}
        currentIndex={currentIndex}
        windowId={windowId}
        handleBack={handleBack}
        handleForward={handleForward}
      />
    </Draggable>
  );
};

export default FinderSheet;
