import React, { useState } from "react";

import { type DragEndEvent } from "@dnd-kit/core";

import DndContext from "@/components/DnD/DndContext";
import Folder from "@/components/Folder";

import useIsMobile from "@/hooks/useIsMobile";

import { innerFoldersData } from "@/data/foldersData";

import { FolderType } from "@/providers/FinderProvider";

type Props = {
  windowId: string;
};

const Desktop = ({ windowId }: Props) => {
  const [folders, setFolders] = useState(innerFoldersData);
  const isMobile = useIsMobile();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;

    if (!active?.id) return;

    const data = active.data.current as {
      position: { x: number; y: number };
    };

    const position = data.position;

    const newPosition = {
      x: position.x + (delta?.x || 0),
      y: position.y + (delta?.y || 0),
    };

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
  };

  return (
    <DndContext handleDragEnd={handleDragEnd}>
      {folders.map((folder, i) => (
        <Folder
          key={folder.name}
          windowId={windowId}
          variant="finder"
          name={folder.name as FolderType}
          top={folder.position.y}
          left={
            isMobile
              ? Math.min(folder.position.x, folder.position.x - 30 * i)
              : folder.position.x
          }
        />
      ))}
    </DndContext>
  );
};

export default Desktop;
