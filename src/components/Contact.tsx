"use client";

import { useState } from "react";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("alkasingh2528@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-16 max-w-4xl mx-auto px-4">

      {/* Emoji + Heading */}
      <div className="mb-6">
        <span className="text-4xl block mb-2">📩</span>
        <Heading className="font-black">Contact Me</Heading>
      </div>

      <Paragraph className="text-neutral-600 mb-12 max-w-xl">
        Feel free to reach out for opportunities, collaborations,
        or just a tech discussion.
      </Paragraph>

      <div className="space-y-6 max-w-xl">

        {/* Email */}
        <div className="p-6 rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition">
          <p className="text-sm text-neutral-500 mb-2">Email</p>

          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-neutral-700">
              alkasingh2528@gmail.com
            </span>

            <button
              onClick={handleCopy}
              className="text-sm px-3 py-1 rounded-md bg-neutral-200 hover:bg-neutral-300 transition"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>
        </div>

      {/* Phone */}
<div className="p-6 rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition">
  <p className="text-sm text-neutral-500">Phone</p>
  <p className="text-lg font-medium text-neutral-700">
    +91 9289235137
  </p>
</div>


        {/* LinkedIn */}
        <div className="p-6 rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition">
          <p className="text-sm text-neutral-500">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/alka-kumari-653770256/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-neutral-700 hover:underline"
          >
            linkedin.com/in/alka-kumari-653770256
          </a>
        </div>

        {/* GitHub */}
        <div className="p-6 rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition">
          <p className="text-sm text-neutral-500">GitHub</p>
          <a
            href="https://github.com/ALKA-SINGH25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-neutral-700 hover:underline"
          >
            github.com/ALKA-SINGH25
          </a>
        </div>

      </div>
    </div>
  );
};
