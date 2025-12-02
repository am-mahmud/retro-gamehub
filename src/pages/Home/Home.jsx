import React from 'react';
import Banner from '../../components/Banner/Banner';
import GameCard from '../../components/GameCard/GameCard';
import useFetchGames from '../../hooks/useFetchGames';
import Marquee from "react-fast-marquee";
import Newsletter from '../../components/NewsLetter/NewsLetter';



const Home = () => {

    const { allGames } = useFetchGames();

    const featuredGame = allGames.slice(0, 3);

    return (
        <div>
            <title>Home - Gamehub</title>

            <Banner></Banner>

            <section className="container mx-auto px-4 py-12">
                <div className="text-center mb-8">
                    <span className="bg-[#FFC107] p-4 border-4 border-black inline-block transform rotate-2 text-4xl font-bold leading-tight space-mono">
                        HANDPICKED FOR YOU
                    </span>
                    <h2 className="font-bold text-3xl md:text-4xl space-mono mb-4">
                        FEATURED GAMES
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our top-rated games with ratings above 4.5 stars
                    </p>
                </div>

                {featuredGame.filter(game => game.ratings > 4.5).length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
                <Newsletter></Newsletter>
            </div>



        </div>
    );
};

export default Home;


