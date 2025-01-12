import React from "react";

import Image, { type StaticImageData } from "next/image";

import clsx from "clsx";

type Props = {
  icon: StaticImageData;
  title: string;
  iconClassName?: string;
  className?: string;
  isDisabled?: boolean;
  handleClick?: () => void;
};

const IconButton = ({
  icon,
  title,
  iconClassName,
  className,
  isDisabled = false,
  handleClick,
}: Props) => {
  return (
    <>
      <button
        title={title}
        className={clsx(
          "flex items-center gap-x-2 rounded-md px-3 py-2 transition-colors delay-100 hover:bg-active",
          className,
        )}
        onClick={handleClick}
        disabled={isDisabled}
      >
        <Image
          src={icon}
          alt="Send"
          className={clsx(iconClassName, {
            "opacity-50": isDisabled,
            "h-5 w-5": !iconClassName,
          })}
        />
      </button>
    </>
  );
};

export default IconButton;
