import React from "react";

import Image from "next/image";

import Close from "@/icons/close.svg";
import ExitMaximize from "@/icons/exit-maximize.svg";
import Maximize from "@/icons/maximize.svg";
import Minimize from "@/icons/minimize.svg";

type Props = {
  status: "minimized" | "maximized" | "normal";
  handleClose?: () => void;
  handleMinimize?: () => void;
  handleMaximize?: () => void;
};

const ActionButtonsPartial = ({
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
        disabled={!handleClose}
        data-disabled={!handleClose}
        className="flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border-[0.5px] border-stroke bg-close p-[1px] data-[disabled='true']:bg-[#bab6b64a] sm:h-3 sm:w-3"
      >
        {handleClose && (
          <Image
            src={Close}
            alt="Close"
            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </button>

      {/* minimize */}
      <button
        onClick={handleMinimize}
        disabled={!handleMinimize}
        data-disabled={!handleMinimize}
        className="flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border-[0.5px] border-stroke bg-minimize data-[disabled='true']:bg-[#bab6b64a] sm:h-3 sm:w-3"
      >
        {handleMinimize && (
          <Image
            src={Minimize}
            alt="Minimize"
            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </button>

      {/* maximize */}
      <button
        onClick={handleMaximize}
        disabled={!handleMaximize}
        data-disabled={!handleMaximize}
        className="flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border-[0.5px] border-stroke bg-maximize data-[disabled='true']:bg-[#bab6b64a] sm:h-3 sm:w-3"
      >
        {handleMaximize && (
          <Image
            src={status === "maximized" ? ExitMaximize : Maximize}
            alt="Maximize"
            className="rotate-90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </button>
    </div>
  );
};

export default ActionButtonsPartial;
