"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <p className="mb-3 text-justify text-lg">
      A growth stage engineer who understands the business behind the code, bringing expertise in designing, architecting and developing software systems. I thrive in dynamic environments, working effectively with engineers, guilds and product owners to build resilient, scalable services and infrastructure. <br/> <br/>

      Beyond coding, my strengths lie in event moderation, robust documentation, effective presentation and a strong drive for self-sufficiency and ownership. Fluent in both English and German, I connect & collaborate with cross-functional teams across diverse cultures and geographies.  <br/> <br/>

      Wellness is a daily commitment for me, focusing on workouts, mindfulness, walking and staying hydrated. This blend of personal growth, strong family ties, and a deep connection to my Tamil heritage defines who I am. Music, whether it&apos;s lofi beats for focus or Tamil tracks for soulful connection, is my constant companion. <br/> <br/>

      I&apos;m always on the lookout for opportunities to connect and collaborate. Feel free to reach out!  <br/> <br/>
      </p>
    </motion.section>
  );
}
