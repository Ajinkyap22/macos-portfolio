import React, { useState } from "react";

import Image from "next/image";

import { type DragEndEvent } from "@dnd-kit/core";

import DndContext from "@/components/DnD/DndContext";
import DraggableFile from "@/components/DnD/DraggableFile";

import Webpage from "@/icons/webpage.png";

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

const MAX_LIMIT = 5;

const Projects = ({ isMaximized }: Props) => {
  return (
    <div className="flex h-full flex-wrap justify-start gap-8">
      {projectsData.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          top={!isMaximized && index >= MAX_LIMIT ? 120 : 0}
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
          alt="Safari"
          className="h-[66px] w-[66px] rounded-md border-2 border-transparent p-0.5 group-hover:bg-sidebar group-focus:bg-sidebar"
        />

        <p className="rounded px-1 text-center text-regular tracking-tight text-textPrimary group-focus:bg-focused group-focus:font-semibold group-focus:text-white">
          {name}
        </p>
      </DraggableFile>
    </DndContext>
  );
};

export default Projects;
