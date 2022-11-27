import "./App.css";

function App() {
  const tittle = "Welcome to the new blog";
  const likes = 50;
  return (
    <div className="App">
      <div className="content">
        <h1>{tittle}</h1>
        <p>Liked {likes} times.</p>
        <p>{10}</p>
        <p>{"hello, ninjas"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>
        <a href="http://www.google.com">Google Site</a>
      </div>
    </div>
  );
}

export default App;
