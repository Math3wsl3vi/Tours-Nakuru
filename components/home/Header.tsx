"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Destinations", path: "/destinations" },
    { name: "Tour Packages", path: "/tours" },
    { name: "Booking", path: "/booking" },
    { name: "Transport & Accommodation", path: "/transport" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 font-poppins ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className={`text-2xl font-bold ${
                isScrolled ? "text-green-700" : "text-white"
              }`}
            >
              Nakuru Tours
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) =>
              link.name === "Contact" ? (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.path
                      ? "bg-green-700 text-white"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium transition-colors hover:text-green-600 ${
                    pathname === link.path
                      ? "text-green-600"
                      : isScrolled
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${
              isScrolled ? "text-gray-800" : "text-white"
            } hover:text-green-600 focus:outline-none`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.name === "Contact" ? (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      pathname === link.path
                        ? "bg-green-700 text-white"
                        : "bg-green-600 text-white hover:bg-green-700"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`px-4 py-2 text-sm font-medium ${
                      pathname === link.path
                        ? "text-green-600"
                        : "text-gray-800 hover:text-green-600"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
