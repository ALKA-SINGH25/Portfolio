"use client";
import { Product } from "@/types/products";
import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const SingleProduct = ({ product }: { product: Product }) => {
  return (
    <div className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={product.slug}
        className="relative"
      >
        <Image
          src={product.thumbnail}
          alt="thumbnail"
          height={1000}
          width={1000}
          className="rounded-md object-contain"
        />
      </motion.div>

      <div className="flex lg:flex-row justify-between items-center flex-col mt-20">
        <Heading className="font-black mb-2 pb-1">
          {product.title}
        </Heading>

        <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
          {product.stack?.map((stack: string) => (
            <span
              key={stack}
              className="text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>

      <Paragraph className="max-w-xl mt-4">
        {product.description}
      </Paragraph>

      <div className="flex gap-4 mt-8 flex-wrap">

  {product.href && (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-2.5 text-sm font-medium rounded-xl 
                 bg-black text-white 
                 shadow-sm transition-all duration-300
                 hover:scale-105 hover:shadow-md"
    >
       Live Demo
    </a>
  )}

  {product.github && (
    <a
      href={product.github}
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-2.5 text-sm font-medium rounded-xl 
                 bg-black text-white 
                 shadow-sm transition-all duration-300
             hover:scale-105 hover:shadow-md"
    >
       GitHub Repo
    </a>
  )}

</div>

    </div>
  );
};
