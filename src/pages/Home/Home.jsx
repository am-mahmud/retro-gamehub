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

            <div className='flex items-center gap-2'>
                <p className='text-[#f35815] text-2xl'> | </p>
                <p className='space-mono'>Retro Game Hub brings the golden age of gaming back to life.</p>
            </div>


            <p> Step into a world of pixel art, 8-bit music, and timeless arcade classics—all reimagined for the modern player. Whether you grew up with cartridges and CRT screens or you’re discovering retro magic for the first time, our platform delivers an authentic experience packed with fun, challenge, and nostalgia.</p>

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


