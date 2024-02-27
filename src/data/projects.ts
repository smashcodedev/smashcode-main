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
    Image_URL: "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/others%2FvideoPoster.webp?alt=media&token=4dfe44c9-1e8f-4e24-91ae-232bd5c704b2",
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
];

export default projectsData;
