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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-justify text-lg">
      I work in technology, but there&apos;s much more to me outside the lines of code and tech architectures. I&apos;ve shaped my life as a blend of intellectual curiosity, family values, and well-being. Engaging in discussions that range from geopolitics to finance, I relish the opportunity for collective growth and fresh perspectives. Valuing both the soil under my feet and the faces at my family table, they serve as my emotional and cultural anchor. <br/> <br/>
      
      I keep wellness as a daily commitment, manifesting in no-equipment workouts, mindfullness, active walking and staying in hydration. Amid this backdrop of personal growth, family ties, and a deep connection to my roots, my Tamil heritage and love for music find their rightful space. Whether it&apos;s lofi-beats for focus & work or Tamil tracks for soulful connection, music is an ever-present companion.<br/><br/>
      
      Being <span className="text-italic">bilingually proficient in English & Deutsch</span>, I appreciate the art of clear communication across diverse settings. In a nutshell, I&apos;m a multi-layered individual balancing modern tech, traditional values, and a ceaseless thirst for knowledge, always aiming to be a better version of myself.
      </p>
    </motion.section>
  );
}
