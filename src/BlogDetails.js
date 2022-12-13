import useFetch from "./useFetch";
import { Link, useNavigate, useParams } from "react-router-dom";
const BlogDetails = () => {
    const {id}=useParams()
    const {error, isPending, data:blog}=useFetch('http://localhost:8000/blogs/'+id)
    const navigate= useNavigate();
    const handleDelete=(e)=>{
            fetch("http://localhost:8000/blogs/"+ blog.id , {
                method:"Delete"
            }).then(()=>{
                navigate('/')
            })
        }
    return ( 
        // <h1>Blog Detail with id {id}</h1>
        <div className="blog_details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog &&
            <article>               
                <h1>{blog.title}</h1>
                <p>Written by {blog.author}</p>             
                <p>{blog.body}</p>
                <button onClick={handleDelete}>delete</button>
            </article>
            }
        
        </div>

     );
}
export default BlogDetails;