import React from 'react';
import { RiUpload2Fill } from "react-icons/ri";
import { FaCode, FaGamepad, FaRocket } from "react-icons/fa";
import { Link } from 'react-router';

const Developer = () => {
    return (
        <div className="min-h-screen bg-white">
            <title>Developer - GameHub</title>
            <section className="min-h-[60vh] px-8 md:px-14 py-16">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight space-mono">
                        Are You A <br />
                        <span className="bg-orange-400 px-4 py-2 border-4 border-black inline-block transform -rotate-2">
                            Developer
                        </span>
                        ?
                    </h1>

                    <div className="flex items-center gap-2 justify-center">
                        <p className="text-orange-400 text-2xl"> | </p>
                        <p className="text-lg text-gray-700 space-mono">
                            Share your retro games with the world
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
                            Upload Your Game
                        </button>
                    </div>
                </div>
            </section>

            
            <section className="max-w-6xl mx-auto px-4 py-16 space-y-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold space-mono mb-4">
                        Why Upload to GameHub?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join our community of retro game developers and reach thousands of players
                    </p>
                </div>

               
                <div className="grid md:grid-cols-3 gap-6">
                  
                    <div className="border-4 border-black p-6 bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_black] transition-all">
                        <div className="w-16 h-16 bg-orange-400 border-4 border-black flex items-center justify-center mb-4 text-3xl">
                            <FaGamepad />
                        </div>
                        <h3 className="text-xl font-bold space-mono mb-3">Wide Audience</h3>
                        <p className="text-gray-700">
                            Reach thousands of retro gaming enthusiasts actively looking for new games to play
                        </p>
                    </div>

                  
                    <div className="border-4 border-black p-6 bg-[#00D9FF] hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_black] transition-all">
                        <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center mb-4 text-3xl">
                            <FaCode />
                        </div>
                        <h3 className="text-xl font-bold space-mono mb-3">Easy Upload</h3>
                        <p className="text-gray-900">
                            Simple and straightforward upload process. Get your game live in minutes
                        </p>
                    </div>

                   
                    <div className="border-4 border-black p-6 bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_black] transition-all">
                        <div className="w-16 h-16 bg-orange-400 border-4 border-black flex items-center justify-center mb-4 text-3xl">
                            <FaRocket />
                        </div>
                        <h3 className="text-xl font-bold space-mono mb-3">Get Feedback</h3>
                        <p className="text-gray-700">
                            Receive ratings and reviews from players to improve your games
                        </p>
                    </div>
                </div>
            </section>

         
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="border-4 border-black bg-white p-8 md:p-12">
                    <h2 className="text-3xl font-bold space-mono mb-6 text-center">
                        Submission Guidelines
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold space-mono flex items-center gap-2">
                                <span className="text-2xl">✓</span> Required
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400 font-bold">•</span>
                                    <span>Original retro-style game or classic remake</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400 font-bold">•</span>
                                    <span>High-quality cover art (minimum 800x600px)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400 font-bold">•</span>
                                    <span>Detailed game description</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400 font-bold">•</span>
                                    <span>Working download link or game file</span>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold space-mono flex items-center gap-2">
                                <span className="text-2xl">★</span> Recommended
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00D9FF] font-bold">•</span>
                                    <span>Screenshots or gameplay video</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00D9FF] font-bold">•</span>
                                    <span>Clear installation instructions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00D9FF] font-bold">•</span>
                                    <span>System requirements listed</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00D9FF] font-bold">•</span>
                                    <span>Credits and acknowledgments</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

          
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="border-4 border-black bg-black text-white p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold space-mono mb-4">
                        Ready to Share Your Game?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join our community of developers and let players experience your creation
                    </p>
                    
                    <div className="flex gap-4 justify-center flex-wrap">
                        <button
                            className="px-8 py-4 text-lg font-bold border-4 border-white 
                                     bg-orange-400 text-black space-mono uppercase
                                     hover:translate-x-[-3px] hover:translate-y-[-3px] 
                                     hover:shadow-[4px_4px_0px_white] transition-all
                                     flex items-center gap-3"
                        >
                            <RiUpload2Fill className="text-xl" />
                            Upload Now
                        </button>
                        
                        <Link to="/help">
                            <button
                                className="px-8 py-4 text-lg font-bold border-4 border-white 
                                         bg-white text-black space-mono uppercase
                                         hover:bg-[#00D9FF] transition-colors"
                            >
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border-4 border-black p-8 bg-orange-400 text-center">
                        <p className="text-5xl font-bold space-mono mb-2">1000+</p>
                        <p className="text-lg font-semibold space-mono">Active Players</p>
                    </div>
                    
                    <div className="border-4 border-black p-8 bg-[#00D9FF] text-center">
                        <p className="text-5xl font-bold space-mono mb-2">500+</p>
                        <p className="text-lg font-semibold space-mono">Games Hosted</p>
                    </div>
                    
                    <div className="border-4 border-black p-8 bg-white text-center">
                        <p className="text-5xl font-bold space-mono mb-2">50+</p>
                        <p className="text-lg font-semibold space-mono">Developers</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Developer;