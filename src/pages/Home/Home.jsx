import React from 'react';
import Banner from '../../components/Banner/Banner';
import GameCard from '../../components/GameCard/GameCard';
import useFetchGames from '../../hooks/useFetchGames';

const Home = () => {

    const { allGames } = useFetchGames();

    const featuredGame = allGames.slice(0, 6);

    return (
        <div>
            <Banner></Banner>

            {/* {featuredGame.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {featuredGame.map((game) => (
                        <GameCard
                            key={game.id}
                            id={game.id}
                            title={game.title}
                            image={game.coverPhoto}
                            rating={game.ratings}
                            category={game.category}
                            developer={game.developer}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center mt-5 text-gray-600">No featured games available.</p>
            )} */}


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
                            />
                        ))}
                </div>
            ) : (
                <p className="text-center mt-5 text-gray-600">No featured games above 4.5 stars.</p>
            )}



        </div>
    );
};

export default Home;