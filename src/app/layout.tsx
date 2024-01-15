import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stuy Fusion | FTC 479",
  description:
    "Stuy Fusion is a FIRST Tech Challenge team based in New York City, comprised of talented students from Stuyvesant High School. As a team, we are dedicated to exploring the exciting world of robotics and competing in the FIRST Tech Challenge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
