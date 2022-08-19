import { useEffect } from "react"
import { usenavigate } from "react-router-dom"


const useProtectedPage = () => {
    const navigate = usenavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            navigate("/login")
        }
    }, [navigate])
}


export default useProtectedPage