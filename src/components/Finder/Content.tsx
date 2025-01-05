"use client";

import React, { useCallback } from "react";

import Image from "next/image";

import Desktop from "@/components/Finder/Folders/Desktop";
import Projects from "@/components/Finder/Folders/Projects";
import TextFile from "@/components/TextFile";

import Back from "@/icons/back.svg";
import Forward from "@/icons/forward.svg";

type Props = {
  folder: string;
  status: string;
  history: { section: string; folder: string }[];
  currentIndex: number;
  windowId: string;
  handleBack?: () => void;
  handleForward?: () => void;
};

const Content = ({
  folder,
  status,
  history,
  currentIndex,
  windowId,
  handleBack,
  handleForward,
}: Props) => {
  const RenderContent = useCallback(() => {
    switch (folder) {
      case "Desktop":
        return <Desktop windowId={windowId} />;

      case "About":
        return <TextFile name="About" top={0} left={0} />;

      case "Projects":
        return <Projects isMaximized={status === "maximized"} />;

      case "Education":
        return <TextFile name="Education" top={0} left={0} />;

      case "Experience":
        return <TextFile name="Experience" top={0} left={0} />;

      default:
        return <Desktop windowId={windowId} />;
    }
  }, [folder, windowId, status]);

  return (
    <div
      data-status={status}
      className="flex h-full w-3/4 flex-col bg-white data-[status='normal']:rounded-r-lg sm:w-4/5"
    >
      {/* header */}
      <div className="flex items-center p-4 transition-shadow duration-300 hover:shadow">
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-4">
            <button
              disabled={currentIndex <= 0}
              className="h-3 w-3 disabled:opacity-50 sm:h-4 sm:w-4"
              onClick={handleBack}
            >
              <Image src={Back} alt="Back" />
            </button>

            <button
              disabled={currentIndex >= history.length - 1}
              className="h-3 w-3 disabled:opacity-50 sm:h-4 sm:w-4"
              onClick={handleForward}
            >
              <Image src={Forward} alt="Forward" />
            </button>
          </div>

          <span className="text-regular font-semibold text-textPrimary sm:text-emphasized">
            {folder}
          </span>
        </div>
      </div>

      {/* content */}
      <div className="relative m-2 flex-1 overflow-y-auto">
        <RenderContent />
      </div>
    </div>
  );
};

export default Content;
