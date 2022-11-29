const Home = () => {
  let name = "Luigi";
  const handleClick = (e) => {
    name = "Mario";
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
