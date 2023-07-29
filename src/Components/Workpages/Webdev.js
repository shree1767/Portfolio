import React, { useState } from 'react';
import './Workpages.css';

const Webdev = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const projects = [
    {
      title: 'PeerFund',
      description: 'Description of PeerFund project...',
      link: 'https://web3-dfund.vercel.app/',
    },
    {
      title: 'Coding Ninjas SRM',
      description: 'Description of Coding Ninjas SRM project...',
      link: 'https://cnwebsite22.vercel.app/',
    },
    {
      title: 'SRM Eats',
      description: 'Description of SRM Eats project...',
      link: 'https://srm-eats.vercel.app/',
    },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className="lg:pl-5 xl:ml-60 md:ml-[15vw] md:mr-8 justify-center sm:mt-20 pb-10 text-white">
      <div className="heading2 lg:pl-5 lg:pl-0 lg:text-[55px] md:text-[45px] text-[45px] font-[600] mb-10 mt-10 md:text-left text-center">
        WEBSITES
      </div>
      <div className="md:pl-5 pl-[15vw] grid md:grid-cols-2 xl:grid-cols-3 md:gap-8 xl:gap-12 mx-auto  justify-center items-center">
        {projects.map((project, index) => (
          <div key={index}>
            <button
              className="card lg:w-[318px] md:w-[280px] md:h-[190px] lg:h-[208px] w-[250px] h-[150px] bg-[#323636]"
              onClick={() => handleCardClick(project)}
            ></button>
            <div className="my-4 text-[15px]">{project.title}</div>
          </div>
        ))}
      </div>
      {showModal && (
        <Modal
          title={selectedProject.title}
          description={selectedProject.description}
          link={selectedProject.link}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

const Modal = ({ title, description, link, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 >{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit Project
        </a>
      </div>
    </div>
  );
};


export default Webdev;


