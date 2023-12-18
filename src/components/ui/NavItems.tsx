import React from "react";
import { NavItem } from "@/components";

type LinksType = {
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

const NavItems: React.FC = () => {
  return (
    <div className="flex items-center justify-center text-xl uppercase gap-4 font-light">
      {links.map(({ href, label }) => (
        <NavItem label={label} href={href} key={label} />
      ))}
    </div>
  );
};

export default NavItems;
