import React from 'react'
import './Works.css'

const Works = () => {
  return (
    <div className='text-white xl:ml-60 md:ml-[15vw] md:mr-8 justify-center sm:mt-20 pb-10' >
        <div className='lg:pt-5 pt-10 pl-10 lg:text-[25px] text-[20px]'>MY WORK</div>
        <div className='heading pl-10 lg:text-[70px] md:text-[55px] text-[45px] font-[600]' id='works'>PORTFOLIO.</div> 
        <div className='pt-20 md:grid-cols-3 grid grid-cols-1 xl:space-x-5 md:space-y-0 space-y-10 justify-center xl:text-[35px] text-[25px] font-[400]'>
            <button className='box mx-auto bg-[#262A2B] xl:w-[20vw] xl:h-[48vh] w-[200px] h-[300px] items-center justify-center'>WEB DEV</button>
            <button className='box mx-auto bg-[#262A2B] xl:w-[20vw] xl:h-[48vh] w-[200px] h-[300px] items-center justify-center'>UI/UX</button>
            <button className='box mx-auto bg-[#262A2B] xl:w-[20vw] xl:h-[48vh] w-[200px] h-[300px] items-center justify-center'>EDITS</button>
        </div>
    </div>
  )
}

export default Works