import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Javascript",
      src: "/images/logos/javascript.png",

      className: "h-10 w-14",
    },
    {
      title: "typescript",
      src: "/images/logos/typescript.png",

      className: "h-10 w-14",
    },
    
    {
      title: "React.js",
      src: "/images/logos/react.png",

      className: "h-10 w-14",
    },
    {
      title: "Express.js",
      src: "/images/logos/express.png",

      className: "h-10 w-14",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "MONGO db",
      src: "/images/logos/mongodb.png",

      className: "h-10 w-14",
    },
  
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "MYSQL",
      src: "/images/logos/mysql.png",

      className: "h-10 w-14",
    },
    {
      title: "Machine Learning",
      src: "/images/logos/machinelearning.png",

      className: "h-10 w-14",
    },
    {
      title: "cpp",
      src: "/images/logos/c++.png",

      className: "h-10 w-14",
    },
    {
      title: "PYTHON",
      src: "/images/logos/python.png",

      className: "h-10 w-14",
    },
     {
      title: "Github",
      src: "/images/logos/github.png",

      className: "h-10 w-14",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",

      className: "h-10 w-8",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",

      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
