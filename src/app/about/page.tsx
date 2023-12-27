"use client";

import Hero from "./components/Hero";
import Container from "@/components/Container";
import Slider from "./components/Slider";
import Team from "./components/Team";
import Copyright from "@/components/Copyright";
import Background from "@/components/Background";

export default function About() {
  return (
    <Background>
      <Container className="relative pb-24">
        <Hero />
      </Container>
      <Slider />
      <Container className="relative mt-32">
        <Team />
        <Copyright theme="dark" />
      </Container>
    </Background>
  );
}
