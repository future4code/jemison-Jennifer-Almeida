import { useEffect, useState } from 'react';
import axios from 'axios';


const useRequestDataTrips = (url) => {
    const [isLoading, setIsLoading] = useState(undefined)
    const [data, setData] = useState(undefined)
    const [error, setError] = useState("")
    

    useEffect(() => {
        
        setIsLoading(true);
        axios.get((url), {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((response) => {
            setIsLoading(false)
            setData(response.data)
        }).catch((error) => {
            setIsLoading(false)
            setError(error)
        })

    }, [url])

    return [data, isLoading, error]
}

export default useRequestDataTrips;