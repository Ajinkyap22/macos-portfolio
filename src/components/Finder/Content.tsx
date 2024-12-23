import React, { useCallback } from "react";

import Image from "next/image";

import Desktop from "@/components/Finder/Folders/Desktop";

import Back from "@/icons/back.svg";
import Forward from "@/icons/forward.svg";

type Props = {
  folder: string;
  status: string;
  history: { section: string; folder: string }[];
  currentIndex: number;
  windowId: string;
  handleBack: () => void;
  handleForward: () => void;
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

      default:
        return <Desktop windowId={windowId} />;
    }
  }, [folder, windowId]);

  return (
    <div
      data-status={status}
      className="h-full w-4/5 bg-white data-[status='normal']:rounded-r-lg"
    >
      {/* header */}
      <div className="flex items-center p-4 transition-shadow duration-300 hover:shadow">
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-4">
            <button
              disabled={currentIndex <= 0}
              className="h-4 w-4 disabled:opacity-50"
              onClick={handleBack}
            >
              <Image src={Back} alt="Back" />
            </button>

            <button
              disabled={currentIndex >= history.length - 1}
              className="h-4 w-4 disabled:opacity-50"
              onClick={handleForward}
            >
              <Image src={Forward} alt="Forward" />
            </button>
          </div>

          <span className="text-emphasized font-semibold text-textPrimary">
            {folder}
          </span>
        </div>
      </div>

      {/* content */}
      <div className="relative m-2 h-full overflow-y-auto">
        <RenderContent />
      </div>
    </div>
  );
};

export default Content;
