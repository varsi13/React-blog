const BlogList = ({blogList, title, handleDelete}) => {
    //const blogs = props.blogs;
    //const title = props.title;
 
    return (
         <div className="blog-list">
            <h2>{title}</h2>
            {blogList.map((singleBlog) => (
                <div className="blog-preview" key="blog.id">
                    <h2>{ singleBlog.title }</h2>
                    <p>Written by {singleBlog.author}</p>
                    <button onClick={() => handleDelete(singleBlog.id)}>Delete</button>
                </div>
            ))}
        </div> 
    );
 }
  
 export default BlogList;