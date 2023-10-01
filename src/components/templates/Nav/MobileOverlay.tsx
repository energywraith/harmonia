import { FormEvent } from "react";
import { ClefIcon } from "@/components/icons/ClefIcon";
import { NavLink } from "./NavLink";
import { routes } from "./routes";
import { Search } from "./Search";

interface MobileOverlay {
  isMenuOpen: boolean;
  isSearchOpen: boolean;
  searchInputProps: {
    value: string;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
  };
}

const MobileOverlay = ({
  isMenuOpen,
  isSearchOpen,
  searchInputProps,
}: MobileOverlay) => {
  return (
    <div
      className={`absolute flex lg:hidden top-0 left-0 w-full z-20 inset-0 pt-16 bg-secondary-900 text-primary-900 transition-all duration-300 ${
        isMenuOpen || isSearchOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none z-10">
        <ClefIcon className="absolute w-[36rem] -bottom-16 -right-60 opacity-50 text-primary-900" />
      </div>
      {isMenuOpen && (
        <nav className="w-full relative flex flex-col">
          <ul className="flex flex-col">
            {routes.map((route) => (
              <NavLink key={route.label} href={route.href} className="px-4">
                <div className="border-b-2 border-primary-600 py-3">
                  {route.label}
                </div>
              </NavLink>
            ))}
          </ul>
          <a
            href="https://github.com/energywraith"
            className="mt-auto py-3 text-center font-passion text-md underline decoration-2"
          >
            © 2023 energywraith/Adam Jałocha
          </a>
        </nav>
      )}
      {isSearchOpen && (
        <Search
          isSearchOpen={isSearchOpen}
          inputProps={searchInputProps}
          className="w-full px-4 py-4"
          isMobile
        />
      )}
    </div>
  );
};

export { MobileOverlay };
