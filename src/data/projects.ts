import ctImage from "../../public/images/projects/contentWriting.jpg";
import videoPoster from "../../public/images/projects/videoPoster.jpg";
import graphProj from "../../public/images/projects/graphProj.png";
import { StaticImageData } from "next/image";

type ProjectNames = "rarare" | "journeyBlog" | "trippyFrens" | "phenomAcademy";

export type ProjectType = {
  imageUrl: string | StaticImageData;
  description: string;
  title: string;
  projectUrl: string;
  videoUrl?: string;
  width?: number;
  height?: number;
};

type Projects = { [K in ProjectNames]: ProjectType };

const projectsData: Projects = {
  rarare: {
    imageUrl: videoPoster,
    description: `This Website application created in React.js for the company Rarare. It is mobile responsive and consists of more than 70 pages with cool animations.
      `,
    title: "Rarare",
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/projects-images%2Fvideos%2F2-Rarare.mp4?alt=media&token=d41fc8f7-be11-41de-beda-55d3041a391f",
    projectUrl: "https://smashcode-rarare.netlify.app/",
    width: 1280,
    height: 720,
  },
  journeyBlog: {
    imageUrl:
      "https://smashcode-trippyfrens.netlify.app/static/media/logo-colour.1c5979e0.svg",
    description:
      "This is a full stack nft minting website. We converted figma design in to ReactJs website. Integrated Smart Contract and Connect wallet with Metamask.",
    title: "Trippy Frens",
    projectUrl: "https://smashcode-trippyfrens.netlify.app/",
  },
  trippyFrens: {
    imageUrl: ctImage,
    description:
      "This blog focuses on the success story of Muhammad Ismail. The writer has explored the journey of a young web developer and the owner of a software company who was once struggling to survive and ready to quit.",
    title:
      "My Journey from Zero-Knowledge of Computers to Owning a Software House",
    projectUrl:
      "https://medium.com/unique-content/my-journey-from-zero-knowledge-of-computers-to-owning-a-software-house-73e8531ed298",
  },
  phenomAcademy: {
    imageUrl: graphProj,
    description:
      "This is a logo for Personal training and Athletic Training company, created in illustrator.",
    title: "Phenom Academy",
    projectUrl: "/projects/-MsLMt8PEcADy4k2_v9p/Logo%20Design",
  },
};

export default projectsData;
