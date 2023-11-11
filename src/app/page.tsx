"use client";

import Hero from "@/app/components/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import backgroundImage from "../../public/backgrounds/curve.svg";
import Copyright from "@/components/Copyright";
import Sponsors from "./components/Sponsors";
import Container from "@/components/Container";
import { useEffect, useState } from "react";

export default function Home() {
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
      className="relative pb-16 pt-20 text-center xl:pt-32 overflow-hidden 2xl:min-h-[87.1vh]"
    >
      <Image
        className="absolute max-w-none -right-full lg:-right-1/2 xl:right-auto xl:h-auto h-full xl:w-full top-0"
        src={backgroundImage}
        alt="background image"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        priority
      />
      <Container className="relative">
        <Hero />
        <Sponsors />
        <Copyright theme="light" />
      </Container>
    </motion.section>
  );
}
