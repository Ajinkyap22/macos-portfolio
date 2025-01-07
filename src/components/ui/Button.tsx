import React from "react";

import clsx from "clsx";

const baseStyles = "rounded-md px-2 py-1.5 text-regular focus:outline-none";

const variantStyles = {
  secondary: "text-textPrimary shadow-all-around",
  primary: "bg-primary text-white shadow-all-around-primary",
  ghost: "text-textPrimary bg-ghost",
  transparent: "",
};

type ButtonVariant = "secondary" | "primary" | "ghost" | "transparent";

type ButtonProps = {
  variant: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className, {
        "cursor-not-allowed opacity-50": disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;