import Link from "next/link";
import Image from "next/image";
import psebImg from "@/../public/images/pseb.jpg";
import logo from "@/../public/images/web/logopng.png";
import { ContactInfo, Copywrite, QuickLinks, SocialLinks } from "@/components";

import "@/styles/footer.css";

const Footer = () => {
  return (
    <footer className="relative mt-auto overflow-hidden bg-secondary-gray text-base font-normal">
      <div className="mx-auto w-full p-4 lg:max-w-7xl">
        <ContactInfo />
        <div className="relative z-[2] pb-3 pt-3">
          <div className="flex flex-col justify-between gap-2 lg:flex-row">
            <div className="mb-50 mt-md-0  mt-2 lg:w-1/3 xl:w-1/3">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Smash Code logo"
                  className="-ml-8 max-w-[120px]"
                />
              </Link>

              <div className="mb-4 mt-1 text-left">
                <p className="text-sm leading-4 text-light-gray">
                  Smash Code is a Web Design & Development Company based in
                  Pakistan, founded in 2019. We are a team of skilled Web
                  Designers & Developers, Graphic Designers, and Content & Copy
                  Writers.
                </p>
                <h4 className="my-2 text-2xl">Registered By PSEB </h4>
                <div className="my-1 inline-block rounded">
                  <Image
                    className="registered-img rounded"
                    src={psebImg}
                    alt="Registered at Pseb"
                  />
                </div>
              </div>
            </div>
            <QuickLinks />
            <SocialLinks />
          </div>
        </div>
      </div>

      <Copywrite />
    </footer>
  );
};

export default Footer;
