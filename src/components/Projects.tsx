import { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
  SiElectron,
  SiPython,
  SiAngular,
  SiSpringboot,
  SiFastapi,
  SiPostgresql,
  SiLangchain,
  SiStreamlit,
  SiIonic,
  SiPostman,
  SiGooglegemini
} from "react-icons/si";

// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: '#00cfff' },
  node: { icon: SiNodedotjs, name: "Node.js", color: '#228b22' },
  firebase: { icon: SiFirebase, name: "Firebase", color: '#fbbf00' },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: '#06b6d4' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#1f6feb' },
  next: { icon: SiNextdotjs, name: "Next.js", color: '#000000' },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: '#10b981' },
  prisma: { icon: SiPrisma, name: "Prisma", color: '#186997' },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: '#6366f1' },
  framer: { icon: SiFramer, name: "Framer Motion", color: '#2563eb' },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: '#010101' },
  stripe: { icon: SiStripe, name: "Stripe", color: '#5b4df1' },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: '#ff3d00' },
  fastapi: { icon: SiFastapi, name: "FastAPI", color: "#009688" },
  electron: { icon: SiElectron, name: "Electron", color: '#47848F' },
  python: { icon: SiPython, name: "Python", color: '#3776AB' },
  angular: { icon: SiAngular, name: "Angular", color: '#DD0031' },
  springboot: { icon: SiSpringboot, name: "Spring Boot", color: '#6DB33F' },
  postgresql: { icon: SiPostgresql, name: "PostgreSQL", color: '#4169E1' },
  langfuse: { icon: SiLangchain, name: "Langfuse", color: '#000000' },
  streamlit: { icon: SiStreamlit, name: "Streamlit", color: '#FF4B4B' },
  ionic: { icon: SiIonic, name: "Ionic", color: '#3880FF' },

  // REST API et Google Gemini ajoutés
  restapi: { icon: SiPostman, name: "REST API", color: '#FF6C37' },
  gemini: { icon: SiGooglegemini, name: "Google Gemini", color: '#8E75B2' },
};

// Define project categories
type ProjectCategory = 'All' | 'Web Apps' | 'AI Based' | 'Desktop Apps' | 'Mobile Apps';

// Define projects data
const projects = [
  {
    title: 'Exam Monitoring System',
    description: 'A smart desktop application developed in collaboration with the Higher Institute of Computer Science to automate teacher assignments for exam invigilation. It ensures fair workload distribution, respects availability constraints, and generates detailed, exportable schedules through an intuitive and modernn interface.',
    video: 'https://res.cloudinary.com/dwnt1faqs/video/upload/isi_lkzg5b.mp4',
    link: '',
    github: 'https://github.com/dhiaselmi1/Exam-Monitoring-ISI',
    category: 'Desktop Apps' as ProjectCategory,
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.electron,
      techStacks.python,
    ],
  },
  {
    title: 'Date2Deal',
    description: 'An AI-driven sales prospecting platform developed during Talan  Summer  Camp to revolutionize sales prospecting through AI. It automatically identifies key decision-makers, analyzes company data, and generates personalized  messages to optimize engagement and conversion.It  automates lead research, and builds stronger client relationships.',
    video: 'https://trzzhogdlmdumpdkazyu.supabase.co/storage/v1/object/sign/videos/date2deal.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzg5MzlmYi0wNmZlLTQ2YzItOGZkZS1iMGI1YmIxODhjZDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF0ZTJkZWFsLm1wNCIsImlhdCI6MTc2Mjg5MDY3MiwiZXhwIjoxODU3NDk4NjcyfQ.FUdXEkr9mqXgaRYwcdKWcSJkuGbGuhboLHWKiON8ggw',
    link: '',
    github: 'https://github.com/dhiaselmi1/Date2Deal',
    category: 'AI Based' as ProjectCategory,
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.python,
      techStacks.fastapi,
    ],
  },
  {
    title: 'ISI Chatbot',
    description: 'A smart conversational assistant developed during a hackathon with ISI and Talan, winning first place. Powered by  LLMs, it connects to the institute’s database to answer questions, generate administrative documents, and automate tasks. With voice interaction and an animated avatar, it offers a human-like experience that improves administrative efficiency.',
    // image: '/assets/neocompiler.webp',
    // link: 'https://neocompiler.vercel.app',
    video: 'https://trzzhogdlmdumpdkazyu.supabase.co/storage/v1/object/sign/videos/hackathon_talan.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzg5MzlmYi0wNmZlLTQ2YzItOGZkZS1iMGI1YmIxODhjZDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvaGFja2F0aG9uX3RhbGFuLm1wNCIsImlhdCI6MTc2Mjg5MDk2OCwiZXhwIjoxODI1OTYyOTY4fQ.LEsfP0vPzojtLVMWpibHCBlk0SrrW25SuKBEQUwjorE',

    // github: 'https://github.com/decodewithdeepak/neo-compiler',
    category: 'AI Based' as ProjectCategory,
    techStack: [
      techStacks.python,
      techStacks.angular,
      techStacks.postgresql,
      techStacks.langfuse,

    ],
  },
  {
    title: '🌍 HikeExplorer ',
    description: 'A modern showcase platform that allows users to discover hiking agencies, explore upcoming events, and book experiences online. It offers an intuitive and responsive interface with dynamic content, detailed event pages, and secure payments via PayPal. Designed to enhance visibility for partner agencies, it provides travelers with a smooth, engaging experience for planning their next adventure.',
    video: 'https://res.cloudinary.com/dwnt1faqs/video/upload/site-vitrine_u0ackr.mkv',
    github: 'https://github.com/dhiaselmi1/trailfinder-app',
    videoThumbnail: '/assets/vitrine.png',
    category: 'Web Apps' as ProjectCategory,
    techStack: [
      techStacks.angular,
      techStacks.typescript,
      techStacks.springboot,
      techStacks.postgresql,

    ],
  },
  {
    title: '🧩 HikeManager',
    description: 'An advanced back-office system built to manage all platform operations efficiently. It allows administrators and agencies to oversee users, events, and reservations through a secure, role-based dashboard with real-time analytics. With its intuitive interface and comprehensive management tools, HikeManager ensures smooth coordination and transparent control across the hiking ecosystem.',
    video: 'https://www.dropbox.com/scl/fi/1yw4f9f4u955a9mkdwbws/backoffice.mp4?rlkey=c64ymue7qhz36nygoc8wt0yd2&st=1sc7l7gl&raw=1',
    github: 'https://vimeo.com/1135881415?share=copy&fl=sv&fe=ci',
    videoThumbnail: '/assets/backoffice.png',

    category: 'Web Apps' as ProjectCategory,
    techStack: [
      techStacks.angular,
      techStacks.typescript,
      techStacks.springboot,
      techStacks.postgresql,


    ],
  },
  {
    title: '📱 HikeGo',
    description: 'This  application is designed for agencies to facilitate on-site event management. It allows staff to authenticate securely, view event details, and verify participant tickets by scanning QR codes linked to the central reservation database. Lightweight and practical, the app enhances operational efficiency during events, ensuring accurate validation and seamless coordination between agencies and participants.',
    video: 'https://trzzhogdlmdumpdkazyu.supabase.co/storage/v1/object/sign/videos/mobile_app.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzg5MzlmYi0wNmZlLTQ2YzItOGZkZS1iMGI1YmIxODhjZDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvbW9iaWxlX2FwcC5tcDQiLCJpYXQiOjE3NjI4OTEwMTgsImV4cCI6MTg1NzQ5OTAxOH0.KlWAmBUEi5BHsEu46TEO8hm5qNpkpO0s3dx_iRxufcg',

    category: 'Mobile Apps' as ProjectCategory,
    techStack: [
      techStacks.ionic,
      techStacks.typescript,
      techStacks.springboot,
      techStacks.postgresql,
    ],
  },
  {
    title: 'ECOCLICKO',
    description: 'A purpose-built platform crafted for a forward-looking startup to streamline and transform their service offering. It empowers users to seamlessly discover, connect with, and engage in curated experiences with partner organizations. With a focus on both scalability and user-centric design, ECOCLICKO provides real-time exploration of options and a smooth end-to-end journey from discovery through confirmation.',
    github: 'https://github.com/dhiaselmi1/ECOCLICKO',
    video: 'https://res.cloudinary.com/dwnt1faqs/video/upload/ecoclicko_b0vhfo.mp4',

    category: 'Web Apps' as ProjectCategory,
    techStack: [
      techStacks.angular,
      techStacks.typescript,
      techStacks.springboot,
      techStacks.postgresql,
    ],
  },
  {
    title: 'Resume & Interview Coach',
    description: 'A powerful career-readiness platform built to help job seekers polish their resumes and master interviews. It provides intelligent analysis of CVs, generates tailored feedback, and simulates interview scenarios for targeted preparation. With support for personalized guidance, automated scoring, and strategic advice, the project empowers users to stand out and succeed in competitive hiring processes.',
    image: '/assets/resume.png',
    github: 'https://github.com/dhiaselmi1/Resume_interview_Coach',
    category: 'AI Based' as ProjectCategory,
    techStack: [
      techStacks.streamlit,
      techStacks.python,
      techStacks.gemini,
      techStacks.fastapi,
    ],
  },
  {
    title: 'Agile Team Standup Tracker',
    description: 'An AI-powered asynchronous stand-up system designed for software teams to conduct daily updates, detect blockers, and monitor sprint health in a streamlined manner. It features intelligent agents that automatically summarize team updates, identify and categorise impediments, and estimate sprint progress with predictive insights. The solution provides a rich dashboard for visual analytics and supports exportable logs and digests',
    image: '/assets/agile.png',
    github: 'https://github.com/dhiaselmi1/Agile_Team_Standup_Tracker',

    category: 'AI Based' as ProjectCategory,
    techStack: [
      techStacks.streamlit,
      techStacks.python,
      techStacks.gemini,
      techStacks.fastapi,
    ],
  },
];

const categories: ProjectCategory[] = ['All', 'Web Apps', 'AI Based', 'Desktop Apps', 'Mobile Apps'];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (<SectionBackground>
    <section id="projects">
      <div className="container mx-auto px-8">
        <SectionTitle subtitle="My code babies - they're not perfect, but they're mine and I love them">Projects</SectionTitle>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects in this category yet. Stay tuned! 🚀
            </p>
          </div>
        )}

      </div>
    </section>
  </SectionBackground>
  );
}
