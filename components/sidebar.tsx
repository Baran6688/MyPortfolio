"use client";

import Link from "next/link";
import { ModeToggle } from "./toggle-mode";
import { motion } from "framer-motion";
import { sections, socials } from "@/lib/data";
import { BiPhone } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";

export default function Sidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 100, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.4,
      }}
      className="fixed left-0 top-0 z-10 flex w-screen flex-wrap justify-around border-b-2 border-b-primary/20 bg-white dark:bg-[#09090b] xl:static xl:h-screen xl:w-[400px] xl:flex-col xl:flex-nowrap xl:gap-4 xl:border-r xl:border-r-primary/20 xl:py-10"
    >
      <div className="hidden xl:flex xl:h-1/5 xl:flex-col xl:items-center xl:justify-center ">
        <span className="font-bold  xl:text-xl">Barham Khalid</span>
        <span className="text-lg opacity-45">Web Developer</span>
        <span className="flex items-center gap-2 text-lg opacity-45">
          Sulaymaniah
          <IoLocation />
        </span>
        <span className="flex items-center gap-2 font-sans text-lg opacity-45">
          +964 750 833 06 77
          <BiPhone />
        </span>
        <div className="mt-4 flex gap-4">
          {socials.map((social) => (
            <a key={social.name} href={social.link} target="_blank">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 p-2 xl:h-3/5 xl:flex-col xl:flex-nowrap xl:items-center xl:gap-4 xl:p-0">
        {sections.map((section) => (
          <Link
            href={section.ref}
            className=" flex items-center rounded-2xl bg-secondary/80 p-2 text-xl font-bold transition-all hover:bg-secondary/50 xl:w-5/6 xl:justify-center xl:gap-2  "
            key={section.name}
          >
            {section.icon}
            <span className="hidden xl:block">{section.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex items-center xl:relative xl:h-1/5 xl:flex-col xl:justify-end">
        <ModeToggle />
      </div>
    </motion.div>
  );
}
