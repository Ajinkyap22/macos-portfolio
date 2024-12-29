import React from "react";

import Content from "@/components/Finder/Content";
import Sidebar from "@/components/Finder/Sidebar";

import { FolderType } from "@/providers/FinderProvider";
import { getStyles } from "@/utils/getStyles";

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
