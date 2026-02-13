import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Alka Kumari",
  description:
    "Alka Kumari is a Software Engineer focused on Data Structures & Algorithms and Full-Stack Development.",
};

export default function ContactPage() {
  return (
    <Container>
      <Contact />
    </Container>
  );
}
