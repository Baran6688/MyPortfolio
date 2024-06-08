import { IoHomeOutline } from "react-icons/io5";
import { CgToolbox } from "react-icons/cg";
import { TbTools } from "react-icons/tb";

import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export const sections = [
  { name: "Home", icon: <IoHomeOutline size="20px" />, ref: "#home" },
  { name: "Skills", icon: <TbTools size="20px" />, ref: "#skills" },
  { name: "Projects", icon: <CgToolbox size="20px" />, ref: "#projects" },
  { name: "About", icon: <IoPersonOutline size="20px" />, ref: "#about" },
  { name: "Contact", icon: <MdOutlineEmail size="20px" />, ref: "#contact" },
] as const;

import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { SiReactquery } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const skills = [
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "NextJs", icon: <SiNextdotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <BiLogoMongodb /> },
  { name: "MySql", icon: <DiMysql /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Framer", icon: <FiFramer /> },
  { name: "TS Query", icon: <SiReactquery /> },
  { name: "Sokect.io", icon: <SiSocketdotio /> },
  { name: "Supabase", icon: <RiSupabaseFill /> },
  { name: "PostgreSql", icon: <DiPostgresql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
] as const;

import MathCenter from "@/public/math.jpg";
import SVGImage from "@/public/ssvg.jpg";
import BreakingB from "@/public/breakingb.jpg";
import TaskssImg from "@/public/taskss.jpg";
import SpaceImg from "@/public/space.jpg";
import { StaticImageData } from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Univer from "@/public/univer.jpg";
import Sako from "@/public/sako.jpg";

const lorem: any =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore explicabo quo illum? Temporibus eius eligendi consequuntur? Modi sunt at nostrum, commodi ratione voluptatibus eum molestiae libero assumenda nobis, aperiam officiis!";

interface eachSkill {
  name: string;
  description: typeof lorem;
  image: StaticImageData;
  link: string;
}

export const myProjects: eachSkill[] = [
  {
    name: "Sakoi Culture",
    description:
      "A web application and API which generates 'Pendi Peshinan' and Kurdish Poetries, Tooks used are: Next.JS, ReactJS, DrizzleORM, TursoDB, LibSql, ShadCN, Tailwind....",
    image: Sako,
    link: "https://www.sakoi-culture.com",
  },
  {
    name: "Smart Volunteers Group",
    description:
      "A website where the members of Smart Volunteers Group, can directly see their points, activities, and details that are saved in the database in both languages Kurdish and English. and also the system to manage the database is provided as well. tools that are used in both are: NEXT.JS, ExpressJs, ReactJs, ShadCN, MongoDB, Zod, Tailwind, etc....",
    image: SVGImage,
    link: "https://smartvolunteersgroup.com",
  },
  {
    name: "Space",
    description:
      "A software company which offers software development courses, tools, and services. and I have developed their website. tools used: Next.JS, ReactJs, ShadCN, DrizzleORM, PostgreSQL, Zod, Tailwind, etc....",
    image: SpaceImg,
    link: "https://www.space.krd",
  },

  {
    name: "Math Center",

    description:
      "A web application which the students of AUIS, can see who is currently available in the Math & Natural Science Center. the webiste is role based and includes three types of role: Admin, Tutor, and User(Student). tools used to make the web app are: React, Redux, Node.JS, Express, Tailwind, RippleUI, MongoDB, etc...",
    image: MathCenter,
    link: "https://mathcenter.netlify.app",
  },
  {
    name: "Breaking Bad Page",
    description:
      "A simple blog and quote generator from Breaking Bad web app, which I built in the beggining of my journey in Web Development. Tools that used are: Node.JS, ExpressJs, MongoDB, ReactJS, Bootstrap, etc.....",
    image: BreakingB,
    link: "https://breakingb.pages.dev",
  },
  {
    name: "Task Manager",
    description:
      "A web applicatoin which helps you to manage your daily tasks, based on time, categories. for this one I avoided to use any component libraries and I made everything from scratch only with tailwind. the tools that used to make this web app are: Node.JS, ExpresJs, MongoDB, ReactJS, Tailwind...",
    image: TaskssImg,
    link: "https://tasks-d5t.pages.dev",
  },
];

export const about: string[] = [
  "Abilities: Driven by a passion for dynamic web solutions, I specialize in fast learning and creative problem-solving. Adapting swiftly to emerging technologies, I push the boundaries to deliver innovative solutions that redefine web development.",
  "Education: Currently advancing my knowledge at 'American University of Iraq, Sulaymaniah', I'm committed to staying at the forefront of web development.",
  "Location: I mostly live in Sulaymaniyah, I thrive in a dynamic tech community.",
  "Beyond Coding: Beyond the realm of coding, I delve into the realm of storytelling through movies and novels, exploring the artistry and narrative intricacies that captivate my imagination.",
];

import { MdSimCardDownload } from "react-icons/md";

export const socials = [
  {
    name: "github",
    link: "https://github.com/barham2003",

    icon: (
      <BsGithub size={"30px"} className="transition-all hover:opacity-75" />
    ),
  },
  {
    name: "linkedin",
    link: "https://linkedin.com/in/barham-khalid-khorshed-7abab8267/",
    icon: (
      <BsLinkedin size={"30px"} className="transition-all hover:opacity-75" />
    ),
  },
  {
    name: "CV",
    link: "/barham.pdf",
    icon: (
      <MdSimCardDownload
        size={"30px"}
        className="transition-all hover:opacity-75"
      />
    ),
  },
] as const;
