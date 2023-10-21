import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stuy Fusion | FTC 479",
  description:
    "Stuy Fusion is a FIRST Tech Challenge team based in New York City, comprised of talented students from Stuyvesant High School. As a team, we are dedicated to exploring the exciting world of robotics and competing in the FIRST Tech Challenge. Our goal is to learn, grow, and innovate as we work together to tackle the challenges of this exciting competition.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="border-t-[1px] w-1/2 ml-auto mr-auto" />
        <div className="text-center text-sm text-gray-500 sm:text-center dark:text-gray-400 py-6">
          Copyright © StuyFusion 2023
        </div>
      </body>
    </html>
  );
}
