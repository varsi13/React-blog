import { useState, useEffect} from "react";
import BlogList from "./BlogsList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Welcome to party", author: "Joe", body: "Lorem ipsum...", id: 1},
        {title: "My new Website", author: "Charlie", body: "Lorem ipsum...", id: 2},
        {title: "New project", author: "Emi", body: "Lorem ipsum...", id: 3},
    ]);

    const [name, setName] = useState("mario");
    
    const handleDelete = ((id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }); 
    
    useEffect(()=> {
        console.log("Use effect ran");
        console.log(name);
    }, [name]);
    
    return (
        <div className="home">
            <BlogList blogList ={blogs} title= "All Blogs" handleDelete = {handleDelete}/>
            <button onClick={() => setName("Luigi")}>Click here</button>
            <p> {name} </p>
        </div>
    );
}
 
export default Home;