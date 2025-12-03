import React from "react";
import { Link } from "react-router";


const Banner = () => {
    return (
        <section
            className="relative min-h-[50vh] md:min-h-[70vh] px-8 md:px-14 mt-10 mb-10 text-center"
        >

            <div className="absolute inset-0 -z-1">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #00D9FF 1px, transparent 1px),
                            linear-gradient(to bottom, #00D9FF 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}
                ></div>


                <div className="absolute inset-0 bg-linear-to-b from-white via-white/50 to-white/90"></div>
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
                        <Link to='/allgames'>

                            <button className="bg-black text-white px-6 py-3 border-4 border-black hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[4px_4px_0px_black] transition">
                                Start Playing →
                            </button>

                        </Link>


                        <Link to='/developer'>

                            <button className="bg-white px-6 py-3 border-4 border-black hover:bg-[#ff8904] transition">
                                Start Building →
                            </button>

                        </Link>
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