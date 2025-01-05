import { useDraggable as useDrag } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
  position: { x: number; y: number };
  type: "File" | "Folder" | "Finder";
};

export const useDraggable = ({ id, position, type }: Props) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDrag({
    id,
    data: {
      position,
      type,
    },
  });

  const dragTransform = transform
    ? {
        ...transform,
        x: transform.x + position.x,
        y: transform.y + position.y,
      }
    : {
        ...position,
        scaleX: 1,
        scaleY: 1,
      };

  const style = {
    transform: CSS.Translate.toString(dragTransform),
    touchAction: "none",
  };

  return { attributes, listeners, setNodeRef, style, isDragging };
};
