"use client";

import { FormEvent, useState } from "react";
import NextLink from "next/link";
import { Brand } from "@/components/common/Brand";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { NavMenu } from "./NavMenu";
import { MobileOverlay } from "./MobileOverlay";
import { Search } from "./Search";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const onHamburgerClick = () => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
      return;
    }

    setIsMenuOpen((isOpen) => !isOpen);
  };

  const onSearchClick = () => {
    setIsMenuOpen(false);

    setIsSearchOpen((isOpen) => !isOpen);
  };

  const onSearchChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchKey(e.currentTarget.value);
  };

  const searchInputProps = {
    value: searchKey,
    onChange: onSearchChange,
  };

  return (
    <>
      <header className="bg-primary-900 relative z-30">
        <div className="flex items-center max-w-screen-2xl mx-auto">
          <NavMenu
            isMobileOverlayOpen={isMenuOpen || isSearchOpen}
            onHamburgerClick={onHamburgerClick}
          />
          <NextLink href="/">
            <Brand />
          </NextLink>
          <div className="flex flex-1">
            <Search
              className="hidden lg:flex ml-auto mr-4"
              variant="secondary"
              Icon={SearchIcon}
              isSearchOpen={isSearchOpen}
              onBlur={() => setIsSearchOpen(false)}
              inputProps={{
                ...searchInputProps,
                className: "max-w-[10rem] lg:max-w-[16rem]",
                onFocus: () => setIsSearchOpen(true),
              }}
            />
            <button
              className="lg:hidden ml-auto p-4 py-5"
              onClick={onSearchClick}
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </header>
      <MobileOverlay
        isMenuOpen={isMenuOpen}
        isSearchOpen={isSearchOpen}
        searchInputProps={searchInputProps}
      />
    </>
  );
};

export { Nav };
