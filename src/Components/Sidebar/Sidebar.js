import './Sidebar.css'
import React from 'react'

const Sidebar = () => {
  return (
    <>
<aside id="default-sidebar" class="md:block hidden fixed top-0 left-0 z-40  h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-5 bg-[#181B1C]">
      <ul class="space-y-[13vh] pt-10 font-[600] text-[17px]">
         <li>
            <a href="#info" class="-rotate-90 mt-7 flex items-center p-2 text-white">
               <span class="">INFO</span>
            </a>
         </li>
      
         <li>
            <a href="#works" class="-rotate-90 flex items-center p-2 text-white">
               <span class="flex-1 whitespace-nowrap">WORKS</span>
            </a>
         </li>
         <li>
            <a href="#" class="-rotate-90 flex items-center p-2 text-white">
               <span class="flex-1 whitespace-nowrap">CONTACT</span>
            </a>
         </li>
         <hr className='w-10 mx-auto'/>
      </ul>
   </div>
</aside>
    </>
  )
}

export default Sidebar