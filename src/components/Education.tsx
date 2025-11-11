import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Software Engineering',
    institution: ' Higher Institute of Computer Science',
    institutionUrl: 'http://www.isi.rnu.tn',
    period: ' Sept 2024 - Present',
    score: 'in progress',
  },
  {
    degree: 'Licence in Computer Science and Multimedia',
    institution: 'Higher Institute of Multimedia Arts in Manouba',
    institutionUrl: 'https://isa2m.rnu.tn',
    period: 'Sept 2021 - June 2024',
    score: '17,13/20',
  },
  {
    degree: ' Baccalaureate in Mathematics',
    institution: "Ariana Pioneer Secondary School",
    institutionUrl: 'https://www.lpa.tn',
    period: 'Sept 2017 - June 2021',
    score: '14,85/20',
  },
];

export function Education() {
  return (
    <SectionBackground>
      <section id="education">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Where I learned theory and then forgot half of it while learning to actually code 😅">Education</SectionTitle>
          <div className="max-w-5xl mx-auto space-y-10">
            {education.map((edu, index) => (
              <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
