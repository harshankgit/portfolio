import React, { useState, useEffect, FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: (name: string) => void;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, route, name }) => (
  <Link href={route}>
    <span
      onClick={() => setActiveItem(name)}
      className={`cursor-pointer px-3 py-2 rounded-md transition-all ${
        activeItem === name
          ? "bg-green-600 text-white"
          : "text-gray-600 hover:bg-gray-200"
      }`}
    >
      {name}
    </span>
  </Link>
);

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const routeToName: Record<string, string> = {
      "/": "About",
      "/projects": "Projects",
      "/resume": "Resume",
    };
    setActiveItem(routeToName[pathname] || "");
  }, [pathname]);

  return (
    <nav className="p-4 shadow-md bg-white">
      <div className="flex justify-between items-center">
        {/* Active Item */}
        <span className="text-xl font-bold text-green md:text-2xl">
          {activeItem}
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {["About", "Projects", "Resume"].map((item) => (
            <NavbarItem
              key={item}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              name={item}
              route={`/${
                item.toLowerCase() === "about" ? "" : item.toLowerCase()
              }`}
            />
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-green-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mt-4 flex flex-col space-y-2 md:hidden">
          {["About", "Projects", "Resume"].map((item) => (
            <NavbarItem
              key={item}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              name={item}
              route={`/${
                item.toLowerCase() === "about" ? "" : item.toLowerCase()
              }`}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
