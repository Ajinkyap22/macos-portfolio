import React from "react";

import Image from "next/image";

import Close from "@/icons/close.svg";
import ExitMaximize from "@/icons/exit-maximize.svg";
import Maximize from "@/icons/maximize.svg";
import Minimize from "@/icons/minimize.svg";

type Props = {
  status: "minimized" | "maximized" | "normal";
  handleClose: () => void;
  handleMinimize: () => void;
  handleMaximize: () => void;
};

const ActionButtons = ({
  status,
  handleClose,
  handleMinimize,
  handleMaximize,
}: Props) => {
  return (
    <div className="group z-10 flex items-center gap-x-2">
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
  );
};

export default ActionButtons;
