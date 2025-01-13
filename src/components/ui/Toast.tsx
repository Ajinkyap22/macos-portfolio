import { useEffect } from "react";

import Image from "next/image";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";

import AppleIcon from "@/icons/apple-dark.svg";
import Close from "@/icons/close-dark.svg";

interface ToastProps {
  message: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  description,
  isOpen,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  return (
    <Dialog
      as="div"
      className="min-w-xs pointer-events-none fixed inset-0 z-50 flex items-end justify-center px-4 py-6 transition-opacity duration-200 data-[closed]:opacity-0 sm:items-start sm:justify-end"
      open={isOpen}
      transition
      onClose={onClose}
    >
      <DialogPanel className="group pointer-events-auto relative min-w-72 rounded-2xl bg-popover shadow-all-around ring-1 ring-black ring-opacity-5">
        <div className="flex items-center gap-2 px-2.5 py-4">
          <div className="flex-shrink-0">
            <Image
              src={AppleIcon}
              alt="Apple"
              className="h-8 w-8 text-green-400"
            />
          </div>

          <div className="flex flex-1 flex-col gap-0.5">
            <DialogTitle className="text-regular font-bold text-textPrimary">
              {message}
            </DialogTitle>

            {description && (
              <Description className="text-regular text-textPrimary">
                {description}
              </Description>
            )}
          </div>
        </div>

        <button
          onClick={onClose}
          title="Close"
          data-umami-event="Closed Toast"
          className="absolute -left-1 -top-1 z-10 flex items-center justify-center !rounded-full bg-alert !px-1 !py-1 opacity-0 shadow-all-around group-hover:opacity-100"
        >
          <Image src={Close} alt="Close" className="h-2.5 w-2.5" />
        </button>
      </DialogPanel>
    </Dialog>
  );
};
