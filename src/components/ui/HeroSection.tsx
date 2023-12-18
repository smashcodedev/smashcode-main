import { Button } from "@/components";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="lg:max-w-7xl">
      <div className="flex">
        <div className="flex-col">
          <h1 className="text-4xl capitalize">
            What you can think we can develop it for you!
          </h1>
          <p>
            We create future-ready websites & web apps via innovative digital
            solutions so that you can focus on your core business.
          </p>
          <Button variant="primary">Let&apos;s talk</Button>
        </div>

        <div>
          <Image
            src="/logo.png"
            alt="smash code logo"
            width={554}
            height={454}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
