import React from 'react'

export default function About() {
  return  <div className=' flex justify-center items-center w-100 flex-col bg-sec min-h-[calc(100vh-80px)]'>
   
  <div className="container pt-[16px]">


  <div className="heading text-center">
     <h2 className='text-white mb-4 uppercase md:text-[40px] text-[27px] font-bold '>about component</h2>

 <div className='star relative inline-flex justify-center items-center'>
 <i className='fa-solid fa-star   text-white '></i>
 </div>
  </div>

  
  <div className="flex flex-wrap md:flex-row gap-3 md:gap-0 mx-auto px-5 md:px-0">

<div className="content md:w-1/2  px-3">
<p className='text-white max-w-[95%]'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
</div>
<div className="content md:w-1/2 px-3">
<p className='text-white max-w-[95%]'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
</div>

  </div>
  </div>
  </div>
}
