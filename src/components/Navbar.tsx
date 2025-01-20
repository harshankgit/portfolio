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
    <div className="flex justify-between items-center p-4 shadow-md bg-white">
      {/* Active Item */}
      <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">
        {activeItem}
      </span>

      {/* Navigation Items */}
      <div className="flex space-x-4">
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
    </div>
  );
};

export default Navbar;
