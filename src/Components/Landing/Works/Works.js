import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Works.css';

const Works = () => {
  return (
    <div className="works-container pt-2" id="works">
      <div className="text-white xl:ml-60 md:ml-[15vw] md:mr-8 justify-center md:mt-20 mt-[10vh] md:pb-[20vh]" >
        <div className="lg:pt-5 pt-10 pl-10 lg:text-[25px] text-[20px]">MY WORK</div>
        <div className="heading pl-10 lg:text-[70px] md:text-[55px] text-[45px] font-[600]">PORTFOLIO.</div>
        <div className="pt-20 md:block hidden md:grid-cols-3 grid grid-cols-1 xl:ml-[3vw] lg:ml-[4vw] md:ml-[6vw] xl:space-x-[50px] md:space-x-10  md:space-y-0 space-y-10 justify-center xl:text-[35px] text-[20px] font-[400] justify-center">
          <>
            <Link to="/Webdev" className="mx-auto">
              <button className="box mx-auto bg-[#262A2B] lg:w-[20vw] xl:h-[45vh] lg:h-[40vh] w-[150px] h-[220px] items-center justify-center">WEB DEV</button>
            </Link>
            <Link to="/UIUX" className="mx-auto">
              <button className="box mx-auto bg-[#262A2B] lg:w-[20vw] xl:h-[45vh] lg:h-[40vh] w-[150px] h-[220px] items-center justify-center">UI/UX</button>
            </Link>
            <Link to="/Games" className="mx-auto">
              <button className="box mx-auto bg-[#262A2B] lg:w-[20vw] xl:h-[45vh] lg:h-[40vh] w-[150px] h-[220px] items-center justify-center">GAMES</button>
            </Link>
          </>
        </div>
      </div>
      {/* Carousel positioned behind the other components */}
      <div className='md:hidden block py-20 text-white '>
        <Carousel
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          autoPlay
          interval={2000}
          showArrows={false}
          showIndicators={false}
          stopOnHover={false}
        >
          <Link to="/Webdev" className="mx-auto">
            <button className="box mx-auto bg-[#262A2B] lg:w-[20vw] lg:h-[45vh] w-[150px] h-[220px] items-center justify-center">WEB DEV</button>
          </Link>
          <Link to="/UIUX" className="mx-auto">
            <button className="box mx-auto bg-[#262A2B] lg:w-[20vw] lg:h-[45vh] w-[150px] h-[220px] items-center justify-center">UI/UX</button>
          </Link>
          <Link to="/Games" className="mx-auto">
            <button className="box mx-auto bg-[#262A2B] lg:w-[20vw] lg:h-[45vh] w-[150px] h-[220px] items-center justify-center">GAMES</button>
          </Link>
        </Carousel>
        </div>
    </div>
  );
};

export default Works;
