import React from 'react'
import homeImg from '../../assets/images/avataaars.svg'

export default function Home() {
  return <>
  <div className='homePage flex justify-center items-center w-100 flex-col bg-sec min-h-[calc(100vh-20px)]'>
  <img src={homeImg} alt="homeimg" className='w-[250px] '/>
  <h1 className='text-white mb-4 uppercase text-[40px]'>start Framework</h1>

 <div className='star relative inline-flex justify-center items-center'>
 <i className='fa-solid fa-star   text-white '></i>
 </div>
  <p className='mt-4 text-white'>Graphic Artist - Web Designer - Illustrator</p>
  </div>
  </>
}
