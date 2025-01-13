"use client";

import React, { useEffect, useState, useContext } from "react";

import { usePathname } from "next/navigation";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import Button from "@/components/ui/Button";

import { FullscreenContext } from "@/providers/FullscreenProvider";

const Fullscreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { enterFullscreen } = useContext(FullscreenContext);
  const pathname = usePathname();

  useEffect(() => {
    if (!!document?.fullscreenElement) return;

    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleFullscreen = () => {
    toggleModal();
    enterFullscreen();
  };

  if (pathname !== "/") return null;

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        transition
        className="fixed inset-0 z-40 flex w-screen items-center justify-center bg-black/30 p-4 transition-opacity duration-200 data-[closed]:opacity-0"
      >
        <DialogPanel className="flex max-h-[260px] max-w-[260px] flex-col items-center justify-center gap-y-4 rounded-regular bg-popover p-4 shadow-all-around">
          <DialogTitle className="text-sm font-bold text-textPrimary">
            Enter Fullscreen
          </DialogTitle>

          <Description className="text-center text-xs text-textPrimary">
            To get the proper feel of macOS, this website is best viewed in
            Fullscreen mode. Would you like to enter Fullscreen mode?
          </Description>

          <div className="flex flex-col gap-3 self-stretch">
            <Button
              umamiEvent="Entered Fullscreen"
              variant="primary"
              onClick={handleFullscreen}
            >
              Enter Fullscreen
            </Button>

            <Button
              umamiEvent="Dismissed Fullscreen"
              variant="ghost"
              onClick={toggleModal}
            >
              Dismiss
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default Fullscreen;
