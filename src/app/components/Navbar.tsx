"use client";

import Link from "next/link";
import Container from "../../components/Container";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { motion } from "framer-motion";

function Navlink({
  href,
  children,
  margin,
}: {
  href: string;
  children: React.ReactNode;
  margin?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-block hover:-translate-y-1 duration-150 font-light rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-blue-600 ${margin && "mr-6"
        }`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [toggle, setToggled] = useState(false);

  return (
    <header className="py-10">
      <Container className="relative">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              src={logo}
              alt="Image: Stuy Fusion logo"
              className="h-16 w-16 mr-2"
            />
            <span className="text-4xl font-semibold text-blue-500">
              Stuy Fusion
            </span>
          </Link>
          <RxHamburgerMenu
            onClick={() => setToggled(!toggle)}
            onMouseLeave={() => setToggled(false)}
            className="sm:hidden w-5 h-5"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: toggle ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className={`${toggle ? "absolute" : "hidden"
              } right-0 shadow-md rounded-lg p-2 bg-white bottom-0 mr-6 translate-y-6`}
          >
            <Navlink margin href="/">
              Home
            </Navlink>
            <Navlink margin href="/about">
              About
            </Navlink>
            <Navlink href="/impact">Impact</Navlink>
            <div className="mx-6 inline-block font-thin">|</div>
            <Navlink href="/robots">Robots</Navlink>
          </motion.div>
          <div className="hidden sm:block">
            <Navlink margin href="/">
              Home
            </Navlink>
            <Navlink margin href="/about">
              About
            </Navlink>
            <Navlink href="/impact">Impact</Navlink>
            <div className="mx-6 inline-block font-thin">|</div>
            <Navlink href="/robots">Robots</Navlink>
          </div>
        </nav>
      </Container>
    </header>
  );
}
