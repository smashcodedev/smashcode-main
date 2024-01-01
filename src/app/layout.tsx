import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { Poppins } from "next/font/google";
import { Footer, Navbar } from "@/components";

import "./globals.css";
import { AOSInit } from "@/components/ui/AOSInit";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { PageLoaderProvider } from "@/context/PageLoaderContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Smash Code",
  description:
    "We create future-ready websites & web apps via innovative digital solutions so that you can focus on your core business.",
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
