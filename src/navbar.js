import { Link } from 'react-router-dom';

const navBar = () => {
    return (
        <nav className="navbar">
            <h1>The React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default navBar