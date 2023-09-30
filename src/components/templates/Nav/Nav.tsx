"use client";

import { Brand } from "@/components/common/Brand";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { InputField } from "@/components/form/InputField";
import { NavMenu } from "./NavMenu";
import { useState } from "react";
import { MobileOverlay } from "./MobileOverlay";
import NextLink from "next/link";

const Nav = () => {
  const [isMobileOverlayOpen, setIsMobileOverlayOpen] = useState(false);

  const onHamburgerClick = () => {
    setIsMobileOverlayOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <header className="bg-primary-900 relative z-20">
        <div className="flex items-center max-w-screen-2xl mx-auto">
          <NavMenu
            isMobileOverlayOpen={isMobileOverlayOpen}
            onHamburgerClick={onHamburgerClick}
          />
          <NextLink href="/">
            <Brand />
          </NextLink>
          <div className="flex flex-1">
            <InputField
              name="search"
              placeholder="Search..."
              className="ml-auto mr-4 hidden lg:flex"
              Icon={SearchIcon}
              inputProps={{
                className: "max-w-[10rem] lg:max-w-[16rem]",
              }}
            />
            <button className="lg:hidden ml-auto p-4 py-6">
              <SearchIcon />
            </button>
          </div>
        </div>
      </header>
      <MobileOverlay isOpen={isMobileOverlayOpen} />
    </>
  );
};

export { Nav };
