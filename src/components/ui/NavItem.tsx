"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "../../../utils/helpers";

type NavItemProps = {
  label: string;
  href: string;
};

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  const pathname = usePathname();

  return (
    <ul key={label}>
      <Link href={href}>
        <li
          className={cn(
            "hover:text-primary-green transition-colors underline-effect leading-loose tracking-wide",
            pathname === href ? "text-primary-green underline-active" : "",
          )}
        >
          {label}
        </li>
      </Link>
    </ul>
  );
};

export default NavItem;
