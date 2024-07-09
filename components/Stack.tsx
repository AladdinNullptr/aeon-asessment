import { ComponentProps } from "react";
import { cn } from "@/utils/cn";

const Stack = ({ children, className, ...props }: StackProps) => {
  return (
    <div {...props} className={cn(className, "flex flex-col")}>
      {children}
    </div>
  );
};

type StackProps = ComponentProps<"div">;

export default Stack;
