import React from "react";

import { useDraggable } from "@/hooks/useDraggable";

import { getStyles } from "@/utils/getStyles";

type Props = {
  status: "minimized" | "maximized" | "normal";
  offset: number;
  windowId: string;
  position: { x: number; y: number };
  className: string;
  children: React.ReactNode;
};

const DraggableFinder = ({
  status,
  offset,
  windowId,
  position,
  className,
  children,
}: Props) => {
  const { attributes, listeners, setNodeRef, style, isDragging } = useDraggable(
    {
      id: windowId,
      position,
      type: "Finder",
    },
  );

  return (
    <div
      style={getStyles(status, offset, style)}
      {...listeners}
      {...attributes}
      data-status={status}
      data-dragging={isDragging}
      ref={setNodeRef}
      className={className}
    >
      {children}
    </div>
  );
};

export default DraggableFinder;
