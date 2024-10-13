import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={onClose}  // Close modal when clicking outside
    >
      <div
        className="bg-gray-900 text-white p-6 rounded-lg max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        {/* Download Report Button */}
        {project.reportUrl && (
          <a
            href={project.reportUrl}
            download
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-2"
          >
            Download Report
          </a>
        )}

        {/* Visit Website Button */}
        {project.title === 'Geological Ages Research' && (
          <a
            href="http://example.com" // Replace with the actual URL for the geological project
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
