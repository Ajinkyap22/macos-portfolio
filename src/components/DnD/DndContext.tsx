import React from "react";

import {
  DndContext as DndKitContext,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  type DragEndEvent,
} from "@dnd-kit/core";

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

  return (
    <DndKitContext sensors={sensors} onDragEnd={handleDragEnd}>
      {children}
    </DndKitContext>
  );
};

export default DndContext;
