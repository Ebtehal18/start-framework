
import { Link, NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

export default function Navbar() {
let [navHight,setNavHight]=useState(90)

useEffect(()=>{
window.addEventListener("scroll",function(){
  if(window.scrollY>90){
    setNavHight(75)
  }else{
    setNavHight(90)
  }
})
},[])

return (<nav className="bg-main fixed top-0 start-0 end-0 z-30 transition-all duration-300" style={{height:`${navHight}px`}}>
  <div className="container flex flex-wrap items-center justify-between mx-auto py-4 px-3 bg-main">
    <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
    <span className="self-center md:text-[32px] text-[24px] font-bold whitespace-nowrap dark:text-white uppercase text-white">start framework</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto bg-main" id="navbar-default">
      <ul className="flex flex-col font-medium mt-0   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li className='py-6 md:py-0 px-3 md:px-0'>
                <NavLink to="about" className="hover:text-white block py-2 px-3  w-fit text-white font-bold uppercase" aria-current="page">About</NavLink>
               </li>
              <li className='pb-6 md:pb-0 px-3 md:px-0'>
                 <NavLink to="porfolio" className="block py-2 px-3 w-fit hover:text-white text-white font-bold uppercase  " aria-current="page">Portfolio</NavLink>
               </li>
               <li className='pb-6 md:pb-0 px-3 md:px-0'>
                 <NavLink to="contact" className="block py-2 px-3 w-fit hover:text-white text-white font-bold uppercase" aria-current="page">Contact</NavLink>
              </li>
      </ul>
    </div>
  </div>
</nav>

    ); 
}

