"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import Image from "next/image";
import backgroundImage from "../../public/backgrounds/spray.jpg";
import { useEffect, useState } from "react";
import Copyright from "@/components/Copyright";
import Hero from "./components/Hero";
import About from "./components/About";
import Game from "./components/Game";
import Sponsors from "./components/Sponsors";

export default function Landing() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden pb-16 pt-20 lg:pt-32"
    >
      <Image
        className="absolute max-w-none -right-full sm:top-0 sm:right-0 sm:left-0 sm:mx-auto"
        src={backgroundImage}
        alt="background image"
        width={1558}
        height={946}
        style={{ transform: `translateY(${offsetY * 0.65}px)` }}
        priority
      />
      <Container className="relative">
        <Hero />
        <Sponsors />
        <About />
        <Game />
      </Container>
      <Copyright theme="dark" />
    </motion.section>
  );
}
