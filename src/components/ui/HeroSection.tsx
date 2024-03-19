import Link from "next/link";
import SparklesInit from "./SparklesInit";

const HeroSection: React.FC = () => {
  return (
    <section className="m-8 mt-32 2xl:mt-32">
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
        <div className="space-y-6">
          <h1 className="text-center text-2xl capitalize md:text-left md:text-6xl md:leading-tight">
            What you can think <br /> we can develop it <br />
            <span className="section-heading pb-5">for you!</span>
          </h1>
          <div className="flex flex-col space-y-6">
            <p className="mx-4 text-base sm:text-xl md:mx-0">
              We create future-ready websites & web apps via innovative digital
              solutions so that you can focus on your core business.
            </p>

            <div className="flex items-center justify-center text-center md:justify-start">
              <button className="primary-btn btn w-max">
                <Link href="/get-quote" aria-label="get quote page link">
                  Let&apos;s talk
                </Link>
              </button>
            </div>
          </div>
        </div>

        <SparklesInit />
        <div className="relative text-center">
          <canvas
            className="mx-auto my-auto h-[300px] w-[300px] text-center sm:w-[500px] md:h-[400px] md:w-[400px] lg:h-[500px]"
            id="canvas"
          ></canvas>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
