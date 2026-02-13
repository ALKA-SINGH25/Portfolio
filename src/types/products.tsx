import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type Product = {
  title: string;
  description: string;
  thumbnail: StaticImageData | string;
  images?: (StaticImageData | string)[];
  href: string;        // Live link
  github?: string;     // GitHub repo link
  slug?: string;
  stack?: string[];
  content?: ReactNode | string;
};

