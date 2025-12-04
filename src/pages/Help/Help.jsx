import React from 'react';
import Newsletter from '../../components/NewsLetter/NewsLetter';
import { FaQuestionCircle, FaSearch, FaBook, FaHeadset, FaEnvelope, FaDiscord, FaComments, FaLifeRing } from 'react-icons/fa';

const Help = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <title>Help Center - GameHub</title>

            <section className="min-h-[50vh] px-8 md:px-14 mt-10 mb-16">
            
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="flex justify-center mb-6">
                        <FaQuestionCircle className="text-6xl text-orange-400" />
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight space-mono">
                        How Can We <br />
                        <span className="bg-orange-400 px-4 py-2 border-4 border-black inline-block transform -rotate-2">
                            Help You?
                        </span>
                    </h1>

                    <div className="flex items-center gap-2 justify-center">
                        <p className="text-orange-400 text-2xl"> | </p>
                        <p className="text-lg text-gray-700 space-mono">
                            Find answers and get the support you need
                        </p>
                    </div>
                </div>
            </section>

           
            <section className="max-w-5xl mx-auto px-4 md:px-8 mb-16">
                <h2 className="text-3xl font-bold space-mono text-center mb-10">
                    Choose Your Support Channel
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="border-4 border-black p-6 bg-orange-400 hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_black] transition-all text-center">
                        <FaBook className="text-4xl mx-auto mb-3" />
                        <h3 className="text-xl font-bold space-mono mb-2">User Guide</h3>
                        <p className="text-gray-900 text-sm mb-4">
                            Complete documentation on how to use GameHub
                        </p>
                        <button className="bg-black text-white px-6 py-2 border-2 border-black font-bold hover:bg-gray-800 transition space-mono text-sm">
                            Read Guide →
                        </button>
                    </div>

                    <div className="border-4 border-black p-6 bg-[#00D9FF] hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_black] transition-all text-center">
                        <FaHeadset className="text-4xl mx-auto mb-3" />
                        <h3 className="text-xl font-bold space-mono mb-2">Live Support</h3>
                        <p className="text-gray-900 text-sm mb-4">
                            Chat with our support team in real-time
                        </p>
                        <button className="bg-black text-white px-6 py-2 border-2 border-black font-bold hover:bg-gray-800 transition space-mono text-sm">
                            Start Chat →
                        </button>
                    </div>

                    <div className="border-4 border-black p-6 bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_black] transition-all text-center">
                        <FaEnvelope className="text-4xl mx-auto mb-3 text-orange-400" />
                        <h3 className="text-xl font-bold space-mono mb-2">Email Us</h3>
                        <p className="text-gray-700 text-sm mb-4">
                            Send us your questions via email
                        </p>
                        <button className="bg-orange-400 text-black px-6 py-2 border-2 border-black font-bold hover:bg-orange-500 transition space-mono text-sm">
                            Contact →
                        </button>
                    </div>
                </div>
            </section>

          
            <section className="max-w-5xl mx-auto px-4 md:px-8 mb-16">
                <h2 className="text-3xl font-bold space-mono text-center mb-10">
                    Popular Help Topics
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-4 border-black p-6 bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_black] transition-all">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">🚀</span>
                            <div>
                                <h3 className="text-xl font-bold space-mono mb-2">Getting Started</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    Learn how to create an account, browse games, and start playing your favorite retro titles.
                                </p>
                                <button className="text-orange-400 font-bold text-sm hover:underline">
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-4 border-black p-6 bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_black] transition-all">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">👤</span>
                            <div>
                                <h3 className="text-xl font-bold space-mono mb-2">Account Management</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    Update your profile, change passwords, manage notifications, and account settings.
                                </p>
                                <button className="text-orange-400 font-bold text-sm hover:underline">
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-4 border-black p-6 bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_black] transition-all">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">🎮</span>
                            <div>
                                <h3 className="text-xl font-bold space-mono mb-2">Games & Downloads</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    Find information about downloading games, compatibility, and troubleshooting game issues.
                                </p>
                                <button className="text-orange-400 font-bold text-sm hover:underline">
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-4 border-black p-6 bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_black] transition-all">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">⚙️</span>
                            <div>
                                <h3 className="text-xl font-bold space-mono mb-2">Technical Support</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    Get help with technical issues, browser compatibility, and performance problems.
                                </p>
                                <button className="text-orange-400 font-bold text-sm hover:underline">
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          
            <section className="max-w-5xl mx-auto px-4 md:px-8 mb-16">
                <div className="border-4 border-black p-8 bg-[#00D9FF]">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold space-mono mb-3">Join Our Community</h2>
                        <p className="text-gray-900">
                            Connect with other retro gaming enthusiasts and get help from the community
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white border-4 border-black p-6 text-center">
                            <FaDiscord className="text-4xl mx-auto mb-3 text-[#5865F2]" />
                            <h4 className="font-bold space-mono mb-2">Discord Server</h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Join 10K+ gamers in our Discord community
                            </p>
                            <button className="text-sm font-bold text-[#5865F2] hover:underline">
                                Join Now →
                            </button>
                        </div>

                        <div className="bg-white border-4 border-black p-6 text-center">
                            <FaComments className="text-4xl mx-auto mb-3 text-orange-400" />
                            <h4 className="font-bold space-mono mb-2">Community Forum</h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Ask questions and share your experiences
                            </p>
                            <button className="text-sm font-bold text-orange-400 hover:underline">
                                Visit Forum →
                            </button>
                        </div>

                        <div className="bg-white border-4 border-black p-6 text-center">
                            <FaLifeRing className="text-4xl mx-auto mb-3 text-orange-400" />
                            <h4 className="font-bold space-mono mb-2">Help Center</h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Browse FAQs and detailed guides
                            </p>
                            <button className="text-sm font-bold text-orange-400 hover:underline">
                                View FAQs →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="max-w-5xl mx-auto px-4 md:px-8 mb-16">
                <div className="border-4 border-black p-8 bg-white dark:bg-gray-900 dark:border-cyan-400">
                    <h2 className="text-2xl font-bold space-mono mb-6 text-center">Send Us a Message</h2>
                    
                    <form className="max-w-2xl mx-auto space-y-4">
                        <div>
                            <label className="block font-bold mb-2 space-mono text-sm">Your Name</label>
                            <input
                                type="text"
                                className="w-full p-3 border-4 border-black dark:border-cyan-400 focus:outline-none focus:border-orange-400"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="block font-bold mb-2 space-mono text-sm">Email Address</label>
                            <input
                                type="email"
                                className="w-full p-3 border-4 border-black dark:border-cyan-400 focus:outline-none focus:border-orange-400"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label className="block font-bold mb-2 space-mono text-sm">Subject</label>
                            <input
                                type="text"
                                className="w-full p-3 border-4 border-black dark:border-cyan-400 focus:outline-none focus:border-orange-400"
                                placeholder="What do you need help with?"
                            />
                        </div>

                        <div>
                            <label className="block font-bold mb-2 space-mono text-sm">Message</label>
                            <textarea
                                rows="5"
                                className="w-full p-3 border-4 border-black dark:border-cyan-400 focus:outline-none focus:border-orange-400 resize-none"
                                placeholder="Describe your issue or question..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-400 text-black px-8 py-4 border-4 border-black font-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_black] transition-all space-mono"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-4 md:px-8 mb-16">
                <div className="border-4 border-black p-8 bg-black text-white text-center">
                    <h2 className="text-3xl font-bold space-mono mb-4">Need Immediate Assistance?</h2>
                    <p className="mb-6 text-gray-300">
                        Our support team is available 24/7 to help you with any issues
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <button className="bg-orange-400 text-black px-8 py-3 border-4 border-white font-bold hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[4px_4px_0px_white] transition space-mono">
                            Live Chat Support
                        </button>
                        <button className="bg-white text-black px-8 py-3 border-4 border-white font-bold hover:bg-[#00D9FF] transition space-mono">
                            Call Us: 1-800-RETRO
                        </button>
                    </div>
                </div>
            </section>

           
            <div>
                <Newsletter />
            </div>
        </div>
    );
};

export default Help;


