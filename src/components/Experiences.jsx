import React from 'react';

const experiences = [
  {
    year: 'Feb - June 2024',
    title: 'Software Engineer Internship',
    company: '(4D Logiciel)',
    description: 'Design and development of an expense management application for the company\'s internal ERP system.',
    technologies: ['4D', 'React', 'Axios', 'REST API', '4D SERVER', 'JavaScript', 'TailWindCSS'],
  },
  {
    year: 'July - August 2023',
    title: 'Machine Learning - Software Engineer Internship',
    company: '(INPT Laboratory)',
    description: 'Creating a real-time sign language recognition model involves learning and implementing technologies such as TensorFlow, Python, Keras, MediaPipe, OpenCV, and Flask for development and deployment.',
    technologies: ['TensorFlow', 'Python', 'Keras', 'MediaPipe', 'OpenCV', 'Flask'],
  },
  {
    year: 'July - August 2022',
    title: 'Software Engineer Internship',
    company: '(ONEE)',
    description: 'Creation of a user-friendly and automated interface for document processing. - Use of VBA to automate the management, conversion, and processing of documents.',
    technologies: ['VBA', 'Excel', 'Microsoft Office', 'Automation','UML'],
  },
];

const Experience = () => {
  return (
    <div className="section">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center py-16 px-4">
        <h2 className="text-4xl sm:text-7xl font-bold text-white mb-12">
          Here's a timeline of my professional journey:
        </h2>
        <div className="w-full flex flex-col items-center">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item flex w-full mb-10">
              <div className="ml-8 flex-grow">
                <h3 className="timeline-year text-xl font-bold text-cyan-500">{exp.year}</h3>
                <h4 className="timeline-title text-lg font-semibold">{exp.title}</h4>
                <p className="timeline-company text-md italic">{exp.company}</p>
                <p className="timeline-description text-md text-gray-500">{exp.description}</p>
                <p className="timeline-technologies text-md text-gray-300 mt-2">
                  <strong>Technologies:</strong> {exp.technologies.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
