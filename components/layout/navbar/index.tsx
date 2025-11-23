"use client";

import useScrollChange from "@/hooks/useScrollChange";
import { useState } from "react";

import NavbarLogo from "./logo";
import NavbarMenu from "./NavbarMenu";
import NavbarActions from "./actions";
import NavbarDrawer from "./drawer";

const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollChange(150);

  return (
    <>
      <nav className={`fixed left-0 right-0 top-0 z-50 ${isScrolled ? "bg-primary-dark/70 backdrop-blur-md" : "bg-transparent backdrop-blur-md"}`}>
        <div className="container">
          <div className="flex 2xl:h-17 xl:h-14 lg:h-13 h-12 items-center justify-between">
            {/* Logo */}
            <NavbarLogo />

            {/* Desktop Navigation */}
            <NavbarMenu isScrolled={isScrolled} />

            {/* Right Side Actions */}
            <NavbarActions
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <NavbarDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;