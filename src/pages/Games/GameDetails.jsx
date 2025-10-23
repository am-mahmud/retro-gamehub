import React from "react";
import { useParams } from "react-router";
import useFetchGames from "../../hooks/useFetchGames";

const GameDetails = () => {
  const { id } = useParams();
  const { allGames } = useFetchGames();

  // Find the selected game by ID
  const game = allGames.find((g) => String(g.id) === id);

  if (!game) return null; // Avoid error before data loads

  const { title, category, downloadLink, ratings, developer, description, coverPhoto } = game;

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-gray-900 text-white p-6 rounded-2xl shadow-lg">
      <img
        src={coverPhoto}
        alt={title}
        className="w-full h-64 object-cover rounded-xl mb-5"
      />

      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      <p className="text-gray-300 mb-2"><strong>Category:</strong> {category}</p>
      <p className="text-gray-300 mb-2"><strong>Developer:</strong> {developer}</p>
      <p className="text-gray-300 mb-2"><strong>Ratings:</strong> ⭐ {ratings}</p>
      <p className="text-gray-300 mb-4"><strong>Description:</strong> {description}</p>

      <a
        href={downloadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-500 text-black px-5 py-2 rounded-xl font-semibold hover:bg-yellow-400 transition"
      >
        Play / Download
      </a>
    </div>
  );
};

export default GameDetails;
