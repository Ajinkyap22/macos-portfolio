import React, { useState } from "react";

import Image from "next/image";

import { type DragEndEvent } from "@dnd-kit/core";

import DndContext from "@/components/DnD/DndContext";
import DraggableFile from "@/components/DnD/DraggableFile";

import Webpage from "@/icons/webpage.png";

import useIsMobile from "@/hooks/useIsMobile";

import { projectsData } from "@/data/projectsData";

type Props = {
  isMaximized?: boolean;
};

type ProjectProps = {
  name: string;
  top: number;
  left: number;
  link: string;
};

const Projects = ({ isMaximized }: Props) => {
  const isMobile = useIsMobile();

  const MOBILE_LIMIT = isMaximized ? 3 : 2;
  const DESKTOP_LIMIT = isMaximized ? 8 : 5;
  const MAX_LIMIT = isMobile ? MOBILE_LIMIT : DESKTOP_LIMIT;

  return (
    <div className="flex h-full flex-wrap justify-start gap-8">
      {projectsData.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          top={100 * Math.floor(index / MAX_LIMIT)}
          left={100 * (index % MAX_LIMIT)}
          link={project.link}
        />
      ))}
    </div>
  );
};

const Project = ({ name, top, left, link }: ProjectProps) => {
  const [position, setPosition] = useState({ x: left, y: top });

  const handleOpen = () => {
    window.open(link, "_blank");
  };

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

    setPosition(newPosition);
  };

  return (
    <DndContext handleDragEnd={handleDragEnd}>
      <DraggableFile
        id={name}
        position={position}
        className="group absolute flex w-20 flex-col items-center gap-y-0.5 outline-none data-[dragging='true']:pointer-events-none"
        handleOpen={handleOpen}
      >
        <Image
          src={Webpage}
          alt="Browser"
          className="zoom-70 sm:zoom-100 h-[66px] w-[66px] rounded-md border-2 border-transparent p-0.5 group-hover:bg-sidebar group-focus:bg-sidebar"
        />

        <p className="rounded px-1 text-center text-mini tracking-tight text-textPrimary group-focus:bg-focused group-focus:font-semibold group-focus:text-white sm:text-regular">
          {name}
        </p>
      </DraggableFile>
    </DndContext>
  );
};

export default Projects;
