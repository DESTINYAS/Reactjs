const Home = () => {
  const handleClick = () => {
    console.log("hello, ninjas");
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button>Click me</button>
    </div>
  );
};

export default Home;
