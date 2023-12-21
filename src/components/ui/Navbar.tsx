"use client";

import { Logo, NavItems, Button } from "@/components";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const deskHeader = useRef<HTMLElement | null>(null);

  let lastScroll = 0;
  const headerSticky = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0 && deskHeader.current) {
      deskHeader.current.classList.remove("hide-scroll-header");
      return;
    }
    if (currentScroll > lastScroll && deskHeader.current) {
      deskHeader.current.classList.add("hide-scroll-header");
    } else if (currentScroll < lastScroll && deskHeader.current) {
      deskHeader.current.classList.remove("hide-scroll-header");
    }
    lastScroll = currentScroll;
  };
  useEffect(() => {
    window.addEventListener("scroll", headerSticky);
  });

  return (
    <nav
      className="z-10 m-4 flex items-center justify-between rounded-2xl
      border-2 border-primary-green bg-secondary-gray px-4 py-1 text-white shadow-xl shadow-secondary-gray lg:px-12 lg:py-3 2xl:mx-36"
      ref={deskHeader}
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
