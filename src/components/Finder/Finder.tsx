"use client";

import React, { useContext } from "react";

import FinderSheet from "@/components/Finder/FinderSheet";
import TextEditor from "@/components/Finder/TextEditor";

import { FinderContext } from "@/providers/FinderProvider";

const Finder = () => {
  const { windows, navigateBack, navigateForward } = useContext(FinderContext);

  if (!windows.length) return null;

  return windows.map((window, i) => (
    <React.Fragment key={window.id}>
      {window.type === "Finder" ? (
        <FinderSheet
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
      ) : (
        <TextEditor
          folder={window.folder}
          status={window.status}
          offset={i * 40}
          windowId={window.id}
        />
      )}
    </React.Fragment>
  ));
};

export default Finder;
  