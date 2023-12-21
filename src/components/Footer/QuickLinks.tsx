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

type QuickLinksTypes = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const quickLinks: QuickLinksTypes[] = [
  { label: "Home", href: "home", icon: <FaHome /> },
  { label: "About", href: "about", icon: <FaUser /> },
  { label: "Contact", href: "contact", icon: <FaPhone /> },
  { label: "Services", href: "services", icon: <FaServicestack /> },
  { label: "Projects", href: "projects", icon: <FaProjectDiagram /> },
  { label: "Blogs", href: "blogs", icon: <FaBook /> },
];

const QuickLinks = () => {
  return (
    <div className="mt-2 md:mt-0 md:w-1/2 lg:w-1/3 xl:w-1/3">
      <h3 className="mb-6 text-xl font-normal text-white">
        Quick - Links
      </h3>

      <ul className="m-0 grid grid-cols-2 p-0">
        {quickLinks.map(({ label, href, icon }) => (
          <li
            key={label}
            className="mb-3 mr-4 min-w-[40%] text-base capitalize text-light-gray transition-colors hover:text-primary-green"
          >
            <Link href={`/${href}`} className="flex items-center gap-2">
              {icon} {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-1">
        <h4 className="text-2xl mb-2">What people say about us</h4>
      </div>
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