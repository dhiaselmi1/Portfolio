import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { SkillCard } from "./ui/SkillCard";
import {

  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiAngular,
  SiSpringboot,
  SiFastapi,
  SiStreamlit,
  SiOllama,
  SiLangchain,
  SiPostgresql,
  SiOracle,
  SiSqlite,
  SiOpenai, SiDocker, SiGooglegemini, SiElectron, SiN8N
} from "react-icons/si";
import { FaNodeJs, FaPython, FaJava, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  { name: "Python", icon: FaPython, color: "#306998", url: "https://www.python.org/" },
  { name: "Ollama", icon: SiOllama, color: "#", url: "https://ollama.com" },
  { name: "Openai", icon: SiOpenai, color: "#", url: "https://openai.com" },
  { name: "Gemini", icon: SiGooglegemini, color: "#646cff", url: "gemini.google.com" },
  { name: "Langchain", icon: SiLangchain, color: "#1C3C3C", url: "https://www.langchain.com" },
  { name: "N8N", icon: SiN8N, color: "#DE5D17", url: "https://www.n8n.io" },
  { name: "Java", icon: FaJava, color: "#f7b731", url: "https://www.java.com/" },
  { name: "Springboot", icon: SiSpringboot, color: "#6DB33F", url: "https://spring.io/projects/spring-boot/" },
  { name: "Angular", icon: SiAngular, color: "#c3002f", url: "https://angular.dev" },
  { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
  { name: "Eelectron", icon: SiElectron, color: "#007acc", url: "https://www.electronjs.org" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", url: "https://www.typescriptlang.org/" },
  { name: "JavaScript", icon: SiJavascript, color: "#ffd600", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B", url: "https://streamlit.io" },
  { name: "Fastapi", icon: SiFastapi, color: "#009688", url: "https://fastapi.tiangolo.com" },
  { name: "Postgresql", icon: SiPostgresql, color: "#336791", url: "https://www.postgresql.org" },
  { name: "Oracle", icon: SiOracle, color: "#F80000", url: "https://www.oracle.com" },
  { name: "Sqlite", icon: SiSqlite, color: "#003B57", url: "https://www.sqlite.org" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", url: "https://www.docker.com" },
  { name: "C++", icon: SiCplusplus, color: "#00599c", url: "https://cplusplus.com/" },
  { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
  { name: "GitHub", icon: SiGithub, color: "# ", url: "https://github.com/" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37", url: "https://www.postman.com/" },
  { name: "Vercel", icon: SiVercel, color: "#", url: "https://vercel.com/" },

];

export function Skills() {
  return (
    <SectionBackground>
      <section id="skills">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="The tech stack I've been collecting like Pokémon cards - gotta catch 'em all! 🎯">Skills</SectionTitle>

          <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
            {skills.map((tech) => (
              <SkillCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} url={tech.url} />
            ))}
          </div>

        </div>
      </section>
    </SectionBackground>
  );
}