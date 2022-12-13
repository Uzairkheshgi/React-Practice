import { Suspense, useState } from "react";
import { ModalBody } from "react-bootstrap-v5";
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('Ashfaq Ahmad')
    const [body, setBody] = useState('')
    // const history = useHistory();                                 //used earlier, useHistory is not supported in latest version but instead we use useNavigate                                  
    const navigate = useNavigate()                                  //Created navigate object to go back and forward through history
    const handleSubmit = (e) => {
        e.preventDefault();
        const new_blog = { title, author, body }
        // console.log(new_blog)
        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: { "content-type": "application/json" },        //To tell the server the type of data/content we are sending
            body: JSON.stringify(new_blog)                          //Actual data we are sending. First we have to convert it from object to json string
        })
        .then(() => {
            console.log("Blog Added")
        })
        // navigate(-1)                                             //Navigate 1 step back through the history     
        navigate('/')                                               //Navigate to the path ./ i.e home page
    }
    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form>
                <label>Title</label>
                <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Author</label>
                <select onChange={(e) => setAuthor(e.target.value)}>
                    <option>Ashfaq Ahmad</option>
                    <option>Banu Q</option>
                </select>
                <label>Blog Body</label>
                <textarea required onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <p>{title}</p>
                <p>{body}</p>
                <button type='Submit' onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    );

}

export default Create;