import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();

  return (
    <Link href="/" prefetch={pathname.startsWith("/projects") ? false : true}>
      {/* <Link href="/home"> */}
      <Image
        src={logo}
        alt="smash code logo"
        quality={100}
        priority
        className="w-24 cursor-pointer object-contain"
      />
    </Link>
  );
};

export default Logo;
