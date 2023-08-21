import { useState } from "react";
import BlogList from "./BlogsList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Welcome to party", author: "Joe", body: "Lorem ipsum...", id: 1},
        {title: "My new Website", author: "Charlie", body: "Lorem ipsum...", id: 2},
        {title: "New project", author: "Emi", body: "Lorem ipsum...", id: 3},
    ]);

    const handleDelete = ((id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
        console.log(newBlogs);
    }); 

    return (
        <div className="home">
            <BlogList blogList ={blogs} title= "All Blogs" handleDelete = {handleDelete}/>
            <BlogList blogList ={blogs.filter((blog) => blog.author === "Joe")} title= "Joe's Blogs" />
        </div>
    );
}
 
export default Home;