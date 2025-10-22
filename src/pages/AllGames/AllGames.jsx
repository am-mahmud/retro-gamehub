import React, { useState } from 'react';
import useFetchGames from '../../hooks/useFetchGames';
import GameCard from '../../components/GameCard/GameCard';

const AllGames = () => {

    const { allGames } = useFetchGames();

    const [search, setSearch] = useState('')

    const term = search.trim().toLowerCase()

    const searchedGames = term ? allGames.filter(app => app.title.toLowerCase().includes(term)) : allGames;

    return (
        <div className='text-center mt-2'>
            <h1 className='text-xl space-mono font-bold'>Hello Human Being! These Are All Games</h1>
            <p className='text-xl space-mono'>Select Your Game</p>

            <label className="input space-mono md:w-96">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
            </label>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 border-4 border-black p-2 mt-4 mb-6 justify-center'>
                {
                    searchedGames.map(game => (
                        <GameCard key={game.id}
                            id={game.id}
                            title={game.title}
                            image={game.coverPhoto}
                            rating={game.ratings}
                            category={game.category}
                            developer={game.developer}>

                        </GameCard>
                    ))
                }
            </div>
        </div>
    );
};

export default AllGames;