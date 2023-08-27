import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Charlie');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const displayBlog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(displayBlog)
        }).then(() => {
            console.log("Successfully added the new blog");
            setIsPending(false);
        });
}

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
            <label>Blog title :</label>
            <input 
                type = "text" 
                required
                value = { title }
                onChange = {(e) => setTitle(e.target.value)}
            />
            <label>Blog body :</label>
            <textarea 
                required
                value = { body }
                onChange = {(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog author :</label>
            <select
                value={ author }
                onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="Charlie">Charlie</option>
                <option value="Jonny">Jonny</option>
            </select>
            { !isPending && <button>Add blog</button> }
            { isPending && <button disabled>Add blog...</button> }
            <p>{ title }</p>
            <p>{ body }</p>
            <p>{ author }</p>
            </form>
        </div>
        );
}
export default Create;