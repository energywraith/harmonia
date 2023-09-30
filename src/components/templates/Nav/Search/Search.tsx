import { useRef } from "react";
import { InputFieldProps } from "@/components/form";
import { Input } from "./Input";
import { Wrapper } from "./Wrapper";

interface SearchInputProps extends InputFieldProps {
  isSearchOpen: boolean;
  isMobile?: boolean;
  className?: string;
  onBlur?: () => void;
}

const Search = ({
  isSearchOpen,
  isMobile,
  className,
  onBlur,
  ...props
}: SearchInputProps) => {
  const innerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`relative ${className || ""}`} ref={innerRef}>
      <Input {...props} isActive={isSearchOpen} />
      <div
        className={`transition-all duration-300 ${
          isSearchOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {isSearchOpen && (
          <Wrapper innerRef={innerRef} onBlur={onBlur} isMobile={isMobile}>
            There will be results of search for: {props.inputProps?.value}
          </Wrapper>
        )}
      </div>
    </div>
  );
};

export { Search };
