"use client";

import { useState } from "react";
import NavbarLogo from "./logo";
import NavbarMenu from "./menu";
import NavbarActions from "./actions";
import NavbarDrawer from "./drawer";
import useScrollChange from "@/hooks/useScrollChange";

const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollChange(150);

  return (
    <>
      <nav className={`fixed left-0 right-0 top-0 z-50 ${isScrolled ? "bg-primary-color/80 backdrop-blur-md" : "bg-transparent"}`}>
        <div className="container mx-auto px-6">
          <div className="flex h-18 items-center justify-between">
            {/* Logo */}
            <NavbarLogo />

            {/* Desktop Navigation */}
            <NavbarMenu />

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

      {/* Spacer to prevent content from going under fixed navbar */}
      {/* <div className="h-18 bg-transparent" /> */}
    </>
  );
}

export default Navbar;