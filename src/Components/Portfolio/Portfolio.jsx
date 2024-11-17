import React, { useState } from 'react';


export default function Portfolio() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

 function handleOpenModal(img){
    setSelectedImg(img);
    setOpenModal(true);
  };

  function handleCloseModal () {
    setOpenModal(false);
  };

  const [imgs, setImgs] = useState([
    { img: './poert1.png' },
    { img: './port2.png' },
    { img: './port3.png' },
    { img: './poert1.png' },
    { img: './port2.png' },
    { img: './port3.png' },
  ]);

  return (
    <div className="portfolio">
  
      <div className="container">

      <div className="heading text-center pt-6">
    <h2 className="text-main mb-4 uppercase text-[40px] font-bold pt-20">Portfolio Component</h2>
      <div className="star relative inline-flex justify-center items-center">
        <i className="fa-solid fa-star text-main"></i>
      </div>
    </div>

        <div className="flex mt-10 flex-wrap">
          {imgs.map((img, index) => (
            <div key={index} className="md:w-1/3 px-6 py-6">
              <button
                onClick={() => handleOpenModal(img)}
                className="relative group transition-all"
              >
                <img
                  src={img.img}
                  alt={`Portfolio item ${index + 1}`}
                  className="w-full rounded-md block"
                />
                {/* layer */}
                <div className="layer absolute top-0 left-0 right-0 bottom-0 bg-[#1abc9ce6] opacity-0 flex justify-center items-center rounded-md group-hover:opacity-100 duration-700">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Overlay Component */}
        {openModal && (
          <div
            className="overlay bg-[#0D6EFD40] fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-40"
            onClick={handleCloseModal}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImg?.img}
                alt="Selected"
                className="w-[600px] rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
