"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact</SectionHeading>
      <br/>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Feel free to contact me directly at{" "}
        <a className="underline" href="mailto:ashwin2125@gmail.com">
          ashwin2125@gmail.com
        </a>{" "}
        or via {" "}
      <a
          className="underline"
          href="https://linkedin.com/in/ashwin2125"
          target="_blank">LinkedIn
        </a>
        </p>
    </motion.section>
  );
}
