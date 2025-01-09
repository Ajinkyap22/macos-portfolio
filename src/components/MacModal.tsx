import React from "react";

import Image from "next/image";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import ActionButtonsPartial from "@/components/ActionButtonsPartial";

import MacBookIcon from "@/icons/macbook.png";

type Props = {
  isOpen: boolean;
  toggleOpen: () => void;
};

const MacModal = ({ isOpen, toggleOpen }: Props) => {
  return (
    <Dialog
      open={isOpen}
      onClose={toggleOpen}
      transition
      className="fixed inset-0 z-40 flex w-screen items-center justify-center"
    >
      <DialogPanel className="flex max-w-[260px] flex-col items-center justify-center rounded-regular bg-sidebar p-2 pb-4 shadow-all-around">
        <div className="flex w-full items-center justify-start">
          <ActionButtonsPartial handleClose={toggleOpen} status="normal" />
        </div>

        <Image src={MacBookIcon} alt="Email" width={150} height={150} />

        <div className="flex flex-col items-center gap-y-3">
          <DialogTitle className="text-[22px] font-bold text-[#28282B]">
            Ajinkya&apos;s MacBook
          </DialogTitle>

          <Description className="px-3 text-center text-xs text-secondary">
            This is my MacOS themed portfolio. A glimpse into my work, presented
            with a macOS aesthetic. It is built using Next.js and Tailwind CSS.
          </Description>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default MacModal;
