import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();

  return (
    <Link href="/" prefetch={pathname.startsWith("/projects") ? false : true}>
      {/* <Link href="/home"> */}
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/others%2Flogo.png?alt=media&token=03ad23b2-117d-405e-b75d-cf6ff119274f"
        alt="smash code logo"
        quality={100}
        width={100}
        height={100}
        priority
        className="w-24 cursor-pointer object-contain"
      />
    </Link>
  );
};

export default Logo;
