"use client";

import { ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ConditionalWrapper } from "@/components/common/ConditionalWrapper";

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

const disabledStyles =
  "cursor-default text-primary-900/50 lg:text-secondary-900/50";
const activeStyles = "group text-primary-900 lg:text-secondary-900";

const NavLink = ({
  href,
  disabled,
  children,
  onClick,
  ...props
}: LinkProps) => {
  const pathname = usePathname();

  const isCurrentRoute = pathname === href;

  return (
    <ConditionalWrapper
      condition={!disabled}
      wrapper={(children) => (
        <NextLink href={href} onClick={onClick}>
          {children}
        </NextLink>
      )}
    >
      <li
        className={`font-passion  text-xl ${
          disabled ? disabledStyles : activeStyles
        } ${props.className || ""}`}
      >
        {children}
        <span
          className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondary-900${
            isCurrentRoute ? " max-w-full" : ""
          }`}
        ></span>
      </li>
    </ConditionalWrapper>
  );
};

export { NavLink };
