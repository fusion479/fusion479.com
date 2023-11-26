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
import gradient from "../../public/backgrounds/gradient.svg";

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
      <div className="relative pb-16 pt-20 text-center xl:pt-32 overflow-hidden h-[100vh]">
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

      <Container>
        <About />
      </Container>
      <div className="h-96" />
      <Copyright theme="dark" />
    </motion.section>
  );
}
