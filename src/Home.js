const Home = () => {

    const toClick = () => {
        console.log("Hello, Viewer");
    };

    const toClickAgain = (name) => {
        console.log("Hello, " + name);
    };

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={toClick}>Click here</button>
            <button onClick={() => toClickAgain("Varsi")}>Click here again</button>
        </div>
    );
}
 
export default Home;