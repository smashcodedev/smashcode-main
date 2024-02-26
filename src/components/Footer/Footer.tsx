import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/logo.png";
import { ContactInfo, Copywrite, QuickLinks, SocialLinks } from "@/components";

const Footer = () => {
  return (
    <footer className="relative mt-auto overflow-hidden bg-secondary-gray text-base font-normal">
      <div className="mx-auto w-full p-4 lg:max-w-7xl">
        <ContactInfo />
        <div className="relative z-[2] pb-3 pt-3">
          <div className="flex flex-col justify-between gap-2 lg:flex-row">
            <div className="mb-50 mt-md-0 mt-2 lg:w-1/3 xl:w-1/3">
              <Link href="/">
                {/* <Image
                  src={logo}
                  alt="Smash Code logo"
                  /> */}
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/others%2Flogo.png?alt=media&token=03ad23b2-117d-405e-b75d-cf6ff119274f"
                  alt="smash code logo"
                  quality={100}
                  width={200}
                  height={200}
                  className="-ml-8 max-w-[120px]"
                />
              </Link>

              <div className="mb-4 mt-1 text-left">
                <p className="text-sm leading-4 text-[#A3A3A3]">
                  Smash Code is a Web Design & Development Company based in
                  Pakistan, founded in 2019. We are a team of skilled Web
                  Designers & Developers, Graphic Designers, and Content & Copy
                  Writers.
                </p>
                <h3 className="my-2 text-2xl">Registered By PSEB </h3>
                <div className="my-1 inline-block rounded">
                  <Image
                    className="w-72 rounded"
                    src="https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/others%2Fpseb.jpg?alt=media&token=c4c2445c-8104-43f1-ac0a-fab7dc73635b"
                    width={200}
                    height={200}
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
