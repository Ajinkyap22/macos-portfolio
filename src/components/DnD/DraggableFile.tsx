import React from "react";

import { useDraggable } from "@/hooks/useDraggable";
import useIsMobile from "@/hooks/useIsMobile";

type Props = {
  id: string;
  position: { x: number; y: number };
  className: string;
  children: React.ReactNode;
  handleOpen: () => void;
};

const DraggableFile = ({
  id,
  position,
  className,
  children,
  handleOpen,
}: Props) => {
  const { attributes, listeners, setNodeRef, style, isDragging } = useDraggable(
    {
      id,
      position,
      type: "File",
    },
  );

  const isMobile = useIsMobile();

  return (
    <button
      style={style}
      {...listeners}
      {...attributes}
      className={className}
      data-dragging={isDragging}
      ref={setNodeRef}
      onDoubleClick={isMobile ? undefined : handleOpen}
      onClick={isMobile ? handleOpen : undefined}
    >
      {children}
    </button>
  );
};

export default DraggableFile;
