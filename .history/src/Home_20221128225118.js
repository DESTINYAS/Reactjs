import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Mario");
  const handleClick = (e) => {
    setName("Luigi");
    console.log("hello, ninjas", e);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
