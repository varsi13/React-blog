import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("Varsi");
    const [age, setAge] = useState("20");

    const toClick = () => {
        setName("Joe");
        setAge(30);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p> {name} is {age} years old.</p>
            <button onClick={toClick}>Click here</button>
        </div>
    );
}
 
export default Home;