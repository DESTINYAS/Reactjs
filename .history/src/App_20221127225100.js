import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <Home />
        <h1>App Component</h1>
      </div>
    </div>
  );
}

export default App;
