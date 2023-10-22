"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Container from "@/components/Container";
import Image from "next/image";
import backgroundImage from "../../../public/backgrounds/spray_bg.jpg";
import { useEffect, useState } from "react";

export default function About() {
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
        className="absolute max-w-none top-0"
        src={backgroundImage}
        alt="background image"
        width={1558}
        height={946}
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        priority
      />
      <Container className="relative">
        <Hero />
        <div className="h-96"></div>
      </Container>
    </motion.section>
  );
}
