"use client";

import { about as abouts } from "@/lib/data";
import HeaderSection from "@/lib/header-section";
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerDirection: 1,
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <section
      id="about"
      className=" flex scroll-mt-20 flex-col gap-8 xl:scroll-mt-12 xl:gap-20"
    >
      <HeaderSection>About</HeaderSection>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
        }}
        className="flex flex-col gap-4 text-justify text-xl font-semibold tracking-tight xl:gap-8 xl:text-4xl xl:tracking-normal"
      >
        {abouts.map((about, index) => (
          <motion.li variants={item} key={index}>
            {about}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
