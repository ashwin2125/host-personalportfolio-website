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
        Hey, I’m Ashwin – a growth-stage engineer who understands the business behind the code. With a passion for <b>building resilient and scalable software systems</b>, I specialize in <b>designing, architecting, and developing cloud-native solutions</b> that drive impact. Whether it’s <b>fintech products</b> handling millions of daily transactions or <b>microservices architecture</b> powering internet-scale platforms, I thrive in <b>dynamic environments</b>, working closely with <b>engineers, product owners, and guilds</b> to bring ideas to life. <br/><br/>

        <b>What I Do</b> <br/>
        I’m not just about writing code – I’m about <b>solving problems</b> and <b>delivering value</b>. My approach goes beyond the technical, focusing on the <b>business goals behind every project</b>. I bring my expertise in <b>distributed systems</b>, <b>cloud engineering</b>, and <b>back-end development</b> to craft solutions that are as effective as they are efficient. <br/><br/>

        I know that great software doesn’t happen in isolation. It’s about <b>collaboration, ownership</b>, and understanding how to communicate across teams. Fluent in <b>English and German</b>, I bridge cultural and geographical divides, ensuring that <b>cross-functional teams</b> stay aligned and on track. <br/><br/>

        <b>Beyond the Code</b> <br/>
        I’m a strong believer in taking ownership, not just of my projects but of my growth as well. <b>Self-sufficiency</b> and <b>continuous learning</b> are at the core of my work ethic. When I’m not coding, I’m often busy with other meaningful pursuits like <b>event moderation</b>, crafting <b>robust documentation</b>, or delivering <b>presentations</b> that make complex topics clear and engaging. <br/><br/>

        Wellness is a daily commitment for me, and I’ve found that a balanced approach keeps me grounded. <b>Workouts, mindfulness, walking, and staying hydrated</b> are part of my routine. I stay connected to my roots, drawing strength from my <b>Tamil heritage</b>, and music is always there – whether it’s <b>lofi beats</b> for focus or <b>Tamil tracks</b> for soulful connection. <br/><br/>

        <i>&quot;You can complain because roses have thorns, or you can rejoice because thorns have roses.&quot; – Alphonse Karr</i>
      </p>
    </motion.section>
  );
}
