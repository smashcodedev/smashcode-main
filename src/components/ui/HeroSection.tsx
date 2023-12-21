"use client";

import { Button } from "@/components";
import Sparkles from "@/config/sparkles";
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
    <section className="text-center xl:mt-28 xl:text-left">
      <div className="flex flex-col items-center justify-center xl:flex-row">
        <div className="space-y-6">
          <h1 className="text-center text-2xl capitalize xl:text-left xl:text-6xl xl:leading-tight">
            What you can think <br /> we can develop it <br />{" "}
            <span className="section-heading pb-5">for you!</span>
          </h1>
          <p className="text-base lg:text-xl">
            We create future-ready websites & web apps via innovative digital
            solutions so that you can focus on your core business.
          </p>
          <Button variant="primary">Let&apos;s talk</Button>
        </div>  

        <div className="relative text-center">
          <canvas
            className="mx-auto my-auto text-center"
            id="canvas"
            height="500"
            width="500"
          ></canvas>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
