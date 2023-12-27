"use client";

import Container from "@/components/Container";
import Copyright from "@/components/Copyright";
import Robots from "./components/Robots";
import Background from "@/components/Background";

export default function About() {
  return (
    <Background>
      <Container className="relative">
        <Robots />
        <Copyright theme="dark" />
      </Container>
    </Background>
  );
}
