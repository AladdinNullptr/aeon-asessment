import { ComponentProps } from "react";
import { cn } from "@/utils/cn";

const Input = ({ name, type, className }: ComponentProps<"input">) => (
  <input
    className={cn(
      "rounded border-gray-300 border px-2 py-1 text-xs",
      className
    )}
    name={name}
    type={type}
  />
);
export default Input;
