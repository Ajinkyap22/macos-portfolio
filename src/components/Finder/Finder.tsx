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
    navigateBack,
    navigateForward,
  } = useContext(FinderContext);

  if (!windows.length) return null;

  return windows.map((window, i) => (
    <FinderSheet
      key={window.id}
      section={window.section}
      folder={window.folder}
      status={window.status}
      offset={i * 40}
      history={window.history}
      currentIndex={window.currentIndex}
      windowId={window.id}
      handleClose={() => closeWindow(window.id)}
      handleMinimize={() => minimizeWindow(window.id)}
      handleMaximize={() => maximizeWindow(window.id)}
      handleChangeSection={() =>
        changeSection(window.id, window.section, window.folder)
      }
      handleBack={() => navigateBack(window.id)}
      handleForward={() => navigateForward(window.id)}
    />
  ));
};

export default Finder;
