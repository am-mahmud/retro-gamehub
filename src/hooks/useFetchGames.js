import axios from "axios";
import { useEffect, useState } from "react";

const useFetchGames = () => {
  const [allGames, setAllGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get("/games.json") 
      .then(res => setAllGames(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { allGames, loading, error };
};

export default useFetchGames;
