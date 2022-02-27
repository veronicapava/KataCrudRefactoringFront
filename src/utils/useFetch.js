import { useEffect, useState } from "react"

const useFetch = (endpoint) => {
    console.log(`${process.env.REACT_APP_HOST_API}${endpoint}`)
    const [data, setData] = useState()


    useEffect(() => {
        fetch(`${process.env.REACT_APP_HOST_API}${endpoint}`)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => setData(data))
    }, [endpoint])

    console.log(`here ${data}`)
    return data

}

export default useFetch;