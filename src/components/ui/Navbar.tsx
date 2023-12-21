"use client";

import { Logo, NavItems, Button } from "@/components";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="m-4 flex items-center justify-between rounded-2xl border-2
    border-primary-green bg-secondary-gray px-4 py-1 text-white shadow-lg shadow-secondary-gray lg:px-12 lg:py-3 2xl:mx-32 z-10"
    >
      <Logo />

      <div className="hidden lg:block">
        <NavItems />
      </div>

      <Link href="/contact">
        <Button
          variant="secondary"
          className="header-contact-btn hidden lg:block"
        >
          Contact
        </Button>
      </Link>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-3xl text-primary-green lg:hidden"
        aria-label="hamburger menu"
      >
        {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
