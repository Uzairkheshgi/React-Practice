import { useState } from "react";

const Create = () => {
    const [title, setTitle]=useState('');
    const [author, setAuthor]= useState('Ashfaq Ahmad')
    return (  
        <div className="create">
            <h2>Add New Blog</h2>
            <form>
                <label>Title</label>
                <input type='text' required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <label>Author</label>
                <select onChange={(e)=>setAuthor{e.target.vaue}>
                    <option>Ashfaq Ahmad</option>
                    <option>Banu Q</option>
                </select>
                <label>Blog Body</label>
                <textarea required>
                    
                </textarea>
                <p>{title}</p>
            </form>
            
        </div>
    );
    
}
 
export default Create;