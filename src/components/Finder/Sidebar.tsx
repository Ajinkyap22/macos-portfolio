import React from "react";

import Image from "next/image";

import Close from "@/icons/close.svg";
import Desktop from "@/icons/desktop.svg";
import ExitMaximize from "@/icons/exit-maximize.svg";
import Maximize from "@/icons/maximize.svg";
import Minimize from "@/icons/minimize.svg";

type Props = {
  status: "minimized" | "maximized" | "normal";
  section: string;
  folder: string;
  handleClose: () => void;
  handleMinimize: () => void;
  handleMaximize: () => void;
  handleChangeSection: () => void;
};

const Sidebar = ({
  status,
  section,
  folder,
  handleClose,
  handleMinimize,
  handleMaximize,
  handleChangeSection,
}: Props) => {
  return (
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
            className="flex h-3 w-3 items-center justify-center rounded-full border-[0.5px] border-stroke bg-close p-[1px]"
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
            className="flex h-3 w-3 items-center justify-center rounded-full border-[0.5px] border-stroke bg-minimize"
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
            className="flex h-3 w-3 items-center justify-center rounded-full border-[0.5px] border-stroke bg-maximize"
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
        <span className="text-mini font-bold text-tertiary">Sections</span>

        <button
          data-active={section === "Desktop" && folder === "Desktop"}
          onClick={handleChangeSection}
          className="flex w-full gap-x-1.5 rounded p-1.5 text-regular text-textPrimary hover:bg-tooltip data-[active='true']:bg-tooltip"
        >
          <Image src={Desktop} alt="Desktop" className="h-4 w-4" />

          <span>Desktop</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
