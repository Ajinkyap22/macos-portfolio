"use client";

import React, { useContext } from "react";

import FinderSheet from "@/components/Finder/FinderSheet";
import Mail from "@/components/Finder/Mail";
import TextEditor from "@/components/Finder/TextEditor";

import { FinderContext } from "@/providers/FinderProvider";
import type { Window } from "@/providers/FinderProvider";

const Finder = () => {
  const { windows, navigateBack, navigateForward } = useContext(FinderContext);

  if (!windows.length) return null;

  const RenderWindow = (window: Window, i: number) => {
    switch (window.type) {
      case "Finder":
        return (
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
        );

      case "TextEditor":
        return (
          <TextEditor
            key={window.id}
            folder={window.folder}
            status={window.status}
            offset={i * 40}
            windowId={window.id}
          />
        );

      case "Mail":
        return (
          <Mail
            key={window.id}
            status={window.status}
            offset={i * 40}
            windowId={window.id}
          />
        );
    }
  };

  return windows.map((window, i) => RenderWindow(window, i));
};

export default Finder;
