import React from 'react'
import './Workpages.css'
const UIUX = () => {
  return (
    <div className='pl-5 text-white xl:ml-60 md:ml-[15vw] md:mr-8 justify-center sm:mt-20 pb-10'>
       <div className='heading2 md:pl-5 lg:pl-0 lg:text-[55px] md:text-[45px] text-[45px] font-[600] mb-20'>UI/UX</div> 
       <div className='pl-5 md:grid xl:grid-cols-3 md:grid-cols-2 xl:space-x-3'>
          <a href='https://shurikan-2-0-website.vercel.app/' target='new'>
            <div className='card lg:w-[318px] lg:h-[208px] bg-[#323636]'></div>
            <div className='my-4 text-[15px]'>Shuriken Wars - Gaming Event</div>
          </a>
          <a href='https://cad-2.vercel.app/' target='new'>
            <div className='card lg:w-[318px] lg:h-[208px] bg-[#323636]'></div>
            <div className='my-4 text-[15px]'>CAD - Hackathon</div>
          </a>
       </div>
    </div>
  )
}

export default UIUX