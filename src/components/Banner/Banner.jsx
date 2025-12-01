import React, { useState, useEffect }  from 'react';
import gameOne from '../../assets/retro-game-banner-1.png'
import gameTwo from '../../assets/retro-game-banner-2.png'
import gameThree from '../../assets/retro-game-banner-3.png'

const Banner = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <div>

            <div className="carousel w-full mt-2 border-4 border-black h-80">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src={gameOne}
                        className=" w-full" 
                        alt=""
                    />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src={gameTwo}
                        className="w-full"
                        alt=""
                    />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src={gameThree}
                        className="w-full"
                        alt=""
                    />
                </div>
            </div>

            <div className="flex w-full justify-center gap-2 py-2 ">
                <a href="#item1" className="p-3 bg-white border-4 border-black rounded hover:bg-[#FFC107] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none"></a>
                <a href="#item2" className="p-3 bg-white border-4 border-black rounded hover:bg-[#FFC107] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none"></a>
                <a href="#item3" className="p-3 bg-white border-4 border-black rounded hover:bg-[#FFC107] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none"></a>
                {/* <a href="#item4" className="p-3 bg-white border-4 border-black rounded hover:bg-[#FFC107] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none"></a> */}
            </div>

        </div>
    );
};

export default Banner;