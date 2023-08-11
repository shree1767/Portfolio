import './App.css';
import React, { useState, useEffect } from "react";
import {Routes,Route} from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar';
import Webdev from './Components/Workpages/Webdev';
import UIUX from './Components/Workpages/UIUX';
import Games from './Components/Workpages/Games';
import MobileNavbar from './Components/MobileNavbar/MobileNavbar';
import Landing from './Components/Landing/Landing';

function App() {
  //Preloader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data from an API
    setTimeout(() => {
      setIsLoading(false);
    }, 2900);
  }, []);

  return (
    <div className="App">
      {isLoading && (
        <div className='flex h-screen'>
        <img
          className='m-auto md:w-[350px] md:h-[350px] w-[200px] h-[200px]'
          src="/images/loader.gif"
          alt="Loading..."
        />
        </div>
      )}
      {!isLoading && 
      <>
       <Sidebar/>
       <MobileNavbar/>
      <Routes>
        <Route 
          path='/' 
          element={
         <Landing/>
        }
        />
        <Route 
          path='/Webdev' 
          element={
            <Webdev/>
        }
        />
        <Route 
          path='/UIUX' 
          element={
          <>
            <UIUX/>
          </>
        }
        />
        <Route 
          path='/Games' 
          element={
          <>
            <Games/>
          </>
        }
        />
      </Routes>
      </>
      }
     
    </div>
  );
}

export default App;
