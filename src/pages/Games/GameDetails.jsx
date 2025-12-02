import React from "react";
import { useParams, Link } from "react-router";
import useFetchGames from "../../hooks/useFetchGames";
import { FaStar, FaGamepad, FaDownload, FaArrowLeft, FaUser, FaTag } from "react-icons/fa";

const GameDetails = () => {
  const { id } = useParams();
  const { allGames } = useFetchGames();

  const game = allGames.find((g) => String(g.id) === id);

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎮</div>
          <p className="text-2xl font-bold space-mono">Loading game...</p>
        </div>
      </div>
    );
  }

  const { title, category, downloadLink, ratings, developer, description, coverPhoto } = game;

  return (
    <div className="bg-gray-50 min-h-screen mt-10">

      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-8 mb-12">

            <div className="relative">
              <div className="border-4 border-black overflow-hidden bg-white">
                <img
                  src={coverPhoto}
                  alt={title}
                  className="w-full h-[400px] object-cover"
                />


                <div className="absolute top-4 right-4 bg-[#FFC107] border-4 border-black px-4 py-2 flex items-center gap-2">
                  <FaStar className="text-black" />
                  <span className="font-bold text-xl">{ratings}</span>
                </div>


                <div className="absolute top-4 left-4 bg-[#FF6B35] border-4 border-black px-4 py-2">
                  <span className="font-bold text-white uppercase text-sm">{category}</span>
                </div>
              </div>

              <div className="h-3 bg-linear-to-r from-[#FF6B35] via-[#FFC107] to-[#00D9FF]"></div>
            </div>


            <div className="space-y-6">

              <div>
                <h1 className="text-4xl md:text-5xl font-bold space-mono mb-4">
                  {title}
                </h1>
                <div className="h-2 w-32 bg-[#FFC107]"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border-4 border-black p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FaUser className="text-[#FF6B35]" />
                    <span className="font-bold text-xs space-mono">DEVELOPER</span>
                  </div>
                  <p className="font-bold">{developer}</p>
                </div>

                <div className="bg-white border-4 border-black p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FaTag className="text-[#00D9FF]" />
                    <span className="font-bold text-xs space-mono">GENRE</span>
                  </div>
                  <p className="font-bold">{category}</p>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6">
                <h2 className="font-bold text-xl space-mono mb-3 flex items-center gap-2">
                  <FaGamepad className="text-[#FF6B35]" />
                  ABOUT THIS GAME
                </h2>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>


              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full bg-[#FFC107] text-black px-8 py-5 border-4 border-black font-bold text-xl space-mono hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_black] transition-all flex items-center justify-center gap-3">
                  <FaDownload />
                  PLAY / DOWNLOAD NOW
                </button>
              </a>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold space-mono mb-6 text-center">
              GAME FEATURES
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-4 border-black p-6 text-center hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_black] transition-all">
                <div className="text-4xl mb-3">🎮</div>
                <h3 className="font-bold space-mono mb-2">CLASSIC GAMEPLAY</h3>
                <p className="text-sm text-gray-600">
                  Experience authentic retro gaming mechanics
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 text-center hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_black] transition-all">
                <div className="text-4xl mb-3">👾</div>
                <h3 className="font-bold space-mono mb-2">PIXEL PERFECT</h3>
                <p className="text-sm text-gray-600">
                  Original graphics and sound design preserved
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 text-center hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_black] transition-all">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="font-bold space-mono mb-2">HIGH SCORES</h3>
                <p className="text-sm text-gray-600">
                  Compete for the best scores and achievements
                </p>
              </div>
            </div>
          </div>


          <div className="flex justify-center mx-auto px-4 py-6">
            <Link to="/allgames">
              <button className="flex items-center gap-2 bg-white border-4 border-black px-6 py-3 font-bold space-mono hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_black] transition-all">
                <FaArrowLeft /> BACK TO ALL GAMES
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;