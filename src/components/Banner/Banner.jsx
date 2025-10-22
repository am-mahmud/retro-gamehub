import React from 'react';

const Banner = () => {
    return (
        <div>

            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="p-3 bg-white border-4 border-black hover:bg-[#FFC107] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none"></a>
                <a href="#item2" className="p-3 bg-white border-4 border-black hover:bg-[#FFC107] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none"></a>
                <a href="#item3" className="p-3 bg-white border-4 border-black hover:bg-[#FFC107] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none"></a>
                <a href="#item4" className="p-3 bg-white border-4 border-black hover:bg-[#FFC107] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none"></a>
            </div>

        </div>
    );
};

export default Banner;