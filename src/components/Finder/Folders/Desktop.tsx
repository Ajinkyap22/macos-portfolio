import React from "react";

import Folder from "@/components/Folder";

type Props = {
  windowId: string;
};

const Desktop = ({ windowId }: Props) => {
  return (
    <>
      <Folder
        windowId={windowId}
        variant="finder"
        name="About"
        top={0}
        left={0}
      />

      <Folder
        windowId={windowId}
        variant="finder"
        name="Projects"
        top={0}
        left={100}
      />
      <Folder
        windowId={windowId}
        variant="finder"
        name="Education"
        top={0}
        left={200}
      />
      <Folder
        windowId={windowId}
        variant="finder"
        name="Experience"
        top={0}
        left={300}
      />
    </>
  );
};

export default Desktop;
