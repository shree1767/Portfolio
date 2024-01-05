import './Sidebar.css'
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
      const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          window.scrollTo({
            top: sectionElement.offsetTop,
            behavior: 'smooth',
          });
        }
      };
  
      const handleLinkClick = (sectionId) => {
        return (event) => {
          event.preventDefault();
          if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
              scrollToSection(sectionId);
            }, 300);
          } else {
            scrollToSection(sectionId);
          }
        };
      };
  
      document.getElementById('info-link').addEventListener('click', handleLinkClick('info'));
      document.getElementById('works-link').addEventListener('click', handleLinkClick('works'));
      document.getElementById('contact-link').addEventListener('click', handleLinkClick('contact'));
  
      return () => {
        // Cleanup: remove event listeners when component unmounts
        document.getElementById('info-link').removeEventListener('click', handleLinkClick('info'));
        document.getElementById('works-link').removeEventListener('click', handleLinkClick('works'));
        document.getElementById('contact-link').removeEventListener('click', handleLinkClick('contact'));
      };
    }, [location.pathname, navigate]);
  return (
    <>
<aside id="default-sidebar" class="md:block hidden fixed top-0 left-0 z-40  h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-5 bg-[#181B1C]">
      <ul class="space-y-[13vh] pt-10 font-[600] text-[17px]">
         <li>
            <a id="info-link" href="#info" class="-rotate-90 mt-7 flex items-center p-2 text-white" >
               <span class="">INFO</span>
            </a>
         </li>
      
         <li>
            <a id="works-link" href="#works" class="-rotate-90 flex items-center p-2 text-white">
               <span class="flex-1 whitespace-nowrap">WORKS</span>
            </a>
         </li>
         <li>
            <a id="contact-link" href="#contact" class="-rotate-90 flex items-center p-2 text-white">
               <span class="flex-1 whitespace-nowrap">CONTACT</span>
            </a>
         </li>
         <hr className='w-10 mx-auto'/>
      </ul>
      <ul className='my-10 px-7 justify-center space-y-10'>
         <li className=''>
            <a href='https://github.com/shree1767' target='new'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M20 0C17.3736 0 14.7728 0.517315 12.3463 1.52241C9.91982 2.5275 7.71504 4.00069 5.85786 5.85786C2.10714 9.60859 0 14.6957 0 20C0 28.84 5.74 36.34 13.68 39C14.68 39.16 15 38.54 15 38V34.62C9.46 35.82 8.28 31.94 8.28 31.94C7.36 29.62 6.06 29 6.06 29C4.24 27.76 6.2 27.8 6.2 27.8C8.2 27.94 9.26 29.86 9.26 29.86C11 32.9 13.94 32 15.08 31.52C15.26 30.22 15.78 29.34 16.34 28.84C11.9 28.34 7.24 26.62 7.24 19C7.24 16.78 8 15 9.3 13.58C9.1 13.08 8.4 11 9.5 8.3C9.5 8.3 11.18 7.76 15 10.34C16.58 9.9 18.3 9.68 20 9.68C21.7 9.68 23.42 9.9 25 10.34C28.82 7.76 30.5 8.3 30.5 8.3C31.6 11 30.9 13.08 30.7 13.58C32 15 32.76 16.78 32.76 19C32.76 26.64 28.08 28.32 23.62 28.82C24.34 29.44 25 30.66 25 32.52V38C25 38.54 25.32 39.18 26.34 39C34.28 36.32 40 28.84 40 20C40 17.3736 39.4827 14.7728 38.4776 12.3463C37.4725 9.91982 35.9993 7.71504 34.1421 5.85786C32.285 4.00069 30.0802 2.5275 27.6537 1.52241C25.2272 0.517315 22.6264 0 20 0Z" fill="#5CA4B2"/>
            </svg>
            </a>
         </li>
         <li className=''>
            <a href='https://www.linkedin.com/in/shreenidhi1/' target='new'>
            <svg width="40" height="40" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M36.4167 5.75C37.4333 5.75 38.4084 6.15387 39.1272 6.87276C39.8461 7.59165 40.25 8.56667 40.25 9.58333V36.4167C40.25 37.4333 39.8461 38.4084 39.1272 39.1272C38.4084 39.8461 37.4333 40.25 36.4167 40.25H9.58333C8.56667 40.25 7.59165 39.8461 6.87276 39.1272C6.15387 38.4084 5.75 37.4333 5.75 36.4167V9.58333C5.75 8.56667 6.15387 7.59165 6.87276 6.87276C7.59165 6.15387 8.56667 5.75 9.58333 5.75H36.4167ZM35.4583 35.4583V25.3C35.4583 23.6428 34.8 22.0536 33.6282 20.8818C32.4564 19.71 30.8672 19.0517 29.21 19.0517C27.5808 19.0517 25.6833 20.0483 24.7633 21.5433V19.4158H19.4158V35.4583H24.7633V26.0092C24.7633 24.5333 25.9517 23.3258 27.4275 23.3258C28.1392 23.3258 28.8217 23.6085 29.3249 24.1118C29.8281 24.615 30.1108 25.2975 30.1108 26.0092V35.4583H35.4583ZM13.1867 16.4067C14.0407 16.4067 14.8597 16.0674 15.4636 15.4636C16.0674 14.8597 16.4067 14.0407 16.4067 13.1867C16.4067 11.4042 14.9692 9.9475 13.1867 9.9475C12.3276 9.9475 11.5037 10.2888 10.8962 10.8962C10.2888 11.5037 9.9475 12.3276 9.9475 13.1867C9.9475 14.9692 11.4042 16.4067 13.1867 16.4067ZM15.8508 35.4583V19.4158H10.5417V35.4583H15.8508Z" fill="#5CA4B2"/>
            </svg>
            </a>    
         </li>
      </ul>
     
   </div>
</aside>
    </>
  )
}

export default Sidebar