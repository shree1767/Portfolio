import React from 'react'
import './Workpages.css'
const Webdev = () => {

  return (
    <div className='pl-5 text-white xl:ml-60 md:ml-[15vw] md:mr-8 justify-center sm:mt-20 pb-10'>
       <div className='heading2 md:pl-5 lg:pl-0 lg:text-[55px] md:text-[45px] text-[45px] font-[600] mb-20'>WEB DEV</div> 
       <div className='pl-5 md:grid xl:grid-cols-3 md:grid-cols-2 xl:space-x-3'>
          <a href='https://web3-dfund.vercel.app/' target='new' className='mb-10'>
            <div className='card lg:w-[318px] md:w-[280px] md:h-[190px] lg:h-[208px] w-[250px] h-[150px] bg-[#323636]'></div>
            <div className='my-4 text-[15px]'>Peerfund</div>
          </a>
          <a href='https://cnwebsite22.vercel.app/' target='new'>
            <div className='card lg:w-[318px] md:w-[280px] md:h-[190px] lg:h-[208px] w-[250px] h-[150px] bg-[#323636]'></div>
            <div className='my-4 text-[15px]'>Coding Ninjas SRM</div>
          </a>
          <a href='https://shree1767.github.io/TextUtils/' target='new'>
            <div className='card lg:w-[318px] md:w-[280px] md:h-[190px] lg:h-[208px] w-[250px] h-[150px] bg-[#323636]'></div>
            <div className='my-4 text-[15px]'>TextUtils</div>
          </a>
       </div>
    </div>
  )
}

export default Webdev