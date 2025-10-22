import React from 'react';

const GameCard = () => {
    return (
        <div>
            <div className=" max-w-sm w-full bg-[#e0dcfa] rounded-lg overflow-hidden shadow-2xl border-4 border-black transform transition-all duration-300
          hover:scale-[1.02] shadow-[0_0_20px_rgba(255,80,0,0.5),_0_10px_15px_-3px_rgba(0,0,0,0.5)">
                    <div className="relative h-48 bg-white">
                        <img
                            src={""}
                            alt={""}
                            className="w-full h-full object-cover p-1" 
                        />

                        <div className=" absolute top-3 right-3 bg-[#FFC107] text-gray-900 font-extrabold text-sm px-3 py-1 rounded-md border-2 border-black
              shadow-[2px_2px_0px_rgba(0,0,0,0.5)] ">
                            ⭐ {5.00}
                        </div>
                    </div>

                    <div className="p-6">
                        
                        <div className="mb-4 border-b-2 border-[#aac5da] pb-3">
                            <h1 className="text-3xl font-black text-black uppercase tracking-widest leading-tight">
                                {`super Mario`}
                            </h1>
                            <p className="text-sm text-black mt-1 font-semibold">
                                {'retro'} | Dev: {`Captain D`}
                            </p>
                        </div>

                        <a href={"game.downloadLink"} className="w-full inline-block text-center font-extrabold text-lg bg-[#6652e4] text-white py-3 px-6 rounded-lg uppercase transition-all duration-100 ease-in-out
              hover:bg-[#644eef] hover:shadow-[0_3px_0_0_#644eef] active:translate-y-[2px] active:shadow-none active:bg-[#e0dcfa]"
                            onClick={(e) => {
                                e.preventDefault();
                                console.log(`Download action triggered for `); // ${super mario}
                            }}
                        >
                            START GAME
                        </a>



                    </div>
                </div>
            </div>
      
    );
};

export default GameCard;