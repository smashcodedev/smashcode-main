type ServiceNames =
  | "customWebDevelopment"
  | "blockchainWebApps"
  | "graphicsDesigning"
  | "contentWriting"
  | "customWebApp"
  | "contractIntegration"
  | "walletConnectivity"
  | "landingPages"
  | "nftLandingPages"
  | "responsiveWebsites"
  | "fullStackWebApps"
  | "copyWriting"
  | "blogAndArticalWriting"
  | "logoDesign"
  | "photoEditing";

export type ServiceType = {
  title: string;
  description: string;
  //   icon: React.ReactNode;
};

type Services = { [K in ServiceNames]: ServiceType };

const servicesData: Services = {
  customWebDevelopment: {
    title: "Custom Web Development",
    description:
      "We focus on creating unique full-stack Web Apps & Responsive Websites via HTML, CSS, JS, ReactJs, and Firebase. We use next-generation programming languages platforms on the Google Cloud Platform.",
  },
  blockchainWebApps: {
    title: "Blockchain Web Apps",
    description:
      "We do frontend of NFT & blockchain websites and web apps and do smart contract integration using web3.js, Alchemy, Moralis, and other 3rd party libraries or tokens like ERC-20, ERC-720, and ERC-1155. In addition, we do wallet integration. These wallets include Metamask, Polygon, Coinbase, etc",
    // icon: <MemoryIcon fontSize={"large"} />,
  },
  graphicsDesigning: {
    title: "Graphics Designing",
    description:
      "We work hard to provide you professional business logo designs, poster designs, CV designs, and photo editing. We have skilled graphic designers who use prominent photo editing and manipulation software such as Adobe Photoshop, Illustrator, and Canva.",
    // icon: <PolymerIcon fontSize={"large"} />,
  },
  contentWriting: {
    title: "Content Writing",
    description:
      "Our skilled content & copywriter produces quality content on Medium. Also, He  helps businesses to build a prominent online presence by creating high-conversion web pages, sales copies, and blogs and articles.  He has produced plenty of attention-grabbing content for different niches such as Businesses, SEO, Information Technology, Programming Languages, Civic Tech, Self-Improvement, Health, etc. ",
    // icon: <AssignmentIcon fontSize={"large"} />,
  },
  customWebApp: {
    title: "Custom Web App",
    description:
      "We focus on creating a modern, flexible, secure, cross-platform, and user-friendly web app so that it can meet spikes in demand and handle complex scenarios",
    // icon: <DeveloperModeIcon fontSize={"large"} />,
  },
  contractIntegration: {
    title: "Contract Integration / Minting",
    description:
      "We do smart Contract integration in which includes functionalities minting, whitelist, get data from Blockchain and update on it, buy tokens  and etc",
    // icon: <WidgetsTwoToneIcon fontSize={"large"} />,
  },
  walletConnectivity: {
    title: "Wallet Connectivity",
    description:
      "We do wallet integration in Blockchain. These wallets include Metamask, Coinbase, Trust, Sollana, etc. We also connect these wallets with the front end.",
    // icon: <AccountBalanceWalletIcon fontSize={"large"} />,
  },
  landingPages: {
    title: "Landing Pages",
    description:
      "We pay special attention to create attention-grabbing landing pages that convince your users to take the required action. We use a combination of eye-catching backgrounds and images to make each section stand out.",
    // icon: <ViewCompactIcon fontSize={"large"} />,
  },
  nftLandingPages: {
    title: "NFT Landing Pages",
    description:
      "We design unique NFT landing pages with awesome animations and themes. These landing pages have 5 to 7 sections that include, engaging content, Art slider, Roadmap, Team, Faq, etc.",
    // icon: <WebTwoToneIcon fontSize={"large"} />,
  },
  responsiveWebsites: {
    title: "Responsive websites",
    description:
      "We create responsive websites via CSS and JavaScript plugins. Our design has a flexible layout and images that work on various devices: mobile, desktop, tablet, etc. We create websites that efficiently deal with different media queries, screen sizes, resolutions, color capabilities, and resolutions.",
    // icon: <QueuePlayNextIcon fontSize={"large"} />,
  },
  fullStackWebApps: {
    title: "Full Stack Web Apps",
    description:
      "We develop full-stack Web Apps for both the front-end and back-end project directories. Apart from using HTML and CSS, we also use JavaScript, ReactJs, and Firebase to create full-stack web apps. ",
    // icon: <WebIcon fontSize={"large"} />,
  },
  copyWriting: {
    title: "Copy writing",
    description:
      "We create engaging web pages, landing pages, and sales copies to increase brand awareness that persuades users to take the required action.",
    // icon: <FileCopyIcon fontSize={"large"} />,
  },
  blogAndArticalWriting: {
    title: "Blog & Artical writing",
    description:
      "When writing blogs, we focus on creating appealing graphics, magnetic headlines & subtitles, powerful calls to action, relevant internal links, and concise Meta descriptions so that our content engages readers to take the required action.",
    // icon: <SubjectIcon fontSize={"large"} />,
  },
  logoDesign: {
    title: "Logo Design",
    description:
      "We create professional, distinctive, and simple in form business logo design so that it conveys your intended message to your potential customers.",
    // icon: <DeckIcon fontSize={"large"} />,
  },
  photoEditing: {
    title: "Photo Editing",
    description:
      "Our skilled graphic designer aims to take a quality shot, choose relevant filters, adjust the Lux setting and create professional and eye-catching photos.",
    // icon: <PhotoSizeSelectLargeIcon fontSize={"large"} />,
  },
};

export default servicesData;
