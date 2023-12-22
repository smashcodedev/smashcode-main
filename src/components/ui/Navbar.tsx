"use client";

import { Logo, NavItems, Button } from "@/components";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "@/../public/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export type LinksType = {
  href: string;
  label: string;
};

const links: LinksType[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const deskHeader = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

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
        <NavItems links={links} />
      </div>

      <div>
        <Link href="/contact">
          <Button
            variant="secondary"
            className="header-contact-btn hidden lg:block"
          >
            Contact
          </Button>
        </Link>
        <div className="header-container-mobile block lg:hidden">
          <div className="header-menu-openClose-btn">
            <div
              id="hamburger"
              className={`hamburglar text-4xl ${
                isMenuOpen ? "is-open" : "is-closed"
              }`}
              onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
            >
              <div className="burger-icon">
                <div className="burger-container">
                  <span className="burger-bun-top"></span>
                  <span className="burger-filling"></span>
                  <span className="burger-bun-bot"></span>
                </div>
              </div>

              <div className="burger-ring">
                <svg className="svg-ring">
                  <path
                    className="path"
                    fill="none"
                    stroke="var(--primary)"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                    d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
                  />
                </svg>
              </div>
              <svg width="0" height="0">
                <mask id="mask">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="#ff0000"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                    d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"
                  />
                </mask>
              </svg>
              <div className="path-burger">
                <div className="animate-path">
                  <div className="path-rotation"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-side-bar-mob">
          {isMenuOpen && (
            <div
              className="side-bar-overlay"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}
          <nav style={{ left: isMenuOpen ? 0 : "-120%" }}>
            <div className="side-bar-logo">
              <Link href="/">
                <Image src={logo} alt="Smash Code logo" />
              </Link>
            </div>
            <ul>
              {links.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={`${pathname === href ? "active-nav-link" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
