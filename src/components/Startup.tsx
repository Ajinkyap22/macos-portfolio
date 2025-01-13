import React from "react";

import Image from "next/image";

import Button from "@/components/ui/Button";

import AppleIcon from "@/icons/apple-light.svg";

type Props = {
  status: "booting" | "shutdown";
  bootUp: () => void;
};

const Startup = ({ status, bootUp }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-y-12 bg-black text-white">
      <Image src={AppleIcon} alt="Apple Icon" className="h-24 w-24" />

      {status === "booting" ? (
        <div className="h-2 w-1/3 rounded-full bg-zinc-500 sm:w-1/5">
          <div className="animate-fill h-2 rounded-full bg-white"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-y-3">
          <span className="font-medium text-white">
            This Mac is powered off.
          </span>

          <Button
            variant="transparent"
            className="!rounded bg-white font-medium text-black"
            onClick={bootUp}
            umamiEvent="Booted up"
          >
            Click to boot
          </Button>
        </div>
      )}
    </div>
  );
};

export default Startup;
