import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="not-found">
            <div className="message">
                <h2>Sorry!</h2>
                <p>This page cannot be found.</p>
            </div>
            <div className="link">
                <Link to="/">Back to home</Link>
            </div>
        </div>
    );
}
 
export default NotFound;