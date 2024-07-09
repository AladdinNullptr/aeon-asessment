import { ComponentProps } from "react";
import { cn } from "@/utils/cn";

const Nav = ({ className, children, ...props }: ComponentProps<"nav">) => (
  <nav
    className={cn(
      "flex w-full px-6 text-sm font-semibold text-gray-500",
      className
    )}
    {...props}
  >
    {children}
  </nav>
);

export default Nav;
