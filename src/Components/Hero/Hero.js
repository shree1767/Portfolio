import React from "react"
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero text-white text-center sm:py-20 pb-10'>
        <h1 className='text-[#5CA4B2] pt-[20vh] md:pl-10 lg:text-[80px] md:text-[65px] text-[45px] font-[700]'>Designer</h1>
        <p className='text-white md:pl-10 lg:text-[80px] md:text-[65px] text-[45px] font-[700]'> & Developer</p>
        <p className='pb-[30vh] pt-9 font-regular md:text-[20px] md:pl-10'>I design and code beautifully simple things, and I love what I do.</p>
    </div>
  )
}

export default Hero