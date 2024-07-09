import { ComponentProps } from "react";

const NavLinkItem = ({
  children,
  href = "/",
  ...props
}: ComponentProps<"a">) => (
  <li>
    <a href={href} className="list-LinkItem" {...props}>
      {children}
    </a>
  </li>
);

export default NavLinkItem;
