// import React, { useState, useEffect }  from 'react';
// import gameOne from '../../assets/retro-game-banner-1.png'
// import gameTwo from '../../assets/retro-game-banner-2.png'
// import gameThree from '../../assets/retro-game-banner-3.png'

// const Banner = () => {

//     return (
//         <div>

//             <div className="carousel w-full mt-2 border-4 border-black h-80">
//                 <div id="item1" className="carousel-item w-full">
//                     <img
//                         src={gameOne}
//                         className=" w-full" 
//                         alt=""
//                     />
//                 </div>
//                 <div id="item2" className="carousel-item w-full">
//                     <img
//                         src={gameTwo}
//                         className="w-full"
//                         alt=""
//                     />
//                 </div>
//                 <div id="item3" className="carousel-item w-full">
//                     <img
//                         src={gameThree}
//                         className="w-full"
//                         alt=""
//                     />
//                 </div>
//             </div>

//             <div className="flex w-full justify-center gap-2 py-2 ">
//                 <a href="#item1" className="p-3 bg-white border-4 border-black rounded hover:bg-[#FFC107] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none"></a>
//                 <a href="#item2" className="p-3 bg-white border-4 border-black rounded hover:bg-[#FFC107] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none"></a>
//                 <a href="#item3" className="p-3 bg-white border-4 border-black rounded hover:bg-[#FFC107] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none"></a>
//                 {/* <a href="#item4" className="p-3 bg-white border-4 border-black rounded hover:bg-[#FFC107] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none"></a> */}
//             </div>

//         </div>
//     );
// };

// export default Banner;


import React from 'react';
import gameOne from '../../assets/retro-game-banner-1.png'
import gameTwo from '../../assets/retro-game-banner-2.png'
import gameThree from '../../assets/retro-game-banner-3.png'

const Banner = () => {

  return (
    <div>

      {/* Carousel Wrapper */}
      <div className="carousel w-full mt-2 border-4 border-black h-[60vh] max-h-[70vh]">

        {/* Slide 1 */}
        <div id="item1" className="carousel-item w-full h-full">
          <img
            src={gameOne}
            className="w-full h-full object-cover"
            alt="Game Banner 1"
          />
        </div>

        {/* Slide 2 */}
        <div id="item2" className="carousel-item w-full h-full">
          <img
            src={gameTwo}
            className="w-full h-full object-cover"
            alt="Game Banner 2"
          />
        </div>

        {/* Slide 3 */}
        <div id="item3" className="carousel-item w-full h-full">
          <img
            src={gameThree}
            className="w-full h-full object-cover"
            alt="Game Banner 3"
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex w-full justify-center gap-2 py-4">
        <a href="#item1" className="p-3 bg-white border-4 border-black rounded hover:bg-[#FFC107] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_black]" />
        <a href="#item2" className="p-3 bg-white border-4 border-black rounded hover:bg-[#FFC107] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_black]" />
        <a href="#item3" className="p-3 bg-white border-4 border-black rounded hover:bg-[#FFC107] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_black]" />
      </div>

    </div>
  );
};

export default Banner;
