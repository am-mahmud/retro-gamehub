// import React from 'react';
// import Newsletter from '../../components/NewsLetter/NewsLetter';



// const About = () => {
//     return (
//         <div>

//             <title>About - GameHub</title>

            
//                 <h1 className='text-3xl font-bold space-mono text-center mt-4'>GameHub – Where Retro Lives</h1>
//                 <div className='border-4 mt-4 border-black p-2 text-xl'>
//                     <p>Welcome to GameHub, your ultimate destination for retro and classic games! Whether you’re a nostalgic gamer looking to relive the golden age of arcade adventures or a newcomer eager to explore legendary titles, GameHub brings the magic of gaming history right to your fingertips.</p>
//                 </div>
//                 <div className='border-4 mt-4 border-black p-2 text-xl'>
//                     <p>At GameHub, we celebrate the games that defined generations—platformers, shooters, puzzle games, RPGs, and more. Every game in our library comes with detailed information, ratings, and download links to ensure you can jump straight into the action. From Super Mario Bros. to Pac-Man, from epic adventures like The Legend of Zelda to iconic battles in Street Fighter II, GameHub is your portal to timeless gaming experiences.</p>
//                 </div>
//                 <div className='border-4 mt-4 border-black p-2 text-xl'>
//                     <p>Our mission is simple: to make retro gaming accessible, fun, and engaging. With intuitive search features, categorized collections, and high-quality cover art, we ensure that every visit is easy to navigate and enjoyable. Whether you’re hunting for a classic favorite or discovering hidden gems, GameHub makes it effortless to explore the world of retro gaming.</p>
//                 </div>


//                   <div>
//                 <Newsletter></Newsletter>
//             </div>
//         </div>
//     );
// };

// export default About;


import React from 'react';
import Newsletter from '../../components/NewsLetter/NewsLetter';

const About = () => {
    return (
        <div className="bg-white">
            <title>About - GameHub</title>

          
            <section className="relative min-h-[50vh] px-8 md:px-14 mt-10 mb-16">
              
                <div className="absolute inset-0 -z-10">
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

                
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight space-mono">
                        Where Retro <br />
                        <span className="bg-orange-400 px-4 py-2 border-4 border-black inline-block transform -rotate-2">
                            Lives Forever
                        </span>
                    </h1>

                    <div className="flex items-center gap-2 justify-center">
                        <p className="text-orange-400 text-2xl"> | </p>
                        <p className="text-lg text-gray-700 space-mono">
                            Your ultimate destination for retro and classic games
                        </p>
                    </div>
                </div>
            </section>

          
            <section className="max-w-5xl mx-auto px-4 md:px-8 mb-16 space-y-12">
                
               
                <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                    <div className="flex items-start gap-4 mb-4">
                        <span className="text-4xl">🎮</span>
                        <div>
                            <h2 className="text-2xl font-bold space-mono mb-3">Our Mission</h2>
                            <p className="text-gray-700 leading-relaxed">
                                At GameHub, we celebrate the games that defined generations—platformers, shooters, puzzle games, RPGs, and more. Every game in our library comes with detailed information, ratings, and download links to ensure you can jump straight into the action.
                            </p>
                        </div>
                    </div>
                </div>

               
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-4 border-black p-6 bg-orange-400 hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_black] transition-all">
                        <span className="text-3xl mb-3 block">⭐</span>
                        <h3 className="text-xl font-bold space-mono mb-2">Curated Collection</h3>
                        <p className="text-gray-900">
                            From Super Mario Bros. to Pac-Man, from The Legend of Zelda to Street Fighter II—discover legendary titles.
                        </p>
                    </div>

                    <div className="border-4 border-black p-6 bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_black] transition-all">
                        <span className="text-3xl mb-3 block">🔍</span>
                        <h3 className="text-xl font-bold space-mono mb-2">Easy Navigation</h3>
                        <p className="text-gray-700">
                            Intuitive search features, categorized collections, and high-quality cover art make exploration effortless.
                        </p>
                    </div>

                    <div className="border-4 border-black p-6 bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_black] transition-all">
                        <span className="text-3xl mb-3 block">🏆</span>
                        <h3 className="text-xl font-bold space-mono mb-2">Quality Ratings</h3>
                        <p className="text-gray-700">
                            Every game features detailed information and community ratings to help you find your next favorite.
                        </p>
                    </div>

                    <div className="border-4 border-black p-6 bg-[#00D9FF] hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_black] transition-all">
                        <span className="text-3xl mb-3 block">💾</span>
                        <h3 className="text-xl font-bold space-mono mb-2">Instant Access</h3>
                        <p className="text-gray-900">
                            Download links ready to go—jump straight into the action and start playing in minutes.
                        </p>
                    </div>
                </div>

               
                <div className="border-4 border-black p-8 bg-white">
                    <h2 className="text-2xl font-bold space-mono mb-6 text-center">Who Is GameHub For?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-400 border-4 border-black rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                                👴
                            </div>
                            <h4 className="font-bold space-mono mb-2">Nostalgic Gamers</h4>
                            <p className="text-sm text-gray-600">Relive the golden age of arcade adventures</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#00D9FF] border-4 border-black rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                                🆕
                            </div>
                            <h4 className="font-bold space-mono mb-2">New Explorers</h4>
                            <p className="text-sm text-gray-600">Discover legendary titles for the first time</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-400 border-4 border-black rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                                🎯
                            </div>
                            <h4 className="font-bold space-mono mb-2">Collectors</h4>
                            <p className="text-sm text-gray-600">Hunt for classics and hidden gems</p>
                        </div>
                    </div>
                </div>

              
                <div className="border-4 border-black p-8 bg-black text-white text-center">
                    <h2 className="text-3xl font-bold space-mono mb-4">Ready to Play?</h2>
                    <p className="mb-6 text-gray-300">
                        Join thousands of gamers rediscovering the classics
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <button className="bg-orange-400 text-black px-8 py-3 border-4 border-white font-bold hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[4px_4px_0px_white] transition space-mono">
                            Browse Games
                        </button>
                        <button className="bg-white text-black px-8 py-3 border-4 border-white font-bold hover:bg-[#00D9FF] transition space-mono">
                            Create Account
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

export default About;