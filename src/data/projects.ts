import ctImage from "../../public/images/projects/contentWriting.jpg";
import graphProj from "../../public/images/projects/graphProj.png";
import { StaticImageData } from "next/image";

export type ProjectType = {
  Done_By?: string;
  id?: string;
  transaction_date?: string;
  otherDoc?: string;
  Record_State?: number;
  proj_title: string;
  proj_desc: string;
  Image_URL?: string | StaticImageData;
  url: string;
  video_url?: string;
  width?: number;
  height?: number;
  featured?: boolean;
  category?: string;
  subCategory?: string;
};

const projectsData: ProjectType[] = [
  {
    Image_URL: "/images/projects/videoPoster.jpg",
    proj_desc:
      "This Website application created in React.js for the company Rarare. It is mobile responsive and consists of more than 70 pages with cool animations.",
    proj_title: "Rarare",
    video_url:
      "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/projects-images%2Fvideos%2F2-Rarare.mp4?alt=media&token=d41fc8f7-be11-41de-beda-55d3041a391f",
    url: "https://smashcode-rarare.netlify.app/",
    width: 1280,
    height: 720,
  },
  {
    Image_URL:
      "https://smashcode-trippyfrens.netlify.app/static/media/logo-colour.1c5979e0.svg",
    proj_desc:
      "This is a full stack nft minting website. We converted figma design in to ReactJs website. Integrated Smart Contract and Connect wallet with Metamask.",
    proj_title: "Trippy Frens",
    url: "https://smashcode-trippyfrens.netlify.app/",
  },
  // {
  //   Image_URL: ctImage,
  //   proj_desc:
  //     "This blog focuses on the success story of Muhammad Ismail. The writer has explored the journey of a young web developer and the owner of a software company who was once struggling to survive and ready to quit.",
  //   proj_title:
  //     "My Journey from Zero-Knowledge of Computers to Owning a Software House",
  //   url: "https://medium.com/unique-content/my-journey-from-zero-knowledge-of-computers-to-owning-a-software-house-73e8531ed298",
  // },
  // {
  //   Image_URL: graphProj,
  //   proj_desc:
  //     "This is a logo for Personal training and Athletic Training company, created in illustrator.",
  //   proj_title: "Phenom Academy",
  //   url: "/projects/-MsLMt8PEcADy4k2_v9p/Logo%20Design",
  // },
];

export default projectsData;
