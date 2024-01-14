import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../../utils/helpers";

const buttonVariants = cva("button", {
  variants: {
    variant: {
      primary: "primary-btn btn",
      secondary:
        "header-contact-btn border border-primary-green text-primary-green",
      submitButton:
        "btn btn-primary disabled:hover:cursor-not-allowed disabled:opacity-50",
    },
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <button
      aria-label={`${children} button`}
      className={cn(buttonVariants({ className, variant, ...props }))}
    >
      {children}
    </button>
  );
};

export default Button;
