import { Link } from "react-router-dom";

const BlogList = ({blogList, title}) => {
    //const blogs = props.blogs;
    //const title = props.title;
 
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogList.map(singleBlog => (
                <div className="blog-preview" key="singleBlog.id">
                    <Link to = {`/blogs/${singleBlog.id}`}>
                        <h2>{ singleBlog.title }</h2>
                        <p>Written by {singleBlog.author}</p>
                    </Link>
                </div>
            ))
            }
        </div> 
    );
}
  
 export default BlogList;