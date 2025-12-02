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


// import React from 'react';
// import gameOne from '../../assets/retro-game-banner-1.png'
// import gameTwo from '../../assets/retro-game-banner-2.png'
// import gameThree from '../../assets/retro-game-banner-3.png'
// import Marquee from 'react-fast-marquee';

// const Banner = () => {

//     return (
//         <div className='relative'>

//             <div className="carousel w-full mt-2 h-[60vh] max-h-[70vh]">

//                 <div id="item1" className="carousel-item w-full h-full">
//                     <img
//                         src={gameOne}
//                         className="w-full h-full object-cover"
//                         alt="Game Banner 1"
//                     />
//                 </div>

//                 <div id="item2" className="carousel-item w-full h-full">
//                     <img
//                         src={gameTwo}
//                         className="w-full h-full object-cover"
//                         alt="Game Banner 2"
//                     />
//                 </div>

//                 <div id="item3" className="carousel-item w-full h-full">
//                     <img
//                         src={gameThree}
//                         className="w-full h-full object-cover"
//                         alt="Game Banner 3"
//                     />
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Banner;


import React from "react";


const Banner = () => {
    return (
        <section
            className="relative min-h-[70vh] px-8 md:px-14 mb-10 mt-10 text-center  "
        >

            <div className="absolute inset-0 -z-1">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #e5e5e5 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}
                ></div>

              
                <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/50 to-white/90"></div>
            </div>

            <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center ">
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight space-mono ">
                        Relive The <br />
                        <span className="bg-orange-400 px-2 border-4 border-black inline-block transform -rotate-2">
                            Classics
                        </span>{" "}
                        Today
                    </h1>

                    <div className="flex items-center gap-2 justify-center">
                        <p className="text-[#ff8904] text-2xl"> | </p>
                        <p className="space-mono">
                            Retro Game Hub brings the golden age of gaming back to life
                        </p>
                    </div>

                  

                    <div className="flex gap-4 items-center justify-center">
                        <button className="bg-black text-white px-6 py-3 border-4 border-black hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[4px_4px_0px_black] transition">
                            Start Building →
                        </button>

                        <button className="bg-white px-6 py-3 border-4 border-black hover:bg-[#ff8904] transition">
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default Banner;



{/* <div className="relative w-full aspect-square border-4 border-black bg-white shadow-[8px_8px_0px_#ff8904] overflow-hidden">


                    <div className="carousel w-full h-full">

                        <div id="slide1" className="carousel-item w-full h-full">
                            <img src={gameOne} className="w-full h-full object-cover" />
                        </div>

                        <div id="slide2" className="carousel-item w-full h-full">
                            <img src={gameTwo} className="w-full h-full object-cover" />
                        </div>

                        <div id="slide3" className="carousel-item w-full h-full">
                            <img src={gameThree} className="w-full h-full object-cover" />
                        </div>

                    </div>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        <a href="#slide1" className="w-4 h-4 bg-white border-2 border-black" />
                        <a href="#slide2" className="w-4 h-4 bg-white border-2 border-black" />
                        <a href="#slide3" className="w-4 h-4 bg-white border-2 border-black" />
                    </div>



                </div> */}