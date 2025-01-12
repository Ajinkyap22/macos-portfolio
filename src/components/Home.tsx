import React, { useState, useContext } from "react";

import { type DragEndEvent } from "@dnd-kit/core";

import DndContext from "@/components/DnD/DndContext";
import Finder from "@/components/Finder/Finder";
import Folder from "@/components/Folder";

import { foldersData } from "@/data/foldersData";

import { FinderContext, type FolderType } from "@/providers/FinderProvider";

const Home = () => {
  const [folders, setFolders] = useState(foldersData);

  const { setPosition } = useContext(FinderContext);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;

    if (!active?.id) return;

    const data = active.data.current as {
      position: { x: number; y: number };
      type: "Finder" | "Folder";
    };
    const position = data.position;
    const type = data.type;

    const newPosition = {
      x: position.x + (delta?.x || 0),
      y: position.y + (delta?.y || 0),
    };

    if (type === "Finder") {
      setPosition(active.id.toString(), newPosition);
    } else {
      setFolders((folders) =>
        folders.map((folder) =>
          folder.name === active.id
            ? {
                ...folder,
                position: newPosition,
              }
            : folder,
        ),
      );
    }
  };

  return (
    <DndContext handleDragEnd={handleDragEnd}>
      <div className="relative z-20 flex flex-1 items-center justify-center overflow-hidden">
        <div className="flex h-full w-full items-start justify-end">
          {folders.map((folder) => (
            <Folder
              key={folder.name}
              variant="desktop"
              name={folder.name as FolderType}
              top={folder.position.y}
              left={folder.position.x}
            />
          ))}
        </div>

        <Finder />
      </div>
    </DndContext>
  );
};

export default Home;
