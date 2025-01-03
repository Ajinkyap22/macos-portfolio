"use client";

import React, { useContext } from "react";

import Image from "next/image";

import ActionButtons from "@/components/Finder/ActionButtons";

import Desktop from "@/icons/desktop.svg";

import { FinderContext } from "@/providers/FinderProvider";

type Props = {
  status: "minimized" | "maximized" | "normal";
  section: string;
  folder: string;
  windowId: string;
};

const Sidebar = ({ status, section, folder, windowId }: Props) => {
  const { closeWindow, minimizeWindow, maximizeWindow, changeSection } =
    useContext(FinderContext);

  const handleClose = () => {
    closeWindow(windowId);
  };

  const handleMinimize = () => {
    minimizeWindow(windowId);
  };

  const handleMaximize = () => {
    maximizeWindow(windowId);
  };

  const handleChangeSection = () => {
    changeSection(windowId, "Desktop", "Desktop");
  };

  return (
    <div
      data-status={status}
      className="h-full w-1/5 bg-sidebar data-[status='normal']:rounded-l-lg"
    >
      {/* header  */}
      <div className="p-5">
        <ActionButtons
          status={status}
          handleClose={handleClose}
          handleMinimize={handleMinimize}
          handleMaximize={handleMaximize}
        />
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
