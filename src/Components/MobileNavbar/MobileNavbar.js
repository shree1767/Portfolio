import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import './MobileNavbar.css'
import { useNavigate } from "react-router-dom";
function MobileNavbar() {
  const navigate = useNavigate();

  const handleLinkClick = (sectionId) => {
    return (event) => {
      event.preventDefault();

      // Navigate to the home route first
      navigate('/');

      // Scroll to the section after a delay
      setTimeout(() => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          window.scrollTo({
            top: sectionElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }, 300);
    };
  };
  return (
    <nav className="md:hidden block fixed bottom-0 left-0 w-full bg-neutral-900 bg-opacity-30 backdrop-blur-lg">
      <ul className="flex justify-around items-center h-12 text-[13px] focus:text-[#5CA4B2]">
        <li>
          <a href="#info" onClick={handleLinkClick('info')} className="text-white uppercase font-medium tracking-wider px-3 py-2">
            Info
          </a>
        </li>
        <li>
          <a href="#works" onClick={handleLinkClick('works')} className="text-white uppercase font-medium tracking-wider px-3 py-2">
            Works
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick('contact')} className="text-white uppercase font-medium tracking-wider px-3 py-2">
            Contact
          </a>
        </li>
        <li>
          <a href="https://github.com/shree1767" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5CA4B2]">
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/shreenidhi1/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5CA4B2]">
            <FaTwitter size={24} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNavbar;
