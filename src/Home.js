import { useState } from "react";
import BlogList from "./BlogsList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Welcome to party", author: "Joe", body: "Lorem ipsum...", id: 1},
        {title: "My new Website", author: "Charlie", body: "Lorem ipsum...", id: 2},
        {title: "New project", author: "Emi", body: "Lorem ipsum...", id: 3},
    ]);

    return (
        <div className="home">
            <BlogList blogs ={blogs} title= "All Blogs" />
            <BlogList blogs ={blogs.filter((blog) => blog.author === "Joe")} title= "Joe's Blogs" />
        </div>
    );
}
 
export default Home;