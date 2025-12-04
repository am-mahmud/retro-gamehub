import React from 'react';
import Banner from '../../components/Banner/Banner';
import GameCard from '../../components/GameCard/GameCard';
import useFetchGames from '../../hooks/useFetchGames';
import Marquee from "react-fast-marquee";
import Newsletter from '../../components/NewsLetter/NewsLetter';
import FAQ from '../../components/FAQ/FAQ';
import GameCategory from '../../components/GameCategory/GameCategory';



const Home = () => {

    const { allGames } = useFetchGames();

    const featuredGame = allGames.slice(0, 4);

    return (
        <div>
            <title>Home - Gamehub</title>

            <Banner></Banner>

            {/* <div className="overflow-hidden my-8 mb-10">
                <Marquee
                    speed={40}
                    className="marquee-fade bg-[#ff8904] border-y-4 border-black p-4 -rotate-4 md:-rotate-3"
                >
                    <div className="text-black text-lg md:text-xl font-bold space-mono flex items-center gap-8">
                        <span>🎮 RELIVE THE NOSTALGIA</span>
                        <span className="text-2xl">|</span>
                        <span>⭐ DISCOVER TIMELESS CLASSICS</span>
                        <span className="text-2xl">|</span>
                        <span>🏆 CELEBRATE RETRO GAMING</span>
                        <span className="text-2xl">|</span>
                        <span>🎯 JOIN THE GAME HUB COMMUNITY</span>
                        <span className="text-2xl">|</span>
                    </div>
                </Marquee>
            </div> */}




            <section className="container mx-auto mb-10">
                <div className="text-center mb-8">
                    <span className="bg-orange-400 p-4 border-4 border-black inline-block transform rotate-2 text-2xl md:text-4xl font-bold leading-tight mb-2 space-mono">
                        HANDPICKED FOR YOU
                    </span>
                    <h2 className="font-bold text-2xl md:text-4xl space-mono mb-4">
                        FEATURED GAMES
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our top-rated games with ratings above 4.5 stars
                    </p>
                </div>

                {featuredGame.filter(game => game.ratings > 4.5).length > 0 ? (
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
                )}

            </section>

            <div>
                <GameCategory></GameCategory>
            </div>


            <div>
                <FAQ></FAQ>
            </div>

            <div>
                <Newsletter></Newsletter>
            </div>



        </div>
    );
};

export default Home;


