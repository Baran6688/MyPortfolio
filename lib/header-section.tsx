"use client";
import { HackerTextEffect } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function HeaderSection({ children }: { children: string }) {
  return (
    <motion.h2
      className="text-center text-4xl 2xl:text-6xl 2xl:font-extrabold"
      initial={{ x: -200 }}
      whileInView={{
        x: 0,
        transition: { type: "tween", duration: 0.6, delay: 0.001 },
      }}
      viewport={{
        once: true,
      }}
    >
      <HackerTextEffect>{children}</HackerTextEffect>
    </motion.h2>
  );
}
