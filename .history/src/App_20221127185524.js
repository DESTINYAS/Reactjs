import "./App.css";

function App() {
  const tittle = "Welcome to the new blog";
  const likes = {50};
  return (
    <div className="App">
      <div className="content">
        <h1>{tittle}</h1>
        <p>Liked {likes} times.</p>
      </div>
    </div>
  );
}

export default App;
