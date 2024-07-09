import { ComponentProps } from "react";
import { cn } from "@/utils/cn";

const Group = ({ children, fill, className, ...props }: StackProps) => {
  return (
    <div
      className={cn("flex", className, {
        "flex-1": fill,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

type StackProps = ComponentProps<"div"> & {
  fill?: boolean;
};

export default Group;
