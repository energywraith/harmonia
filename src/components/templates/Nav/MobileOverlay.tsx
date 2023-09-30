import { FormEvent } from "react";
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
      className={`fixed flex lg:hidden top-0 left-0 w-full z-10 h-screen pt-20 bg-secondary-900 transition-all duration-300 ${
        isMenuOpen || isSearchOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {isMenuOpen && (
        <nav className="w-full">
          <ul className="flex flex-col">
            {routes.map((route) => (
              <NavLink key={route.label} href={route.href} className="px-4">
                <div className="border-b-2 border-primary-600 py-3">
                  {route.label}
                </div>
              </NavLink>
            ))}
          </ul>
        </nav>
      )}
      {isSearchOpen && (
        <Search
          isSearchOpen={isSearchOpen}
          inputProps={searchInputProps}
          className="w-full px-4"
          isMobile
        />
      )}
    </div>
  );
};

export { MobileOverlay };
