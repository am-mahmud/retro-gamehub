import axios from "axios"
import { useEffect, useState } from "react"

const useApps = () =>{
    const [allGames, setAllGames] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(()=> {
        setLoading(true)
        axios('../games.json').then(data=>setAllGames(data.data))
        .catch(err=>setError(err))
        .finally(()=> setLoading(false))
    },[])

    return {allGames, loading, error}
}


export default useApps
