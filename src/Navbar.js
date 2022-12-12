import { Link } from "react-router-dom";
const navbar =()=> {
    return ( 
        <div className="navbar">
            <h1>Navbar</h1>
            <div className="link">
                <Link to='/'>Home</Link>
                <Link to='/create'>New Blog</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact_us</Link>
            </div>
        </div>
     );
}
 
export default navbar;



