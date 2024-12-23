import React from "react";

import Finder from "@/components/Finder/Finder";
import Folder from "@/components/Folder";
// import Fullscreen from "@/components/FullScreen";

export default function Home() {
  return (
    <div className="relative mx-6 my-3 flex-1">
      <Folder variant="desktop" name="About" top={0} right={0} />

      <Folder variant="desktop" name="Projects" top={100} right={0} />

      <Folder variant="desktop" name="Education" top={200} right={0} />

      <Folder variant="desktop" name="Experience" top={300} right={0} />

      <Finder />

      {/* <Fullscreen /> */}
    </div>
  );
}
