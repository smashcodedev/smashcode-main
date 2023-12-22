import React from "react";
import { NavItem } from "@/components";
import { LinksType } from "./Navbar";

const NavItems: React.FC<{ links: LinksType[] }> = ({ links }) => {
  return (
    <div className="flex items-center justify-center gap-4 text-xl font-light uppercase">
      {links.map(({ href, label }) => (
        <NavItem label={label} href={href} key={label} />
      ))}
    </div>
  );
};

export default NavItems;
