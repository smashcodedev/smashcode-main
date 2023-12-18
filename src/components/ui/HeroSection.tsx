import { Button } from "@/components";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="mx-auto lg:max-w-7xl">
      <div className="flex flex-col xl:flex-row">
        <div className="space-y-6">
          <h1 className="text-6xl leading-tight capitalize">
            What you can think <br /> we can develop it <br /> for you!
          </h1>
          <p className="text-xl">
            We create future-ready websites & web apps via innovative digital
            solutions so that you can focus on your core business.
          </p>
          <Button className="inline" variant="primary">
            Let&apos;s talk
          </Button>
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
