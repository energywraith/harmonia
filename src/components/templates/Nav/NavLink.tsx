"use client";

import { ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
}

const NavLink = ({ href, children, ...props }: LinkProps) => {
  const pathname = usePathname();

  const isCurrentRoute = pathname === href;

  return (
    <NextLink href={href}>
      <li
        className={`group font-passion text-primary-900 lg:text-secondary-900 text-xl ${
          props.className || ""
        }`}
      >
        {children}
        <span
          className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondary-900${
            isCurrentRoute ? " max-w-full" : ""
          }`}
        ></span>
      </li>
    </NextLink>
  );
};

export { NavLink };
