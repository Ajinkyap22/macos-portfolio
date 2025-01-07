import React from "react";

import { useDraggable } from "@/hooks/useDraggable";
import useIsMobile from "@/hooks/useIsMobile";

import { getStyles } from "@/utils/getStyles";

type Props = {
  status: "minimized" | "maximized" | "normal";
  offset: number;
  windowId: string;
  position: { x: number; y: number };
  className: string;
  zIndex: number;
  children: React.ReactNode;
  scaledDown?: boolean;
  handleChangeStatus?: () => void;
  handleFocus?: () => void;
};

const DraggableFinder = ({
  status,
  offset,
  windowId,
  position,
  className,
  zIndex,
  children,
  scaledDown,
  handleChangeStatus,
  handleFocus,
}: Props) => {
  const { attributes, listeners, setNodeRef, style, isDragging } = useDraggable(
    {
      id: windowId,
      position,
      type: "Finder",
    },
  );

  const isMobile = useIsMobile(1024);

  return (
    <div
      style={
        scaledDown
          ? undefined
          : {
              zIndex,
              ...getStyles(status, offset, style, isMobile),
            }
      }
      {...listeners}
      {...attributes}
      data-status={status}
      data-scaled-down={scaledDown}
      data-dragging={isDragging}
      ref={setNodeRef}
      draggable={!scaledDown}
      className={className}
      onClick={handleChangeStatus}
      onFocus={handleFocus}
    >
      {children}
    </div>
  );
};

export default DraggableFinder;
