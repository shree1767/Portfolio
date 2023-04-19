import './App.css';
import React, { useState, useEffect,useRef } from "react";

import Info from './Components/Info/Info';
import Sidebar from './Components/Sidebar/Sidebar';
import Works from './Components/Works/Works';
import Hero from './Components/Hero/Hero';
function App() {
  //Preloader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data from an API
    setTimeout(() => {
      setIsLoading(false);
    }, 2900);
  }, []);
  
  //Sidebar on scroll
  const [showNavbar, setShowNavbar] = useState(false);
  const secondComponentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const secondComponentPosition = secondComponentRef.current ? secondComponentRef.current.offsetTop : 1;
      if (scrollPosition > secondComponentPosition) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
  };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {isLoading && (
        <div className='items-center justify-center my-[20vh]'>
        <img
          className='mx-auto md:w-[350px] md:h-[350px] w-[200px] h-[200px]'
          src="/images/loader.gif"
          alt="Loading..."
        />
        </div>
      )}
      {!isLoading && 
      <>
      {showNavbar && <Sidebar className='anim'/>}
      <Hero />
      <Info ref={secondComponentRef}/>
      <Works/>
      </>
      }
     
    </div>
  );
}

export default App;
