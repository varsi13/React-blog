import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Welcome to party", author: "Joe", body: "Lorem ipsum...", id: 1},
        {title: "My new Website", author: "Charlie", body: "Lorem ipsum...", id: 2},
        {title: "New project", author: "Emi", body: "Lorem ipsum...", id: 3},
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key="blog.id">
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;