import React from "react";

type Experience = {
  role: string;
  logo?: string;
  company: string;
  duration: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    logo: "/",
    company: "Western Cyber Society",
    duration: "Oct 2024 - March 2025",
    description: [
      "Collaborated in a team of 5 to develop an AI powered video encryption application in Python SecureFrame.",
      "Implementing the YOLO object detection model for object recognition and leveraging OpenCV for video processing.",
      "Utilizing Pytorch for AI model integration and React for front-end development.",
      "Securing video data using the AES encryption algorithm",
      "Received First place for Cybersecurity at the Toronto Tech Exposition 2025",
    ],
  },
  {
    role: "Business Owner",
    logo: "/mississauga.png",
    company: "Clarkson Car Detailing",
    duration: "June 2022 - 2024",
    description: [
      "Assisted and sponsored by the city of Mississauga Business Entrepreneur Centre, from which I received a $3000 grant.",
      "Drafted a detailed business plan and presenting to the city for approval",
      "Attending weekly business meeting with the city of Mississauga as part of the program",
      "Gave 10% of profits to the Credit Valley Conservation Area",
    ],
  },
  {
    role: "Mentor for Foundations of Engineering Practice",
    logo: "/western.png",
    company: "Western Engineering",
    duration: "Sept 2023 - April 2024",
    description: [
      "Selected by Professor to provide mentorship in CAD design software such as SolidWorks and OnShape",
      "Assisted students with designing and refining projects, offering technical guidance and constructive feedback.",
      "Supported the successful completion of student projects through hands on demonstrations",
    ],
  },
];

const Work: React.FC = () => (
  <section id="work" className="min-h-screen py-10 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="h-10 w-10 object-contain"
                />
                
              </div>
              <span className="text-sm text-gray-400">{exp.duration}</span>
            </div>
            <p className="text-lg font-bold mb-2">{exp.company}</p>
            <ul className="list-disc list-inside text-gray-300">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Work;