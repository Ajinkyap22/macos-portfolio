import React, { useContext } from "react";

import Draggable from "@/components/DnD/DraggableFinder";
import Content from "@/components/Finder/Content";
import Sidebar from "@/components/Finder/Sidebar";

import { FinderContext, FolderType } from "@/providers/FinderProvider";

type Props = {
  section: string;
  folder: FolderType;
  status: "minimized" | "maximized" | "normal";
  offset: number;
  history: { section: string; folder: FolderType }[];
  currentIndex: number;
  windowId: string;
  position: { x: number; y: number };
  zIndex: number;
  scaledDown?: boolean;
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
  zIndex,
  scaledDown,
}: Props) => {
  const { navigateBack, navigateForward, focusWindow, openWindow } =
    useContext(FinderContext);

  const handleChangeStatus = () => {
    if (!scaledDown) return;

    openWindow(section, folder, "Finder");
  };

  const handleBack = () => {
    navigateBack(windowId);
  };

  const handleForward = () => {
    navigateForward(windowId);
  };

  const handleFocus = () => {
    focusWindow(windowId);
  };

  return (
    <Draggable
      status={status}
      offset={offset}
      windowId={windowId}
      position={position}
      scaledDown={scaledDown}
      zIndex={zIndex}
      className="data-[scaled-down='true']:scaled-down flex cursor-default transition-all duration-300 ease-in data-[status='normal']:rounded-lg data-[status='normal']:shadow-all-around data-[dragging='true']:transition-none"
      handleChangeStatus={handleChangeStatus}
      handleFocus={handleFocus}
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
