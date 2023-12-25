import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { Poppins } from "next/font/google";
import { Footer, Navbar } from "@/components";

import "./globals.css";
import Providers from "@/utils/Providers";

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
      <body
        className={`${poppins.className} overflow-x-hidden bg-primary-gray text-white antialiased`}
      >
        <Navbar />

        <Providers>{children}</Providers>

        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
