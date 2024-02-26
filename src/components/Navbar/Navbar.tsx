"use client";

import { Logo, NavItems, NavMobile } from "@/components";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { LinksType } from "@/types";

const links: LinksType[] = [
  { href: "/", label: "Home" },
  // { href: "/home", label: "Home" },
  { href: "/projects/web-development/Landing%20page", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "https://smash-code.com/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const deskHeader = useRef<HTMLElement | null>(null);

  useEffect(() => {
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
    window.addEventListener("scroll", headerSticky);

    return () => window.removeEventListener("scroll", headerSticky);
  }, []);

  return (
    <header className="fixed top-0 z-[1000] w-full">
      <nav
        className="mx-4 my-3 flex items-center justify-between
        rounded-2xl border-2 border-primary-green bg-secondary-gray py-1 text-white shadow-xl shadow-secondary-gray transition-all duration-[400ms] ease-linear md:px-10 2xl:mx-auto 2xl:max-w-7xl"
        ref={deskHeader}
      >
        <Logo />

        <div className="hidden md:block">
          <NavItems links={links} />
        </div>

        <div>
          <Link href="/get-quote" aria-label="get quote page link">
            <button className="header-contact-btn header-contact-btn hidden border border-primary-green text-primary-green md:block">
              Get quote
            </button>
          </Link>
          <NavMobile links={links} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
