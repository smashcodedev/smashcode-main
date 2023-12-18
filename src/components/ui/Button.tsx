import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../../../utils/helpers";

const buttonVariants = cva("text-xl", {
  variants: {
    variant: {
      primary: "bg-primary-green text-white",
      secondary: "bg-secondary-gray text-primary-green",
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
    <button className={cn(buttonVariants({ className, variant, ...props }))}>
      {children}
    </button>
  );
};

export default Button;
