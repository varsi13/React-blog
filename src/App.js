import './App.css';

function App() {
  const title = "Welcome to the react blog";
  const likes = 100;
  const link = "https://www.google.com/";

  return (
    <div className="App">
    <div className="content">
      <h1> {title} </h1>
      <p>Liked {likes}k times. </p>
      <p> {10} </p>
      <p> {"Hello, World"} </p>
      <p> { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] } </p>
      <p> {Math.random() * 10} </p>
      <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
