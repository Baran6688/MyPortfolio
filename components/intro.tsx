"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";

import React, { useState, useEffect } from "react";

const HackerTextEffect = ({
  children,
  intervalDuration,
  glitchProbability,
  className = "text-4xl md:text-6xl",
}: any) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      const randomChar =
        Math.random() < glitchProbability
          ? String.fromCharCode(Math.floor(Math.random() * 94) + 33)
          : children[index];

      const newText = text.slice(0, index) + randomChar + text.slice(index + 1);
      setText(newText);

      index = (index + 1) % children.length;
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [text, children, intervalDuration, glitchProbability]);

  return (
    <motion.span
      style={{
        fontFamily: "monospace",
        whiteSpace: "pre",
        overflow: "hidden",
        fontWeight: "bold",
      }}
      className={className}
    >
      {text}
    </motion.span>
  );
};

export default function Intro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -200 }}
      animate={{
        opacity: 100,
        y: 0,
        transition: { type: "tween", delay: 1 },
      }}
      className="flex scroll-mt-20 flex-col gap-4"
      id="home"
    >
      <h1 className=" text-7xl font-bold">
        <HackerTextEffect
          intervalDuration={2}
          glitchProbability={0.1}
          className="text-4xl md:text-7xl md:font-bold"
        >
          Hello, Friend.
        </HackerTextEffect>
      </h1>
      <div className="mt-5 h-full md:mt-20">
        <p className=" text-pretty text-justify text-xl font-semibold leading-10 tracking-wide md:text-4xl">
          I'm <span className="font-extrabold"> Barham</span>, a passionate and{" "}
          <span className="font-bold underline underline-offset-4">
            creative web developer
          </span>{" "}
          with a love for crafting clean, efficient, and visually appealing
          websites. With a keen eye for detail and a commitment to excellence, I
          take pride in{" "}
          <span className="bg-secondary/60 font-normal">
            {"    "}
            delivering innovative digital solutions
          </span>{" "}
          Embarking on the exciting journey of web development, I've become more
          than just a coder; I'm a creator, a problem solver, and a{" "}
          <span className="">
            <HackerTextEffect
              intervalDuration={3}
              glitchProbability={0.04}
              className="text-xl font-extrabold md:text-4xl"
            >
              relentless
            </HackerTextEffect>
          </span>{" "}
          pursuer of digital excellence. As a web developer, my goal is to merge
          the realms of{" "}
          <span className="font-extrabold">technology and creativity</span>,
          crafting online experiences that leave a lasting impact.
        </p>
      </div>
    </motion.section>
  );
}