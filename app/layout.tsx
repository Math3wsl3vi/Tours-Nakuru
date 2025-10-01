import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Add the font weights you need
});

export const metadata: Metadata = {
  title: "Tours-Nakuru",
  description: "Explore the beauty of Kenya with our curated tours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased font-poppins`}
      >
        <div>
          <Header/>
        </div>
        <Toaster/>
        {children}
          <Footer/>
      </body>
    </html>
  );
}
