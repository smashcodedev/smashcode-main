import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="smash code logo"
        quality={100}
        priority
        className="w-20 cursor-pointer object-contain"
      />
    </Link>
  );
};

export default Logo;
