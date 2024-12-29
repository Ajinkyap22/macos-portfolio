import React from "react";

import Image from "next/image";

import { projectsData } from "@/data/projectsData";

import Webpage from "@/icons/webpage.png";

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
    <div className="flex flex-wrap justify-center gap-8">
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
  const handleOpen = () => {
    window.open(link, "_blank");
  };

  return (
    <button
      style={{
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="group absolute flex w-20 flex-col items-center gap-y-0.5 outline-none"
      onDoubleClick={handleOpen}
    >
      <Image
        src={Webpage}
        alt="Safari"
        className="h-[66px] w-[66px] rounded-md border-2 border-transparent p-0.5 group-hover:bg-sidebar group-focus:bg-sidebar"
      />

      <p className="group-focus:bg-focused rounded px-1 text-center text-regular tracking-tight text-textPrimary group-focus:font-semibold group-focus:text-white">
        {name}
      </p>
    </button>
  );
};

export default Projects;
