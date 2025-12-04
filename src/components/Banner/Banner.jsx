

import React from "react";
import { Link } from "react-router";

const Banner = () => {
    return (
        <section
            className="relative min-h-[50vh] md:min-h-[70vh] px-8 md:px-14 mt-10 mb-10 text-center overflow-hidden bg-white dark:bg-gray-900"
        >
            <div 
                className="absolute inset-0 opacity-40 dark:opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #00D9FF 1px, transparent 1px),
                        linear-gradient(to bottom, #00D9FF 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/60 to-white dark:from-transparent dark:via-gray-900/60 dark:to-gray-900"></div>

         
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center min-h-[50vh] md:min-h-[70vh]">
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight space-mono drop-shadow-sm dark:text-white">
                        Relive The <br />
                        <span className="bg-orange-400 px-2 border-4 border-black dark:border-cyan-400 inline-block transform -rotate-2 shadow-lg">
                            Classics
                        </span>{" "}
                        Today
                    </h1>

                    <div className="flex items-center gap-2 justify-center">
                        <p className="text-[#ff8904] text-2xl font-bold"> | </p>
                        <p className="space-mono text-gray-800 dark:text-gray-300 font-medium">
                            Retro Game Hub brings the golden age of gaming back to life
                        </p>
                    </div>

                    <div className="flex gap-4 items-center justify-center flex-wrap">
                        <Link to='/allgames'>
                            <button className="bg-black text-white px-6 py-3 font-bold border-4 border-black dark:border-cyan-400 dark:bg-gray-800 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_#00D9FF] transition-all space-mono">
                                Start Playing →
                            </button>
                        </Link>

                        <Link to='/developer'>
                            <button className="bg-white px-6 py-3 font-bold border-4 border-black dark:bg-gray-800 dark:border-cyan-400 dark:text-white hover:bg-[#ff8904] dark:hover:bg-[#ff8904] transition-all space-mono">
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