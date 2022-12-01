import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Sorry</h1>
      <p>That page cannot be found</p>
      <Link path="/">Back to the homepage...</Link>
    </div>
  );
};

export default NotFound;
