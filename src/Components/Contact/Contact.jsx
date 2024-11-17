import React from 'react'

export default function Contact() {
  return <>
<div className='contact flex flex-col items-center '>
    
<div className="container pt-16 px-[12px]">
  
<div className="heading text-center pt-3">
<h2 className="text-main mb-4 uppercase md:text-[40px] text-[27px] font-bold pt-[24px] text-center">conatct section</h2>
      <div className="star relative inline-flex justify-center items-center text-center ">
        <i className="fa-solid fa-star text-main"></i>
      </div>
</div>


<form className="  md:w-[50%] pb-[16px] mx-auto mt-10">

  <div className="relative z-0 w-full mb-4  pb-6 group">
      <input type="text" name="floating_email" id="floating_email" className="block  w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sec peer py-[16px] px-[12px] rounded-md " placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute  text-gray-500 duration-300 transhtmlhtmlForm -translate-y-6 scale-100 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sec  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">userName</label>
  </div>

  <div className="relative z-0 w-full mb-4  pb-6 group">
      <input type="number" name="floating_password" id="floating_password" className="block  w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-sec peer py-[16px] px-[12px] rounded-md" placeholder=" " required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute  text-gray-500  duration-300 transhtmlhtmlForm -translate-y-6 scale-100 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sec peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">userAge</label>
  </div>

  <div className="relative z-0 w-full mb-4  pb-6 group">
      <input type="email" name="floating_password" id="floating_password" className="block w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:ring-0 focus:border-sec peer   py-[16px] px-[12px] rounded-md" placeholder=" " required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-[16px] text-gray-500  duration-300 transhtmlhtmlForm -translate-y-6 scale-100 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sec peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">userEmail</label>
  </div>

  <div className="relative z-0 w-full mb-4 pb-6  group">
      <input type="password" name="floating_password" id="floating_password" className="block w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-sec peer py-[16px] px-[12px] rounded-md" placeholder=" " required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-[16px] text-gray-500  duration-300 transhtmlhtmlForm -translate-y-6 scale-100 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sec peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">userPassword</label>
  </div>



  <button type="submit" className="text-white bg-sec mt-[24px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[16px]   sm:w-auto px-5 py-2.5 text-center  ">Send Message</button>
</form>
</div>
</div>

  </>
}
