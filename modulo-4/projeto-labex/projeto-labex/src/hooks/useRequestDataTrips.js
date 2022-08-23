import { useEffect, useState } from 'react';
import axios from 'axios';


const useRequestDataTrips = (url) => {
    const [isLoading, setIsLoading] = useState(undefined)
    const [data, setData] = useState(undefined)
    const [error, setError] = useState("")
    const id = ''

    useEffect(() => {
        const token = localStorage.getItem("token")
        setIsLoading(true);
        axios.get((url), {
            headers: {
                auth: token
            }
        }).then((response) => {
            setIsLoading(false)
            setData(response.data)
        }).catch((error) => {
            setIsLoading(false)
            setError(error)
        })

    }, [])

    return [data, isLoading, error]
}

export default useRequestDataTrips;