import BlogList from "./BlogsList";
import useFetch from "./useFetch";

const Home = () => {
    const {data, isPending, error: keyErr} = useFetch('http://localhost:8000/blogs');
    
    return (
        <div className="home">
            { keyErr && <div> {keyErr} </div>}
            { isPending && <div>Loading...</div> }
            {data && <BlogList blogList ={data} title= "All Blogs"/> }
        </div>
    );
}
 
export default Home;