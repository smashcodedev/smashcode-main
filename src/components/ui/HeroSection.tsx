import { Button } from "@/components";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="xl:mt-32 text-center xl:text-left">
      <div className="flex flex-col items-center justify-center xl:flex-row">
        <div className="space-y-6">
          <h1 className="text-center text-2xl capitalize xl:leading-tight xl:text-6xl xl:text-left">
            What you can think <br /> we can develop it <br /> for you!
          </h1>
          <p className="text-base lg:text-xl">
            We create future-ready websites & web apps via innovative digital
            solutions so that you can focus on your core business.
          </p>
          <Button variant="primary">
            Let&apos;s talk
          </Button>
        </div>

        <div>
          <Image
            src="/logo.png"
            alt="smash code logo"
            width={554}
            height={454}
            className="object-contain w-[50rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
