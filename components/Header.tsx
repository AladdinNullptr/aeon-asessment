"use client";

import { ComponentProps } from "react";

import Nav from "./Nav";
import Group from "./Group";
import Search from "./Search";
import NavLinkItem from "./NavLinkItem";

import useBreakpoint from "@/hooks/useBreakpoint";
import useMobileMenuToggle from "@/hooks/useMobileMenuToggle";

import { cn } from "@/utils/cn";

const Header = () => {
  const { matches: isMobileScreen } = useBreakpoint("md");
  const { open: mobileMenuOpen, Component: MobileMenuIcon } =
    useMobileMenuToggle();

  return (
    <header
      className={cn("fixed left-0 right-0 top-0 flex flex-col bg-white", {
        ["bottom-0"]: mobileMenuOpen,
      })}
    >
      <Nav className="h-14 items-center border-b">
        <a href="/" className="mr-8 text-blue-400">
          AEON
        </a>

        <Group fill>{!isMobileScreen && <Links />}</Group>

        <Group className="gap-3">
          <Search alwaysOpen={!isMobileScreen} />
          {isMobileScreen && <MobileMenuIcon />}
        </Group>
      </Nav>

      {isMobileScreen && (
        <div
          className={cn("overflow-hidden", {
            ["mt-6 flex-1"]: mobileMenuOpen,
          })}
        >
          <Nav
            className={cn(
              "scrollbar-hide no-scrollbar h-0 overflow-auto transition-all duration-500",
              {
                ["h-full"]: mobileMenuOpen,
              }
            )}
          >
            {mobileMenuOpen && <Links className="w-full flex-col gap-6" />}
          </Nav>
        </div>
      )}
    </header>
  );
};

const Links = ({ className }: ComponentProps<"ul">) => {
  return (
    <ul className={cn("flex gap-3", className)}>
      {["Showcase", "Docs", "Blog", "Analytics", "Templates", "Enterprize"].map(
        (link) => (
          <NavLinkItem key={link}>{link}</NavLinkItem>
        )
      )}
    </ul>
  );
};

export default Header;
