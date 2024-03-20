import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="m-8 mt-32 2xl:mt-32">
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:justify-between md:text-left">
        <div className="space-y-6">
          <h1 className="text-center text-2xl capitalize md:text-left md:text-6xl md:leading-tight">
            What you can think <br /> we can develop it <br />
            <span className="section-heading pb-5">for you!</span>
          </h1>
          <div className="flex flex-col space-y-6">
            <p className="mx-4 max-w-[600px] text-base sm:text-xl md:mx-0">
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

        <div className="relative px-3 text-center md:w-[40%]">
          <div className="absolute left-0 top-0 h-full w-full"></div>
          <video
            id="sparkles-animation"
            className="pointer-events-none z-[-1] mx-auto w-auto max-w-full"
            src="/sparkles.webm"
            playsInline
            loop
            muted
            autoPlay
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
