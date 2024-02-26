"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "../../utils/helpers";

type NavItemProps = {
  label: string;
  href: string;
};

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  const pathname = usePathname();

  return (
    <ul key={label}>
      <li
        className={cn(
          "relative leading-[2.5] tracking-wide transition-colors after:absolute after:bottom-0.5 after:left-1/2 after:h-[1px] after:w-0 after:-translate-x-1/2 after:transform after:bg-primary-green after:transition-all after:duration-300 after:ease-linear after:content-[''] hover:text-primary-green hover:after:w-2/5",
          pathname === href || (pathname === "/" && label === "Home")
            ? "text-primary-green after:absolute after:bottom-0.5 after:left-1/2 after:h-[1px] after:w-2/5 after:-translate-x-1/2 after:transform  after:content-['']"
            : "",
        )}
      >
        <Link
          href={href}
          target={label === "Blogs" ? "_blank" : ""}
          prefetch={pathname === "/projects" ? false : true}
        >
          {label}
        </Link>
      </li>
    </ul>
  );
};

export default NavItem;
