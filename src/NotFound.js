import { Link } from "react-router-dom";

//To redirct the browser to this page if a a url is not found
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry</h1>
            <p>Can't find the url</p>
            <Link to='/'>Go back to the Home page?</Link>
        </div>
     );
}
 
export default NotFound;