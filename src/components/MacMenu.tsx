"use client";

import React, { useContext, useState } from "react";

import Image from "next/image";

import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";

import MacModal from "@/components/MacModal";

import AppleLight from "@/icons/apple-light.svg";

import { StartupContext } from "@/providers/StartupProvider";

const MacMenu = () => {
  const [isOpen, setIsoOpen] = useState(false);

  const { shutdown, bootUp } = useContext(StartupContext);

  const toggleOpen = () => {
    setIsoOpen(!isOpen);
  };

  return (
    <>
      <Popover className="relative">
        <PopoverButton className="shrink-0 rounded outline-none hover:bg-selected focus:bg-selected sm:px-2 sm:py-1">
          <Image
            src={AppleLight}
            alt="Apple"
            className="h-3.5 w-3.5 sm:h-4 sm:w-4"
          />
        </PopoverButton>

        <PopoverPanel
          transition
          anchor="bottom"
          className="z-50 ml-2 flex min-w-60 flex-col rounded bg-toolbar p-1 text-black/75 transition duration-200 ease-in-out data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
          <CloseButton
            onClick={toggleOpen}
            className="hover:bg-selected-primary rounded px-2 py-1 text-left text-regular font-medium hover:text-white"
          >
            About This Mac
          </CloseButton>
          <hr className="my-1 border-zinc-400/70" />

          <CloseButton
            onClick={bootUp}
            className="hover:bg-selected-primary rounded px-2 py-1 text-left text-regular font-medium hover:text-white"
          >
            Restart...
          </CloseButton>

          <CloseButton
            onClick={shutdown}
            className="hover:bg-selected-primary rounded px-2 py-1 text-left text-regular font-medium hover:text-white"
          >
            Shut Down...
          </CloseButton>
        </PopoverPanel>
      </Popover>

      <MacModal isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  );
};

export default MacMenu;
