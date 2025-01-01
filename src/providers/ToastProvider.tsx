"use client";

import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { Toast } from "@/components/ui/Toast";

interface ToastContextType {
  showToast: (message: string, description?: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const ToastProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(3000);

  const showToast = (
    msg: string,
    description: string = "",
    dur: number = 3000,
  ) => {
    setMessage(msg);
    setDuration(dur);
    setDescription(description);
    setIsOpen(true);
  };

  const closeToast = () => setIsOpen(false);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <Toast
        message={message}
        description={description}
        isOpen={isOpen}
        onClose={closeToast}
        duration={duration}
      />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
