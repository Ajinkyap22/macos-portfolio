import React, { useRef, useState } from "react";

import Image from "next/image";

import { Transition } from "@headlessui/react";

import IconButton from "@/components/ui/IconButton";

import CloseIcon from "@/icons/close-circle.svg";
import Search from "@/icons/search.svg";

import { skillsData } from "@/data/skillsData";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const Launchpad = ({ show, handleClose }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredSkills = skillsData.filter((skill) =>
    skill.name.toLowerCase().includes(searchQuery),
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const isSkill = (e.target as HTMLElement).closest("#skill");
    const isSearch = (e.target as HTMLElement).closest("#search");

    if (!isSkill && !isSearch) {
      handleClose();
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <Transition show={show}>
      <div
        onClick={handleClick}
        className="fixed inset-0 z-10 flex w-screen flex-col items-center justify-start gap-8 overflow-auto bg-black/30 px-16 py-6 backdrop-blur-lg transition-opacity duration-300 ease-out data-[closed]:opacity-0"
      >
        <div
          tabIndex={0}
          onFocus={() => inputRef.current?.focus()}
          id="search"
          className="group relative flex w-60 items-center justify-center gap-1.5 rounded border border-[#a9c0dc82] p-1"
        >
          <Image src={Search} alt="Search" className="h-3.5 w-3.5" />

          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            className="w-12 min-w-0 bg-transparent text-sm text-white outline-none transition-[width] placeholder:opacity-80 group-focus-within:w-full"
            value={searchQuery}
            onChange={handleSearch}
          />

          {searchQuery && (
            <IconButton
              icon={CloseIcon}
              title="Close"
              className="!p-0"
              handleClick={clearSearch}
            />
          )}
        </div>

        <div className="grid grid-cols-3 gap-x-20 gap-y-10 sm:grid-cols-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2"
              id="skill"
            >
              <Image src={skill.icon} alt={skill.name} width={68} height={68} />
              <span className="text-sm text-white">{skill.name}</span>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-4xl text-white/40">
            No Results
          </p>
        )}
      </div>
    </Transition>
  );
};

export default Launchpad;
