"use client";

import React, { useContext } from "react";

import FinderSheet from "@/components/Finder/FinderSheet";

import { FinderContext } from "@/providers/FinderProvider";

const Finder = () => {
  const { windows, navigateBack, navigateForward } = useContext(FinderContext);

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
      handleBack={() => navigateBack(window.id)}
      handleForward={() => navigateForward(window.id)}
    />
  ));
};

export default Finder;
