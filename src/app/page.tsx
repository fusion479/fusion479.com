"use client";

import Hero from "@/app/components/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import curve from "../../public/backgrounds/curve.svg";
import Sponsors from "./components/Sponsors";
import Container from "@/components/Container";
import { useEffect, useState } from "react";
import Copyright from "@/components/Copyright";
import About from "./components/About";
import bottom_curve from "../../public/backgrounds/bottom_curve.svg";
import Game from "./components/Game";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log(offsetY);
  }, [offsetY]);

  return (
    <motion.section
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative pt-44 text-center overflow-hidden h-[103vh]">
        <Image
          className="absolute max-w-none -right-full lg:-right-1/2 xl:right-auto xl:h-auto h-full xl:w-full"
          src={curve}
          alt="background image"
          priority
        />
        <Container className="relative">
          <Hero />
          <Sponsors />
        </Container>
      </div>

      <div className="relative pb-16 text-center bottom-0 overflow-hidden">
        <Image
          className="absolute max-w-none -right-full lg:-right-1/2 xl:right-auto bottom-0 xl:h-auto h-full xl:w-full"
          src={bottom_curve}
          alt="background image"
          priority
        />
        <Container className="relative">
          <About />
          <Game />
        </Container>
        <div className="relative">
          <Copyright theme="light" />
        </div>
      </div>
    </motion.section>
  );
}
