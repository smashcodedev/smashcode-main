import Link from "next/link";
import Image from "next/image";
import googleReviews from "@/../public/images/googleReviews.jpg";
import {
  FaBook,
  FaHome,
  FaPhone,
  FaProjectDiagram,
  FaServicestack,
  FaUser,
} from "react-icons/fa";
import { LuClipboardEdit } from "react-icons/lu";

type QuickLinksTypes = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const quickLinks: QuickLinksTypes[] = [
  { label: "Home", href: "/", icon: <FaHome /> },
  // { label: "Home", href: "/home", icon: <FaHome /> },
  { label: "About", href: "/about", icon: <FaUser /> },
  { label: "Contact", href: "/contact", icon: <FaPhone /> },
  { label: "Services", href: "/services", icon: <FaServicestack /> },
  {
    label: "Projects",
    href: "/projects/web-development/Landing%20page",
    icon: <FaProjectDiagram />,
  },
  { label: "Blogs", href: "https://smash-code.com/blogs", icon: <FaBook /> },
  { label: "Get a Quote", href: "/get-quote", icon: <LuClipboardEdit /> },
];

const QuickLinks = () => {
  return (
    <div className="mt-2 md:mt-0 md:w-1/2 lg:w-1/3 xl:w-1/3">
      <h3 className="relative mb-6 text-xl font-normal text-white before:absolute before:bottom-[-15px] before:left-0 before:h-[2px] before:w-12 before:bg-primary-green before:content-['']">
        Quick - Links
      </h3>

      <ul className="m-0 mt-10 grid grid-cols-2 p-0">
        {quickLinks.map(({ label, href, icon }) => (
          <li
            key={label}
            className="mb-3 mr-4 min-w-[40%] text-base capitalize text-light-gray transition-colors hover:text-primary-green"
          >
            <Link
              href={href}
              target={label === "Blogs" ? "_blank" : ""}
              className="flex items-center gap-2"
            >
              {icon} {label}
            </Link>
          </li>
        ))}
      </ul>

      <h4 className="my-4 text-2xl">What people say about us</h4>

      <Link
        href="https://goo.gl/maps/R4ipdx6eu1t1V5jZ9"
        target="_blank"
        rel="noopener noreferrer"
        className="d-inline-block my-1 overflow-hidden rounded bg-white"
      >
        <Image
          className="w-[150px] object-contain"
          src={googleReviews}
          alt="5 star reviews on Google"
        />
      </Link>
    </div>
  );
};

export default QuickLinks;
