import { HamburgerIcon } from "@/components/icons";
import { NavLink } from "./NavLink";
import { routes } from "./routes";

interface NavMenuProps {
  isMobileOverlayOpen: boolean;
  onHamburgerClick: () => void;
}

const NavMenu = ({ isMobileOverlayOpen, onHamburgerClick }: NavMenuProps) => {
  return (
    <>
      {/* MOBILE HAMBURGER */}
      <div className="flex lg:hidden flex-1 relative">
        <button
          className="lg:hidden focus:outline-none p-4 py-5"
          onClick={onHamburgerClick}
        >
          <HamburgerIcon isActive={isMobileOverlayOpen} />
        </button>
      </div>
      {/* DESKTOP MENU */}
      <nav className="hidden lg:flex flex-1 ml-4 py-4">
        <ul className="flex gap-x-6">
          {routes.map((route) => (
            <NavLink key={route.label} href={route.href}>
              {route.label}
            </NavLink>
          ))}
        </ul>
      </nav>
    </>
  );
};

export { NavMenu };
