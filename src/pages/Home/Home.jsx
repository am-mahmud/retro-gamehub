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

                <Marquee className='bg-[#FFC107] p-4 mt-6 mb-6'>
                    <div className=' text-black text-xl font-bold space-mono'>
                        <p>Relive the nostalgia, discover timeless classics, and celebrate the magic of retro gaming at Retro Game Hub!</p>
                    </div>
                </Marquee>


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


           
            <div>
                <Newsletter></Newsletter>
            </div>



        </div>
    );
};

export default Home;