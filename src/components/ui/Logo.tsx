import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="smash code logo"
        width={100}
        height={100}
        quality={100}
        className="cursor-pointer object-contain"
      />
    </Link>
  );
};

export default Logo;
