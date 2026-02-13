import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m ALKA</Heading>
      <Paragraph className="max-w-xl mt-4">
  I’m a Software Engineer focused on{" "}
  <Highlight>Data Structures & Algorithms and Full-Stack Development</Highlight>. 
  I enjoy solving challenging problems and building scalable, high-performance 
  web applications with clean and efficient code.
</Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I have a strong understanding of{" "}
  <Highlight>System Design fundamentals and core Computer Science concepts</Highlight> 
  including Operating Systems, Computer Networks, DBMS, and OOPs, 
  which help me design reliable and well-architected software systems.
</Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
