import Link from "next/link";
import Image from "next/image";
import heroSvg from "@/../public/images/illustration/heroSvg.svg";
import { TeamMembers } from "@/components";
import heroSvg2 from "@/../public/images/illustration/heroSvg2.svg";

const About: React.FC = () => {
  return (
    <main className="m-10 mx-auto w-full overflow-x-hidden lg:max-w-7xl">
      <section className="m-7 mt-32 xl:mt-52 2xl:ml-0">
        <div className="style-right-border my-5 flex flex-wrap">
          <div className="mr-5 w-full md:mr-0 md:w-1/2">
            <h2 className="pb-4 text-2xl">Who we</h2>
            <h2 className="section-heading pb-5 text-6xl">Are?</h2>

            <p className="text-base md:text-xl">
              Smash Code is a team of skilled Developers, Graphic Designers, and
              Copy Writers committed to fulfilling the needs of our clients to
              their satisfaction level. We work hard to keep up with innovative
              solutions. We focus on unique designs and robust development from
              start to finish so that you remain focused on your core business.
            </p>
            <Link href="/contact">
              <button className="primary-btn btn my-4">Ask a question</button>
            </Link>
          </div>
          <div className="flex w-full items-center justify-center md:w-1/2">
            <Image
              className="about-us-hero-bg"
              src="https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/others%2Funique.png?alt=media&token=0553e491-e532-4075-af76-8cfeaf887741"
              alt="About us Image"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="style-left-border mt-[88px] flex flex-wrap items-center px-6 pt-5">
          <h2 className="pb-4 text-2xl">Our</h2>
          <h2 className="section-heading pb-5 text-6xl">Missions</h2>

          <div className="flex flex-wrap">
            <p className="flex w-full items-center text-base md:w-1/2 md:text-xl">
              Smash Code aims to provide depth and breadth services to our
              valuable customers with free support all the time. Our team is
              committed to going the extra mile to take your business to the
              next level.
            </p>
            <div className="w-full md:w-1/2">
              <div className="img-container mt-4 flex items-center justify-center md:mt-0">
                <Image
                  className="about-svg-img"
                  src={heroSvg2}
                  alt="Hero Image 2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="style-right-border ml-2 mt-[85px] flex flex-wrap px-4">
          <div className="w-full">
            <h2 className="pb-4 text-2xl">Technologies we</h2>
            <h2 className="section-heading pb-5 text-6xl">Use</h2>
          </div>

          <div className="w-full md:w-1/2">
            <div className="img-container flex items-center justify-center">
              <Image
                className="about-svg-img"
                src="https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/others%2Fresponsive.png?alt=media&token=c3cd5309-aaab-4887-86f6-4fd1e8b8ce45"
                alt="response screens images"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base md:text-xl">
              To create robust and responsive websites, web apps, and full-stack
              web apps, we use next-generation programming languages such as
              HTML, CSS, JS, ReactJs and Firebase, and for graphic designing we
              use Adobe Illustrator & Photoshop.
            </p>
          </div>
        </div>

        <TeamMembers />

        <div className="style-left-border mt-20 flex flex-wrap px-4">
          <div className="ml-5">
            <div className="mb-5 w-full">
              <h2 className="pb-4 text-2xl">Our</h2>
              <h2 className="section-heading pb-5 text-6xl">Story</h2>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[53%]">
                <p className="text-base md:text-xl">
                  Smash Code is a Web Design & Development Company based in
                  Faisalabad, Pakistan founded in 2019 Our team consists of
                  skilled Web Designers & Developers, Graphic Designers, and
                  Copy Writes. We offer quality services of unique web designs &
                  robust developments, professional business logo & poster
                  design, and engaging content for web pages. We have worked
                  with great clients worldwide, ranging from startups to large
                  firms.
                </p>
              </div>
              <div className="mt-2 w-full md:mt-0 md:w-1/2">
                <div className="img-container flex items-center justify-center">
                  <Image
                    className="about-svg-img"
                    src={heroSvg}
                    alt="Hero image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
