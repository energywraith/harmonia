import { NavLink } from "./NavLink";
import { routes } from "./routes";

interface MobileOverlay {
  isOpen: boolean;
}

const MobileOverlay = ({ isOpen }: MobileOverlay) => {
  return (
    <nav
      className={`fixed flex lg:hidden top-0 left-0 w-full z-10 h-screen pt-20 bg-secondary-900 transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <ul className="w-full flex flex-col">
        {routes.map((route) => (
          <NavLink key={route.label} href={route.href} className="px-4">
            <div className="border-b-2 border-primary-600 py-3">
              {route.label}
            </div>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export { MobileOverlay };
