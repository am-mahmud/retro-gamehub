// import React from 'react';

// const GameCategory = () => {
//     return (
//         <section className="container mx-auto px-4">
//             <div className="text-center mb-10">
//                 <span className="bg-orange-400 p-4 border-4 border-black inline-block transform -rotate-2 text-2xl md:text-4xl font-bold leading-tight space-mono mb-2">
//                     JUST FOR GAMERS
//                 </span>
//                 <h2 className="font-bold text-2xl md:text-4xl space-mono mb-4">
//                     GAMES CATEGORY
//                 </h2>
//                 <p className="text-gray-600 max-w-2xl mx-auto">
//                     All the category you need
//                 </p>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px border border-gray-300">
//                 {[
//                     "Platformer",
//                     "Arcade",
//                     "Puzzle",
//                     "Adventure",
//                     "Shooter",
//                     "Racing",
//                     "Strategy",
//                     "Retro RPG",
//                     "Sports",
//                     "Classic 8-Bit",
//                 ].map((category, index) => (
//                     <div
//                         key={index}
//                         className="flex items-center justify-center h-32 border border-[#00D9FF]"
//                     >
//                         <span className="font-bold text-xl space-mono">{category}</span>
//                     </div>
//                 ))}
//             </div>


//         </section>
//     );
// };

// export default GameCategory;

import React from 'react';

const GameCategory = () => {
    return (
        <section className="container mx-auto px-4">
            <div className="text-center mb-10">
                <span className="bg-orange-400 p-4 border-4 border-black dark:border-cyan-400 inline-block transform -rotate-2 text-2xl md:text-4xl font-bold leading-tight space-mono mb-2">
                    JUST FOR GAMERS
                </span>
                <h2 className="font-bold text-2xl md:text-4xl space-mono mb-4 dark:text-white">
                    GAMES CATEGORY
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    All the category you need
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px border border-gray-300 dark:border-gray-700">
                {[
                    "Platformer",
                    "Arcade",
                    "Puzzle",
                    "Adventure",
                    "Shooter",
                    "Racing",
                    "Strategy",
                    "Retro RPG",
                    "Sports",
                    "Classic 8-Bit",
                ].map((category, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center h-32 border border-[#00D9FF] bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                        <span className="font-bold text-xl space-mono dark:text-white">{category}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GameCategory;