import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../../../utils/helpers";

const buttonVariants = cva("text-xl", {
  variants: {
    variant: {
      primary:
        "outline-none bg-transparent rounded-full px-6 py-1 lg:py-2 text-white xl:text-2xl text-base border border-white transition-all duration-700 relative hover:text-primary-green hover:border-primary-green",
      secondary:
        "header-contact-btn border border-primary-green text-primary-green",
    },
  },
  defaultVariants: {
    variant: "primary",
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
