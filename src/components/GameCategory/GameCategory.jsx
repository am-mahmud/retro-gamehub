import React from 'react';

const GameCategory = () => {
    return (
        <section className="container mx-auto px-4">
            <div className="text-center mb-8">
                <span className="bg-orange-400 p-4 border-4 border-black inline-block transform -rotate-2 text-4xl font-bold leading-tight space-mono mb-2">
                    JUST FOR GAMERS
                </span>
                <h2 className="font-bold text-3xl md:text-4xl space-mono mb-4">
                    GAMES CATEGORY
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    All the category you need
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px border border-gray-300">
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
                        className="flex items-center justify-center h-32 border border-[#00D9FF]"
                    >
                        <span className="font-bold text-xl space-mono">{category}</span>
                    </div>
                ))}
            </div>


            {/* {featuredGame.filter(game => game.ratings > 4.5).length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                    {featuredGame
                        .filter(game => game.ratings > 4.5)
                        .map((game) => (
                            <GameCard
                                key={game.id}
                                id={game.id}
                                title={game.title}
                                image={game.coverPhoto}
                                rating={game.ratings}
                                category={game.category}
                                developer={game.developer}
                                description={game.description}
                            />
                        ))}
                </div>
            ) : (
                <p className="text-center mt-5 text-gray-600">No featured games above 4.5 stars.</p>
            )} */}

        </section>
    );
};

export default GameCategory;