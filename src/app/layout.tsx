import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

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

        {children}

        <Footer />
      </body>
    </html>
  );
}
