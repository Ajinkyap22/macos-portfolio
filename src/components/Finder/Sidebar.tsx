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
      className="h-full w-1/4 bg-sidebar data-[status='normal']:rounded-l-lg sm:w-1/5"
    >
      {/* header  */}
      <div className="px-2 py-4 sm:px-5 sm:py-5">
        <ActionButtons
          status={status}
          handleClose={handleClose}
          handleMinimize={handleMinimize}
          handleMaximize={handleMaximize}
        />
      </div>

      {/* sections */}
      <div className="flex flex-col items-start gap-y-1 px-1 sm:gap-y-2 sm:px-2.5">
        <span className="shrink-0 text-mini font-bold text-tertiary">
          Sections
        </span>

        <button
          data-active={section === "Desktop" && folder === "Desktop"}
          onClick={handleChangeSection}
          data-umami-event="Navigated to desktop"
          className="flex w-full shrink-0 items-center gap-x-1 rounded p-0.5 text-mini text-textPrimary hover:bg-tooltip data-[active='true']:bg-tooltip sm:gap-x-1.5 sm:p-1.5 sm:text-regular"
        >
          <Image
            src={Desktop}
            alt="Desktop"
            className="h-3 w-3 shrink-0 sm:h-4 sm:w-4"
          />

          <span>Desktop</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
