import React from "react";

type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2022 - Present",
    description:
      "Developed and maintained user interfaces using React and TypeScript. Collaborated with designers and backend developers to deliver seamless user experiences.",
  },
  {
    role: "Web Developer",
    company: "Creative Agency",
    duration: "Jun 2020 - Dec 2021",
    description:
      "Built responsive websites and web applications. Optimized performance and accessibility across multiple projects.",
  },
  {
    role: "Intern Developer",
    company: "Startup Hub",
    duration: "Jan 2020 - May 2020",
    description:
      "Assisted in developing MVP features and fixing bugs. Learned agile development practices and contributed to team meetings.",
  },
];

const Work: React.FC = () => (
  <section id="work" className="min-h-screen py-10 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="overflow-x-auto snap-x snap-mandatory flex gap-8 px-4">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="snap-center flex-shrink-0 w-full md:w-3/4 lg:w-1/2 bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <span className="text-sm text-gray-400">{exp.duration}</span>
            </div>
            <p className="text-lg font-bold mb-2">{exp.company}</p>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Work;