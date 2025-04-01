import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarItem = ({ 
  activeItem, 
  setActiveItem, 
  route, 
  name 
}: {
  activeItem: string;
  setActiveItem: (name: string) => void;
  route: string;
  name: string;
}) => (
  <Link href={route}>
    <div
      onClick={() => setActiveItem(name)}
      className={`relative px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer group
        ${activeItem === name
          ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg"
          : "text-gray-400 hover:text-gray-200"
        }`}
    >
      <span className="relative z-10 font-medium">{name}</span>
      {activeItem !== name && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
      )}
    </div>
  </Link>
);

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const routeToName: Record<string, string> = {
      "/": "About",
      "/projects": "Projects",
      "/resume": "Resume",
    };
    setActiveItem(routeToName[pathname] || "");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-gray-900/80 backdrop-blur-lg shadow-lg" 
        : "bg-gray-900 shadow-sm"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 group">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 group-hover:from-blue-400 group-hover:to-green-400 transition-all duration-300">
              {activeItem || "Portfolio"}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {["About", "Projects", "Resume"].map((item) => (
              <NavbarItem
                key={item}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                name={item}
                route={`/${item.toLowerCase() === "about" ? "" : item.toLowerCase()}`}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:bg-gray-800 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden w-full bg-gray-900 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? "h-auto opacity-100" 
              : "h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-2 space-y-2">
            {["About", "Projects", "Resume"].map((item) => (
              <NavbarItem
                key={item}
                activeItem={activeItem}
                setActiveItem={(name) => {
                  setActiveItem(name);
                  setIsMobileMenuOpen(false);
                }}
                name={item}
                route={`/${item.toLowerCase() === "about" ? "" : item.toLowerCase()}`}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;