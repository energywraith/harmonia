"use client";

import { FormEvent, useEffect, useState } from "react";
import NextLink from "next/link";
import { Brand } from "@/components/common";
import { SearchIcon } from "@/components/icons";
import { NavMenu } from "./NavMenu";
import { MobileOverlay } from "./MobileOverlay";
import { ResultsProps, Search } from "./Search";
import { useDebounce } from "@/hooks";

const searchResultsInitialState = {
  songs: [],
  artists: [],
  albums: [],
};

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [searchKey, setSearchKey] = useState("");
  const debouncedSearchKey = useDebounce<string>(searchKey, 500);

  const [searchResults, setSearchResults] = useState<ResultsProps>(
    searchResultsInitialState
  );

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

  const fetchSearchResults = async () => {
    const results = await fetch(`/api/search?key=${searchKey}`);

    const data = await results.json();

    setSearchResults(data);
  };

  useEffect(() => {
    if (searchKey.length === 0) {
      setSearchResults(searchResultsInitialState);
      return;
    }

    fetchSearchResults();
  }, [debouncedSearchKey]);

  const searchInputProps = {
    value: searchKey,
    onChange: onSearchChange,
  };

  return (
    <>
      <header className="fixed bg-primary-900 z-30 w-full top-0 left-0">
        <div className="flex items-center max-w-screen-xl mx-auto">
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
              searchResults={searchResults}
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
        searchResults={searchResults}
      />
    </>
  );
};

export { Nav };
