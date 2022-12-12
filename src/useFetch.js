//Custome Hook
import { useState, useEffect } from "react"
const useFetch = (url) => {
   
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)        //To show loading message while data is fetching
    const [error, setError] = useState(null)
    useEffect(() => {
        const abrtcontrol = new AbortController();
        setTimeout(() => {                                    //To delay the output for 1 second
            fetch(url, { signal: abrtcontrol.signal })
                .then(res => {
                    if (res.status !== 200) {
                        throw Error("Error! Incorrect url")
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setError(false)
                    setIsPending(false)                           //Set the isPending to false once data is fetched
                })
                //Catching the errors
                .catch((err) => {                                 //Will catch the error only if the json server is not connected, if the url is incorrect it willl still reach the server but ststus will 404
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    }
                    setError(err.message)
                    setIsPending(false)
                    console.log(err.message)

                })

        }, 1000)
        return () => {
            console.log('Clean up run');
            // abrtcontrol.abort();
        }
    },[url])
    return { data, setData, error }
}
export default useFetch;