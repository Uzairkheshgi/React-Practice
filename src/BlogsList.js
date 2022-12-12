const Blogs = (props) => {      //Through props we transfer data from one component to another, here we have transered blogs from Home component to BlogList component
    const blog2 = props.blog1;  //To transfer data through props, we call that component to which data is being transfer in the component from which data to be transfered
    const title1 = props.title;
    const handleDelete=props.handleDelete;
    return (
        <div className="blog-list">
            <h1>{title1}</h1>
            {blog2.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            )
            )}
        </div>
    );
}
export default Blogs;