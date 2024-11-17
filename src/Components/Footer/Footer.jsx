import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <footer>
    <div className='footer-top bg-main p-10'>
      <div className="container"> 
        <div className="flex flex-wrap md:flex-row flex-col">
          
      <div className="loaction text-center p-4 mb-2 md:w-1/3">
        <h2 className='uppercase text-white font-medium text-[28px]'>Location</h2>
        <p className='text-white mb-4'>2215 John Daniel Drive</p>
        <p className='text-white'>Clark, MO 65243</p>
   
      </div>
 
      <div className="loaction text-center p-4 mb-2 md:w-1/3">
        <h2 className='uppercase text-white font-medium text-[28px] mb-2'>AROUND THE WEB</h2>
       <ul className='flex gap-3 justify-center'>
       <li className='w-[16px] h-[16px] p-[15px] border-white border rounded-full flex justify-center items-center'>
  <Link to='#'>
    <i className='fa-brands fa-facebook text-white'></i>
  </Link>
</li>
       <li className='w-[16px] h-[16px] p-[15px] border-white border rounded-full flex justify-center items-center'>
  <Link to='#'>
    <i className='fa-brands fa-twitter text-white'></i>
  </Link>
</li>
       <li className='w-[16px] h-[16px] p-[15px] border-white border rounded-full flex justify-center items-center'>
  <Link to='#'>
    <i className='fa-brands fa-linkedin-in text-white'></i>
  </Link>
</li>
       <li className='w-[16px] h-[16px] p-[15px] border-white border rounded-full flex justify-center items-center'>
  <Link to='#'>
    <i className='fa-solid fa-globe text-white'></i>
  </Link>
</li>

       
       </ul>
        </div>
        <div className="loaction text-center p-4 mb-2 md:w-1/3">
        <h2 className='uppercase text-white font-medium text-[28px]'>ABOUT FREELANCER</h2>
        <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
      </div>
 
  
 
      </div>
      
    </div>

    
    <div className="footer-bottom bg-footer text-center">
<p className='text-white p-6'>Copyright © Your Website 2021</p>
    </div>
  </footer>
}
