//Props, passing functions as props, Deleting data, Filtering data
import { useState } from "react";
import Blogs from "./BlogsList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    const handleDelete=(id)=>{
        const filtered_blogs = blogs.filter(blog=>blog.id!==id)
        setBlogs(filtered_blogs)

    }
    // return(
    //     <div className="home">
    //         <h1>Generating Blog List</h1>
    //         {blogs.map(blog=>{
    //              <div className="show_content" key={blog.id}>
    //              <h1>{blog.title}</h1>
    //              <p>{blog.author}</p>
    //          </div>
    //         })}
    //     </div>
    // );

    return (
      <div className="home">
         <Blogs blog1={blogs} title={'All Blogs'} handleDelete={handleDelete}></Blogs> {/*Transfers data through props */}
         {/* <Blogs blog1={blogs.filter(blog => blog.author==='mario')} title={'Morios Blogs'} handleDelete={handleDelete}></Blogs> */}
         {/* <Blogs handleDelet={handleDelete}></Blogs> */}
      </div>
    );
}
// const [name, setName] = useState("Uzair")
// const [age, setAge] = useState(26)
// console.log(name)
// const handleClick=()=>{
//     console.log("Button is clicked and function invoked");
//     setName("khan")
//     setAge(28)
//     console.log({name}, "age is ", {age})
// }
// const clickMeAgain = (name)=>{
//     console.log("Hello " +name)
// }
// return ( 
//     <div className="home">
//         <h1>Home Page</h1>
//         <button onClick={handleClick}>Click_me</button>
//         <button onClick={()=>clickMeAgain("Uz")}>Click_me_Again</button>
//     </div>
//  );
// }

export default Home;