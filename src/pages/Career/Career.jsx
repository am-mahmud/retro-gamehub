import React from 'react';
import { RiUpload2Fill } from 'react-icons/ri';

const Career = () => {
    return (
        <div className="min-h-screen bg-white">
            <title>Developer - GameHub</title>
            <section className="min-h-[60vh] px-8 md:px-14 py-16">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight space-mono">
                        Are You <br />
                        <span className="bg-orange-400 px-4 py-2 border-4 border-black inline-block transform -rotate-2">
                            Unemployed
                        </span>
                        ?
                    </h1>

                    <div className="flex items-center gap-2 justify-center">
                        <p className="text-orange-400 text-2xl"> | </p>
                        <p className="text-lg text-gray-700 space-mono">
                            Share your resume with retro games
                        </p>
                    </div>

                    <div className="pt-4">
                        <button
                            className="px-8 py-4 text-xl font-bold border-4 border-black 
                                                 bg-orange-400 text-white space-mono uppercase
                                                 hover:translate-x-1 hover:translate-y-1
                                                 hover:shadow-[6px_6px_0px_black] transition-all
                                                 flex items-center gap-3 mx-auto"
                        >
                            <RiUpload2Fill className="text-2xl" />
                            Upload Your Resume
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Career;