"use client";

import { Logo, NavItems, Button } from "@/components";
import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 m-2 text-white border-2 shadow
    -lg py-1 lg:py-3 lg:px-12 lg:my- xl:mx-32 rounded-2xl bg-secondary-gray border-primary-green shadow-secondary-gray">
      <Logo />

      <div className="hidden lg:block">
        <NavItems />
      </div>

      <Button className="hidden lg:block" variant="secondary">
        Contact
      </Button>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-3xl text-primary-green lg:hidden"
      >
        {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
