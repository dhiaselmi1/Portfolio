import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "A curious mind who enjoys turning complex challenges into simple solutions.",
      "Passionate about AI, blockchain, and full-stack development.",
      "A believer that both sports and tech teach discipline, resilience, and creativity",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Build full-stack applications with Angular, Spring Boot, and SQL.",
      "Experiment with new technologies and apply them to real projects",
      "Learn by doing—through hackathons, internships, and side projects.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Dive deeper into the world of Artificial Intelligence and its real-world impact.",
      "Contribute to projects that solve problems, not just write code.",
      "Become a versatile engineer who can adapt to any challenge.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
      "Stay adaptable—tech changes fast, so flexibility wins.",
      "Have fun building—because passion fuels the best work",
      "Tech + teamwork: great software is built when people collaborate.",
    ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <SectionBackground>
      <section id="about">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Just a curious builder who loves solving real-world problems with tech (and debugging until it finally works 🚀).">About Me</SectionTitle>

          {/* Introduction */}
          <div className="max-w-5xl mx-auto mb-10 text-center">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! 👋 I'm <span className="text-blue-600 font-semibold">Mohamed Dhia Selmi</span>,
              a Software Engineering student at the Higher Institute of Computer Science (ISI Ariana),
              driven by a passion for building meaningful, data-driven, and scalable digital solutions.

              I love designing systems that go beyond code — products that blend logic, creativity, and real impact.
              From optimizing exam scheduling with algorithmic precision to creating intelligent assistants and automation platforms,
              I’m always seeking challenges where technology meets purpose.

              My journey has been defined by curiosity and perseverance — from average beginnings to graduating top of my class,
              winning hackathons, and turning complex problems into elegant solutions.
              Outside of tech, I stay active through sports and enjoy exploring how emerging technologies
              like AI and automation are reshaping industries.
            </p>
            <div className="mt-6 flex justify-center">
    <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
🚀 I turn ideas into projects and projects into impact.
    </span>
            </div>
          </div>

          {/* About Section Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {aboutSections.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="relative group">
                {/* Background Effect */}
                <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

                {/* Card Content */}
                <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4 space-x-4">
                    {/* Icon */}
                    <div className={`p-3 ${color} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                  </div>
                  <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                    {description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
