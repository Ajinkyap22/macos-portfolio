import React from "react";

import { useDraggable } from "@/hooks/useDraggable";

type Props = {
  id: string;
  variant: "desktop" | "finder";
  position: { x: number; y: number };
  className: string;
  children: React.ReactNode;
  handleOpen: () => void;
};

const DraggableFolder = ({
  id,
  variant,
  position,
  className,
  children,
  handleOpen,
}: Props) => {
  const { attributes, listeners, setNodeRef, style, isDragging } = useDraggable(
    {
      id,
      position,
      type: "Folder",
    },
  );

  return (
    <button
      style={style}
      {...listeners}
      {...attributes}
      className={className}
      data-dragging={isDragging}
      data-variant={variant}
      ref={setNodeRef}
      onDoubleClick={handleOpen}
    >
      {children}
    </button>
  );
};

export default DraggableFolder;
