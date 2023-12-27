"use client";

import Container from "@/components/Container";
import Copyright from "@/components/Copyright";
import Hero from "./components/Hero";
import List from "./components/List";
import Background from "@/components/Background";

export default function Outreach() {
  return (
    <Background>
      <Container className="relative">
        <Hero />
        <List />
      </Container>
      <Copyright theme="dark" />
    </Background>
  );
}
