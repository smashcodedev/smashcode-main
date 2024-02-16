import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { Poppins } from "next/font/google";
import { Footer, Navbar } from "@/components";

import "./globals.css";
import { AOSInit } from "@/components/ui/AOSInit";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

{
  /* 
<meta name="robots" content="index, follow" />
<meta name="image" content="https://smashcode.dev/smashcode.png?prev=s78" />
<!-- og -->
<meta
  property="og:image"
  content="https://smashcode.dev/smashcode.png?prev=s78"
/>
<meta property="fb:app_id" content="402147468021324" />



<!-- twitter -->
 */
}

export const metadata: Metadata = {
  title: "Smash Code",
  description:
    "We create future-ready websites & web apps via innovative digital solutions so that you can focus on your core business.",
  creator: "Smash Code",
  authors: [{ name: "Smash Code", url: "https://smashcode.dev" }],
  keywords: [
    "Web development",
    "ReactJs",
    "React",
    "Frontend Developer",
    "freelancer",
    "Html",
    "javascript",
  ],
  openGraph: {
    type: "website",
    locale: "en_US.utf-8",
    title: "Smash Code",
    description:
      "Smash Code is a Web Design & Development Company based in Faisalabad, Pakistan founded in 2019. We are a team of skilled Web Designers & Developers, Graphic Designers, and Content & Copy Writers.",
    url: "https://smashcode.dev",
    siteName: "Smash Code",
    // images: ["./opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Smashcodedev",
    title: "Smash Code",
    description:
      "Smash Code is a Web Design & Development Company based in Faisalabad, Pakistan founded in 2019. We are a team of skilled Web Designers & Developers, Graphic Designers, and Content & Copy Writers.",
    // images: ["./twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />

      <body
        className={`${poppins.className} overflow-x-hidden bg-primary-gray text-white antialiased`}
      >
        <Navbar />
        {children}
        <Footer />

        <Toaster position="bottom-right" />

        <Link
          className="floating-chat-btn whatstbtn text-2xl"
          href="https://wa.me/923071991737"
          target="_blank"
        >
          <FaWhatsapp />
        </Link>
      </body>
    </html>
  );
}
