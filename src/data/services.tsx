import { HiComputerDesktop } from "react-icons/hi2";
import { BsCpuFill } from "react-icons/bs";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";
import { TbWriting } from "react-icons/tb";

type ServiceNames =
  | "customWebDevelopment"
  | "blockchainDevelopment"
  | "conversionLandingPages"
  | "fullStackSolutions"
  | "enterpriseWebSystems";

export type ServiceType = {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
};

type Services = { [K in ServiceNames]: ServiceType };

const servicesData: Services = {
  customWebDevelopment: {
    title: "Custom Web Development",
    description: (
      <>
        <h3>Build future-proof web applications with modern stacks (React.js, Next.js) featuring:</h3>
        <ul className="list-disc px-4">
          <li>Pixel-perfect responsive designs</li>
          <li>AI-enhanced user experiences</li>
          <li>Real-time databases (Firebase/Supabase/MongoDB)</li>
          <li>Scalable Node.js backends</li>
          <li>Cross-browser compatibility</li>
        </ul>
      </>
    ),
    icon: <HiComputerDesktop />, 
  },
  blockchainDevelopment: {
    title: "Blockchain Development",
    description: (
      <>
        <h3>Web3 solutions that bridge traditional web and decentralized tech:</h3>
        <ul className="list-disc px-4">
          <li>Smart Contract Development & Integration</li>
          <li>DApp Creation with Wallet Connectivity (MetaMask, Coinbase, Phantom)</li>
          <li>NFT Minting Systems</li>
          <li>Tokenomics Implementation (ERC-20/ERC-721)</li>
        </ul>
      </>
    ),
    icon: <BsCpuFill />, 
  },
  conversionLandingPages: {
    title: "Conversion-Focused Landing Pages",
    description: (
      <>
        <h3>Specialized landing pages for targeted engagement:</h3>
        <ul className="list-disc px-4">
          <li>NFT Project (with art sliders/roadmaps)</li>
          <li>SaaS Product Promotions</li>
          <li>Web3 Project Showcases</li>
          <li>Mobile-optimized layouts</li>
        </ul>
      </>
    ),
    icon: <MdOutlineWeb />, 
  },
  fullStackSolutions: {
    title: "Full-Stack Solutions",
    description: (
      <>
        <h3>End-to-end development with modern architecture:</h3>
        <ul className="list-disc px-4">
          <li>Next.js SSR/SSG Applications</li>
          <li>Backends (Node.js + Express/NestJS)</li>
          <li>Real-time Features (WebSockets, Firebase)</li>
          <li>Third-party API Integration</li>
        </ul>
      </>
    ),
    icon: <MdOutlineDeveloperMode />, 
  },
  enterpriseWebSystems: {
    title: "Enterprise-Grade Web Systems",
    description: (
      <>
        <h3>For complex business needs:</h3>
        <ul className="list-disc px-4">
          <li>Role-Based Access Control</li>
          <li>Payment Gateway Integration</li>
        </ul>
      </>
    ),
    icon: <TbWriting />, 
  },
};

export default servicesData;