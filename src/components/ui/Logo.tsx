import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="smash code logo"
        width={554}
        height={437}
        quality={100}
        className="object-contain w-20 cursor-pointer"
      />
    </Link>
  );
};

export default Logo;
