import React from "react";

import Finder from "@/components/Finder/Finder";
import Folder from "@/components/Folder";
// import Fullscreen from "@/components/FullScreen";

import FolderIcon from "@/icons/folder.svg";

export default function Home() {
  return (
    <div className="relative mx-6 my-3 flex-1">
      <Folder icon={FolderIcon} name="About" top={0} right={0} />

      <Folder icon={FolderIcon} name="Education" top={100} right={0} />

      <Folder icon={FolderIcon} name="Experience" top={200} right={0} />

      <Folder icon={FolderIcon} name="Projects" top={300} right={0} />

      <Finder />

      {/* <Fullscreen /> */}
    </div>
  );
}
