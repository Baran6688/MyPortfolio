import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className=" flex w-full justify-center overflow-y-auto scroll-smooth xl:max-h-screen">
      <div className=" flex w-full max-w-[1990px] flex-col justify-start gap-56  px-8 pt-28 text-center ">
        <Intro />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}
