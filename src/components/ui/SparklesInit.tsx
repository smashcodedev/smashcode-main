"use client";

import Sparkles from "@/config/sparkles";
import { useEffect } from "react";

const SparklesInit = () => {
  useEffect(() => {
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

  return null;
};

export default SparklesInit;
