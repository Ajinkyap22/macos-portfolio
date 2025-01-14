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
    <div className="group relative z-10 flex items-center gap-x-2">
      {/* close  */}
      <button
        onClick={handleClose}
        data-umami-event="Closed window"
        className="flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border-[0.5px] border-stroke bg-close p-[1px] sm:h-3 sm:w-3"
      >
        <Image
          src={Close}
          alt="Close"
          className="transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0"
        />
      </button>

      {/* minimize */}
      <button
        onClick={handleMinimize}
        data-umami-event="Minimized window"
        className="flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border-[0.5px] border-stroke bg-minimize sm:h-3 sm:w-3"
      >
        <Image
          src={Minimize}
          alt="Minimize"
          className="transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0"
        />
      </button>

      {/* maximize */}
      <button
        onClick={handleMaximize}
        data-umami-event="Maximized window"
        className="flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border-[0.5px] border-stroke bg-maximize sm:h-3 sm:w-3"
      >
        <Image
          src={status === "maximized" ? ExitMaximize : Maximize}
          alt="Maximize"
          className="rotate-90 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0"
        />
      </button>
    </div>
  );
};

export default ActionButtons;
