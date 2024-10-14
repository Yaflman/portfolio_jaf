import React, { useState } from 'react';
import Modal from './Modal'; 
import IMGecom from '../images/IMG-ecom.jpg';
import IMGvba from '../images/IMG-vba.png';
import IMGexpense from '../images/IMG-expense.png';
import IMGgeological from '../images/IMG-geo.png';

const projects = [
    {
      id: 1,
      title: 'Expense Management Application',
      image: IMGexpense,
      description: 'Design and development of an expense management application for the company\'s internal ERP system.',
      reportUrl: '/reports/report-ExpenseManagementApp.pdf',  
    },
    {
      id: 2,
      title: 'E-commerce Website',
      image: IMGecom,
      description: 'Creation and Deployment of an eCommerce Web Application: Implemented RESTful web services to enable efficient communication between frontend and backend. Rapid and automatic deployment of the application using Vercel PaaS platform.',
      reportUrl: null,  
    },
    {
      id: 3,
      title: 'Document Processing Interface',
      image: IMGvba,
      description: 'Creation of a user-friendly and automated interface for document processing using VBA.',
      reportUrl: '/reports/report-VbaApp.pdf', 
    },
    {
      id: 4,
      title: 'Geological Ages Research',
      image: IMGgeological, 
      description: 'Research and study on the different geological ages, exploring the Earth’s history through the Paleontological Research Institution’s Digital Atlas of Ancient Life.',
      reportUrl: 'https://geological-ages.vercel.app/', 
    },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen w-full bg-transparent text-white pt-20 pb-10">
      <div className="max-w-screen-lg mx-auto py-16 px-4">
        <h2 className="text-4xl sm:text-7xl font-bold text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, image, description, reportUrl }) => (
            <div
              key={id}
              className="bg-gray-900 p-4 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => openModal({ id, title, image, description, reportUrl })}
            >
              <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{description}</p>
            </div>
          ))}
        </div>
        {selectedProject && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            project={selectedProject}
          />
        )}
      </div>
    </div>
  );
}

export default Projects;
