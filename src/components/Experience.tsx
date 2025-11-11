import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [

  {
    title: "Summer Intern",
    company: "School of AI",
    companyUrl: "https://www.linkedin.com/company/a-school-of-ai",
    period: "Jul 2025 - Aug 2025",
    description: `Completed an intensive AI engineering program with 25 hands-on, production-grade projects under expert mentorship.
Built systems covering multi-agent orchestration, intelligent automation, and document intelligence using Python, FastAPI, and React.js.
Developed advanced AI solutions including speech-driven interfaces, NLP pipelines, anomaly detection, and cybersecurity response agents.
Gained expertise across OpenAI APIs, Whisper, Vector Databases, WebSockets, and task scheduling with APScheduler.`,
    skills: ["Python", "FastAPI", "Streamlit", "Whisper", "OpenAI/Gemini APIs","Multi-Agent Systems","NLP"]
  },{
    title: "AI Research & Engineer Intern",
    company: "Talan",
    companyUrl: "https://www.talan.com/",
    period: "Jul 2025 - Aug 2025",
    description: `Participated in Talan Tunisie’s Summer Innovation Camp, focused on creativity, teamwork, and real-world problem-solving.
Co-developed Date2Deal, an AI-powered sales prospecting platform that identifies key decision-makers and generates personalized outreach messages. 
Applied Generative AI and data analysis to automate lead research and enhance commercial engagement strategies.
Gained hands-on experience through workshops on innovation, design thinking, and collaborative project development.`,
    skills: ["React", "TypeScript", "Python", "BeautifulSoup", "OpenAI/Gemini APIs","Project Management","Innovation"]
  },
  {
    title: "Full Stack Developer Intern",
    company: "MEDIANET",
    companyUrl: "https://www.medianet.com.tn/",
    period: " Feb 2024 - May 2024",
    description: `Developed an innovative hiking tour booking platform enabling users to discover, book, and review hiking circuits across Tunisia. 
    Collaborated in a 2-person team to design and implement both front office, admin back office, and mobile app interfaces. 
Implemented multi-role authentication system (Admin, Agency, User, Guest) with role-based dashboards and access control.
Built real-time event and reservation management features with integrated commenting, rating, and e-commerce modules.
Created a mobile companion app using Ionic, ensuring a consistent cross-platform experience.`,
    skills: ["Angular", "Spring Boot", "PostgreSQL", "Ionic", "REST APIs","Agile / Scrum","Collaboration"],
  },
];

export function Experience() {
  return (
    <SectionBackground>
      <section id="experience">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="My journey from 'Hello world' to turning complex problems into elegant, user-friendly products.">Experience</SectionTitle>
          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
