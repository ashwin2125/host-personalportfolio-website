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
        Hey, I’m Ashwin – a growth-stage engineer who understands the business behind the code. With a passion for <b>building resilient and scalable software systems</b>, I specialize in <i>designing, architecting, and developing cloud-native solutions</i> that drive impact. Whether it’s fintech products handling millions of daily transactions or microservices architecture powering internet-scale platforms, I thrive in dynamic environments, working closely with engineers, product owners, and guilds to bring ideas to life. <br/><br/>

        <b>What I Do</b> <br/>
        I’m not just about writing code – I’m about <b>solving problems</b> and <i>delivering value</i>. My approach goes beyond the technical, focusing on the business goals behind every project. I bring my expertise in distributed systems, cloud engineering, and back-end development to craft solutions that are as effective as they are efficient. <br/><br/>

        I know that great software doesn’t happen in isolation. It’s about <b>collaboration</b>, <i>ownership</i>, and understanding how to communicate across teams. Fluent in English and German, I bridge cultural and geographical divides, ensuring that cross-functional teams stay aligned and on track. <br/><br/>

        <b>Beyond the Code</b> <br/>
        I’m a strong believer in taking ownership, not just of my projects but of my growth as well. Self-sufficiency and continuous learning are at the core of my work ethic. When I’m not coding, I’m often busy with other meaningful pursuits like event moderation, crafting <i>robust documentation</i>, or delivering presentations that make complex topics clear and engaging. <br/><br/>

        Wellness is a daily commitment for me, and I’ve found that a balanced approach keeps me grounded. Workouts, mindfulness, walking, and staying hydrated are part of my routine. I stay connected to my roots, drawing strength from my Tamil heritage, and music is always there – whether it’s lofi beats for focus or Tamil tracks for soulful connection. <br/><br/>
      </p>
    </motion.section>
  );
}
