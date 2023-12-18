"use client";

import { Logo, NavItems } from "@/components";
import Button from "./Button";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="my-4 mx-36 py-1 rounded-2xl flex items-center justify-between bg-secondary-gray text-white px-12 border-2 border-primary-green shadow-lg shadow-secondary-gray">
      <Logo />
      <NavItems />
      <Button
        variant="secondary"
        className="border border-primary-green px-4 text-lg py-[1px] rounded-full shadow shadow-primary-green hover:shadow-primary-green"
      >
        Contact
      </Button>
    </nav>
  );
};

export default Navbar;
