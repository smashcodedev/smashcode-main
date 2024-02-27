"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { LinksType } from "@/types";

type NavMobProps = {
  links: LinksType[];
};

const NavMob: React.FC<NavMobProps> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <div className="header-container-mobile mb-4 block md:hidden">
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
          <div
            className="side-bar-logo flex items-center justify-center
          "
          >
            <Link href="/">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/others%2Flogo.png?alt=media&token=03ad23b2-117d-405e-b75d-cf6ff119274f"
                alt="smash code logo"
                width={65}
                height={65}
                className="w-24 cursor-pointer object-contain"
                loading="lazy"
              />
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
    </>
  );
};

export default NavMob;
