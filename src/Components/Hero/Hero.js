import React from "react"
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero text-white pl-[15vw] sm:py-3 pb-10'>
        <h1 className='text-neutral-300 md:pt-[32vh] pt-[40vh] md:pl-10 lg:text-[80px] md:text-[65px] text-[45px] font-[700]'>Shreenidhi S</h1>
        <div className="flex space-x-5 pb-[50vh] pt-5">
        <p className='text-white md:ml-10 px-5 py-2 rounded-2xl lg:text-[20px] md:text-[20px] text-[15px] font-[300] bg-neutral-900'>UI Designer</p>
        <p className='text-white px-5 py-2 rounded-2xl lg:text-[20px] md:text-[20px] text-[15px] font-[300] bg-neutral-900'>Web Developer</p>
        </div>
    </div>
  )
}

export default Hero