import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppPill from "@/components/WhatsAppPill";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SSR Mining & Minerals | Raw White Quartz Lumps",
  description: "B2B supplier of high-purity raw white quartz lumps for industrial glass, ceramic, and construction manufacturing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppPill />
      </body>
    </html>
  );
}
