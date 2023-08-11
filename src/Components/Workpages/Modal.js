import React from 'react'
import './Workpages.css'

const Modal = ({ title, description, link, onClose, isClosing }) => {
    const modalClasses = isClosing ? 'modal tvOffAnimation' : 'modal tvOnAnimation';
  
    return (
      <div className="modal-overlay">
        <div className={modalClasses}>
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2 className='font-semibold'>{title}</h2>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
        </div>
      </div>
    );
  };

export default Modal;