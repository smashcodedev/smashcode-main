import { Logo, NavItems } from "@/components";

const Navbar: React.FC = () => {
  return (
    <nav className="m-3 py-2 rounded-xl flex items-center justify-between bg-secondary-gray text-white px-12 border-2 border-primary-green shadow-lg shadow-secondary-gray">
      <Logo />
      <NavItems />
      <button>Contact</button>
    </nav>
  );
};

export default Navbar;
