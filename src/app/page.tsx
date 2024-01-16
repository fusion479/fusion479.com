"use client";

import Container from "@/components/Container";
import Copyright from "@/components/Copyright";
import Hero from "./components/Hero";
import About from "./components/About";
import Game from "./components/Game";
import Sponsors from "./components/Sponsors";
import Background from "@/components/Background";
import Head from "next/head";

export default function Landing() {
  return (
    <Background>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="relative">
        <Hero />
        <Sponsors />
        <About />
        <Game />
        <Copyright theme="dark" />
      </Container>
    </Background>
  );
}
