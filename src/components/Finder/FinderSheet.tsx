import React, { CSSProperties } from "react";

import Content from "@/components/Finder/Content";
import Sidebar from "@/components/Finder/Sidebar";

import { FolderType } from "@/providers/FinderProvider";

const maximizedStyles: CSSProperties = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
};

const normalStyles: CSSProperties = {
  position: "absolute",
  width: "50%",
  height: "50%",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const minimizedStyles: CSSProperties = {
  position: "fixed",
  width: 0,
  height: 0,
  bottom: 0,
  right: 0,
};

const getStyles = (
  status: "minimized" | "maximized" | "normal",
  offset: number = 0,
) => {
  switch (status) {
    case "maximized":
      return maximizedStyles;
    case "minimized":
      return minimizedStyles;
    default:
      return {
        ...normalStyles,
        top: `calc(50% + ${offset}px)`,
        left: `calc(50% + ${offset}px)`,
      };
  }
};

type Props = {
  section: string;
  folder: FolderType;
  status: "minimized" | "maximized" | "normal";
  offset: number;
  history: { section: string; folder: FolderType }[];
  currentIndex: number;
  windowId: string;
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
  handleBack,
  handleForward,
}: Props) => {
  return (
    <div
      style={getStyles(status, offset)}
      data-status={status}
      className="z-10 flex transition-all duration-300 ease-linear data-[status='normal']:rounded-lg data-[status='normal']:shadow-all-around"
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
    </div>
  );
};

export default FinderSheet;
