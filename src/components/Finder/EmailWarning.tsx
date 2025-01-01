"use client";

import React from "react";

import Image from "next/image";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import Button from "@/components/ui/Button";

import Email from "@/icons/mail.png";

type Props = {
  email: string;
  isOpen: boolean;
  handleClose: () => void;
  handleSend: () => void;
};

const EmailWarning = ({ email, isOpen, handleClose, handleSend }: Props) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        transition
        className="fixed inset-0 z-10 flex w-screen items-center justify-center bg-black/30 p-4 transition-opacity duration-200 data-[closed]:opacity-0"
      >
        <DialogPanel className="flex max-h-[260px] max-w-[260px] flex-col items-center justify-center gap-y-5 rounded-regular bg-popover p-4 shadow-all-around">
          <Image src={Email} alt="Email" width={50} height={50} />

          <div className="flex flex-col items-center gap-y-3">
            <DialogTitle className="text-sm font-bold text-textPrimary">
              Warning
            </DialogTitle>

            <Description className="text-center text-xs text-textPrimary">
              &quot;{email}&quot; does not appear to be a valid email address.
              Verify the address and try again.
            </Description>

            <div className="flex items-center gap-3 self-stretch">
              <Button
                variant="ghost"
                className="flex-1 bg-[#d8d8d8]"
                onClick={handleClose}
              >
                Cancel
              </Button>

              <Button onClick={handleSend} variant="primary" className="flex-1">
                Send Anyway
              </Button>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default EmailWarning;
