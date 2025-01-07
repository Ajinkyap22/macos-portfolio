import React from "react";

import FinderSheet from "@/components/Finder/FinderSheet";
import Mail from "@/components/Finder/Mail";
import TextEditor from "@/components/Finder/TextEditor";

import { type Window } from "@/providers/FinderProvider";

type Props = {
  window: Window;
};

const MinimizedWindow = ({ window }: Props) => {
  switch (window.type) {
    case "Mail":
      return (
        <Mail
          status={window.status}
          offset={0}
          windowId={window.id}
          position={window.position}
          zIndex={window.zIndex}
          scaledDown
        />
      );

    case "TextEditor":
      return (
        <TextEditor
          folder={window.folder}
          status={window.status}
          offset={0}
          windowId={window.id}
          position={window.position}
          zIndex={window.zIndex}
          scaledDown
        />
      );

    default:
      return (
        <FinderSheet
          section={window.section}
          folder={window.folder}
          status={window.status}
          offset={0}
          history={window.history}
          currentIndex={window.currentIndex}
          windowId={window.id}
          position={window.position}
          zIndex={window.zIndex}
          scaledDown
        />
      );
  }
};

export default MinimizedWindow;
