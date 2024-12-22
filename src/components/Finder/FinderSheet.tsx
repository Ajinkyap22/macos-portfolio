import React, { CSSProperties } from "react";

import Image from "next/image";

import { FolderType } from "@/providers/FinderProvider";

import Close from "@/icons/close.svg";
import Desktop from "@/icons/desktop.svg";
import ExitMaximize from "@/icons/exit-maximize.svg";
import Maximize from "@/icons/maximize.svg";
import Minimize from "@/icons/minimize.svg";

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

const getStyles = (status: "minimized" | "maximized" | "normal") => {
  switch (status) {
    case "maximized":
      return maximizedStyles;
    case "minimized":
      return minimizedStyles;
    default:
      return normalStyles;
  }
};

type Props = {
  section: string;
  folder: FolderType;
  status: "minimized" | "maximized" | "normal";
  handleClose: () => void;
  handleMinimize: () => void;
  handleMaximize: () => void;
  handleChangeSection: () => void;
};

const FinderSheet = ({
  section,
  folder,
  status,
  handleClose,
  handleMinimize,
  handleMaximize,
  handleChangeSection,
}: Props) => {
  return (
    <div
      style={getStyles(status)}
      data-status={status}
      className="z-10 flex transition-all duration-300 ease-linear data-[status='normal']:rounded-lg data-[status='normal']:shadow-all-around"
    >
      {/* sidebar */}
      <div
        data-status={status}
        className="h-full w-1/5 bg-sidebar data-[status='normal']:rounded-l-lg"
      >
        {/* header  */}
        <div className="p-5">
          <div className="group flex items-center gap-x-2">
            {/* close  */}
            <button
              onClick={handleClose}
              className="border-stroke flex h-3 w-3 items-center justify-center rounded-full border-[0.5px] bg-close p-[1px]"
            >
              <Image
                src={Close}
                alt="Close"
                className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </button>

            {/* minimize */}
            <button
              onClick={handleMinimize}
              className="border-stroke flex h-3 w-3 items-center justify-center rounded-full border-[0.5px] bg-minimize"
            >
              <Image
                src={Minimize}
                alt="Minimize"
                className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </button>

            {/* maximize */}
            <button
              onClick={handleMaximize}
              className="border-stroke flex h-3 w-3 items-center justify-center rounded-full border-[0.5px] bg-maximize"
            >
              <Image
                src={status === "maximized" ? ExitMaximize : Maximize}
                alt="Maximize"
                className="rotate-90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </button>
          </div>
        </div>

        {/* sections */}
        <div className="flex flex-col items-start gap-y-2 px-2.5">
          <span className="text-tertiary text-mini font-bold">Sections</span>

          <button
            data-active={section === "Desktop" && folder === "Desktop"}
            onClick={handleChangeSection}
            className="flex w-full gap-x-1.5 rounded p-1.5 text-regular text-textPrimary data-[active='true']:bg-tooltip"
          >
            <Image src={Desktop} alt="Desktop" className="h-4 w-4" />

            <span>Desktop</span>
          </button>
        </div>
      </div>

      {/* content area */}
      <div
        data-status={status}
        className="h-full w-4/5 bg-white data-[status='normal']:rounded-r-lg"
      ></div>
    </div>
  );
};

export default FinderSheet;
