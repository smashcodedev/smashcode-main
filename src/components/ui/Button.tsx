import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../../../utils/helpers";

const buttonVariants = cva("text-xl", {
  variants: {
    variant: {
      primary:
        "outline-none bg-transparent rounded-full px-6 py-2 text-white text-base border border-white transition-all duration-700 relative",
      secondary:
        "border text-primary-green border-primary-green px-4 text-xl py-[1px] rounded-full shadow shadow-primary-green hover:shadow-primary-green",
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
