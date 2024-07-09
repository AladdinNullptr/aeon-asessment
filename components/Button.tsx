import { ComponentProps } from "react";
import { cn } from "@/utils/cn";

const Button = ({
  type = "button",
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn("rounded p-2 text-slate-600", className, {
        ["border border-gray-300"]: variant === "default",
        ["bg-blue-500 text-white hover:bg-blue-400"]: variant === "primary",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

type ButtonProps = ComponentProps<"button"> & {
  variant?: "default" | "primary" | "ghost";
};

export default Button;
