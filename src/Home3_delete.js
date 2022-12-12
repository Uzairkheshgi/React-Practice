//Using axios instead of feth API
//Props, fetching data from json server, Cathing and throwing errors
//Fetched the data from json server by using useEffect Hook and passing the end points and stored in the variable blogs using usestate Hook
//Send blogs to BlogList2 through props. 
import axios from "axios";
import { useState, useEffect } from "react";
import Blogs from "./BlogList2";
const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)        //To show loading message while data is fetching
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() => {                                    //To delay the output for 1 second
            axios.get('http://localhost:8000/blogs')
                .then(res => {
                    console.log(res)
                    if (res.status !== 200) {
                        throw Error("Error! Incorrect url");
                        
                    }
                    setBlogs(res.data);
                    setIsPending(false)
                })
                // .then(data => {
                //     setBlogs(data)
                //     setIsPending(false)                           //Set the isPending to false once data is fetched
                // })
                //Catching the errors
                .catch((err) => {                                   //Will catch the error only if the json server is not connected, if the url is incorrect it willl still reach the server but ststus will 404
                    setError(err.message)
                    setIsPending(false)
                    console.log(err.message)

                })
        }, 1000)

    }, [])
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <p>Loading...</p>}                      {/*Display thee message loading... only is isPending is true */}
            {blogs && <Blogs blogs={blogs}></Blogs>}
        </div>
    );
}

export default Home;