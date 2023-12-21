import { SiGmail, SiMedium, SiTiktok } from "react-icons/si";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaQuora,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import snackImg from "@/../public/images/icons/snack.png";
import Image from "next/image";
import Link from "next/link";

type SocialLinksTypes = {
  href: string;
  style: string;
  icon: React.ReactNode;
};

const socialLinks: SocialLinksTypes[] = [
  {
    href: "https://www.facebook.com/Smashcode.dev",
    style: "bg-[#3b5998]",
    icon: <FaFacebookF />,
  },
  {
    href: "https://twitter.com/Smashcodedev",
    style: "bg-[#55acee]",
    icon: <FaTwitter />,
  },
  {
    href: "https://github.com/Smashcodedev",
    style: "bg-[#fff] text-black",
    icon: <FaGithub />,
  },
  {
    href: "http://www.linkedin.com/in/smashcode",
    style: "bg-[#0e76a8]",
    icon: <FaLinkedin />,
  },
  {
    href: "mailto:smashcode.dev@gmail.com",
    style: "bg-[#D44638]",
    icon: <SiGmail />,
  },
  {
    href: "https://www.instagram.com/smashcode.dev/",
    style: "bg-[#E1306C]",
    icon: <FaInstagram />,
  },
  {
    href: "https://m.youtube.com/c/SmashCode",
    style: "bg-[#990412]",
    icon: <FaYoutube />,
  },
  {
    href: "https://medium.com/@smashcode-dev",
    style: "text-black bg-white",
    icon: <SiMedium />,
  },
  {
    href: "https://www.tiktok.com/@smashcode-dev",
    style: "bg-[#fe2c55]",
    icon: <SiTiktok />,
  },
  {
    href: "https://www.pinterest.com/smashcodedev/",
    style: "bg-[#e60023]",
    icon: <FaPinterest />,
  },
  {
    href: "https://www.quora.com/profile/SmashCodeDev",
    style: "bg-[#b92b27] ",
    icon: <FaQuora />,
  },
  {
    href: "https://sck.io/u/@Smashcode-dev/pdQiuLvY",
    style: "bg-[#fcd6009f]",
    icon: <Image src={snackImg} alt="" />,
  },
];
const SocialLinks = () => {
  return (
    <div className="mt-2 md:mt-0 md:w-1/2 lg:w-1/3 xl:w-1/3">
      <h3 className="relative mb-10 text-xl font-normal text-white after:absolute after:bottom-0.5 after:left-1/2 after:h-[1px] after:w-2/5 after:-translate-x-1/2 after:transform  after:content-['']">
        Social - Links
      </h3>
      {socialLinks.map(({ href, icon, style }) => (
        <div
          key={href}
          className={`mx-1 my-2 mr-4 inline-flex h-11 w-11 items-center justify-center rounded-full p-2 text-center text-lg ${style}`}
        >
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-3xl"
            aria-label="social link"
          >
            {icon}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
