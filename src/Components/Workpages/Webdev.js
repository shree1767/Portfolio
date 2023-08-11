import React, { useState } from 'react';
import './Workpages.css';
import Modal from './Modal'
import srmeats from './assets/srmeats.svg'
import peerfund from './assets/peerfund.svg'
import cn from './assets/codingninjas.svg'

const Webdev = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const projects = [
    {
      title: 'PeerFund',
      description: 'A decentralized crowdfunding platform made for the Layer Hackathon. It is created using MERN stack and Solidity',
      link: 'https://web3-dfund.vercel.app/',
      imgUrl: peerfund
    },
    {
      title: 'Coding Ninjas SRM',
      description: 'This is the main website for Coding Ninjas SRM. It is created using ReactJS & Tailwind',
      link: 'https://cnwebsite22.vercel.app/',
      imgUrl:cn
    },
    {
      title: 'SRM Eats',
      description: 'An online food ordering site for the students in campus. It is created using MERN stack.',
      link: 'https://srm-eats.vercel.app/',
      imgUrl:srmeats
    },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className="lg:pl-5 xl:ml-60 md:ml-[15vw] md:mr-8 justify-center sm:mt-20 pb-10 text-white">
      <div className="heading2 md:pl-5 lg:pl-5 lg:pl-0 lg:text-[55px] md:text-[45px] text-[45px] font-[600] mb-10 mt-10 md:text-left text-center">
        WEBSITES
      </div>
      <div className="md:pl-5  grid md:grid-cols-2 xl:grid-cols-3 md:gap-8 xl:gap-12 mx-auto  justify-center items-center">
        {projects.map((project, index) => (
          <div key={index}>
            <button
              className="card lg:w-[318px] md:w-[280px] md:h-[190px] lg:h-[208px] w-[250px] h-[150px] justify-center bg-transparent shadow"
              onClick={() => handleCardClick(project)}
            >
            <img src={project.imgUrl} className='mx-auto'/>
            </button>
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


export default Webdev;


