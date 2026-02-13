"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4">

      {/* Profile Image */}
      <motion.div className="my-10 md:ml-8">
        <Image
          src="/images/alka.jpeg"
          width={220}
          height={220}
          alt="Alka Kumari"
          className="rounded-full object-cover shadow-xl border-4 border-neutral-200 hover:scale-105 transition"
        />
      </motion.div>

      {/* About Content */}
      <div className="max-w-3xl text-left leading-relaxed space-y-6">

        <Paragraph>
          Hey there, I’m Alka Kumari, a passionate Software Engineering enthusiast
          who enjoys solving problems and building meaningful digital experiences.
          Currently pursuing my B.Tech in Electronics and Communication Engineering,
          I’ve focused on developing strong foundations in Data Structures, Algorithms,
          and core computer science concepts.
        </Paragraph>

        <Paragraph>
          With 400+ DSA problems solved, I’ve built structured thinking and a
          disciplined approach to problem-solving. I’m particularly interested in
          writing clean, efficient code and understanding how systems work behind
          the scenes.
        </Paragraph>

        <Paragraph>
          I’m currently looking for a Software Development Engineer opportunity
          where I can apply my skills, learn from experienced teams, and grow into
          a dependable and impactful engineer.
        </Paragraph>

      </div>
    </div>
  );
}
