"use client";

import Hero from "@/app/components/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import backgroundImage from "../../public/backgrounds/curve_bg.svg";
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
      className="relative overflow-hidden pb-16 pt-20 text-center lg:pt-32"
    >
      <Image
        className="absolute top-0 max-w-none -translate-y-1/6"
        src={backgroundImage}
        alt="background image"
        width={1558}
        height={946}
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
