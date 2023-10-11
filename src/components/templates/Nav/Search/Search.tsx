"use client";

import { useRef } from "react";
import { InputFieldProps } from "@/components/form";
import { Input } from "./Input";
import { Wrapper } from "./Wrapper";
import { Results, ResultsProps } from "./Results";

interface SearchInputProps extends InputFieldProps {
  searchResults: ResultsProps;
  isSearchOpen: boolean;
  isMobile?: boolean;
  className?: string;
  onBlur?: () => void;
}

const Search = ({
  searchResults,
  isSearchOpen,
  isMobile,
  className,
  onBlur,
  ...props
}: SearchInputProps) => {
  const innerRef = useRef<HTMLDivElement>(null);

  const showResultsBox =
    (searchResults?.songs.length > 0 ||
      searchResults?.albums.length > 0 ||
      searchResults?.artists.length > 0) &&
    isSearchOpen;

  return (
    <div className={`relative ${className || ""}`} ref={innerRef}>
      <Input {...props} isActive={showResultsBox} />
      <div
        className={`transition-all duration-300 ${
          isSearchOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {showResultsBox && (
          <Wrapper innerRef={innerRef} onBlur={onBlur} isMobile={isMobile}>
            <Results {...searchResults} onResultClick={onBlur} />
          </Wrapper>
        )}
      </div>
    </div>
  );
};

export { Search };
