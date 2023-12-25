import { ProjectType } from "@/data/projects";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const colors = ["#255FBC", "#50B2BE", "#7E478B", "#FFA5A1", "#FFCA28"];

const getDividedData = (data: ProjectType[], type: string) => {
  let totalLength = data.length;
  let dividedWouldBe = totalLength / 2;
  let firstHalf = data.slice(0, dividedWouldBe);
  let secondHalf = data.slice(dividedWouldBe, totalLength);
  let dataTrimmed = [];
  if (type === "1st") {
    dataTrimmed = firstHalf;
  } else {
    dataTrimmed = secondHalf;
  }
  return dataTrimmed;
};

export { cn, colors, getDividedData };
