"use client";

import { Button } from "@/components";
import Sparkles from "@/config/sparkles";
import Link from "next/link";
import { useEffect } from "react";

const HeroSection: React.FC = () => {
  useEffect(() => {
    if (!Sparkles) return;
    const sparkles = new Sparkles({
      imagesArray: [
        "/1.React.svg",
        "/8.Node.svg",
        "/22.PS.svg",
        "/23.AI.svg",
        "/19.Figma.svg",
        "/1.React.svg",
        "/21.XD.svg",
      ],
      canvasId: "canvas",
      numLines: 60000,
      fieldOfView: 17,
      color: "#4dd0e1",
      timeout: 2500,
      targetCoefficient: 0.006,
      compressionSpeed: 2.8,
    });
    sparkles.init();
  }, []);

  return (
    <section className="mt-32 text-center xl:mt-52 xl:text-left">
      <div className="flex flex-col items-center justify-center xl:flex-row">
        <div className="space-y-6">
          <h1 className="text-center text-2xl capitalize xl:text-left xl:text-6xl xl:leading-tight">
            What you can think <br /> we can develop it <br />
            <span className="section-heading pb-5">for you!</span>
          </h1>
          <div className="flex flex-col space-y-6">
            <p className="mx-4 text-base sm:text-xl lg:mx-0">
              We create future-ready websites & web apps via innovative digital
              solutions so that you can focus on your core business.
            </p>

            <Link href="/contact">
              <Button variant="primary">Let&apos;s talk</Button>
            </Link>
          </div>
        </div>

        <div className="relative text-center">
          <canvas
            className="mx-auto my-auto h-[300px] w-[300px] text-center md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
            id="canvas"
          ></canvas>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
