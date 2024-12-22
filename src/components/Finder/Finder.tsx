"use client";

import React, { useContext } from "react";

import FinderSheet from "@/components/Finder/FinderSheet";

import { FinderContext } from "@/providers/FinderProvider";

const Finder = () => {
  const {
    windows,
    closeWindow,
    changeSection,
    maximizeWindow,
    minimizeWindow,
  } = useContext(FinderContext);

  if (!windows.length) return null;

  return windows.map((window) => (
    <FinderSheet
      key={window.id}
      section={window.section}
      folder={window.folder}
      status={window.status}
      handleClose={() => closeWindow(window.id)}
      handleMinimize={() => minimizeWindow(window.id)}
      handleMaximize={() => maximizeWindow(window.id)}
      handleChangeSection={() =>
        changeSection(window.id, window.section, window.folder)
      }
    />
  ));
};

export default Finder;
