import React from "react";
import clsx from "clsx";

const baseStyles =
  "rounded-md px-2 py-1.5 text-[13px]/4 focus:outline-none shadow-all-around";

const variantStyles = {
  secondary: "text-textPrimary",
  primary: "bg-primary text-white shadow-all-around-primary",
};

type ButtonVariant = "secondary" | "primary";

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

// Usage example:
// <Button variant="cancel" onClick={() => console.log('Cancel clicked')}>Cancel</Button>
// <Button variant="save" onClick={() => console.log('Save clicked')}>Save</Button>
