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
  scaledDown?: boolean;
  position: { x: number; y: number };
  handleBack?: () => void;
  handleForward?: () => void;
  changeStatus?: () => void;
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
  scaledDown,
  handleBack,
  handleForward,
  changeStatus,
}: Props) => {
  const handleChangeStatus = () => {
    if (!scaledDown || !changeStatus) return;

    changeStatus();
  };

  return (
    <Draggable
      status={status}
      offset={offset}
      windowId={windowId}
      position={position}
      scaledDown={scaledDown}
      className="data-[scaled-down='true']:scaled-down z-30 flex cursor-default transition-all duration-300 ease-out data-[status='normal']:rounded-lg data-[status='normal']:shadow-all-around data-[dragging='true']:transition-none"
      handleChangeStatus={handleChangeStatus}
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
