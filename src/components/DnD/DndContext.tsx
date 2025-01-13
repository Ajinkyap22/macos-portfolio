import React from "react";

import {
  DndContext as DndKitContext,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  type DragEndEvent,
  DragStartEvent,
} from "@dnd-kit/core";

declare global {
  interface Window {
    umami?: {
      track: (event: string) => void;
    };
  }
}

type Props = {
  children: React.ReactNode;
  handleDragEnd: (event: DragEndEvent) => void;
};

const DndContext = ({ children, handleDragEnd }: Props) => {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const { data } = active;

    const type = data.current?.type;

    if (!type) return;

    const umami = window.umami;

    umami?.track(`Dragged ${type}`);
  };

  return (
    <DndKitContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      {children}
    </DndKitContext>
  );
};

export default DndContext;
