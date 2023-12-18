import { Logo, NavItems } from "@/components";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <nav className="my-3 mx-36 py-2 rounded-2xl flex items-center justify-between bg-secondary-gray text-white px-12 border-2 border-primary-green shadow-lg shadow-secondary-gray">
      <Logo />
      <NavItems />
      <Button variant="secondary" className="border px-4 text-lg py-[1px] rounded-full">
        Contact
      </Button>
    </nav>
  );
};

export default Navbar;
