import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Playfair_Display, Inter } from "next/font/google";
import React from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });
export const metadata = {
  title: "Tailor-Dairy",
  description: "Tailoring and measurement manager",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <html lang="en">
    <body className={`${inter.className} bg-[#0f3d3e] text-[#d4af37]`}>
      <Header subtitle="" />
      <main className="w-full min-h-screen p-0 m-0">{children}</main>
      <Footer />
    </body>
  </html>
);
}
