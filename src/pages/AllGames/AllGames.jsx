import React, { useState } from 'react';
import useFetchGames from '../../hooks/useFetchGames';
import GameCard from '../../components/GameCard/GameCard';
import Loader from '../../components/Loader/Loader';


const AllGames = () => {

    const { allGames, loading } = useFetchGames();

    const [search, setSearch] = useState('')

    const term = search.trim().toLowerCase()

    const [selectedCategory, setSelectedCategory] = useState('');


    const filteredGames = allGames.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(term);
        const matchesCategory = selectedCategory ? game.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });


    const handleByCategory = (category) => {
        console.log("Category Clicked");
        setSelectedCategory(category);

    }


    return (
        <div >

            <title>All Games - GameHub</title>

            {loading && <Loader></Loader>}
            <div className='text-center mt-2'>

                <h1 className='text-3xl space-mono font-bold'>Hello Human Being! These Are All Games</h1>
                <p className='text-xl space-mono mt-2'>Select Your Game</p>

                <label className="input space-mono md:w-96 mt-3">
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

            </div>


            <div className="flex flex-col-reverse md:flex-row justify-between gap-6 mt-6">


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 mb-10">
                    {filteredGames.map(game => (
                        <GameCard
                            key={game.id}
                            id={game.id}
                            title={game.title}
                            image={game.coverPhoto}
                            rating={game.ratings}
                            category={game.category}
                            developer={game.developer}
                            className="transition transform hover:scale-105 hover:shadow-xl"
                        />
                    ))}
                </div>


                <div className="flex flex-col w-full md:w-64">

                    <div className="p-3 bg-yellow-400 border-4 border-black font-bold text-center rounded-t-lg shadow-md">
                        <h1>Categories</h1>
                    </div>


                    <div className="flex flex-col space-y-3 p-2 border-4 border-black rounded-b-lg shadow-inner mt-1 bg-yellow-100">
                        {[...new Set(filteredGames.map(game => game.category))].map((category, id) => (
                            <div
                                onClick={() => handleByCategory(category)}
                                key={id}
                                className="p-2 border-2 border-black rounded cursor-pointer hover:bg-yellow-300 hover:scale-105 transition-all text-center font-semibold"
                            >
                                {category}
                            </div>
                        ))}
                    </div>
                </div>

            </div>




        </div>
    );
};

export default AllGames;


