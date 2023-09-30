import { HTMLAttributes } from "react";

interface HamburgerIconProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

const hamburgerBarClasses =
  "absolute h-0.5 bg-secondary-900 transform transition-all ease-in-out -translate-x-1/2 left-1/2 top-1/2";

export const HamburgerIcon = ({ isActive, ...props }: HamburgerIconProps) => (
  <div {...props} className={`flex relative w-5 h-5 ${props.className || ""}`}>
    <span
      className={`${hamburgerBarClasses} w-5 duration-300 ${
        isActive ? "rotate-45 delay-200" : "-translate-y-1.5"
      }`}
    ></span>
    <span
      className={`${hamburgerBarClasses} duration-200 ${
        isActive ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
      }`}
    ></span>
    <span
      className={`${hamburgerBarClasses} w-5 duration-300 ${
        isActive ? "-rotate-45 delay-200" : "translate-y-1.5"
      }`}
    ></span>
  </div>
);
