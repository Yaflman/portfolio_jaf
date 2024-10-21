import React from "react";
import inpt_logo from "../images/inpt-logo.png";
import Logo_4D_new from "../images/Logo-4D-new.jpg";
import ONEE from "../images/ONEE.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "./SectionWrapper"; // Ensure you import the correct SectionWrapper

const experiences = [
  {
    year: 'Feb - June 2024',
    title: 'Software Engineer Internship',
    company: '(4D Logiciel)',
    description:
      "Design and development of an expense management application for the company's internal ERP system.",
    technologies: [
      '4D',
      'React',
      'Axios',
      'REST API',
      '4D SERVER',
      'JavaScript',
      'TailWindCSS',
    ],
    placerholderimage: Logo_4D_new,
  },
  {
    year: 'July - August 2023',
    title: 'Machine Learning - Software Engineer Internship',
    company: '(INPT Laboratory)',
    description:
      'Creating a real-time sign language recognition model using TensorFlow, Python, Keras, MediaPipe, OpenCV, and Flask for development and deployment.',
    technologies: [
      'TensorFlow',
      'Python',
      'Keras',
      'MediaPipe',
      'OpenCV',
      'Flask',
    ],
    placerholderimage: inpt_logo,
  },
  {
    year: 'July - August 2022',
    title: 'Software Engineer Internship',
    company: '(ONEE)',
    description:
      'Creation of a user-friendly and automated interface for document processing using VBA and Excel for automation.',
    technologies: ['VBA', 'Excel', 'Microsoft Office', 'Automation', 'UML'],
    placerholderimage: ONEE,
  },
];

// ExperienceCard component displays individual experiences
const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{ background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)", color: "#000" }} // Soft blue gradient background
        contentArrowStyle={{ borderRight: "7px solid #c3cfe2" }} // Matching arrow with gradient
        iconStyle={{ background: "#00adb5", color: "#fff" }} // Teal background for icon
        icon={
          <div className="flex justify-center items-center w-full h-full">
            {/* Placeholder for the company logo */}
            <img
              src={experience.placerholderimage}
              alt={experience.company}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h4 className="text-[#00adb5] text-[24px] font-bold">{experience.year}</h4> {/* Teal text for year */}
          <h3 className="text-black text-[24px] font-bold">
            {experience.title}
          </h3>
          <p className="text-gray-700 text-[16px] font-semibold" style={{ margin: 0 }}>
            {experience.company}
          </p>
        </div>
        <p className="mt-3 text-gray-600">{experience.description}</p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.technologies.map((tech, index) => (
            <li
              key={`experience-tech-${index}`}
              className="text-[#00adb5] text-[14px] pl-1 tracking-wider" // Accent color for technologies
            >
              {tech}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };
  
  

// Main Experience component to display the list of experiences
const Experience = () => {
  return (
    <>
      <div className="text-center">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience.
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Export Experience with the appropriate SectionWrapper and date
export default SectionWrapper(Experience, "work", "Feb - June 2024");
