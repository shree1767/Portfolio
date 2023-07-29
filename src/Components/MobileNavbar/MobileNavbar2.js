import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Link} from "react-router-dom";
import './MobileNavbar.css'
function MobileNavbar2() {
 

  return (
    <nav className="md:hidden block fixed bottom-0 left-0 w-full bg-neutral-900 bg-opacity-30 backdrop-blur-lg">
      <ul className="flex justify-around items-center h-12 text-[13px] focus:text-[#5CA4B2]">
        <li>
          <Link to="/" className="text-white uppercase font-medium tracking-wider px-3 py-2">
            Info
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white uppercase font-medium tracking-wider px-3 py-2">
            Works
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white uppercase font-medium tracking-wider px-3 py-2">
            Contact
          </Link>
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

export default MobileNavbar2;