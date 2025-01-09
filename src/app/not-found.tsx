"use client";

import React, { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import Button from "@/components/ui/Button";

import AppleIcon from "@/icons/apple-dark.svg";

const NotFound = () => {
  const [isOpen, setIsOpen] = useState(true);

  const router = useRouter();

  const goHome = () => {
    router.push("/");
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => {}}
      transition
      className="fixed inset-0 z-40 flex w-screen items-center justify-center"
    >
      <DialogPanel className="flex max-w-[260px] flex-col items-center justify-center gap-y-3 rounded-regular bg-sidebar p-4 shadow-all-around">
        <Image src={AppleIcon} alt="Email" className="h-12 w-12" />

        <div className="flex flex-col items-center gap-y-3">
          <DialogTitle className="text-[22px] font-bold text-[#28282B]">
            404 - Page Not Found
          </DialogTitle>

          <Description className="px-3 text-center text-xs text-secondary">
            The page you are looking for does not exist. Please go back to the
            home URL.
          </Description>

          <Button onClick={goHome} variant="primary" className="w-full">
            Go Home
          </Button>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default NotFound;
