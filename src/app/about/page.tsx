"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Container from "@/components/Container";
import Image from "next/image";
import backgroundImage from "../../../public/backgrounds/spray.jpg";
import { useEffect, useState } from "react";
import Slider from "./components/Slider";
import Team from "./components/Team";
import Copyright from "@/components/Copyright";

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
      className="relative overflow-hidden pb-16 pt-20 lg:pt-32"
    >
      <Image
        className="absolute top-0 right-0 left-0 mx-auto"
        src={backgroundImage}
        alt="background image"
        width={1558}
        height={946}
        style={{ transform: `translateY(${offsetY * 0.65}px)` }}
        priority
      />
      <Container className="relative pb-24">
        <Hero />
      </Container>
      <Slider />
      <Container className="relative mt-32">
        <Team />
        <Copyright theme="dark" />
      </Container>
    </motion.section>
  );
}
