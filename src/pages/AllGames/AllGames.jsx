import React, { useState } from 'react';
import useFetchGames from '../../hooks/useFetchGames';
import GameCard from '../../components/GameCard/GameCard';
import Loader from '../../components/Loader/Loader';

const AllGames = () => {
    const { allGames, loading } = useFetchGames();
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const term = search.trim().toLowerCase();

    const filteredGames = allGames.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(term);
        const matchesCategory = selectedCategory ? game.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    const handleByCategory = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(''); // Deselect if clicking the same category
        } else {
            setSelectedCategory(category);
        }
    };

    const clearFilters = () => {
        setSelectedCategory('');
        setSearch('');
    };

    return (
        <div className="min-h-screen bg-white">
            <title>All Games - GameHub</title>

            {loading && <Loader />}

            {/* Hero Section */}
            <div className="relative py-12 px-4 mb-8">
                {/* Grid Background */}
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

                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold space-mono">
                        Browse All{" "}
                        <span className="bg-orange-400 px-4 py-2 border-4 border-black inline-block transform -rotate-2">
                            Games
                        </span>
                    </h1>

                    <div className="flex items-center gap-2 justify-center">
                        <p className="text-orange-400 text-2xl"> | </p>
                        <p className="text-gray-600 space-mono">
                            Discover your next favorite retro game
                        </p>
                    </div>

                
                    <div className="max-w-2xl mx-auto mt-8">
                        <div className="relative">
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="search"
                                placeholder="SEARCH GAMES..."
                                className="w-full px-6 py-4 text-sm font-semibold rounded-xl
                                       border-4 border-black bg-white text-black
                                       placeholder:text-gray-400 placeholder:text-sm placeholder:font-bold
                                       focus:outline-none focus:ring-2 focus:ring-orange-400 space-mono"
                            />
                            <svg 
                                className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 opacity-50" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24"
                            >
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
                        </div>
                    </div>

                    
                    {(selectedCategory || search) && (
                        <div className="flex items-center justify-center gap-3 flex-wrap">
                            {selectedCategory && (
                                <span className="px-4 py-2 bg-orange-400 border-2 border-black text-sm font-bold space-mono flex items-center gap-2">
                                    {selectedCategory}
                                    <button 
                                        onClick={() => setSelectedCategory('')}
                                        className="hover:scale-110 transition-transform"
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                            {(selectedCategory || search) && (
                                <button
                                    onClick={clearFilters}
                                    className="px-4 py-2 bg-white border-2 border-black text-sm font-bold space-mono hover:bg-gray-100 transition-colors"
                                >
                                    Clear All
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>

         
            <div className="max-w-7xl mx-auto px-4 pb-12">
                <div className="flex flex-col md:flex-row gap-6">
                    
                  
                    <aside className="w-full md:w-64 md:sticky md:top-24 h-fit">
                        <div className="border-4 border-black bg-white">
                           
                            <div className="p-4 bg-orange-400 border-b-4 border-black">
                                <h2 className="font-bold text-lg space-mono uppercase text-center">
                                    Categories
                                </h2>
                            </div>

                           
                            <div className="p-3 space-y-2 max-h-[500px] overflow-y-auto">
                                {/* All Games Button */}
                                <button
                                    onClick={clearFilters}
                                    className={`w-full p-3 border-2 border-black font-semibold space-mono text-left
                                        transition-all hover:translate-x-0.5 hover:translate-y-0.5
                                        hover:shadow-[3px_3px_0px_black]
                                        ${!selectedCategory ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}
                                >
                                    🎮 All Games
                                </button>

                              
                                {[...new Set(allGames.map(game => game.category))].sort().map((category, id) => (
                                    <button
                                        onClick={() => handleByCategory(category)}
                                        key={id}
                                        className={`w-full p-3 border-2 border-black font-semibold space-mono text-left
                                            transition-all hover:translate-x-0.5 hover:translate-y-0.5 
                                            hover:shadow-[3px_3px_0px_black]
                                            ${selectedCategory === category 
                                                ? 'bg-orange-400 text-black' 
                                                : 'bg-white hover:bg-gray-100'}`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                        
                            <div className="p-3 border-t-4 border-black bg-[#00D9FF] text-center">
                                <p className="text-sm font-bold space-mono">
                                    {filteredGames.length} {filteredGames.length === 1 ? 'Game' : 'Games'}
                                </p>
                            </div>
                        </div>
                    </aside>

                    <main className="flex-1">
                        {filteredGames.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredGames.map(game => (
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
                            <div className="border-4 border-black p-12 text-center bg-white">
                                <div className="text-6xl mb-4">🎮</div>
                                <h3 className="text-2xl font-bold space-mono mb-2">No Games Found</h3>
                                <p className="text-gray-600 mb-6">
                                    Try adjusting your search or filters
                                </p>
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-3 bg-orange-400 text-white font-bold border-2 border-black 
                                             hover:translate-x-0.5 hover:translate-y-0.5
                                             hover:shadow-[3px_3px_0px_black] transition-all space-mono"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AllGames;