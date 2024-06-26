import { skills } from "@/lib/data";
import HeaderSection from "@/lib/header-section";
import AnimatedList from "./animated-list";

export default function Skills() {
  return (
    <section
      id="skills"
      className=" flex scroll-mt-20 flex-col gap-8 xl:gap-20 "
    >
      <HeaderSection>Skills</HeaderSection>
      <ul className="flex flex-wrap justify-center gap-4 xl:gap-8">
        {skills.map((skill, index) => (
          <AnimatedList key={skill.name} index={index}>
            {skill.icon}
            {skill.name}
          </AnimatedList>
        ))}
      </ul>
    </section>
  );
}
