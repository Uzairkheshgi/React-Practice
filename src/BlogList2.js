import { Link, useParams } from "react-router-dom";

const Blogs = (props) => {      //Through props we transfer data from one component to another, here we have transered blogs from Home2 component to BlogList2 component
    const blogs = props.blogs;  //To transfer data through props, we call that component to which data is being transfer in the component from which data to be transfered
    // const{id} = useParams()
    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>

                </div>
            )
            )}
        </div>
    );
}
export default Blogs;