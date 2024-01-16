import { HiComputerDesktop } from "react-icons/hi2";
import { BsCpuFill } from "react-icons/bs";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { MdOutlineWidgets } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import { HiClipboardDocument } from "react-icons/hi2";
import { TbWriting } from "react-icons/tb";
import React from "react";

type ServiceNames =
  | "customWebDevelopment"
  | "blockchainWebApps"
  | "customWebApp"
  | "contractIntegration"
  | "walletConnectivity"
  | "landingPages"
  | "nftLandingPages"
  | "responsiveWebsites"
  | "fullStackWebApps";

export type ServiceType = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Services = { [K in ServiceNames]: ServiceType };

const servicesData: Services = {
  customWebDevelopment: {
    title: "Custom Web Development",
    description:
      "We focus on creating unique full-stack Web Apps & Responsive Websites via HTML, CSS, JS, ReactJs, and Firebase. We use next-generation programming languages platforms on the Google Cloud Platform.",
    icon: <HiComputerDesktop />,
  },
  blockchainWebApps: {
    title: "Blockchain Web Apps",
    description:
      "We do frontend of NFT & blockchain websites and web apps and do smart contract integration using web3.js, Alchemy, Moralis, and other 3rd party libraries or tokens like ERC-20, ERC-720, and ERC-1155. In addition, we do wallet integration. These wallets include Metamask, Polygon, Coinbase, etc",
    icon: <BsCpuFill />,
  },
  customWebApp: {
    title: "Custom Web App",
    description:
      "We focus on creating a modern, flexible, secure, cross-platform, and user-friendly web app so that it can meet spikes in demand and handle complex scenarios",
    icon: <MdOutlineDeveloperMode />,
  },
  contractIntegration: {
    title: "Contract Integration / Minting",
    description:
      "We do smart Contract integration in which includes functionalities minting, whitelist, get data from Blockchain and update on it, buy tokens  and etc",
    icon: <MdOutlineWidgets />,
  },
  walletConnectivity: {
    title: "Wallet Connectivity",
    description:
      "We do wallet integration in Blockchain. These wallets include Metamask, Coinbase, Trust, Sollana, etc. We also connect these wallets with the front end.",
    icon: <MdAccountBalanceWallet />,
  },
  landingPages: {
    title: "Landing Pages",
    description:
      "We pay special attention to create attention-grabbing landing pages that convince your users to take the required action. We use a combination of eye-catching backgrounds and images to make each section stand out.",
    icon: <BsFillGrid1X2Fill />,
  },
  nftLandingPages: {
    title: "NFT Landing Pages",
    description:
      "We design unique NFT landing pages with awesome animations and themes. These landing pages have 5 to 7 sections that include, engaging content, Art slider, Roadmap, Team, Faq, etc.",
    icon: <MdOutlineWeb />,
  },
  responsiveWebsites: {
    title: "Responsive websites",
    description:
      "We create responsive websites via CSS and JavaScript plugins. Our design has a flexible layout and images that work on various devices: mobile, desktop, tablet, etc. We create websites that efficiently deal with different media queries, screen sizes, resolutions, color capabilities, and resolutions.",
    icon: <HiClipboardDocument />,
  },
  fullStackWebApps: {
    title: "Full Stack Web Apps",
    description:
      "We develop full-stack Web Apps for both the front-end and back-end project directories. Apart from using HTML and CSS, we also use JavaScript, ReactJs, and Firebase to create full-stack web apps. ",
    icon: <TbWriting />,
  },
};

export default servicesData;
